(() => {
  const STORAGE_KEY = "little-image-site-mode";
  const PROFESSIONAL = "professional";
  const PLAYFUL = "playful";
  const DEFAULT_MODE = PLAYFUL;

  const copy = {
    professional: {
      toggle: "Professional",
      eyebrowHome: "Free image tools",
      heroTitleHome: "Image tools that stay simple",
      heroCopyHome: "A growing collection of straightforward tools for removing backgrounds, resizing, cropping, converting files, and preparing images for wherever they need to go.",
      heroPrimary: "Remove a background",
      heroSecondary: "Browse all tools",
      toolsHeading: "Image tools",
      toolsNote: "More tools are in development",
      removeName: "Remove background",
      removeDescription: "Turn a photo into a transparent PNG in a few clicks.",
      changeName: "Change background",
      changeDescription: "Place a color, gradient, or image behind a cutout.",
      resizeName: "Resize and crop",
      resizeDescription: "Prepare images for profile photos, banners, posts, and more.",
      footer: "Made for simple image edits",
      switchToPlayful: "Switch to playful mode :3"
    },
    playful: {
      toggle: ":3 mode",
      eyebrowHome: "free lil tools for ur images :]",
      heroTitleHome: "little image<br>thingies :3",
      heroCopyHome: "a growing pile of cute, simple tools for fixing up images—background removal, resizing, profile pictures, file conversions, and more :D",
      heroPrimary: "remove a background :3",
      heroSecondary: "see all tool thingies",
      toolsHeading: "tool thingies :3",
      toolsNote: "more little things are on the way",
      removeName: "remove background",
      removeDescription: "turn a photo into a transparent PNG with one little click.",
      changeName: "change background",
      changeDescription: "put a color, gradient, or another image behind your cutout.",
      resizeName: "resize + crop",
      resizeDescription: "make images fit profile pics, banners, posts, and more.",
      footer: "made with little pixels and a lot of :3",
      switchToProfessional: "Switch to professional mode"
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

  function applyMode(mode, save = true) {
    const selected = mode === PROFESSIONAL ? PROFESSIONAL : PLAYFUL;
    const words = copy[selected];
    document.documentElement.dataset.siteMode = selected;

    if (save) {
      try {
        localStorage.setItem(STORAGE_KEY, selected);
      } catch (_) {}
    }

    const button = document.querySelector("[data-site-mode-toggle]");
    if (button) {
      const nextMode = selected === PLAYFUL ? PROFESSIONAL : PLAYFUL;
      button.textContent = selected === PLAYFUL ? "professional mode" : ":3 mode";
      button.setAttribute("aria-label", selected === PLAYFUL ? words.switchToProfessional : words.switchToPlayful);
      button.setAttribute("title", selected === PLAYFUL ? words.switchToProfessional : words.switchToPlayful);
      button.setAttribute("aria-pressed", String(selected === PROFESSIONAL));
    }

    setText("[data-copy='home-eyebrow']", words.eyebrowHome);
    setText("[data-copy='home-title']", words.heroTitleHome, true);
    setText("[data-copy='home-description']", words.heroCopyHome);
    setText("[data-copy='home-primary']", words.heroPrimary);
    setText("[data-copy='home-secondary']", words.heroSecondary);
    setText("[data-copy='tools-heading']", words.toolsHeading);
    setText("[data-copy='tools-note']", words.toolsNote);
    setText("[data-copy='remove-name']", words.removeName);
    setText("[data-copy='remove-description']", words.removeDescription);
    setText("[data-copy='change-name']", words.changeName);
    setText("[data-copy='change-description']", words.changeDescription);
    setText("[data-copy='resize-name']", words.resizeName);
    setText("[data-copy='resize-description']", words.resizeDescription);
  }

  function initialize() {
    applyMode(getMode(), false);

    document.querySelector("[data-site-mode-toggle]")?.addEventListener("click", () => {
      applyMode(getMode() === PLAYFUL ? PROFESSIONAL : PLAYFUL);
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
