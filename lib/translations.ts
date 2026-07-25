export type Language = 'en' | 'de' | 'fr' | 'ar';

export const translations = {
  en: {
    hero: {
      loading: "> Loading Nassim_Persona.sh...",
      success: "> [SUCCESS] High-Level Engineer found.",
      location: "> Location: Erfurt, Germany",
      focus: "> Main_Focus: JS, React, Software Architecture.",
      status: "> Status: Available for High-Impact Projects.",
      whoami: "whoami --professional",
      title: "Full Stack Software Engineer",
    },
    sections: {
      skills: "Technical Stack",
      experience: "Work Experience",
      education: "Education",
      certifications: "Certifications",
      languages: "Languages",
    },
    experience: {
      present: "Present",
    },
    workData: [
      {
        title: "Freelance Full-Stack Developer",
        company: "Independent",
        location: "Remote",
        period: "April 2026 - Present",
        description: "Lectful Corporation (USA): Developed and automated complex AI workflows utilizing n8n for defined organizational tasks. Adam Fahrschule Erfurt: Designed and implemented a responsive, multi-language static web application using React, managing the end-to-end deployment process.",
        tech: ["React", "Node.js", "n8n", "AI Workflows", "Web Development"]
      },
      {
        title: "Software Engineer",
        company: "Quasiris Search Cloud GmbH",
        location: "Germany",
        period: "August 2023 - March 2026",
        description: "Developed responsive frontend components based on Vue.js/JS. Collaborated on AI-based agent solutions (MCP). Handled payment service integration (Stripe).",
        tech: ["Vue.js", "SEO", "AI Agents", "MCP", "Stripe", "SaaS"]
      },
      {
        title: "Full-Stack Web Developer (Internship)",
        company: "TELEMATIK",
        location: "Tunisia",
        period: "August 2022 - December 2022",
        description: "Developed a comprehensive stadium management application from the ground up, utilizing Angular for the frontend and Spring Boot (Java) for the backend. Designed scalable data schemas.",
        tech: ["Angular", "Spring Boot", "Java", "SQL", "MongoDB"]
      },
      {
        title: "Software Developer (End of Studies Internship)",
        company: "TELEMATIK",
        location: "Tunisia",
        period: "January 2020 - September 2020",
        description: "Developed a web and mobile application for managing vehicle fleets, leveraging Vue.js, Node.js, and Apache Cordova. Implemented secure Node.js backend.",
        tech: ["Vue.js", "Node.js", "Apache Cordova", "PostgreSQL", "Cross-Platform"]
      },
      {
        title: "IT Technician (Internship)",
        company: "BIAT Bank",
        location: "Tunisia",
        period: "January 2018 - March 2018",
        description: "Supported and maintained critical hardware and software systems within a secure banking environment, ensuring minimal downtime.",
        tech: ["System Support", "Network Maintenance", "Hardware Troubleshooting"]
      }
    ],
    eduData: [
      {
        degree: "Master's Degree, Computer Science (Freemover)",
        institution: "Philipps-Universität Marburg",
        location: "Germany",
        period: "2023 - 2024"
      },
      {
        degree: "Master's Degree, Computer Science(Exchange)",
        institution: "HOCHSCHULE SCHMALKALDEN",
        location: "Germany",
        period: "2023 - 2024"
      },
      {
        degree: "Diploma in Software Engineering",
        institution: "TEK-UP University",
        location: "Tunisia",
        period: "2020 - 2026"
      },
      {
        degree: "Bachelor's Degree in Computer Technology",
        institution: "Zaghwen Higher Institute of Technological Studies",
        location: "Tunisia",
        period: "2017 - 2020"
      }
    ],
    certData: [
      "WeAreDevelopers World Congress 2025",
      "SCRUM FOUNDATION PROFESSIONAL",
      "98-382: MTA JAVASCRIPT",
      "98-381: MTA PYTHON",
      "98-388: MTA JAVA",
      "German Driver's License B"
    ],
    languages: {
      arabic: "Arabic",
      german: "German",
      english: "English",
      french: "French",
      native: "Native",
      intermediate: "Intermediate",
      advanced: "Advanced",
    },
    footer: {
      rights: "© 2026 // CLAYSYSTEMS // NASSIM MAHMOUDI",
    },
  },
  de: {
    hero: {
      loading: "> Upload von Nassim_Persona.sh...",
      success: "> [ERFOLG] Senior-Ingenieur gefunden.",
      location: "> Standort: Erfurt, Deutschland",
      focus: "> Fokus: JS, React, Software-Architektur.",
      status: "> Status: Verfügbar für anspruchsvolle Projekte.",
      whoami: "werbinich --beruflich",
      title: "Full Stack Software-Entwickler",
    },
    sections: {
      skills: "Technologien",
      experience: "Berufserfahrung",
      education: "Ausbildung",
      certifications: "Zertifizierungen",
      languages: "Sprachen",
    },
    experience: {
      present: "Heute",
    },
    workData: [
      {
        title: "Full Stack Softwareentwickler",
        company: "Quasiris Search Cloud",
        location: "Erfurt, Deutschland",
        period: "2023 - März 2026",
        description: "Leitung der Frontend-Entwicklung mit React und Vue.js für Suchlösungen. Implementierung von REST-API-Integrationen.",
        tech: ["React", "Vue.js", "SEO", "REST APIs", "TypeScript"]
      },
      {
        title: "Full-Stack Web Developer (Internship)",
        company: "Funcoach Space",
        location: "Erfurt, Deutschland",
        period: "August 2022 - December 2022",
        description: "Entwicklung von Unternehmensanwendungen mit Angular und Spring Boot. Verwaltung umfangreicher Datenmigrationen.",
        tech: ["Angular", "Spring Boot", "Java", "SQL", "MongoDB", "NoSQL"]
      },
      {
        title: "Software Developer (Internship)",
        company: "TELEMATIK",
        location: "Erfurt, Deutschland",
        period: "January 2020 - September 2020",
        description: "Unterstützung beim Aufbau mobiler Apps. Erfahrung in Node.js und PostgreSQL gesammelt.",
        tech: ["Vue.js", "Node.js", "Apache Cordova", "PostgreSQL"]
      },
      {
        title: "IT Technician (Internship)",
        company: "BIAT Bank",
        location: "Tunesien",
        period: "Jan 2018 – Mär 2018",
        description: "Support und Wartung von IT-Systemen, Gewährleistung der Netzwerkstabilität und Hardwareleistung.",
        tech: ["System-Support", "Netzwerkwartung", "Hardware-Fehlersuche"]
      }
    ],
    eduData: [
      {
        degree: "Master of Science in Informatik",
        institution: "Hochschule Schmalkalden",
        location: "Deutschland",
        period: "2022 – 2023"
      },
      {
        degree: "Diplom in Software Engineering",
        institution: "TEK-UP Universität",
        location: "Tunesien",
        period: "2020 – 2026"
      },
      {
        degree: "Bachelor in Informatik und Technologie",
        institution: "Höheres Institut für angewandte Wissenschaften",
        location: "Tunesien",
        period: "2017 – 2020"
      }
    ],
    certData: [
      "WeAreDevelopers Weltkongress 2025",
      "98-382: MTA JAVASCRIPT",
      "98-381: MTA PYTHON",
      "98-388: MTA JAVA",
      "Deutscher Führerschein : Klasse B"
    ],
    languages: {
      arabic: "Arabisch",
      german: "Deutsch",
      english: "Englisch",
      french: "Französisch",
      native: "Muttersprache",
      intermediate: "Mittelstufe",
      advanced: "Erweitert",
    },
    footer: {
      rights: "© 2026 // CLAYSYSTEMS // NASSIM MAHMOUDI",
    },
  },
  fr: {
    hero: {
      loading: "> Chargement de Nassim_Persona.sh...",
      success: "> [SUCCÈS] Ingénieur de haut niveau trouvé.",
      location: "> Lieu: Erfurt, Allemagne",
      focus: "> Focus: JS, React, Architecture Logicielle.",
      status: "> Statut: Disponible pour des projets d'impact.",
      whoami: "qui-suis-je --professionnel",
      title: "Ingénieur Logiciel Full Stack",
    },
    sections: {
      skills: "Pile Technique",
      experience: "Expérience Professionnelle",
      education: "Éducation",
      certifications: "Certifications",
      languages: "Langues",
    },
    experience: {
      present: "Présent",
    },
    workData: [
      {
        title: "Développeur Logiciel Full Stack",
        company: "Quasiris Search Cloud",
        location: "Erfurt, Allemagne",
        period: "2023 - Mars 2026",
        description: "Direction du développement frontend avec React et Vue.js pour des solutions de recherche. Intégrations d'API REST.",
        tech: ["React", "Vue.js", "SEO", "REST APIs", "TypeScript"]
      },
      {
        title: "Développeur Web Full-Stack (Stage)",
        company: "Funcoach Space",
        location: "Erfurt, Allemagne",
        period: "August 2022 - December 2022",
        description: "Développement d'applications d'entreprise en Angular et Spring Boot. Gestion de migrations de données.",
        tech: ["Angular", "Spring Boot", "Java", "SQL", "MongoDB", "NoSQL"]
      },
      {
        title: "Développeur Logiciel (Stage)",
        company: "TELEMATIK",
        location: "Erfurt, Allemagne",
        period: "January 2020 - September 2020",
        description: "Aide à la création d'applications mobiles. Expérience acquise en Node.js et PostgreSQL.",
        tech: ["Vue.js", "Node.js", "Apache Cordova", "PostgreSQL"]
      },
      {
        title: "Technicien Informatique (Stage)",
        company: "BIAT Bank",
        location: "Tunisie",
        period: "Jan 2018 – Mar 2018",
        description: "Support et maintenance des systèmes informatiques, stabilité du réseau et performance matérielle.",
        tech: ["Support Système", "Maintenance Réseau", "Dépannage Matériel"]
      }
    ],
    eduData: [
      {
        degree: "Master of Science en Informatique",
        institution: "Université des Sciences Appliquées de Schmalkalden",
        location: "Allemagne",
        period: "2022 – 2023"
      },
      {
        degree: "Diplôme en Génie Logiciel",
        institution: "Université TEK-UP",
        location: "Tunisie",
        period: "2020 – 2026"
      },
      {
        degree: "Licence en Informatique et Technologie",
        institution: "Institut Supérieur des Sciences Appliquées",
        location: "Tunisie",
        period: "2017 – 2020"
      }
    ],
    certData: [
      "Congrès mondial WeAreDevelopers 2025",
      "98-382: MTA JAVASCRIPT",
      "98-381: MTA PYTHON",
      "98-388: MTA JAVA",
      "Permis de conduire allemand : Classe B"
    ],
    languages: {
      arabic: "Arabe",
      german: "Allemand",
      english: "Anglais",
      french: "Français",
      native: "Langue Maternelle",
      intermediate: "Intermédiaire",
      advanced: "Avancé",
    },
    footer: {
      rights: "© 2026 // CLAYSYSTEMS // NASSIM MAHMOUDI",
    },
  },
  ar: {
    hero: {
      loading: "> جاري تحميل Nassim_Persona.sh...",
      success: "> [نجاح] تم العثور على مهندس متميز.",
      location: "> الموقع: إرفورت، ألمانيا",
      focus: "> التركيز: JS ، React ، هندسة البرمجيات.",
      status: "> الحالة: متاح للمشاريع الكبيرة.",
      whoami: "من_أنا --مهنياً",
      title: "مهندس برمجيات شامل",
    },
    sections: {
      skills: "المهارات التقنية",
      experience: "الخبرة العملية",
      education: "التعليم",
      certifications: "الشهادات",
      languages: "اللغات",
    },
    experience: {
      present: "حتى الآن",
    },
    workData: [
      {
        title: "مطور برمجيات شامل",
        company: "Quasiris Search Cloud",
        location: "إرفورت، ألمانيا",
        period: "2023 - مارس 2026",
        description: "قيادة تطوير الواجهات الأمامية باستخدام React و Vue.js لحلول البحث. تنفيذ تكاملات API REST.",
        tech: ["React", "Vue.js", "SEO", "REST APIs", "TypeScript"]
      },
      {
        title: "مطور ويب شامل (تدريب)",
        company: "Funcoach Space",
        location: "إرفورت، ألمانيا",
        period: "August 2022 - December 2022",
        description: "تطوير تطبيقات المؤسسات باستخدام Angular و Spring Boot. إدارة عمليات ترحيل البيانات واسعة النطاق.",
        tech: ["Angular", "Spring Boot", "Java", "SQL", "MongoDB", "NoSQL"]
      },
      {
        title: "مطور برمجيات (تدريب)",
        company: "TELEMATIK",
        location: "إرفورت، ألمانيا",
        period: "January 2020 - September 2020",
        description: "المساعدة في بناء تطبيقات الهاتف المحمول. اكتساب الخبرة في Node.js و PostgreSQL.",
        tech: ["Vue.js", "Node.js", "Apache Cordova", "PostgreSQL"]
      },
      {
        title: "فني تكنولوجيا معلومات (تدريب)",
        company: "BIAT Bank",
        location: "تونس",
        period: "يناير 2018 – مارس 2018",
        description: "دعم وصيانة أنظمة تقنية المعلومات بالبنك، وضمان استقرار الشبكة وأداء الأجهزة.",
        tech: ["دعم الأنظمة", "صيانة الشبكات", "استكشاف أخطاء الأجهزة"]
      }
    ],
    eduData: [
      {
        degree: "ماجستير في علوم الكمبيوتر",
        institution: "جامعة شمالكالدن للعلوم التطبيقية",
        location: "ألمانيا",
        period: "2022 – 2023"
      },
      {
        degree: "ديبلوم في هندسة البرمجيات",
        institution: "جامعة TEK-UP",
        location: "تونس",
        period: "2020 – 2026"
      },
      {
        degree: "إجازة في علوم وتكنولوجيا الكمبيوتر",
        institution: "المعهد العالي للعلوم التطبيقية",
        location: "تونس",
        period: "2017 – 2020"
      }
    ],
    certData: [
      "المؤتمر العالمي للمطورين 2025",
      "98-382: MTA JAVASCRIPT",
      "98-381: MTA PYTHON",
      "98-388: MTA JAVA",
      "رخصة القيادة ألمانية : الفئة B",
    ],
    languages: {
      arabic: "العربية",
      german: "الألمانية",
      english: "الإنجليزية",
      french: "الفرنسية",
      native: "اللغة الأم",
      intermediate: "متوسط",
      advanced: "متقدم",
    },
    footer: {
      rights: "© 2026 // CLAYSYSTEMS // نسيم محمودي",
    },
  },
};
