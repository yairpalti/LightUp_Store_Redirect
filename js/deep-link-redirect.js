/**
 * LightUp Crowd - store redirect with Android Install Referrer + iOS clipboard handoff.
 * Constants must match Flutter DeepLinkService / Play referrer parsing.
 */
(function () {
  var IOS_STORE = 'https://apps.apple.com/il/app/lightup-crowd/id6745174049';
  var PLAY_PKG = 'https://play.google.com/store/apps/details?id=com.paltidigital.crowdlighting';

  function parseJwtPayload(token) {
    if (!token || typeof token !== 'string') return {};
    var parts = token.split('.');
    if (parts.length < 2) return {};
    try {
      var base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
      var pad = base64.length % 4;
      if (pad) base64 += new Array(5 - pad).join('=');
      var json = decodeURIComponent(
        atob(base64)
          .split('')
          .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );
      return JSON.parse(json);
    } catch (e) {
      return {};
    }
  }

  function buildReferrerQuery(eventId, token) {
    var e = eventId || '';
    var t = token || '';
    return 'e=' + encodeURIComponent(e) + '&t=' + encodeURIComponent(t);
  }

  /** Prefix so the app does not mis-read unrelated clipboard text. */
  var CLIP_PREFIX = 'LUC1:';

  function buildClipboardPayload(eventId, token) {
    return CLIP_PREFIX + JSON.stringify({ v: 1, e: eventId || '', t: token || '' });
  }

  window.LightUpRedirect = {
    IOS_STORE: IOS_STORE,
    PLAY_PKG: PLAY_PKG,
    parseJwtPayload: parseJwtPayload,
    buildReferrerQuery: buildReferrerQuery,
    buildClipboardPayload: buildClipboardPayload,

    /**
     * Try to open the installed app via Chrome intent:// (same https URL as this page).
     * Uses S.browser_fallback_url for Play when the app is not installed.
     *
     * Do NOT use a short setTimeout → Play: Chrome often keeps the tab "visible" while
     * the app opens, so the timer fires and sends users to the store anyway.
     * @param {string} playUrl full Play URL including referrer=
     */
    openAndroidAppOrPlay: function (playUrl) {
      var u = window.location;
      var pathPart = u.host + (u.pathname || '/') + (u.search || '');
      var fallbackEnc = encodeURIComponent(playUrl);
      // Host/path + explicit VIEW. No JS timer → Play (that was firing while the app opened).
      var intentUrl =
        'intent://' +
        pathPart +
        '#Intent;scheme=https;package=com.paltidigital.crowdlighting;' +
        'action=android.intent.action.VIEW;' +
        'category=android.intent.category.DEFAULT;' +
        'category=android.intent.category.BROWSABLE;' +
        'S.browser_fallback_url=' +
        fallbackEnc +
        ';end';

      window.location.href = intentUrl;
    },

    /** @param {{ eventId: string, token?: string }} opts */
    run: function (opts) {
      var eventId = opts.eventId || '';
      var token = opts.token || '';
      var ua = navigator.userAgent || navigator.vendor || window.opera || '';
      var isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
      var isAndroid = /android/i.test(ua);
      var ref = buildReferrerQuery(eventId, token);
      var playUrl = PLAY_PKG + '&referrer=' + encodeURIComponent(ref);
      var clip = buildClipboardPayload(eventId, token);

      // iOS: guaranteed copy needs a user gesture - full-width button; auto-fallback ~2s to App Store.
      if (isIOS) {
        var autoTimer = null;
        function redirectToStore() {
          if (autoTimer) {
            clearTimeout(autoTimer);
            autoTimer = null;
          }
          window.location.href = IOS_STORE;
        }
        function copyAndRedirect() {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard
              .writeText(clip)
              .then(redirectToStore)
              .catch(redirectToStore);
          } else {
            redirectToStore();
          }
        }
        var hint = document.getElementById('lightup-ios-hint');
        if (hint) {
          hint.style.display = 'block';
        }
        var msg = document.getElementById('msg');
        if (msg) {
          msg.textContent = 'Opening the App Store…';
        }
        var btn = document.getElementById('lightup-continue-store');
        if (btn) {
          btn.style.display = 'block';
          btn.addEventListener('click', function (ev) {
            ev.preventDefault();
            copyAndRedirect();
          });
        }
        autoTimer = setTimeout(redirectToStore, 2000);
        return;
      }

      function go() {
        if (isAndroid) {
          window.LightUpRedirect.openAndroidAppOrPlay(playUrl);
        } else {
          window.location.href = playUrl;
        }
      }

      // Android: short delay only (intent runs quickly). Desktop: brief message delay.
      var delayMs = isAndroid ? 250 : 1200;
      setTimeout(go, delayMs);
    },
  };
})();
