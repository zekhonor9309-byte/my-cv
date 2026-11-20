/**
 * البيانات المركزية للسيرة الذاتية (Curriculum Vitae Data)
 * هذا الملف هو المصدر الوحيد للبيانات الشخصية. لتعديل بياناتك، قم بالتعديل هنا فقط.
 * البيانات الناقصة تم تمييزها كبيانات تجريبية مؤقتة (PLACEHOLDER) للتعديل لاحقاً.
 */

const CV_DATA = {
  // البيانات الشخصية
  personal: {
    fullNameAr: "زكريا يحيى الحسني",
    fullNameEn: "Zakaria Yahya Al-Hasani",
    titleAr: "عالم بيانات وذكاء اصطناعي",
    titleEn: "Data Scientist & AI Engineer",
    location: "المدينة، الدولة", // PLACEHOLDER - أضف موقعك الفعلي
    email: "your.email@example.com", // PLACEHOLDER - أضف بريدك المهني
    phone: "+966 50 000 0000", // PLACEHOLDER - أضف رقم هاتفك مع مفتاح الدولة
    linkedin: "#", // PLACEHOLDER - أضف رابط LinkedIn
    github: "#", // PLACEHOLDER - أضف رابط GitHub
    portfolio: "#", // PLACEHOLDER - أضف رابط معرض الأعمال
    image: "assets/images/profile.jpg", // PLACEHOLDER - أضف صورة شخصية احترافية
    summaryAr: "أنا زكريا يحيى الحسني، عالم بيانات ومتخصص في الذكاء الاصطناعي، شغوف بتحويل البيانات إلى قرارات حكيمة وحلول تقنية تساهم في تطوير المؤسسات وتحسين جودة الخدمات.",
    summaryEn: "I am Zakaria Yahya Al-Hasani, a Data Scientist and AI Specialist, passionate about transforming data into wise decisions and technical solutions that contribute to developing institutions and improving service quality."
  },

  // نبذة عني - الاهتمامات والأهداف ونقاط القوة
  about: {
    interestsAr: [
      "تحليل البيانات واستخراج الرؤى",
      "التعلم الآلي والذكاء الاصطناعي",
      "تصميم وتنفيذ الأنظمة الذكية",
      "تطوير المواقع والتطبيقات",
      "أتمة العمليات والعمليات التجارية"
    ],
    interestsEn: [
      "Data analysis and insight extraction",
      "Machine learning and artificial intelligence",
      "Designing and implementing intelligent systems",
      "Web and application development",
      "Process automation and business operations"
    ],
    goalsAr: [
      "المساهمة في مشاريع تقنية ذات تأثير حقيقي",
      "تطوير مهاراتي في الذكاء الاصطناعي وعلم البيانات باستمرار",
      "العمل مع فرق تقنية متخصصة لبناء حلول مبتكرة",
      "المساهمة في التحول الرقمي للمؤسسات"
    ],
    goalsEn: [
      "Contributing to technical projects with real impact",
      "Continuously developing my AI and data science skills",
      "Working with specialized technical teams to build innovative solutions",
      "Contributing to the digital transformation of institutions"
    ],
    strengthsAr: [
      "التفكير التحليلي وحل المشكلات",
      "القدرة على التعلم الذاتي السريع",
      "العمل الجماعي والتواصل الفعال",
      "الالتزام بالجودة والمواعيد",
      "الشغف بالتقنية الحديثة"
    ],
    strengthsEn: [
      "Analytical thinking and problem solving",
      "Fast self-learning ability",
      "Teamwork and effective communication",
      "Commitment to quality and deadlines",
      "Passion for modern technology"
    ]
  },

  // المهارات - بدون مبالغة في النسب
  skills: {
    technicalAr: ["تحليل البيانات", "النماذج الإحصائية", "تصور البيانات (Data Visualization)", "قواعد البيانات SQL"],
    technicalEn: ["Data Analysis", "Statistical Modeling", "Data Visualization", "SQL Databases"],
    programmingAr: ["Python", "R", "SQL", "JavaScript", "HTML/CSS"],
    programmingEn: ["Python", "R", "SQL", "JavaScript", "HTML/CSS"],
    toolsAr: ["Jupyter Notebook", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Git", "VS Code"],
    toolsEn: ["Jupyter Notebook", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Git", "VS Code"],
    softAr: ["التفكير التحليلي", "حل المشكلات", "التعلم الذاتي", "العمل الجماعي", "التواصل الفعال"],
    softEn: ["Analytical Thinking", "Problem Solving", "Self-Learning", "Teamwork", "Effective Communication"],
    languagesAr: [
      { name: "العربية", level: "لغة أم" },
      { name: "الإنجليزية", level: "متوسط" }
    ],
    languagesEn: [
      { name: "Arabic", level: "Native" },
      { name: "English", level: "Intermediate" }
    ]
  },

  // التعليم
  education: {
    institutionAr: "الجامعة الإسلامية بمنيسوتا",
    institutionEn: "Islamic University of Minnesota",
    degreeAr: "بكالوريوس",
    degreeEn: "Bachelor's Degree",
    fieldAr: "علم البيانات والذكاء الاصطناعي",
    fieldEn: "Data Science and Artificial Intelligence",
    startYear: "2024",
    endYear: "متوقع 2026",
    endYearEn: "Expected 2026",
    coursesAr: [
      "دبلوم في اللغة الإنجليزية",
      "دورة في أسس الذكاء الاصطناعي",
      "دورة في المحاسبة الشاملة CAD المستوى الأول",
      "4 شهادات مساعدة بحث وتدريس",
      "دورة في مهارات تحليل الشخصية",
      "دورة في الشخصية القيادية"
    ],
    coursesEn: [
      "Diploma in English Language",
      "Course in Fundamentals of Artificial Intelligence",
      "Course in Comprehensive Accounting CAD Level 1",
      "4 Research and Teaching Assistant Certificates",
      "Course in Personality Analysis Skills",
      "Course in Leadership Personality"
    ]
  },

  // المشاريع - قابل للإضافة مستقبلاً
  projects: [
    {
      id: "proj-1",
      titleAr: "تطبيق أتمتة لشركة حج",
      titleEn: "Hajj Automation Application",
      descAr: "عملت موقع يمكن الشركة من أتمتة عملها في تحجيج ضيوف الرحمن من تسجيل الحجاج وترتيب الاحتياجات اللازمة لهم من تسكين وإعاشة ونقل. مكّن الموقع الشركة من حصر متطلبات وزارة الحج والعمل عليها، וכן عمل يوزرات للموظفين والحجاج بطرق سهلة مما مكن الشركة من رفع مستوى رضا الحاج عن الخدمات المقدمة.",
      descEn: "I developed a website that enables the company to automate its operations in facilitating Hajj pilgrims—from pilgrim registration to arranging their needs such as accommodation, catering, and transportation. The system enabled the company to align with Saudi Ministry of Hajj requirements and created easy portals for employees and pilgrims, significantly improving pilgrim satisfaction with the services provided.",
      tech: "HTML, CSS, JavaScript",
      link: "#", // PLACEHOLDER - أضف رابط معاينة المشروع
      github: "#" // PLACEHOLDER - أضف رابط GitHub إن وجد
    }
    // أضف مشاريع جديدة هنا باستخدام نفس الهيكل
  ],

  // الخبرات العملية - فارغة افتراضياً (لا نختترع خبرات)
  experience: [],

  // الشهادات والإنجازات - فارغة افتراضياً
  certificates: [],

  // بيانات التواصل
  contact: {
    noteAr: "جميع الحقول مطلوبة",
    noteEn: "All fields are required",
    submitAr: "إرسال",
    submitEn: "Submit"
  },

  // التذييل
  footer: {
    rightsAr: "جميع الحقوق محفوظة",
    rightsEn: "All rights reserved",
    byAr: "زكريا يحيى الحسني",
    byEn: "Zakaria Yahya Al-Hasani",
    designedByAr: "تصميم وتطوير",
    designedByEn: "Design & Development"
  }
};

// تصدير البيانات للاستخدام في المتصفح
if (typeof window !== "undefined") {
  window.CV_DATA = CV_DATA;
}