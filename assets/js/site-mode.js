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
        primary: "Remove a background",
        secondary: "Browse all tools",
        toolsHeading: "Image tools",
        toolsNote: "More tools are in development",
        removeName: "Remove background",
        removeDescription: "Turn a photo into a transparent PNG in a few clicks.",
        changeName: "Change background",
        changeDescription: "Place a color, gradient, or image behind a cutout.",
        resizeName: "Resize and crop",
        resizeDescription: "Prepare images for profile photos, banners, posts, and more."
      },
      changeBackground: {
        back: "← All tools",
        eyebrow: "Image background editor",
        title: "Change background",
        description: "Place a solid color, gradient, or a different image behind a transparent cutout. Editing happens directly in your browser.",
        badge: "Browser-based • no upload required",
        uploadTitle: "Drop a transparent image here",
        uploadButton: "Choose cutout image",
        uploadLink: "or select a transparent image",
        tip: "For best results, use a PNG or WebP image with a transparent background.",
        previewTitle: "Preview",
        controlsTitle: "Background settings",
        presets: "Background presets",
        color: "Choose a color",
        backgroundImage: "Use a background image",
        backgroundUpload: "Upload background image",
        backgroundHelp: "Your cutout remains in front of the background image.",
        zoom: "Cutout zoom",
        zoomHelp: "Drag the cutout in the preview to reposition it.",
        fit: "Background image fit",
        cover: "Cover",
        contain: "Contain",
        download: "Download",
        downloadPng: "Download PNG",
        downloadJpg: "Download JPG",
        downloadHelp: "PNG preserves the highest quality. JPG files are usually smaller.",
        reset: "Start over",
        privacyTitle: "Private editing",
        privacyText: "This tool layers your cutout over a new background in your browser. Your images remain on your device while you edit.",
        resultsTitle: "Best results",
        resultsText: "Use a transparent cutout image. If your image still has its original background, remove it first, then bring the cutout back here."
      },
      removeBackground: {
        back: "← All tools",
        eyebrow: "Background removal tool",
        title: "Remove background",
        description: "Create a transparent PNG from a photo. Processing is handled securely on the server and uses a limited shared usage budget.",
        cloudTitle: "☁ Cloud processing",
        cloudDescription: "Processing runs on the server, keeping the work off your device.",
        comingSoon: "Coming soon",
        localTitle: "⌁ Local and private",
        localDescription: "Will run directly on your device with no shared usage budget, but may be slower on older devices.",
        uploadTitle: "Drop an image here",
        uploadButton: "Choose image",
        uploadLink: "or select an image",
        tip: "Clear subjects typically produce the cleanest results. PNG, JPG, and WebP files up to 10 MB are supported.",
        before: "Original",
        after: "Result",
        loading: "Removing background…",
        placeholder: "Select an image, then choose Remove background.",
        action: "Remove background",
        download: "Download transparent PNG",
        reset: "Choose another image",
        infoTitle: "Important note",
        infoText: "This tool is in beta. Results can be less precise around hair, fur, glass, shadows, and busy backgrounds.",
        privacyTitle: "Privacy",
        privacyText: "Your image is sent to the background-removal provider only after you select Remove background. Do not upload private or sensitive images."
      }
    },
    playful: {
      toggle: "professional mode",
      home: {
        eyebrow: "free lil tools for ur images :]",
        title: "little image<br>thingies :3",
        description: "a growing pile of cute, simple tools for fixing up images—background removal, resizing, profile pictures, file conversions, and more :D",
        primary: "remove a background :3",
        secondary: "see all tool thingies",
        toolsHeading: "tool thingies :3",
        toolsNote: "more little things are on the way",
        removeName: "remove background",
        removeDescription: "turn a photo into a transparent PNG with one little click.",
        changeName: "change background",
        changeDescription: "put a color, gradient, or another image behind your cutout.",
        resizeName: "resize + crop",
        resizeDescription: "make images fit profile pics, banners, posts, and more."
      },
      changeBackground: {
        back: "← all tool thingies",
        eyebrow: "little image thingies • browser tool",
        title: "change background :3",
        description: "put a color, gradient, or another image behind a transparent PNG. everything happens right in your browser—quick, private, and free :D",
        badge: "♡ browser-side • no upload needed",
        uploadTitle: "put transparent PNG here :P",
        uploadButton: "choose cutout image :3",
        uploadLink: "or upload a transparent PNG :]",
        tip: "this works best with a PNG that already has its background removed :3",
        previewTitle: "your new background :D",
        controlsTitle: "make it pretty :3",
        presets: "background presets",
        color: "or pick a color",
        backgroundImage: "use an image behind it",
        backgroundUpload: "upload background image :]",
        backgroundHelp: "your cutout stays in front. use the buttons below to fit it.",
        zoom: "cutout zoom",
        zoomHelp: "drag the cutout directly in the preview to move it :]",
        fit: "background image fit",
        cover: "cover",
        contain: "contain",
        download: "download",
        downloadPng: "download PNG :D",
        downloadJpg: "download JPG :]",
        downloadHelp: "PNG keeps the best quality. JPG is smaller but cannot be transparent.",
        reset: "start over",
        privacyTitle: "quick + private :]",
        privacyText: "this tool layers your cutout over a new background right in your browser. your image stays on your device while you edit it.",
        resultsTitle: "best results :3",
        resultsText: "this works best with a transparent cutout image. if your picture still has its original background, make a transparent PNG first, then bring it back here."
      },
      removeBackground: {
        back: "← all tool thingies",
        eyebrow: "little image thingies • AI tool",
        title: "remove background :3",
        description: "make a transparent PNG from a photo. cloud mode keeps the processing off your device, but uses a limited shared removy budget :]",
        cloudTitle: "☁ cloud removy",
        cloudDescription: "the normal mode :3 processing happens on the server so your device stays chill.",
        comingSoon: "coming soon :]",
        localTitle: "⌁ local + private",
        localDescription: "will run directly on your device with no shared credits, but may be slower on older devices.",
        uploadTitle: "put image here :P",
        uploadButton: "choose image :3",
        uploadLink: "or upload an image :]",
        tip: "tip: clear subjects usually get the cleanest removies. JPG, PNG, and WebP up to 10 MB :3",
        before: "before :]",
        after: "after :3",
        loading: "removy-ing background...",
        placeholder: "click the removy button when ur ready :]",
        action: "remove background :3",
        download: "download transparent PNG :D",
        reset: "choose another image",
        infoTitle: "tiny heads up :]",
        infoText: "this is a beta removy thingy, so it might not perfectly remove every artifact—especially hair, fur, glass, shadows, and busy backgrounds.",
        privacyTitle: "your privacy :3",
        privacyText: "your image is only sent to the background-removal provider after you press remove background. please do not upload private or sensitive images."
      }
    }
  };

  function getMode() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored === PROFESSIONAL || stored === PLAYFUL ? stored : DEFAULT_MODE;
    } catch (_) {
      return DEFAULT_MODE;
    }
  }

  function setText(selector, value, allowHtml = false) {
    document.querySelectorAll(selector).forEach((element) => {
      if (allowHtml) element.innerHTML = value;
      else element.textContent = value;
    });
  }

  function applyHomeCopy(words) {
    if (!document.querySelector("[data-copy='home-title']")) return;
    setText("[data-copy='home-eyebrow']", words.eyebrow);
    setText("[data-copy='home-title']", words.title, true);
    setText("[data-copy='home-description']", words.description);
    setText("[data-copy='home-primary']", words.primary);
    setText("[data-copy='home-secondary']", words.secondary);
    setText("[data-copy='tools-heading']", words.toolsHeading);
    setText("[data-copy='tools-note']", words.toolsNote);
    setText("[data-copy='remove-name']", words.removeName);
    setText("[data-copy='remove-description']", words.removeDescription);
    setText("[data-copy='change-name']", words.changeName);
    setText("[data-copy='change-description']", words.changeDescription);
    setText("[data-copy='resize-name']", words.resizeName);
    setText("[data-copy='resize-description']", words.resizeDescription);
  }

  function applyChangeBackgroundCopy(words) {
    if (!document.querySelector("[data-copy='change-title']")) return;
    setText("[data-copy='change-back']", words.back);
    setText("[data-copy='change-eyebrow']", words.eyebrow);
    setText("[data-copy='change-title']", words.title);
    setText("[data-copy='change-description']", words.description);
    setText("[data-copy='change-badge']", words.badge);
    setText("[data-copy='change-upload-title']", words.uploadTitle);
    setText("[data-copy='change-upload-button']", words.uploadButton);
    setText("[data-copy='change-upload-link']", words.uploadLink);
    setText("[data-copy='change-tip']", words.tip);
    setText("[data-copy='change-preview-title']", words.previewTitle);
    setText("[data-copy='change-controls-title']", words.controlsTitle);
    setText("[data-copy='change-presets']", words.presets);
    setText("[data-copy='change-color']", words.color);
    setText("[data-copy='change-background-image']", words.backgroundImage);
    setText("[data-copy='change-background-upload']", words.backgroundUpload);
    setText("[data-copy='change-background-help']", words.backgroundHelp);
    setText("[data-copy='change-zoom']", words.zoom);
    setText("[data-copy='change-zoom-help']", words.zoomHelp);
    setText("[data-copy='change-fit']", words.fit);
    setText("[data-copy='change-cover']", words.cover);
    setText("[data-copy='change-contain']", words.contain);
    setText("[data-copy='change-download']", words.download);
    setText("[data-copy='change-download-png']", words.downloadPng);
    setText("[data-copy='change-download-jpg']", words.downloadJpg);
    setText("[data-copy='change-download-help']", words.downloadHelp);
    setText("[data-copy='change-reset']", words.reset);
    setText("[data-copy='change-privacy-title']", words.privacyTitle);
    setText("[data-copy='change-privacy-text']", words.privacyText);
    setText("[data-copy='change-results-title']", words.resultsTitle);
    setText("[data-copy='change-results-text']", words.resultsText);
  }

  function applyRemoveBackgroundCopy(words) {
    if (!document.querySelector("[data-copy='remove-title']")) return;
    setText("[data-copy='remove-back']", words.back);
    setText("[data-copy='remove-eyebrow']", words.eyebrow);
    setText("[data-copy='remove-title']", words.title);
    setText("[data-copy='remove-description']", words.description);
    setText("[data-copy='remove-cloud-title']", words.cloudTitle);
    setText("[data-copy='remove-cloud-description']", words.cloudDescription);
    setText("[data-copy='remove-coming-soon']", words.comingSoon);
    setText("[data-copy='remove-local-title']", words.localTitle);
    setText("[data-copy='remove-local-description']", words.localDescription);
    setText("[data-copy='remove-upload-title']", words.uploadTitle);
    setText("[data-copy='remove-upload-button']", words.uploadButton);
    setText("[data-copy='remove-upload-link']", words.uploadLink);
    setText("[data-copy='remove-tip']", words.tip);
    setText("[data-copy='remove-before']", words.before);
    setText("[data-copy='remove-after']", words.after);
    setText("[data-copy='remove-loading']", words.loading);
    setText("[data-copy='remove-placeholder']", words.placeholder);
    setText("[data-copy='remove-action']", words.action);
    setText("[data-copy='remove-download']", words.download);
    setText("[data-copy='remove-reset']", words.reset);
    setText("[data-copy='remove-info-title']", words.infoTitle);
    setText("[data-copy='remove-info-text']", words.infoText);
    setText("[data-copy='remove-privacy-title']", words.privacyTitle);
    setText("[data-copy='remove-privacy-text']", words.privacyText);
  }

  function applyMode(mode, save = true) {
    const selected = mode === PROFESSIONAL ? PROFESSIONAL : PLAYFUL;
    const words = copy[selected];
    document.documentElement.dataset.siteMode = selected;

    if (save) {
      try {
        localStorage.setItem(STORAGE_KEY, selected);
      } catch (_) {}
    }

    document.querySelectorAll("[data-site-mode-toggle]").forEach((button) => {
      button.textContent = words.toggle;
      button.setAttribute("aria-pressed", String(selected === PROFESSIONAL));
      const label = selected === PLAYFUL ? "Switch to professional mode" : "Switch to playful mode :3";
      button.setAttribute("aria-label", label);
      button.setAttribute("title", label);
    });

    applyHomeCopy(words.home);
    applyChangeBackgroundCopy(words.changeBackground);
    applyRemoveBackgroundCopy(words.removeBackground);
  }

  function initialize() {
    applyMode(getMode(), false);

    document.querySelectorAll("[data-site-mode-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        applyMode(getMode() === PLAYFUL ? PROFESSIONAL : PLAYFUL);
      });
    });

    window.addEventListener("storage", (event) => {
      if (event.key === STORAGE_KEY) {
        applyMode(event.newValue, false);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
  } else {
    initialize();
  }
})();
