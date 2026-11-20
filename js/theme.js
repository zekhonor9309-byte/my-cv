/**
 * إدارة الوضع الداكن/الفاتح (Dark / Light Mode)
 * يحفظ الاختيار في Local Storage
 */

class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem("cv_theme") || "system"; // system, light, dark
    this.init();
  }

  init() {
    this.apply();
    this.setupToggle();
  }

  apply() {
    const html = document.documentElement;

    if (this.theme === "system") {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      html.setAttribute("data-theme", systemDark ? "dark" : "light");
    } else {
      html.setAttribute("data-theme", this.theme);
    }

    localStorage.setItem("cv_theme", this.theme);
  }

  toggle() {
    const order = ["light", "dark", "system"];
    const currentIndex = order.indexOf(this.theme);
    this.theme = order[(currentIndex + 1) % order.length];
    this.apply();
  }

  set(theme) {
    this.theme = theme;
    this.apply();
  }

  get() {
    return this.theme;
  }

  setupToggle() {
    const btn = document.querySelector("[data-action='toggle-theme']");
    if (btn) {
      btn.addEventListener("click", () => this.toggle());
      this.updateIcon(btn);
    }
  }

  updateIcon(btn) {
    const icon = btn.querySelector(".theme-icon");
    if (!icon) return;
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    icon.textContent = isDark ? "☀️" : "🌙";
    icon.setAttribute("aria-label", isDark ? "الوضع الفاتح" : "Light mode");
  }
}

window.themeManager = new ThemeManager();

// إعادة تعيين الأيقونة عند تغيير السمة
window.addEventListener("themechange", () => {
  const btn = document.querySelector("[data-action='toggle-theme']");
  if (btn && window.themeManager) {
    window.themeManager.updateIcon(btn);
  }
});