(() => {
  const STORAGE_KEY = "removy-theme";
  const VALID_THEMES = new Set(["light", "dark", "creamsicle"]);

  function getTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return VALID_THEMES.has(saved) ? saved : "light";
  }

  function applyTheme(theme) {
    const nextTheme = VALID_THEMES.has(theme) ? theme : "light";
    document.documentElement.dataset.theme = nextTheme === "light" ? "" : nextTheme;
    localStorage.setItem(STORAGE_KEY, nextTheme);
    updateControls(nextTheme);
  }

  function themeLabel(theme) {
    if (theme === "dark") return "dark mode :3";
    if (theme === "creamsicle") return "creamsicle :D";
    return "light mode :P";
  }

  function updateControls(theme) {
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.textContent = themeLabel(theme);
    });

    document.querySelectorAll("[data-theme-choice]").forEach((option) => {
      option.setAttribute(
        "aria-current",
        String(option.dataset.themeChoice === theme)
      );
    });
  }

  function closeMenus() {
    document.querySelectorAll("[data-theme-menu]").forEach((menu) => {
      menu.hidden = true;
    });

    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.setAttribute("aria-expanded", "false");
    });
  }

  function initialize() {
    applyTheme(getTheme());

    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        const picker = button.closest(".theme-picker");
        const menu = picker?.querySelector("[data-theme-menu]");
        if (!menu) return;

        const willOpen = menu.hidden;
        closeMenus();
        menu.hidden = !willOpen;
        button.setAttribute("aria-expanded", String(willOpen));
      });
    });

    document.querySelectorAll("[data-theme-choice]").forEach((option) => {
      option.addEventListener("click", () => {
        applyTheme(option.dataset.themeChoice);
        closeMenus();
      });
    });

    document.addEventListener("click", (event) => {
      if (!event.target.closest(".theme-picker")) closeMenus();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenus();
    });

    window.addEventListener("storage", (event) => {
      if (event.key === STORAGE_KEY && VALID_THEMES.has(event.newValue)) {
        applyTheme(event.newValue);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
  } else {
    initialize();
  }

  window.RemovyThemes = { applyTheme, getTheme };
})();
