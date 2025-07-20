const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
const toggleSwitch = document.querySelector("[data-theme-toggle]");

function calculateSettingAsThemeString() {
    const localStorageTheme = localStorage.getItem("theme");
    if (localStorageTheme !== null) {
        return localStorageTheme;
    }
    return systemSettingDark.matches ? "dark" : "light";
}

function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    toggleSwitch.checked = theme === "dark"; // Sync toggle state
}

let currentTheme = calculateSettingAsThemeString();
applyTheme(currentTheme);

// Event listener for toggle
toggleSwitch.addEventListener("change", () => {
    currentTheme = toggleSwitch.checked ? "dark" : "light";
    applyTheme(currentTheme);
});
