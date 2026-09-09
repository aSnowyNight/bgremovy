(() => {
  const STORAGE_KEY = "little-image-site-mode";
  const PROFESSIONAL = "professional";
  const PLAYFUL = "playful";
  const DEFAULT_MODE = PLAYFUL;

  const copy = {
    professional: {
      toggle: ":3 mode",
      home: {
        eyebrow: "Free image tools",
        title: "Image tools that stay simple",
        description: "A growing collection of straightforward tools for removing backgrounds, resizing, cropping, converting files, and preparing images for wherever they need to go.",
        primary: "Remove a background", secondary: "Browse all tools", toolsHeading: "Image tools", toolsNote: "More tools are in development",
        removeName: "Remove background", removeDescription: "Turn a photo into a transparent PNG in a few clicks.",
        changeName: "Change background", changeDescription: "Place a color, gradient, or image behind a cutout.",
        resizeName: "Resize and crop", resizeDescription: "Prepare images for profile photos, banners, posts, and more."
      },
      changeBackground: {
        back: "← All tools", eyebrow: "Image background editor", title: "Change background", description: "Place a solid color, gradient, or a different image behind a transparent cutout. Editing happens directly in your browser.", badge: "Browser-based • no upload required",
        uploadTitle: "Drop a transparent image here", uploadButton: "Choose cutout image", uploadLink: "or select a transparent image", tip: "For best results, use a PNG or WebP image with a transparent background.", previewTitle: "Preview", controlsTitle: "Background settings", presets: "Background presets", color: "Choose a color", backgroundImage: "Use a background image", backgroundUpload: "Upload background image", backgroundHelp: "Your cutout remains in front of the background image.", zoom: "Cutout zoom", zoomHelp: "Drag the cutout in the preview to reposition it.", fit: "Background image fit", cover: "Cover", contain: "Contain", download: "Download", downloadPng: "Download PNG", downloadJpg: "Download JPG", downloadHelp: "PNG preserves the highest quality. JPG files are usually smaller.", reset: "Start over", privacyTitle: "Private editing", privacyText: "This tool layers your cutout over a new background in your browser. Your images remain on your device while you edit.", resultsTitle: "Best results", resultsText: "Use a transparent cutout image. If your image still has its original background, remove it first, then bring the cutout back here."
      },
      removeBackground: {
        back: "← All tools", eyebrow: "Background removal tool", title: "Remove background", description: "Create a transparent PNG from a photo. Processing is handled securely on the server and uses a limited shared usage budget.", cloudTitle: "☁ Cloud processing", cloudDescription: "Processing runs on the server, keeping the work off your device.", comingSoon: "Coming soon", localTitle: "⌁ Local and private", localDescription: "Will run directly on your device with no shared usage budget, but may be slower on older devices.", uploadTitle: "Drop an image here", uploadButton: "Choose image", uploadLink: "or select an image", tip: "Clear subjects typically produce the cleanest results. PNG, JPG, and WebP files up to 10 MB are supported.", before: "Original", after: "Result", loading: "Removing background…", placeholder: "Select an image, then choose Remove background.", action: "Remove background", download: "Download transparent PNG", reset: "Choose another image", infoTitle: "Important note", infoText: "This tool is in beta. Results can be less precise around hair, fur, glass, shadows, and busy backgrounds.", privacyTitle: "Privacy", privacyText: "Your image is sent to the background-removal provider only after you select Remove background. Do not upload private or sensitive images."
      },
      resizeCrop: {
        back: "← All tools", eyebrow: "Browser-based image editor", title: "Resize and crop", description: "Crop, resize, rotate, and export an image directly in your browser.", uploadTitle: "Drop an image here", uploadButton: "Choose image", uploadLink: "or select an image", tip: "PNG, JPG, and WebP files up to 15 MB are supported. Your image stays on this device.", editorTitle: "Crop and resize", width: "Width", height: "Height", lock: "Keep aspect ratio", cropRatio: "Crop ratio", free: "Free", zoom: "Zoom", rotateLeft: "Rotate left", rotateRight: "Rotate right", format: "Export format", download: "Download image", reset: "Choose another image", privacyTitle: "Private editing", privacyText: "All resizing and cropping runs locally in your browser.", tipsTitle: "Tips", tipsText: "Drag the image to position it in the crop area. Use a ratio preset for common social and video formats."
      },
      compress: {
        back: "← All tools", eyebrow: "Browser-based image tool", title: "Compress image", description: "Reduce image file size directly in your browser without uploading it anywhere.", uploadTitle: "Drop an image here", uploadButton: "Choose image", uploadLink: "or select an image", tip: "PNG, JPG, and WebP files up to 20 MB are supported. Your image stays on this device.", settingsTitle: "Compression settings", preset: "Compression level", gentle: "Gentle", balanced: "Balanced", small: "Smallest file", quality: "Quality", format: "Output format", action: "Compress image", download: "Download compressed image", reset: "Choose another image", resultsTitle: "Results", original: "Original size", result: "Compressed size", saved: "Space saved", privacyTitle: "Private processing", privacyText: "Compression runs locally in your browser. Your image is never uploaded.", noteTitle: "Format note", noteText: "PNG preserves transparency. JPG does not support transparency, and transparent areas are rendered on white."
      },
      convert: {
        back: "← All tools", eyebrow: "Browser-based image tool", title: "Convert image", description: "Convert PNG, JPG, and WebP images directly in your browser.", uploadTitle: "Drop an image here", uploadButton: "Choose image", uploadLink: "or select an image", tip: "PNG, JPG, and WebP files up to 20 MB are supported. Your image stays on this device.", settingsTitle: "Conversion settings", output: "Convert to", quality: "Quality", action: "Convert image", download: "Download converted image", reset: "Choose another image", originalFormat: "Original format", outputFormat: "Output format", dimensions: "Dimensions", fileSize: "Output size", privacyTitle: "Private processing", privacyText: "Conversion runs locally in your browser. Your image is never uploaded.", noteTitle: "Format note", noteText: "PNG retains transparency. JPG does not support it, so transparent areas are rendered on white."
      },
      pfp: {
        back: "← All tools", eyebrow: "Browser-based profile image tool", title: "Make a profile picture", description: "Create a square profile image with a frame, background, and precise positioning controls.", uploadTitle: "Drop an image here", uploadButton: "Choose image", uploadLink: "or select an image", tip: "PNG, JPG, and WebP files up to 15 MB are supported. Your image stays on this device.", editorTitle: "Profile picture editor", shape: "Photo shape", circle: "Circle", rounded: "Rounded square", square: "Square", background: "Background color", frame: "Frame thickness", zoom: "Photo zoom", size: "Output size", format: "Export format", download: "Download profile picture", reset: "Choose another image", privacyTitle: "Private editing", privacyText: "Your image remains in your browser throughout the editing process.", tipsTitle: "Tips", tipsText: "Drag the image to position it. A close, centered crop generally works best at small profile-picture sizes."
      },
      qr: {
        back: "← All tools", eyebrow: "Browser-based generator", title: "QR code maker", description: "Generate a customizable QR code for a website, message, invite, or other text.", contentTitle: "QR code content", contentLabel: "Link or text", placeholder: "Paste a URL or enter text", discord: "Discord invite", website: "Website URL", message: "Message", settingsTitle: "Design settings", foreground: "Foreground color", background: "Background color", size: "Download size", generate: "Generate QR code", downloadPng: "Download PNG", downloadSvg: "Download SVG", noteTitle: "Scanning tip", noteText: "Use high contrast between the foreground and background. Test the code with a phone before sharing or printing it.", privacyTitle: "Private generation", privacyText: "QR codes are generated directly in your browser. The entered text is not uploaded."
      }
    },
    playful: {
      toggle: "professional mode",
      home: {
        eyebrow: "free lil tools for ur images :]", title: "little image<br>thingies :3", description: "a growing pile of cute, simple tools for fixing up images—background removal, resizing, profile pictures, file conversions, and more :D", primary: "remove a background :3", secondary: "see all tool thingies", toolsHeading: "tool thingies :3", toolsNote: "more little things are on the way", removeName: "remove background", removeDescription: "turn a photo into a transparent PNG with one little click.", changeName: "change background", changeDescription: "put a color, gradient, or another image behind your cutout.", resizeName: "resize + crop", resizeDescription: "make images fit profile pics, banners, posts, and more."
      },
      changeBackground: {
        back: "← all tool thingies", eyebrow: "little image thingies • browser tool", title: "change background :3", description: "put a color, gradient, or another image behind a transparent PNG. everything happens right in your browser—quick, private, and free :D", badge: "♡ browser-side • no upload needed", uploadTitle: "put transparent PNG here :P", uploadButton: "choose cutout image :3", uploadLink: "or upload a transparent PNG :]", tip: "this works best with a PNG that already has its background removed :3", previewTitle: "your new background :D", controlsTitle: "make it pretty :3", presets: "background presets", color: "or pick a color", backgroundImage: "use an image behind it", backgroundUpload: "upload background image :]", backgroundHelp: "your cutout stays in front. use the buttons below to fit it.", zoom: "cutout zoom", zoomHelp: "drag the cutout directly in the preview to move it :]", fit: "background image fit", cover: "cover", contain: "contain", download: "download", downloadPng: "download PNG :D", downloadJpg: "download JPG :]", downloadHelp: "PNG keeps the best quality. JPG is smaller but cannot be transparent.", reset: "start over", privacyTitle: "quick + private :]", privacyText: "this tool layers your cutout over a new background right in your browser. your image stays on your device while you edit it.", resultsTitle: "best results :3", resultsText: "this works best with a transparent cutout image. if your picture still has its original background, make a transparent PNG first, then bring it back here."
      },
      removeBackground: {
        back: "← all tool thingies", eyebrow: "little image thingies • AI tool", title: "remove background :3", description: "make a transparent PNG from a photo. cloud mode keeps the processing off your device, but uses a limited shared removy budget :]", cloudTitle: "☁ cloud removy", cloudDescription: "the normal mode :3 processing happens on the server so your device stays chill.", comingSoon: "coming soon :]", localTitle: "⌁ local + private", localDescription: "will run directly on your device with no shared credits, but may be slower on older devices.", uploadTitle: "put image here :P", uploadButton: "choose image :3", uploadLink: "or upload an image :]", tip: "tip: clear subjects usually get the cleanest removies. JPG, PNG, and WebP up to 10 MB :3", before: "before :]", after: "after :3", loading: "removy-ing background...", placeholder: "click the removy button when ur ready :]", action: "remove background :3", download: "download transparent PNG :D", reset: "choose another image", infoTitle: "tiny heads up :]", infoText: "this is a beta removy thingy, so it might not perfectly remove every artifact—especially hair, fur, glass, shadows, and busy backgrounds.", privacyTitle: "your privacy :3", privacyText: "your image is only sent to the background-removal provider after you press remove background. please do not upload private or sensitive images."
      },
      resizeCrop: {
        back: "← all tool thingies", eyebrow: "little image thingies • browser tool", title: "resize + crop :3", description: "crop, resize, spin, and download ur image right in the browser :]", uploadTitle: "put image here :P", uploadButton: "choose image :3", uploadLink: "or upload an image :]", tip: "JPG, PNG, and WebP up to 15 MB. it stays on ur device :3", editorTitle: "make it fit :D", width: "width", height: "height", lock: "keep the shape", cropRatio: "crop shape", free: "freeform", zoom: "zoom", rotateLeft: "spin left", rotateRight: "spin right", format: "download type", download: "download image :D", reset: "choose another image", privacyTitle: "quick + private :]", privacyText: "all the resizing and cropping happens right in ur browser.", tipsTitle: "tiny tip :3", tipsText: "drag the image around to place it. use the shape buttons for common post and profile pic sizes."
      },
      compress: {
        back: "← all tool thingies", eyebrow: "little image thingies • browser tool", title: "compress image :3", description: "make image files smaller without sending them anywhere :]", uploadTitle: "put image here :P", uploadButton: "choose image :3", uploadLink: "or upload an image :]", tip: "JPG, PNG, and WebP up to 20 MB. it stays on ur device :3", settingsTitle: "make it smaller :D", preset: "squish amount", gentle: "gentle", balanced: "balanced", small: "tiny file", quality: "quality", format: "save as", action: "compress image :3", download: "download squished image :D", reset: "choose another image", resultsTitle: "how it went :]", original: "before", result: "after", saved: "space saved", privacyTitle: "quick + private :]", privacyText: "the squishing happens right in ur browser. ur image never gets uploaded.", noteTitle: "little format note", noteText: "PNG keeps transparent bits. JPG cannot do transparency, so clear bits get a white background."
      },
      convert: {
        back: "← all tool thingies", eyebrow: "little image thingies • browser tool", title: "convert image :3", description: "turn PNGs, JPGs, and WebPs into other image thingies right in ur browser :]", uploadTitle: "put image here :P", uploadButton: "choose image :3", uploadLink: "or upload an image :]", tip: "PNG, JPG, and WebP up to 20 MB. it stays on ur device :3", settingsTitle: "turn it into a new thingy :D", output: "turn it into", quality: "quality", action: "convert image :3", download: "download new image :D", reset: "choose another image", originalFormat: "started as", outputFormat: "turned into", dimensions: "size", fileSize: "new file size", privacyTitle: "quick + private :]", privacyText: "the converting happens right in ur browser. ur image never gets uploaded.", noteTitle: "little format note", noteText: "PNG keeps transparent bits. JPG cannot do transparency, so clear bits get a white background."
      },
      pfp: {
        back: "← all tool thingies", eyebrow: "little image thingies • browser tool", title: "make a pfp :D", description: "make a cute square profile picture with a frame, background, and all the little adjustments :]", uploadTitle: "put image here :P", uploadButton: "choose image :3", uploadLink: "or upload an image :]", tip: "PNG, JPG, and WebP up to 15 MB. it stays on ur device :3", editorTitle: "make it cute :D", shape: "photo shape", circle: "circle", rounded: "rounded square", square: "square", background: "background color", frame: "frame thickness", zoom: "photo zoom", size: "download size", format: "save as", download: "download pfp :D", reset: "choose another image", privacyTitle: "quick + private :]", privacyText: "ur image stays right in ur browser while u make the pfp.", tipsTitle: "tiny tip :3", tipsText: "drag ur picture to move it around. a close, centered crop usually looks best when it gets small."
      },
      qr: {
        back: "← all tool thingies", eyebrow: "little image thingies • browser tool", title: "QR maker :3", description: "make a scan-y square for a link, invite, message, or whatever else :]", contentTitle: "what should it say?", contentLabel: "link or words", placeholder: "paste a link or type something", discord: "Discord invite", website: "website link", message: "message", settingsTitle: "make it pretty :D", foreground: "square color", background: "background color", size: "download size", generate: "make QR code :3", downloadPng: "download PNG :D", downloadSvg: "download SVG :]", noteTitle: "tiny scan tip", noteText: "keep the square bits and background really different colors. test it with ur phone before sharing it.", privacyTitle: "quick + private :]", privacyText: "the QR code is made right in ur browser. the text never gets uploaded."
      }
    }
  };

  function getMode() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored === PROFESSIONAL || stored === PLAYFUL ? stored : DEFAULT_MODE;
    } catch (_) { return DEFAULT_MODE; }
  }

  function setText(selector, value, allowHtml = false) {
    document.querySelectorAll(selector).forEach((element) => {
      if (allowHtml) element.innerHTML = value;
      else element.textContent = value;
    });
  }

  function applyWords(prefix, words) {
    if (!words) return;
    Object.entries(words).forEach(([key, value]) => {
      const selector = `[data-copy='${prefix}-${key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}']`;
      setText(selector, value, key === "title" && prefix === "home");
    });
  }

  function applyLegacyWords(words) {
    if (!words) return;
    const maps = [
      ["home", words.home, { description: "home-description", toolsHeading: "tools-heading", toolsNote: "tools-note", removeName: "remove-name", removeDescription: "remove-description", changeName: "change-name", changeDescription: "change-description", resizeName: "resize-name", resizeDescription: "resize-description" }],
      ["change", words.changeBackground, { controlsTitle: "change-controls-title", backgroundImage: "change-background-image", backgroundUpload: "change-background-upload", backgroundHelp: "change-background-help", zoomHelp: "change-zoom-help", privacyText: "change-privacy-text", resultsText: "change-results-text" }],
      ["remove", words.removeBackground, { cloudTitle: "remove-cloud-title", cloudDescription: "remove-cloud-description", localTitle: "remove-local-title", localDescription: "remove-local-description", uploadTitle: "remove-upload-title", uploadButton: "remove-upload-button", uploadLink: "remove-upload-link", infoTitle: "remove-info-title", infoText: "remove-info-text", privacyText: "remove-privacy-text" }]
    ];
    maps.forEach(([prefix, group, special]) => {
      if (!group) return;
      Object.entries(group).forEach(([key, value]) => {
        const target = special[key] || `${prefix}-${key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}`;
        setText(`[data-copy='${target}']`, value, prefix === "home" && key === "title");
      });
    });
  }

  function applyMode(mode, save = true) {
    const selected = mode === PROFESSIONAL ? PROFESSIONAL : PLAYFUL;
    const words = copy[selected];
    document.documentElement.dataset.siteMode = selected;
    if (save) {
      try { localStorage.setItem(STORAGE_KEY, selected); } catch (_) {}
    }

    document.querySelectorAll("[data-site-mode-toggle]").forEach((button) => {
      button.textContent = words.toggle;
      button.setAttribute("aria-pressed", String(selected === PROFESSIONAL));
      const label = selected === PLAYFUL ? "Switch to professional mode" : "Switch to playful mode :3";
      button.setAttribute("aria-label", label);
      button.setAttribute("title", label);
    });

    applyLegacyWords(words);
    applyWords("resize", words.resizeCrop);
    applyWords("compress", words.compress);
    applyWords("convert", words.convert);
    applyWords("pfp", words.pfp);
    applyWords("qr", words.qr);
  }

  function initialize() {
    applyMode(getMode(), false);
    document.querySelectorAll("[data-site-mode-toggle]").forEach((button) => {
      button.addEventListener("click", () => applyMode(getMode() === PLAYFUL ? PROFESSIONAL : PLAYFUL));
    });
    window.addEventListener("storage", (event) => {
      if (event.key === STORAGE_KEY) applyMode(event.newValue, false);
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialize, { once: true });
  else initialize();
})();
