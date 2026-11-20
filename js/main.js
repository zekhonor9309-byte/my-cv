/**
 * main.js - منطق الموقع الرئيسي
 * يملأ المحتوى من CV_DATA، يدير التبديل بين اللغتين، والنماذج والتفاعلات.
 */

document.addEventListener("DOMContentLoaded", () => {
  // تهيئة i18n
  window.i18n.load().then(() => {
    renderContent();
    setupLanguageToggle();
    setupMobileMenu();
    setupContactForm();
    setupSmoothScroll();
    updateYear();
  });

  // تهيئة الوضع الداكن (يتم تهيئته في theme.js تلقائياً)
});

/**
 * تعبئة جميع المحتوى من CV_DATA حسب اللغة الحالية
 */
function renderContent() {
  const lang = window.i18n.get();
  const data = window.CV_DATA;
  const isAr = lang === "ar";

  // --- Hero ---
  setText("hero-name", data.personal[isAr ? "fullNameAr" : "fullNameEn"]);
  setText("hero-title", data.personal[isAr ? "titleAr" : "titleEn"]);
  setText("hero-subtitle", data.personal[isAr ? "summaryAr" : "summaryEn"]);

  // --- About ---
  const aboutIntro = document.querySelector("#about .section-header p");
  if (aboutIntro) aboutIntro.textContent = data.personal[isAr ? "summaryAr" : "summaryEn"];

  renderList("about-interests", data.about[isAr ? "interestsAr" : "interestsEn"]);
  renderList("about-goals", data.about[isAr ? "goalsAr" : "goalsEn"]);
  renderList("about-strengths", data.about[isAr ? "strengthsAr" : "strengthsEn"]);

  setText("about-location", data.personal.location);
  setLinkText("about-email", data.personal.email);
  setHref("about-email", `mailto:${data.personal.email}`);

  // --- Skills ---
  renderList("skills-technical", data.skills[isAr ? "technicalAr" : "technicalEn"]);
  renderList("skills-programming", data.skills[isAr ? "programmingAr" : "programmingEn"]);
  renderList("skills-tools", data.skills[isAr ? "toolsAr" : "toolsEn"]);
  renderList("skills-soft", data.skills[isAr ? "softAr" : "softEn"]);
  renderSkillsLanguages(data.skills[isAr ? "languagesAr" : "languagesEn"]);

  // --- Education ---
  renderEducation();

  // --- Projects ---
  renderProjects();

  // --- Experience ---
  renderExperience();

  // --- Certificates ---
  renderCertificates();

  // --- Contact ---
  setLinkText("contact-email", data.personal.email);
  setHref("contact-email", `mailto:${data.personal.email}`);
  setLinkText("contact-phone", data.personal.phone);
  setHref("contact-phone", `tel:${data.personal.phone}`);

  // Social links
  setHref("social-linkedin", data.personal.linkedin);
  setHref("social-github", data.personal.github);
  setHref("social-portfolio", data.personal.portfolio);

  // Form placeholders (تتم تعبئتها تلقائياً من i18n عبر data-i18n-placeholder في HTML)
}

/**
 * تعيين نص عنصر بالمعرف
 */
function setText(id, value) {
  const el = document.getElementById(id);
  if (el && value) el.textContent = value;
}

/**
 * تعيين نص رابط بالمعرف
 */
function setLinkText(id, value) {
  const el = document.getElementById(id);
  if (el && value) el.textContent = value;
}

/**
 * تعيين href لرابط بالمعرف
 */
function setHref(id, value) {
  const el = document.getElementById(id);
  if (el && value) el.href = value;
}

/**
 * تعيين placeholder لحقل输入 بالمعرف
 */
function setPlaceholder(id, value) {
  const el = document.getElementById(id);
  if (el && value) el.placeholder = value;
}

/**
 * تعبئة قائمة بنقاط
 */
function renderList(listId, items) {
  const el = document.getElementById(listId);
  if (!el || !Array.isArray(items)) return;
  el.innerHTML = items.map(item => `<li>${escapeHtml(item)}</li>`).join("");
}

/**
 * تعبئة لغات المهارات (مستويان)
 */
function renderSkillsLanguages(items) {
  const el = document.getElementById("skills-languages");
  if (!el || !Array.isArray(items)) return;
  el.innerHTML = items.map(item => `
    <li>
      <span class="skill-lang">${escapeHtml(item.name)}</span>
      <span class="skill-level">${escapeHtml(item.level)}</span>
    </li>
  `).join("");
}

/**
 * عرض التعليم (الTimeline)
 */
function renderEducation() {
  const el = document.getElementById("education-timeline");
  const lang = window.i18n.get();
  const isAr = lang === "ar";
  const e = window.CV_DATA.education;

  if (!el || !e) return;

  el.innerHTML = `
    <div class="education-item">
      <div class="education-content">
        <h3>${escapeHtml(isAr ? e.institutionAr : e.institutionEn)}</h3>
        <h4>${escapeHtml(isAr ? e.degreeAr : e.degreeEn)} - ${escapeHtml(isAr ? e.fieldAr : e.fieldEn)}</h4>
        <div class="education-meta">
          <strong>${isAr ? "الفترة:" : "Period:"}</strong> ${e.startYear} - ${isAr ? e.endYear : e.endYearEn}
        </div>
        <ul class="education-courses">
          ${(isAr ? e.coursesAr : e.coursesEn).map(course => `<li>${escapeHtml(course)}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;
}

/**
 * عرض المشاريع
 */
function renderProjects() {
  const el = document.getElementById("projects-grid");
  const lang = window.i18n.get();
  const isAr = lang === "ar";
  const projects = window.CV_DATA.projects || [];

  if (!el) return;

  if (projects.length === 0) {
    el.innerHTML = `<div class="no-projects" style="text-align:center; padding: var(--space-3xl); color: var(--color-text-light);">لا توجد مشاريع مسجلة حالياً.</div>`;
    return;
  }

  el.innerHTML = projects.map(proj => `
    <article class="project-card fade-in">
      <h3>${escapeHtml(isAr ? proj.titleAr : proj.titleEn)}</h3>
      <p>${escapeHtml(isAr ? proj.descAr : proj.descEn)}</p>
      <div class="project-meta">
        <span class="project-tech">التقنيات المستخدمة</span>
        <div class="project-links">
          <a href="${escapeHtml(proj.link)}" target="_blank" rel="noopener" data-i18n="projects.view">معاينة</a>
          <a href="${escapeHtml(proj.github)}" target="_blank" rel="noopener" data-i18n="projects.github">مستودع الكود</a>
        </div>
      </div>
    </article>
  `).join("");
}

/**
 * عرض الخبرات العملية (إخفاء القسم إذا فارغ)
 */
function renderExperience() {
  const section = document.getElementById("experience");
  const list = document.getElementById("experience-list");
  const experiences = window.CV_DATA.experience || [];

  if (!section || !list) return;

  if (experiences.length === 0) {
    section.style.display = "none";
    return;
  }

  section.style.display = "";
  const lang = window.i18n.get();

  list.innerHTML = experiences.map(exp => `
    <div class="experience-item fade-in">
      <h3>${escapeHtml(lang === "ar" ? (exp.companyAr || exp.company) : (exp.companyEn || exp.company))}</h3>
      <h4>${escapeHtml(lang === "ar" ? (exp.roleAr || exp.role) : (exp.roleEn || exp.role))}</h4>
      <div class="experience-meta">${escapeHtml(exp.period || "")}</div>
      <p>${escapeHtml(lang === "ar" ? (exp.descAr || exp.desc) : (exp.descEn || exp.desc))}</p>
    </div>
  `).join("");
}

/**
 * عرض الشهادات (إخفاء القسم إذا فارغ)
 */
function renderCertificates() {
  const section = document.getElementById("certificates");
  const grid = document.getElementById("certificates-grid");
  const certs = window.CV_DATA.certificates || [];

  if (!section || !grid) return;

  if (certs.length === 0) {
    section.style.display = "none";
    return;
  }

  section.style.display = "";
  grid.innerHTML = certs.map(cert => `
    <article class="certificate-card fade-in">
      <h3>${escapeHtml(cert.name)}</h3>
      <p>${escapeHtml(cert.issuer)}</p>
      <p><strong>${escapeHtml(cert.date || "")}</strong></p>
      ${cert.verify ? `<a href="${escapeHtml(cert.verify)}" target="_blank" rel="noopener" class="verify-link">التحقق من الشهادة</a>` : ""}
    </article>
  `).join("");
}

/**
 * إعداد زر تبديل اللغة
 */
function setupLanguageToggle() {
  const btn = document.getElementById("lang-toggle");
  if (!btn) return;

  // نص الزر حسب اللغة الحالية
  updateLangBtn();

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.i18n.toggle();
    renderContent();
    updateLangBtn();
    // إعادة رسم المحتوى الديناميكي بعد تغيير اللغة
    renderEducation();
    renderProjects();
    renderExperience();
    renderCertificates();
  });

  // الاستماع لتغيير اللغة من أماكن أخرى (مثلاً nếu تم تغييرها برمجياً)
  window.addEventListener("langchange", (e) => {
    updateLangBtn();
    renderContent();
    renderEducation();
    renderProjects();
    renderExperience();
    renderCertificates();
  });
}

function updateLangBtn() {
  const btn = document.getElementById("lang-toggle");
  if (!btn) return;
  btn.textContent = window.i18n.get() === "ar" ? "EN" : "AR";
  btn.setAttribute("aria-label", window.i18n.get() === "ar" ? "التبديل إلى الإنجليزية" : "Switch to Arabic");
}

/**
 * القائمة المتحركة للجوال
 */
function setupMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");

  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", !expanded);
    menu.hidden = expanded;
  });

  // إغلاق القائمة عند الضغط على رابط
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      btn.setAttribute("aria-expanded", "false");
      menu.hidden = true;
    });
  });
}

/**
 * نموذج التواصل - معالجة الإرسال
 */
function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (!name || !email || !message) {
      alert(window.i18n.get() === "ar" ? "الرجاء ملء جميع الحقول." : "Please fill all fields.");
      return;
    }

    // فتح برنامج البريد الافتراضي مع البيانات المعبأة
    const subject = encodeURIComponent(window.i18n.get() === "ar" ? "رسالة من موقع السيرة الذاتية" : "Message from Portfolio Website");
    const body = encodeURIComponent(`الاسم: ${name}\nالبريد: ${email}\n\nالرسالة:\n${message}`);
    window.location.href = `mailto:${window.CV_DATA.personal.email}?subject=${subject}&body=${body}`;

    // إعادة تعيين النموذج
    form.reset();
  });
}

/**
 * التمرير السلس للأقسام الداخلية
 */
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

/**
 * تحديث سنة derechos في التذييل
 */
function updateYear() {
  const el = document.getElementById("footer-year");
  if (el) el.textContent = new Date().getFullYear();
}

/**
 * تفريغ HTML للوقاية من XSS بسيط
 */
function escapeHtml(text) {
  if (!text) return text;
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}