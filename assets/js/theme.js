(() => {
  const STORAGE_KEY = "removy-theme";
  const DEFAULT_THEME = "light";

  const THEMES = {
    light: "light mode :P",
    dark: "dark mode :3",
    creamsicle: "creamsicle :D",
    blackout: "blackout 0_0"
  };

  const toggle = document.querySelector("[data-theme-toggle]");
  const menu = document.querySelector("[data-theme-menu]");
  const options = document.querySelectorAll("[data-theme-choice]");

  function validTheme(theme) {
    return Object.prototype.hasOwnProperty.call(THEMES, theme);
  }

  function applyTheme(theme, shouldSave = true) {
    const selectedTheme = validTheme(theme) ? theme : DEFAULT_THEME;

    if (selectedTheme === "light") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.dataset.theme = selectedTheme;
    }

    if (shouldSave) {
      try {
        localStorage.setItem(STORAGE_KEY, selectedTheme);
      } catch (_) {}
    }

    if (toggle) {
      toggle.textContent = THEMES[selectedTheme];
    }

    options.forEach((option) => {
      const isSelected = option.dataset.themeChoice === selectedTheme;
      option.setAttribute("aria-current", String(isSelected));
    });
  }

  function closeMenu() {
    if (menu) menu.hidden = true;
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    if (menu) menu.hidden = false;
    if (toggle) toggle.setAttribute("aria-expanded", "true");
  }

  let savedTheme = DEFAULT_THEME;

  try {
    const value = localStorage.getItem(STORAGE_KEY);
    if (validTheme(value)) savedTheme = value;
  } catch (_) {}

  applyTheme(savedTheme, false);

  if (!toggle || !menu) return;

  toggle.addEventListener("click", (event) => {
    event.stopPropagation();

    if (menu.hidden) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      applyTheme(option.dataset.themeChoice);
      closeMenu();
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".theme-picker")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      toggle.focus();
    }
  });

  window.addEventListener("storage", (event) => {
    if (event.key !== STORAGE_KEY) return;
    applyTheme(validTheme(event.newValue) ? event.newValue : DEFAULT_THEME, false);
  });
})();
