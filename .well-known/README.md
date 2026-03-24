# App Links verification files

## `assetlinks.json`

- Includes the **debug** keystore SHA-256 for local testing.
- For **Google Play** production installs, add the **App signing key certificate** SHA-256 from Play Console → Your app → Release → Setup → App signing.

Run to print your upload keystore fingerprint (if different):

```bash
keytool -list -v -keystore /path/to/upload.keystore -alias YOUR_ALIAS
```

Use the SHA256 line without colons, lowercase, in `sha256_cert_fingerprints`.

## `apple-app-site-association`

- Must be served with `Content-Type: application/json` (GitHub Pages may serve it as `application/octet-stream`; Apple often still accepts it—verify in [Apple’s validator](https://search.developer.apple.com/appsearch-validation-tool/) after deploy).

## Team / bundle

- `appID` = `TEAM_ID.BUNDLE_ID` → `R2FTXVMBU3.com.paltidigital.crowdlighting` (from Xcode).
