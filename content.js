/* Firas Bourguiba — Portfolio content (bilingual FR/EN) */
window.CONTENT = {
  meta: {
    name: "Firas Bourguiba",
    role: { fr: "Data Science & Intelligence Artificielle", en: "Data Science & Artificial Intelligence" },
    location: "Paris, Île-de-France",
    available: { fr: "Disponible — Septembre 2026", en: "Available — September 2026" },
    rhythm: { fr: "2 sem. entreprise / 1 sem. école", en: "2 weeks company / 1 week school" },
  },

  nav: {
    skills:     { fr: "Compétences", en: "Skills" },
    experience: { fr: "Parcours",    en: "Experience" },
    projects:   { fr: "Projets",     en: "Projects" },
    vision:     { fr: "Vision",      en: "Vision" },
    contact:    { fr: "Contact",     en: "Contact" },
  },

  hero: {
    eyebrow: { fr: "Bachelor Ynov Paris → Master 2026", en: "Bachelor Ynov Paris → Master 2026" },
    headlinePre:  { fr: "Je transforme la donnée brute en", en: "I turn raw data into" },
    headlineEmph: { fr: "décisions stratégiques.", en: "strategic decisions." },
    sub: {
      fr: "Profil hybride Data + IA + Business. Je code, j'analyse, et je comprends les enjeux métiers. Chaque compétence est déployée dans un projet réel, accessible en ligne.",
      en: "A hybrid Data + AI + Business profile. I code, I analyse, and I understand business stakes. Every skill is deployed in a real project, live online.",
    },
    ctaProjects: { fr: "Voir les projets", en: "See the projects" },
    ctaContact:  { fr: "Me contacter", en: "Get in touch" },
    roleQuestion:{ fr: "Vous recrutez pour…", en: "You're hiring for…" },
  },

  // Role selector — reorganises emphasis across the page
  roles: [
    {
      id: "all",
      label: { fr: "Tous les profils", en: "Every profile" },
      short: { fr: "Polyvalent", en: "Versatile" },
      tagline: {
        fr: "Un profil hybride à l'intersection de la data, de l'IA et du business.",
        en: "A hybrid profile at the intersection of data, AI and business.",
      },
      skills: ["data", "ai", "bi", "cloud"],
      projects: ["km", "suez", "laposte", "etam", "pwc"],
    },
    {
      id: "ds",
      label: { fr: "Data Scientist", en: "Data Scientist" },
      short: { fr: "Data Scientist", en: "Data Scientist" },
      tagline: {
        fr: "Modèles ML supervisés, prévision et optimisation — du notebook au modèle déployé.",
        en: "Supervised ML models, forecasting and optimisation — from notebook to deployed model.",
      },
      skills: ["data", "ai", "cloud", "bi"],
      projects: ["suez", "laposte", "km", "pwc", "etam"],
    },
    {
      id: "da",
      label: { fr: "Data Analyst / BI", en: "Data Analyst / BI" },
      short: { fr: "Analyst / BI", en: "Analyst / BI" },
      tagline: {
        fr: "ETL, KPI et dashboards qui pilotent des décisions commerciales mesurables.",
        en: "ETL, KPIs and dashboards that drive measurable business decisions.",
      },
      skills: ["bi", "data", "cloud", "ai"],
      projects: ["etam", "laposte", "km", "suez", "pwc"],
    },
    {
      id: "ml",
      label: { fr: "ML / AI Engineer", en: "ML / AI Engineer" },
      short: { fr: "ML / AI Eng.", en: "ML / AI Eng." },
      tagline: {
        fr: "NLP, LLM, RAG et agents IA — concevoir des systèmes IA déployés et maintenables.",
        en: "NLP, LLMs, RAG and AI agents — building deployed, maintainable AI systems.",
      },
      skills: ["ai", "data", "cloud", "bi"],
      projects: ["suez", "pwc", "km", "laposte", "etam"],
    },
    {
      id: "consult",
      label: { fr: "Consultant Data", en: "Data Consultant" },
      short: { fr: "Consultant", en: "Consultant" },
      tagline: {
        fr: "Traduire un enjeu métier en levier data : ROI, gouvernance et stratégie.",
        en: "Turning a business stake into a data lever: ROI, governance and strategy.",
      },
      skills: ["bi", "data", "ai", "cloud"],
      projects: ["etam", "pwc", "laposte", "suez", "km"],
    },
  ],

  // Impact figures
  stats: [
    { value: "3+",   label: { fr: "expériences",        en: "experiences" } },
    { value: "5",    label: { fr: "projets en ligne",   en: "live projects" } },
    { value: "+15%", label: { fr: "de CA généré",       en: "revenue generated" } },
    { value: "2026", label: { fr: "Master · disponible", en: "Master · available" } },
  ],

  // Trajectory dataviz — real milestones, scope on Y axis
  trajectory: {
    title: { fr: "Trajectoire", en: "Trajectory" },
    caption: {
      fr: "Montée en responsabilité et en impact, 2023 → 2026. Survolez un jalon.",
      en: "Growing scope and impact, 2023 → 2026. Hover a milestone.",
    },
    yLabel: { fr: "Portée & impact", en: "Scope & impact" },
    points: [
      { x: 0,   y: 12, date: "2023", titleFr: "Début Ynov Campus", titleEn: "Ynov Campus starts",
        descFr: "Bachelor Informatique — Data Science & IA.", descEn: "CS Bachelor — Data Science & AI." },
      { x: 1.0, y: 34, date: "2024", titleFr: "ENGIE — NLP & BI", titleEn: "ENGIE — NLP & BI",
        descFr: "Analyse de sentiments clients, dashboards Power BI.", descEn: "Customer sentiment analysis, Power BI dashboards." },
      { x: 1.6, y: 50, date: "Déc 2024", titleFr: "Analyste Data — Association", titleEn: "Data Analyst — Non-profit",
        descFr: "KPI, reporting et pilotage opérationnel.", descEn: "KPIs, reporting and operational steering." },
      { x: 2.1, y: 74, date: "2025", titleFr: "Freelance — Deliveroo & Uber Eats", titleEn: "Freelance — Deliveroo & Uber Eats",
        descFr: "ETL et recommandations : +15% de CA.", descEn: "ETL and recommendations: +15% revenue." },
      { x: 2.7, y: 88, date: "2025", titleFr: "5 case studies déployées", titleEn: "5 case studies shipped",
        descFr: "La Poste, SUEZ, Etam, PwC — données réelles.", descEn: "La Poste, SUEZ, Etam, PwC — real data." },
      { x: 3.3, y: 100, date: "Sept 2026", titleFr: "Master — disponible en alternance", titleEn: "Master — available for apprenticeship",
        descFr: "Data Science & IA, prêt pour l'entreprise.", descEn: "Data Science & AI, ready for the field." },
    ],
  },

  skills: {
    sectionLabel: { fr: "Stack technique", en: "Technical stack" },
    title: { fr: "Ce que je", en: "What I" },
    titleEmph: { fr: "maîtrise", en: "master" },
    intro: {
      fr: "Je ne liste pas des compétences, je les déploie. Chaque techno se retrouve dans un projet public — pas de slides, du code qui tourne.",
      en: "I don't list skills, I deploy them. Every technology lives in a public project — no slides, working code.",
    },
    categories: [
      {
        id: "data",
        name: { fr: "Data & Machine Learning", en: "Data & Machine Learning" },
        level: 88,
        tags: ["Python", "SQL", "Pandas", "Scikit-learn", "TensorFlow", "PyTorch", "Keras", "XGBoost", "LightGBM", "Random Forest"],
      },
      {
        id: "ai",
        name: { fr: "IA & NLP", en: "AI & NLP" },
        level: 80,
        tags: ["NLP", "Analyse de sentiments", "Deep Learning", "Computer Vision", "IA Générative", "LLM", "LangChain", "RAG"],
      },
      {
        id: "bi",
        name: { fr: "Business Intelligence", en: "Business Intelligence" },
        level: 85,
        tags: ["Power BI", "Tableau", "KPI & Dashboards", "ETL", "DAX", "Matplotlib", "Airflow", "DBeaver"],
      },
      {
        id: "cloud",
        name: { fr: "Cloud & Infra", en: "Cloud & Infra" },
        level: 58,
        tags: ["Git", "Netlify", "API REST", "Docker*", "AWS*", "Azure ML*", "Databricks*", "Snowflake*", "MLflow*"],
        note: { fr: "* en cours d'acquisition (Master)", en: "* being acquired (Master)" },
      },
    ],
  },

  experience: {
    sectionLabel: { fr: "Parcours", en: "Experience" },
    title: { fr: "Mon", en: "My" },
    titleEmph: { fr: "expérience", en: "experience" },
    items: [
      {
        period: { fr: "Sept 2023 → Présent", en: "Sep 2023 → Present" },
        org: "Ynov Campus Paris",
        role: { fr: "Bachelor → Master Data Science & IA", en: "Bachelor → Master Data Science & AI" },
        place: "Paris",
        bullets: {
          fr: [
            "Formation pluridisciplinaire : Python, ML, Deep Learning, NLP, BI, Data Engineering",
            "Case studies sur données réelles : La Poste, SUEZ, Etam, PwC",
            "Rythme alternance : 2 semaines entreprise / 1 semaine école",
          ],
          en: [
            "Multidisciplinary training: Python, ML, Deep Learning, NLP, BI, Data Engineering",
            "Case studies on real data: La Poste, SUEZ, Etam, PwC",
            "Apprenticeship rhythm: 2 weeks company / 1 week school",
          ],
        },
      },
      {
        period: { fr: "Déc 2024 → Présent", en: "Dec 2024 → Present" },
        org: "La Famille au Grand Cœur",
        role: { fr: "Analyste Data & Suivi Opérationnel", en: "Data Analyst & Operations" },
        place: "Paris",
        bullets: {
          fr: [
            "Structuration des données pour améliorer le pilotage d'activité",
            "Création de KPI et reporting de performance opérationnelle",
            "Optimisation des processus internes en data-driven",
          ],
          en: [
            "Structuring data to improve activity steering",
            "Building KPIs and operational performance reporting",
            "Data-driven optimisation of internal processes",
          ],
        },
      },
      {
        period: { fr: "Fév → Avr 2025", en: "Feb → Apr 2025" },
        org: "Freelance — Deliveroo & Uber Eats",
        role: { fr: "Data Analyst BI", en: "BI Data Analyst" },
        place: "Paris",
        impact: { fr: "+15% de chiffre d'affaires", en: "+15% revenue" },
        bullets: {
          fr: [
            "Collecte, nettoyage et transformation (ETL) des données de livraison",
            "Analyse et recommandations stratégiques aux équipes commerciales",
          ],
          en: [
            "Collection, cleaning and transformation (ETL) of delivery data",
            "Strategic analysis and recommendations to sales teams",
          ],
        },
      },
      {
        period: { fr: "2024", en: "2024" },
        org: "ENGIE",
        role: { fr: "Analyste Data / NLP", en: "Data / NLP Analyst" },
        place: "Paris",
        bullets: {
          fr: [
            "Analyse de tweets clients par NLP : sentiments et KPI satisfaction",
            "Dashboards Power BI avec gestion des droits d'accès",
            "Outils : Python, Pandas, SQL, Power BI, TensorFlow",
          ],
          en: [
            "NLP analysis of customer tweets: sentiment and satisfaction KPIs",
            "Power BI dashboards with access-rights management",
            "Tools: Python, Pandas, SQL, Power BI, TensorFlow",
          ],
        },
      },
    ],
  },

  projects: {
    sectionLabel: { fr: "Réalisations", en: "Work" },
    title: { fr: "Des projets", en: "Real" },
    titleEmph: { fr: "concrets", en: "case studies" },
    intro: {
      fr: "Chaque projet répond au besoin réel d'une entreprise cible. Données vraies, enjeux métiers, livrables déployés en ligne.",
      en: "Each project answers a target company's real need. Real data, business stakes, deliverables shipped online.",
    },
    items: [
      {
        id: "km",
        name: { fr: "KM Platform", en: "KM Platform" },
        kind: { fr: "Monitoring IoT Industriel", en: "Industrial IoT Monitoring" },
        target: { fr: "Safran Aircraft · ENGIE · Industrie", en: "Safran Aircraft · ENGIE · Industry" },
        desc: {
          fr: "Surveillance temps réel de machines industrielles : alertes automatiques, dashboards dynamiques, détection d'anomalies pour la maintenance prédictive.",
          en: "Real-time monitoring of industrial machines: automatic alerts, dynamic dashboards, anomaly detection for predictive maintenance.",
        },
        tags: ["IoT", "Temps réel", "Détection d'anomalies", "Python", "Dashboard"],
        metric: { value: "24/7", label: { fr: "monitoring", en: "monitoring" } },
        url: "https://km-monitoring.netlify.app/",
      },
      {
        id: "suez",
        name: { fr: "SUEZ — ML Prédictif", en: "SUEZ — Predictive ML" },
        kind: { fr: "ML supervisé + IA Générative", en: "Supervised ML + Generative AI" },
        target: { fr: "Veolia · Safran · ENGIE · Industrie", en: "Veolia · Safran · ENGIE · Industry" },
        desc: {
          fr: "Optimisation des paramètres physico-chimiques via ML (XGBoost, Random Forest). GenAI pour le reporting intelligent et dashboards de coûts réactifs.",
          en: "Optimisation of physico-chemical parameters via ML (XGBoost, Random Forest). GenAI for smart reporting and reactive-cost dashboards.",
        },
        tags: ["ML prédictif", "GenAI", "XGBoost", "Optimisation", "Scikit-learn"],
        metric: { value: "GenAI", label: { fr: "reporting", en: "reporting" } },
        url: "https://suez-case.netlify.app/",
      },
      {
        id: "laposte",
        name: { fr: "La Poste — Prévision IA", en: "La Poste — AI Forecasting" },
        kind: { fr: "Prévision IA + KPI logistique", en: "AI Forecasting + Logistics KPIs" },
        target: { fr: "La Banque Postale · Logistique · Retail", en: "La Banque Postale · Logistics · Retail" },
        desc: {
          fr: "Prévision de la saturation des relais et lockers pour réduire retours et km à vide. KPI out-of-home, conformité NPS, dashboards temps réel.",
          en: "Forecasting pickup-point and locker saturation to cut returns and empty mileage. Out-of-home KPIs, NPS compliance, real-time dashboards.",
        },
        tags: ["Prévision IA", "Logistique", "NPS", "KPI opérationnels"],
        metric: { value: "OOH", label: { fr: "optimisation réseau", en: "network optimisation" } },
        url: "https://groupe-la-poste.netlify.app/",
      },
      {
        id: "etam",
        name: { fr: "Etam Strategic", en: "Etam Strategic" },
        kind: { fr: "BI & modélisation ROI", en: "BI & ROI modelling" },
        target: { fr: "Retail · Finance · Safran E&D", en: "Retail · Finance · Safran E&D" },
        desc: {
          fr: "Case study BI complet : analyse marché, segmentation client, roadmap 12 mois et modélisation ROI. Résultat : +15% de CA projeté.",
          en: "Full BI case study: market analysis, customer segmentation, 12-month roadmap and ROI modelling. Outcome: +15% projected revenue.",
        },
        tags: ["Business Intelligence", "Power BI", "Segmentation", "SQL", "ROI"],
        metric: { value: "+15%", label: { fr: "CA projeté", en: "projected revenue" } },
        url: "https://etam-strategic.netlify.app",
      },
      {
        id: "pwc",
        name: { fr: "PwC — Data Quality", en: "PwC — Data Quality" },
        kind: { fr: "Plateforme de gouvernance data", en: "Data governance platform" },
        target: { fr: "Finance · CNP Assurances · Audit", en: "Finance · CNP Assurances · Audit" },
        desc: {
          fr: "Contrôle qualité de la donnée inspiré des standards PwC : conformité, détection d'incohérences, scoring de fiabilité des datasets.",
          en: "Data quality control inspired by PwC standards: compliance, inconsistency detection, dataset reliability scoring.",
        },
        tags: ["Data Quality", "Gouvernance", "Scoring", "Audit", "Python"],
        metric: { value: "Scoring", label: { fr: "fiabilité data", en: "data reliability" } },
        url: "https://pwc-data-quality-platform.netlify.app/profile",
      },
    ],
    upcoming: {
      label: { fr: "En cours de développement", en: "In development" },
      name: { fr: "Agents IA — Modèles Mécaniques", en: "AI Agents — Mechanical Models" },
      desc: {
        fr: "Agents IA (LangChain / RAG) pour convertir des modèles d'ingénierie en modèles IA exploitables. Inspiré des besoins du secteur aéronautique.",
        en: "AI agents (LangChain / RAG) to convert engineering models into usable AI models. Inspired by aerospace needs.",
      },
      tags: ["LangChain", "Agents IA", "RAG", "LLM", "Aéronautique"],
    },
  },

  vision: {
    sectionLabel: { fr: "Vision & objectifs", en: "Vision & goals" },
    title: { fr: "Ma vision de", en: "My vision of" },
    titleEmph: { fr: "l'IA", en: "AI" },
    lead: {
      fr: "L'intelligence artificielle ne remplace pas l'humain — elle amplifie sa capacité à comprendre, décider et créer de la valeur. Ma mission : construire des ponts entre la donnée brute et l'intelligence actionnable.",
      en: "Artificial intelligence doesn't replace humans — it amplifies our ability to understand, decide and create value. My mission: building bridges between raw data and actionable intelligence.",
    },
    principles: [
      {
        n: "01",
        title: { fr: "L'IA au service du business", en: "AI in service of business" },
        body: {
          fr: "Un modèle ML sans impact métier n'est qu'un exercice. Je pars toujours du problème : quel levier, quel gain mesurable ? Un bon Data Scientist est d'abord un bon traducteur entre technique et stratégie.",
          en: "An ML model with no business impact is just an exercise. I always start from the problem: which lever, which measurable gain? A good Data Scientist is first a good translator between tech and strategy.",
        },
        tags: ["ROI mesurable", "Décision data-driven", "Alignement métier"],
      },
      {
        n: "02",
        title: { fr: "Profil hybride : ma différence", en: "Hybrid profile: my edge" },
        body: {
          fr: "Je ne veux pas être enfermé dans du code. Je veux comprendre les équipes commerciales, les contraintes opérationnelles, les enjeux financiers — et revenir au modèle avec cette vision. Le Data Scientist qui comprend le business est rare.",
          en: "I don't want to be locked inside code. I want to understand sales teams, operational constraints, financial stakes — and bring that vision back to the model. A Data Scientist who understands business is rare.",
        },
        tags: ["Data + Business", "Vision 360°", "Polyvalence"],
      },
      {
        n: "03",
        title: { fr: "Monter sur les LLM & GenAI", en: "Scaling up on LLMs & GenAI" },
        body: {
          fr: "Les LLM, le RAG, les agents IA autonomes : la prochaine frontière. Objectif Master : passer du « faire du ML » au « concevoir des systèmes IA complets, déployés, maintenables et alignés sur des objectifs business ».",
          en: "LLMs, RAG, autonomous AI agents: the next frontier. Master goal: moving from \"doing ML\" to \"designing complete AI systems — deployed, maintainable and aligned with business goals\".",
        },
        tags: ["LLM", "Agents IA", "RAG", "Cloud"],
      },
    ],
    quote: {
      fr: "La donnée raconte une histoire. Mon rôle : la comprendre, la traduire, et la transformer en décision.",
      en: "Data tells a story. My role: to understand it, translate it, and turn it into decision.",
    },
  },

  contact: {
    sectionLabel: { fr: "Contact", en: "Contact" },
    title: { fr: "On se", en: "Let's" },
    titleEmph: { fr: "parle ?", en: "talk?" },
    body: {
      fr: "Disponible pour une alternance à partir de septembre 2026, en Île-de-France. Rythme : 2 semaines entreprise / 1 semaine école.",
      en: "Available for an apprenticeship from September 2026, in the Paris region. Rhythm: 2 weeks company / 1 week school.",
    },
    phone: "+33 6 62 05 00 42",
    phoneRaw: "+33662050042",
    email: "firasbourguibaf@gmail.com",
    linkedin: "https://linkedin.com/in/bourguiba-firas-a0453428r",
    links: {
      fr: { cta: "Écrire un message", linkedin: "LinkedIn", call: "Appeler" },
      en: { cta: "Send a message", linkedin: "LinkedIn", call: "Call" },
    },
  },

  ui: {
    viewProject: { fr: "Voir le projet", en: "View project" },
    soon: { fr: "Bientôt disponible", en: "Coming soon" },
    reorganised: { fr: "Contenu réorganisé pour ce poste", en: "Content reordered for this role" },
  },
};
