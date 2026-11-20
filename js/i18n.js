/**
 * نظام الترجمة المركزي (i18n)
 * يدعم العربية (افتراضي، RTL) والإنجليزية (LTR)
 * يقرأ من ملفات JSON في مجلد locales/
 */

class I18n {
  constructor() {
    this.currentLang = localStorage.getItem("cv_lang") || "ar"; // العربية افتراضية
    this.translations = {};
    this.elements = [];
    this.dirMap = {
      ar: "rtl",
      en: "ltr"
    };
  }

  // تحميل ملفات الترجمة
  async load() {
    try {
      const [arRes, enRes] = await Promise.all([
        fetch("locales/ar.json"),
        fetch("locales/en.json")
      ]);
      this.translations.ar = await arRes.json();
      this.translations.en = await enRes.json();
      this.apply();
    } catch (err) {
      console.error("فشل تحميل ملفات الترجمة:", err);
    }
  }

  // تطبيق اللغة الحالية على الصفحة
  apply() {
    const html = document.documentElement;
    const t = this.translations[this.currentLang];

    // تعيين الاتجاه واللغة
    html.dir = this.dirMap[this.currentLang] || "rtl";
    html.lang = this.currentLang;

    // تحديث title
    if (t.site && t.site.title) {
      document.title = t.site.title;
    }

    // تحديث جميع العناصر التي تحمل data-i18n
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = this.getNested(t, key);
      if (value !== undefined) {
        el.textContent = value;
      }
    });

    // تحديث placebos
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const value = this.getNested(t, key);
      if (value !== undefined) {
        el.placeholder = value;
      }
    });

    // تحديث aria-label
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      const value = this.getNested(t, key);
      if (value !== undefined) {
        el.setAttribute("aria-label", value);
      }
    });

    // تحديث class الاتجاه على body للأنماط الخاصة
    document.body.classList.remove("dir-rtl", "dir-ltr");
    document.body.classList.add(`dir-${this.dirMap[this.currentLang]}`);

    // حفظ الاختيار
    localStorage.setItem("cv_lang", this.currentLang);

    // إرسال حدث للتحديثات الأخرى
    window.dispatchEvent(new CustomEvent("langchange", { detail: { lang: this.currentLang } }));
  }

  // استرجاع قيمة متداخلة من الكائن باستخدام نقطة (مثل "hero.name")
  getNested(obj, path) {
    return path.split(".").reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
  }

  // تبديل اللغة
  toggle() {
    this.currentLang = this.currentLang === "ar" ? "en" : "ar";
    this.apply();
  }

  // تعيين لغة محددة
  set(lang) {
    if (this.currentLang !== lang) {
      this.currentLang = lang;
      this.apply();
    }
  }

  // الحصول على اللغة الحالية
  get() {
    return this.currentLang;
  }
}

// تصدير instance واحد
window.i18n = new I18n();