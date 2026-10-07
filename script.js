const translations = {
  es: {
    skipLink: "Ir al contenido", navProfile: "Perfil", navExperience: "Trayectoria", navExpertise: "Especialización", navContact: "Contacto",
    eyebrow: "PORTAFOLIO PROFESIONAL", heroIntro: "Software Developer II especializado en modernización de productos, arquitecturas de servicios y entrega de software.", heroCta: "Iniciar una conversación <span aria-hidden=\"true\">→</span>",
    availabilityLabel: "Cargo actual", availabilityValue: "Software Developer II", nationalityLabel: "Nacionalidad", nationalityValue: "Mexicana y española", authorizationLabel: "Autorización laboral", authorizationValue: "Ciudadano español · elegible para trabajar en la UE",
    profileTitle: "Perfil", profileText: "Software Developer II en Solera, con una trayectoria que une la seguridad industrial, la ingeniería de control y la modernización de plataformas de software.", factFocusLabel: "Enfoque", factFocusValue: "Modernización de productos", factScopeLabel: "Ubicación actual", factScopeValue: "Madrid, España", factLanguagesLabel: "Idiomas", factLanguagesValue: "Español e inglés",
    experienceTitle: "Trayectoria", soleraLabel: "SOLERA", soleraTitle: "Software Developer II · Madrid, España", soleraText: "Octubre de 2022 - Actualidad. Promovido de Software Developer I a Software Developer II en marzo de 2025. Migro funcionalidades de un monolito Drupal/PHP hacia microservicios Laravel, APIs y un frontend React con Redux, dentro de un entorno Dockerizado.", soleraImpactLabel: "IMPACTO EN SOLERA", soleraImpactTitle: "Migración, estabilidad y servicios de datos", soleraImpactText: "Mantengo y desarrollo los servicios de usuarios, producto, contenido y agentes de venta. Resolví dependencias críticas obsoletas y reactivé RAW DATA: un servicio que procesa datos de contenido con AWS Lambda, SQS, SNS y S3 para entregarlos en estructuras específicas a los clientes.", pilzTimelineLabel: "PILZ MÉXICO", pilzTimelineTitle: "Programa de rotación departamental · México", pilzTimelineText: "Marzo de 2021 - Marzo de 2022. Rotación por Consultoría, Ingeniería Aplicada y Ventas. Elaboré entregables alineados con ISO 12100 e ISO 13849-1/-2, participé en consultorías para PepsiCo y Mondelez, y lideré la implementación de consultoría de seguridad industrial en Eaton.",
    expertiseTitle: "Especialización", pilzLabel: "PILZ", pilzTitle: "Seguridad industrial y bases técnicas", pilzText: "Certificaciones en trabajo en alturas y CMS-1 (Certificate of Machinery Safety Basic). Formación aplicada a evaluación de seguridad de maquinaria, marcado CE y estándares ISO 12100 e ISO 13849-1/-2.", principleOne: "PHP · Laravel", principleTwo: "React · Redux", principleThree: "Docker · MySQL", principleFour: "PHPUnit · Jenkins", principleFive: "GitHub · Bitbucket",
    educationTitle: "Formación", universityLabel: "ESIME · IPN", universityTitle: "Ingeniería en Control y Automatización · México", universityText: "Especialidad en control avanzado. Escuela Superior de Ingeniería Mecánica y Eléctrica del Instituto Politécnico Nacional.", highSchoolLabel: "CECyT 11 · IPN", highSchoolTitle: "Técnico en Telecomunicaciones · México", highSchoolText: "Centro de Estudios Científicos y Tecnológicos 11 “Wilfrido Massieu” del Instituto Politécnico Nacional.",
    contactEyebrow: "CONTACTO", contactTitle: "Construyamos una conversación útil.", contactText: "Disponible para conversar sobre desarrollo de software, modernización de plataformas y colaboración internacional.", footerText: "Portafolio profesional bilingüe"
  },
  en: {
    skipLink: "Skip to content", navProfile: "Profile", navExperience: "Career", navExpertise: "Expertise", navContact: "Contact",
    eyebrow: "PROFESSIONAL PORTFOLIO", heroIntro: "Software Developer II specialising in product modernisation, service architectures, and software delivery.", heroCta: "Start a conversation <span aria-hidden=\"true\">→</span>",
    availabilityLabel: "Current role", availabilityValue: "Software Developer II", nationalityLabel: "Nationality", nationalityValue: "Mexican and Spanish", authorizationLabel: "Work authorisation", authorizationValue: "Spanish citizen · eligible to work in the EU",
    profileTitle: "Profile", profileText: "Software Developer II at Solera, with a career that brings together industrial safety, control engineering, and software-platform modernisation.", factFocusLabel: "Focus", factFocusValue: "Product modernisation", factScopeLabel: "Current location", factScopeValue: "Madrid, Spain", factLanguagesLabel: "Languages", factLanguagesValue: "Spanish and English",
    experienceTitle: "Career", soleraLabel: "SOLERA", soleraTitle: "Software Developer II · Madrid, Spain", soleraText: "October 2022 - Present. Promoted from Software Developer I to Software Developer II in March 2025. I migrate functionality from a Drupal/PHP monolith to Laravel microservices, APIs, and a React frontend with Redux in a Docker-based environment.", soleraImpactLabel: "SOLERA IMPACT", soleraImpactTitle: "Migration, stability, and data services", soleraImpactText: "I maintain and develop user, product, content, and sales-agent services. I resolved critical obsolete dependencies and reactivated RAW DATA, a service that processes content data with AWS Lambda, SQS, SNS, and S3 to provide client-specific data structures.", pilzTimelineLabel: "PILZ MEXICO", pilzTimelineTitle: "Department rotation programme · Mexico", pilzTimelineText: "March 2021 - March 2022. Rotated through Consulting, Applied Engineering, and Sales. Produced deliverables aligned with ISO 12100 and ISO 13849-1/-2, contributed to consulting work for PepsiCo and Mondelez, and led the industrial-safety consulting implementation at Eaton.",
    expertiseTitle: "Expertise", pilzLabel: "PILZ", pilzTitle: "Industrial safety and technical foundations", pilzText: "Certified for work at height and CMS-1 (Certificate of Machinery Safety Basic). Applied training in machinery safety assessment, CE marking, and ISO 12100 and ISO 13849-1/-2 standards.", principleOne: "PHP · Laravel", principleTwo: "React · Redux", principleThree: "Docker · MySQL", principleFour: "PHPUnit · Jenkins", principleFive: "GitHub · Bitbucket",
    educationTitle: "Education", universityLabel: "ESIME · IPN", universityTitle: "Control and Automation Engineering · Mexico", universityText: "Advanced control specialisation. Escuela Superior de Ingeniería Mecánica y Eléctrica, Instituto Politécnico Nacional.", highSchoolLabel: "CECyT 11 · IPN", highSchoolTitle: "Telecommunications Technician · Mexico", highSchoolText: "Centro de Estudios Científicos y Tecnológicos 11 “Wilfrido Massieu”, Instituto Politécnico Nacional.",
    contactEyebrow: "CONTACT", contactTitle: "Let us have a useful conversation.", contactText: "Available to discuss software development, platform modernisation, and international collaboration.", footerText: "Bilingual professional portfolio"
  }
};

const setLanguage = (language) => {
  const dictionary = translations[language];
  document.documentElement.lang = language;
  document.title = language === "es" ? "Bryan Fabian Mejia Vergara | Portafolio Profesional" : "Bryan Fabian Mejia Vergara | Professional Portfolio";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.innerHTML = value;
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  localStorage.setItem("portfolio-language", language);
};

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

document.querySelector("#year").textContent = new Date().getFullYear();
setLanguage(localStorage.getItem("portfolio-language") || "es");