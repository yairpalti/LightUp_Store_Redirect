#!/usr/bin/env bash
# Compress large videos in media/ to under GitHub's 100MB limit.
# Requires: ffmpeg (install with: brew install ffmpeg)
# Usage: ./compress-media.sh

set -e
MEDIA_DIR="media"
MAX_MB=95
MAX_BYTES=$((MAX_MB * 1024 * 1024))

# H.264, good quality, target under 100MB; scale to 1080p if larger
for f in "$MEDIA_DIR/LightUp Crowd - Crowd Flash.mp4" \
         "$MEDIA_DIR/LightUp Crowd - Crowd Glow.mp4" \
         "$MEDIA_DIR/LightUp Crowd - Directed Canvas Show.mp4" \
         "$MEDIA_DIR/LightUp Crowd - Directed Glow.mp4" \
         "$MEDIA_DIR/morse2.mp4"; do
  [ -f "$f" ] || continue
  size=$(stat -f%z "$f" 2>/dev/null || stat -c%s "$f" 2>/dev/null)
  if [ "$size" -lt "$MAX_BYTES" ]; then
    echo "Skip (already under ${MAX_MB}MB): $f"
    continue
  fi
  tmp="${f}.compressed.mp4"
  echo "Compressing: $f"
  ffmpeg -y -i "$f" \
    -c:v libx264 -crf 26 -preset slow -maxrate 8M -bufsize 16M \
    -vf "scale='min(1920,iw)':'min(1080,ih)':force_original_aspect_ratio=decrease" \
    -c:a aac -b:a 128k \
    "$tmp"
  mv "$tmp" "$f"
  echo "Done: $f"
done
echo "All done."
