/**
 * LightUp Crowd — store redirect with Android Install Referrer + iOS clipboard handoff.
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

      function go() {
        if (isIOS) {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(clip).catch(function () {});
          }
          window.location.href = IOS_STORE;
        } else if (isAndroid) {
          window.location.href = playUrl;
        } else {
          window.location.href = playUrl;
        }
      }

      // Short delay so user sees the page (matches /download/ behavior)
      setTimeout(go, 1200);
    },
  };
})();
