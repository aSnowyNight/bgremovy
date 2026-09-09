(() => {
  const STORAGE_KEY = "little-image-site-mode";
  const PROFESSIONAL = "professional";
  const PLAYFUL = "playful";

  const data = {
    professional: {
      resize: [
        ["resize-back", "← All tools"], ["resize-eyebrow", "Browser-based image editor"], ["resize-title", "Resize and crop"], ["resize-description", "Crop, resize, rotate, and export an image directly in your browser."],
        ["resize-upload-title", "Drop an image here"], ["resize-upload-button", "Choose image"], ["resize-upload-link", "Or select an image"], ["resize-tip", "PNG, JPG, and WebP files up to 15 MB are supported. Your image stays on this device."],
        ["resize-editor-title", "Crop and resize"], ["resize-width", "Width"], ["resize-height", "Height"], ["resize-lock", "Keep aspect ratio"], ["resize-crop-ratio", "Crop ratio"], ["resize-free", "Free"], ["resize-zoom", "Zoom"], ["resize-rotate-left", "Rotate left"], ["resize-rotate-right", "Rotate right"], ["resize-format", "Export format"], ["resize-download", "Download image"], ["resize-reset", "Choose another image"], ["resize-privacy-title", "Private editing"], ["resize-privacy-text", "All resizing and cropping runs locally in your browser."], ["resize-tips-title", "Tips"], ["resize-tips-text", "Drag the image to position it in the crop area. Use a ratio preset for common social and video formats."]
      ],
      compress: [
        ["compress-back", "← All tools"], ["compress-eyebrow", "Browser-based image tool"], ["compress-title", "Compress image"], ["compress-description", "Reduce image file size directly in your browser without uploading it anywhere."],
        ["compress-upload-title", "Drop an image here"], ["compress-upload-button", "Choose image"], ["compress-upload-link", "Or select an image"], ["compress-tip", "PNG, JPG, and WebP files up to 20 MB are supported. Your image stays on this device."],
        ["compress-settings-title", "Compression settings"], ["compress-preset", "Compression level"], ["compress-gentle", "Gentle"], ["compress-balanced", "Balanced"], ["compress-small", "Smallest file"], ["compress-quality", "Quality"], ["compress-format", "Output format"], ["compress-action", "Compress image"], ["compress-download", "Download compressed image"], ["compress-reset", "Choose another image"], ["compress-results-title", "Results"], ["compress-original", "Original size"], ["compress-result", "Compressed size"], ["compress-saved", "Space saved"], ["compress-privacy-title", "Private processing"], ["compress-privacy-text", "Compression runs locally in your browser. Your image is never uploaded."], ["compress-note-title", "Format note"], ["compress-note-text", "PNG preserves transparency. JPG does not support transparency, and transparent areas are rendered on white."]
      ],
      convert: [
        ["convert-back", "← All tools"], ["convert-eyebrow", "Browser-based image tool"], ["convert-title", "Convert image"], ["convert-description", "Convert PNG, JPG, and WebP images directly in your browser."],
        ["convert-upload-title", "Drop an image here"], ["convert-upload-button", "Choose image"], ["convert-upload-link", "Or select an image"], ["convert-tip", "PNG, JPG, and WebP files up to 20 MB are supported. Your image stays on this device."],
        ["convert-settings-title", "Conversion settings"], ["convert-output", "Convert to"], ["convert-quality", "Quality"], ["convert-action", "Convert image"], ["convert-download", "Download converted image"], ["convert-reset", "Choose another image"], ["convert-original-format", "Original format"], ["convert-output-format", "Output format"], ["convert-dimensions", "Dimensions"], ["convert-file-size", "Output size"], ["convert-privacy-title", "Private processing"], ["convert-privacy-text", "Conversion runs locally in your browser. Your image is never uploaded."], ["convert-note-title", "Format note"], ["convert-note-text", "PNG retains transparency. JPG does not support it, so transparent areas are rendered on white."]
      ],
      pfp: [
        ["pfp-back", "← All tools"], ["pfp-eyebrow", "Browser-based profile image tool"], ["pfp-title", "Make a profile picture"], ["pfp-description", "Create a square profile image with a frame, background, and precise positioning controls."],
        ["pfp-upload-title", "Drop an image here"], ["pfp-upload-button", "Choose image"], ["pfp-upload-link", "Or select an image"], ["pfp-tip", "PNG, JPG, and WebP files up to 15 MB are supported. Your image stays on this device."],
        ["pfp-editor-title", "Profile picture editor"], ["pfp-shape", "Photo shape"], ["pfp-circle", "Circle"], ["pfp-rounded", "Rounded square"], ["pfp-square", "Square"], ["pfp-background", "Background color"], ["pfp-frame", "Frame thickness"], ["pfp-zoom", "Photo zoom"], ["pfp-size", "Output size"], ["pfp-format", "Export format"], ["pfp-download", "Download profile picture"], ["pfp-reset", "Choose another image"], ["pfp-privacy-title", "Private editing"], ["pfp-privacy-text", "Your image remains in your browser throughout the editing process."], ["pfp-tips-title", "Tips"], ["pfp-tips-text", "Drag the image to position it. A close, centered crop generally works best at small profile-picture sizes."]
      ],
      qr: [
        ["qr-back", "← All tools"], ["qr-eyebrow", "Browser-based generator"], ["qr-title", "QR code maker"], ["qr-description", "Generate a customizable QR code for a website, message, invite, or other text."],
        ["qr-content-title", "QR code content"], ["qr-content-label", "Link or text"], ["qr-placeholder", "Paste a URL or enter text"], ["qr-discord", "Discord invite"], ["qr-website", "Website URL"], ["qr-message", "Message"], ["qr-settings-title", "Design settings"], ["qr-foreground", "Foreground color"], ["qr-background", "Background color"], ["qr-size", "Download size"], ["qr-generate", "Generate QR code"], ["qr-download-png", "Download PNG"], ["qr-download-svg", "Download SVG"], ["qr-note-title", "Scanning tip"], ["qr-note-text", "Use high contrast between the foreground and background. Test the code with a phone before sharing or printing it."], ["qr-privacy-title", "Private generation"], ["qr-privacy-text", "QR codes are generated directly in your browser. The entered text is not uploaded."]
      ]
    },
    playful: {
      resize: [["resize-back", "← all tool thingies"], ["resize-eyebrow", "little image thingies • browser tool"], ["resize-title", "resize + crop :3"], ["resize-description", "crop, resize, spin, and download ur image right in the browser :]"], ["resize-upload-title", "put image here :P"], ["resize-upload-button", "choose image :3"], ["resize-upload-link", "or upload an image :]"], ["resize-tip", "JPG, PNG, and WebP up to 15 MB. it stays on ur device :3"], ["resize-editor-title", "make it fit :D"], ["resize-width", "width"], ["resize-height", "height"], ["resize-lock", "keep the shape"], ["resize-crop-ratio", "crop shape"], ["resize-free", "freeform"], ["resize-zoom", "zoom"], ["resize-rotate-left", "spin left"], ["resize-rotate-right", "spin right"], ["resize-format", "download type"], ["resize-download", "download image :D"], ["resize-reset", "choose another image"], ["resize-privacy-title", "quick + private :]"], ["resize-privacy-text", "all the resizing and cropping happens right in ur browser."], ["resize-tips-title", "tiny tip :3"], ["resize-tips-text", "drag the image around to place it. use the shape buttons for common post and profile pic sizes."]],
      compress: [["compress-back", "← all tool thingies"], ["compress-eyebrow", "little image thingies • browser tool"], ["compress-title", "compress image :3"], ["compress-description", "make image files smaller without sending them anywhere :]"], ["compress-upload-title", "put image here :P"], ["compress-upload-button", "choose image :3"], ["compress-upload-link", "or upload an image :]"], ["compress-tip", "JPG, PNG, and WebP up to 20 MB. it stays on ur device :3"], ["compress-settings-title", "make it smaller :D"], ["compress-preset", "squish amount"], ["compress-gentle", "gentle"], ["compress-balanced", "balanced"], ["compress-small", "tiny file"], ["compress-quality", "quality"], ["compress-format", "save as"], ["compress-action", "compress image :3"], ["compress-download", "download squished image :D"], ["compress-reset", "choose another image"], ["compress-results-title", "how it went :]"], ["compress-original", "before"], ["compress-result", "after"], ["compress-saved", "space saved"], ["compress-privacy-title", "quick + private :]"], ["compress-privacy-text", "the squishing happens right in ur browser. ur image never gets uploaded."], ["compress-note-title", "little format note"], ["compress-note-text", "PNG keeps transparent bits. JPG cannot do transparency, so clear bits get a white background."]],
      convert: [["convert-back", "← all tool thingies"], ["convert-eyebrow", "little image thingies • browser tool"], ["convert-title", "convert image :3"], ["convert-description", "turn PNGs, JPGs, and WebPs into other image thingies right in ur browser :]"], ["convert-upload-title", "put image here :P"], ["convert-upload-button", "choose image :3"], ["convert-upload-link", "or upload an image :]"], ["convert-tip", "PNG, JPG, and WebP up to 20 MB. it stays on ur device :3"], ["convert-settings-title", "turn it into a new thingy :D"], ["convert-output", "turn it into"], ["convert-quality", "quality"], ["convert-action", "convert image :3"], ["convert-download", "download new image :D"], ["convert-reset", "choose another image"], ["convert-original-format", "started as"], ["convert-output-format", "turned into"], ["convert-dimensions", "size"], ["convert-file-size", "new file size"], ["convert-privacy-title", "quick + private :]"], ["convert-privacy-text", "the converting happens right in ur browser. ur image never gets uploaded."], ["convert-note-title", "little format note"], ["convert-note-text", "PNG keeps transparent bits. JPG cannot do transparency, so clear bits get a white background."]],
      pfp: [["pfp-back", "← all tool thingies"], ["pfp-eyebrow", "little image thingies • browser tool"], ["pfp-title", "make a pfp :D"], ["pfp-description", "make a cute square profile picture with a frame, background, and all the little adjustments :]"], ["pfp-upload-title", "put image here :P"], ["pfp-upload-button", "choose image :3"], ["pfp-upload-link", "or upload an image :]"], ["pfp-tip", "PNG, JPG, and WebP up to 15 MB. it stays on ur device :3"], ["pfp-editor-title", "make it cute :D"], ["pfp-shape", "photo shape"], ["pfp-circle", "circle"], ["pfp-rounded", "rounded square"], ["pfp-square", "square"], ["pfp-background", "background color"], ["pfp-frame", "frame thickness"], ["pfp-zoom", "photo zoom"], ["pfp-size", "download size"], ["pfp-format", "save as"], ["pfp-download", "download pfp :D"], ["pfp-reset", "choose another image"], ["pfp-privacy-title", "quick + private :]"], ["pfp-privacy-text", "ur image stays right in ur browser while u make the pfp."], ["pfp-tips-title", "tiny tip :3"], ["pfp-tips-text", "drag ur picture to move it around. a close, centered crop usually looks best when it gets small."]],
      qr: [["qr-back", "← all tool thingies"], ["qr-eyebrow", "little image thingies • browser tool"], ["qr-title", "QR maker :3"], ["qr-description", "make a scan-y square for a link, invite, message, or whatever else :]"], ["qr-content-title", "what should it say?"], ["qr-content-label", "link or words"], ["qr-placeholder", "paste a link or type something"], ["qr-discord", "Discord invite"], ["qr-website", "website link"], ["qr-message", "message"], ["qr-settings-title", "make it pretty :D"], ["qr-foreground", "square color"], ["qr-background", "background color"], ["qr-size", "download size"], ["qr-generate", "make QR code :3"], ["qr-download-png", "download PNG :D"], ["qr-download-svg", "download SVG :]"], ["qr-note-title", "tiny scan tip"], ["qr-note-text", "keep the square bits and background really different colors. test it with ur phone before sharing it."], ["qr-privacy-title", "quick + private :]"], ["qr-privacy-text", "the QR code is made right in ur browser. the text never gets uploaded."]]
    }
  };

  function setText(marker, value) {
    document.querySelectorAll(`[data-copy="${marker}"]`).forEach((node) => { node.textContent = value; });
  }

  function updateNewTools(mode) {
    Object.values(data[mode]).forEach((entries) => entries.forEach(([marker, value]) => setText(marker, value)));
  }

  function runCompatibilityLayer() {
    const current = localStorage.getItem(STORAGE_KEY) === PROFESSIONAL ? PROFESSIONAL : PLAYFUL;
    document.documentElement.dataset.siteMode = current;
    updateNewTools(current);
    document.querySelectorAll("[data-site-mode-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        window.setTimeout(() => {
          const mode = localStorage.getItem(STORAGE_KEY) === PROFESSIONAL ? PROFESSIONAL : PLAYFUL;
          document.documentElement.dataset.siteMode = mode;
          updateNewTools(mode);
        }, 0);
      });
    });
    window.addEventListener("storage", (event) => {
      if (event.key === STORAGE_KEY) {
        const mode = event.newValue === PROFESSIONAL ? PROFESSIONAL : PLAYFUL;
        document.documentElement.dataset.siteMode = mode;
        updateNewTools(mode);
      }
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", runCompatibilityLayer, { once: true });
  else runCompatibilityLayer();
})();
