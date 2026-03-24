# App Links & Universal Links verification

## 1. Confirm files over HTTPS (after every deploy)

Run locally (replace host if you use only `www`):

```bash
# Apple — expect HTTP 200 and JSON body (no login HTML)
curl -sS -D - -o /tmp/aasa.json \
  "https://lightupcrowd.com/.well-known/apple-app-site-association"
head -c 400 /tmp/aasa.json

# Android — expect HTTP 200 and JSON array
curl -sS -D - -o /tmp/al.json \
  "https://lightupcrowd.com/.well-known/assetlinks.json"
cat /tmp/al.json
```

**If you get 404:** the published site root does not contain `.well-known/`. Fix:

- Commit `.well-known/apple-app-site-association` and `.well-known/assetlinks.json` on the **branch/folder GitHub Pages uses** (often `main`, site root).
- Keep repo root `.nojekyll` (empty file) so GitHub Pages does not ignore dot-directories.
- Wait a few minutes after push; hard-refresh or try `curl` (no CDN cache in browser).

**Optional checks**

- [Apple App Search API Validation Tool](https://search.developer.apple.com/appsearch-validation-tool/) — enter `https://lightupcrowd.com` (use the exact host your entitlements use, e.g. with or without `www`).
- Android: [Statement List Generator and Tester](https://developers.google.com/digital-asset-links/tools/generator) — package `com.paltidigital.crowdlighting`, paste your `assetlinks.json` or fetch from URL.

---

## 2. Production Play Store SHA-256 in `assetlinks.json`

Play re-signs APKs/AABs with **Google Play App Signing**. App Links verification uses the **app signing certificate**, not your local debug keystore.

1. Open [Google Play Console](https://play.google.com/console) → your app.
2. **Release** → **Setup** → **App integrity** (or **App signing**).
3. Under **App signing key certificate**, copy **SHA-256 certificate fingerprint** (format with colons, e.g. `AA:BB:...`).

Edit `assetlinks.json`: add that string as a **second** entry in `sha256_cert_fingerprints` (keep the existing one for **debug** local builds):

```json
"sha256_cert_fingerprints": [
  "13:5C:D4:66:FD:56:A8:AB:69:84:20:72:CF:11:E6:1C:C4:4E:22:E2:A2:91:91:0F:C3:C4:77:50:DE:92:8C:8A",
  "PASTE_PLAY_APP_SIGNING_SHA256_HERE"
]
```

Redeploy the site. Google allows **multiple** fingerprints so debug + Play production can coexist.

**Upload key:** Only needed if you troubleshoot signing mismatches; App Links for **store installs** use the **app signing** cert above.

---

## 3. `Content-Type` (GitHub Pages)

GitHub Pages may serve `apple-app-site-association` without `application/json`. Apple often still accepts it; if Universal Links fail only on iOS, try hosting that file behind a CDN/host that sets `Content-Type: application/json`, or validate with Apple’s tool and adjust.

## Team / bundle (AASA)

`appID` = `TEAM_ID.BUNDLE_ID` → e.g. `R2FTXVMBU3.com.paltidigital.crowdlighting` (must match Xcode / Apple Developer).
