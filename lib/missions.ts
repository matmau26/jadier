export type MissionCategory = {
  id: string;
  title: string;
  items: { label: string; desc: string }[];
  cta?: { label: string; href: string };
};

export const missionCategories: MissionCategory[] = [
  {
    id: "creation",
    title: "Création d'entreprise",
    items: [
      {
        label: "Choix du statut (SAS/SARL/EI…)",
        desc: "Analyse de votre projet pour déterminer la structure juridique la plus adaptée (SAS, SARL, EI…), en fonction de votre activité, fiscalité et objectifs.",
      },
      {
        label: "Prévisionnel",
        desc: "Construction d'un prévisionnel financier (CA, charges, rentabilité) pour valider la viabilité du projet et convaincre partenaires ou financeurs.",
      },
      {
        label: "Immatriculation",
        desc: "Prise en charge des formalités administratives pour créer officiellement votre entreprise rapidement et sans erreur.",
      },
      {
        label: "Accompagnement financement",
        desc: "Aide à identifier et obtenir des financements (prêts, subventions, investisseurs) adaptés à votre projet.",
      },
      {
        label: "Aides (ACRE/ARCE…)",
        desc: "Optimisation et obtention des aides disponibles pour réduire vos charges et sécuriser votre lancement.",
      },
    ],
    cta: { label: "Créons votre entreprise", href: "/contact" },
  },
  {
    id: "comptabilite",
    title: "Comptabilité & Gestion",
    items: [
      {
        label: "Tenue comptable",
        desc: "Saisie et suivi rigoureux de vos opérations pour une comptabilité fiable, conforme et à jour.",
      },
      {
        label: "Révision",
        desc: "Vérification et sécurisation de vos comptes afin de garantir leur exactitude et anticiper les risques.",
      },
      {
        label: "Situations intermédiaires",
        desc: "Production de bilans réguliers pour suivre votre performance et piloter votre activité en temps réel.",
      },
      {
        label: "Bilan / Comptes annuels",
        desc: "Établissement des comptes annuels et des documents obligatoires dans le respect des normes.",
      },
      {
        label: "Tableaux de bord",
        desc: "Mise en place d'indicateurs clés pour analyser votre activité et faciliter la prise de décision.",
      },
    ],
  },
  {
    id: "social",
    title: "Social – Paie – RH",
    items: [
      {
        label: "Bulletins de paie",
        desc: "Établissement de fiches de paie conformes à la législation, avec gestion complète des variables et obligations sociales.",
      },
      {
        label: "DSN / déclarations sociales",
        desc: "Production et transmission sécurisée des déclarations sociales (DSN) pour assurer votre conformité réglementaire.",
      },
      {
        label: "Situations intermédiaires",
        desc: "Suivi régulier de votre masse salariale et analyse des coûts pour piloter vos ressources humaines.",
      },
      {
        label: "Bilan / Comptes annuels",
        desc: "Intégration des données sociales dans vos comptes pour une vision globale et cohérente de votre activité.",
      },
      {
        label: "Tableaux de bord",
        desc: "Mise en place d'indicateurs RH (coûts, effectifs, turnover) pour optimiser la gestion de vos équipes.",
      },
    ],
  },
  {
    id: "fiscalite",
    title: "Fiscalité",
    items: [
      {
        label: "TVA",
        desc: "Gestion et déclaration de votre TVA (collectée, déductible), avec suivi précis pour sécuriser vos obligations fiscales.",
      },
      {
        label: "IS / IR",
        desc: "Calcul et déclaration de l'impôt sur les sociétés ou sur le revenu, en optimisant votre situation fiscale.",
      },
      {
        label: "Liasses fiscales",
        desc: "Établissement et télétransmission des liasses fiscales conformes aux exigences de l'administration.",
      },
      {
        label: "Optimisation fiscale",
        desc: "Conseil stratégique pour réduire votre charge fiscale dans le respect de la réglementation.",
      },
      {
        label: "Assistance contrôle fiscal",
        desc: "Accompagnement en cas de contrôle fiscal, préparation des documents et échanges avec l'administration.",
      },
    ],
  },
  {
    id: "juridique",
    title: "Juridique annuel",
    items: [
      {
        label: "Assemblée générale annuelle",
        desc: "Organisation et accompagnement de votre AG pour valider les comptes et respecter vos obligations légales.",
      },
      {
        label: "Rédaction du procès-verbal",
        desc: "Rédaction des documents officiels retraçant les décisions prises lors de vos assemblées.",
      },
      {
        label: "Dépôt au greffe",
        desc: "Gestion du dépôt de vos comptes et formalités obligatoires auprès du greffe en toute conformité.",
      },
      {
        label: "Modifications statutaires",
        desc: "Accompagnement dans les changements juridiques (statuts, dirigeants, capital) avec gestion complète des formalités.",
      },
    ],
  },
  {
    id: "conseil",
    title: "Conseil & Pilotage",
    items: [
      {
        label: "Analyse rentabilité/marges",
        desc: "Étude de vos marges et coûts pour identifier les leviers d'amélioration de votre rentabilité.",
      },
      {
        label: "Suivi trésorerie",
        desc: "Pilotage de votre trésorerie pour anticiper les besoins et sécuriser votre équilibre financier.",
      },
      {
        label: "Prévisionnels",
        desc: "Élaboration de projections financières pour guider vos décisions et structurer votre développement.",
      },
      {
        label: "Optimisation charges",
        desc: "Analyse et réduction de vos charges afin d'améliorer votre performance globale.",
      },
      {
        label: "Accompagnement stratégique",
        desc: "Conseil sur mesure pour définir vos orientations et accélérer la croissance de votre entreprise.",
      },
    ],
  },
  {
    id: "transmission",
    title: "Transmission & Reprise",
    items: [
      {
        label: "Évaluation d'entreprise",
        desc: "Analyse de la valeur de votre entreprise pour préparer une cession ou une reprise dans les meilleures conditions.",
      },
      {
        label: "Accompagnement cession",
        desc: "Assistance à chaque étape de la vente (négociation, structuration, démarches) pour sécuriser la transaction.",
      },
      {
        label: "Structuration fiscale",
        desc: "Optimisation du montage fiscal afin de réduire l'impact de la cession ou de la reprise.",
      },
      {
        label: "Suivi repreneur",
        desc: "Accompagnement post-reprise pour assurer une transition réussie et pérenniser l'activité.",
      },
    ],
  },
  {
    id: "facturation",
    title: "Facturation Électronique",
    items: [
      {
        label: "Diagnostic de votre organisation actuelle",
        desc: "Analyse de vos processus de facturation pour identifier les axes d'amélioration.",
      },
      {
        label: "Mise en conformité",
        desc: "Vérification et adaptation de vos pratiques pour respecter les obligations légales en vigueur.",
      },
      {
        label: "Paramétrage et déploiement",
        desc: "Configuration des outils et mise en place des solutions adaptées à votre organisation.",
      },
      {
        label: "Mise en place des modèles de factures",
        desc: "Création de modèles respectant toutes les mentions obligatoires.",
      },
      {
        label: "Organisation et automatisation",
        desc: "Optimisation des processus pour gagner en efficacité et réduire les tâches manuelles.",
      },
      {
        label: "Centralisation et archivage",
        desc: "Mise en place de solutions pour stocker et sécuriser vos factures et justificatifs.",
      },
      {
        label: "Accompagnement TVA",
        desc: "Conseil sur la gestion de la TVA et conformité des documents.",
      },
      {
        label: "Formation",
        desc: "Formation du dirigeant et des équipes à l'utilisation des outils.",
      },
      {
        label: "Assistance continue",
        desc: "Support régulier pour accompagner l'évolution de votre organisation.",
      },
      {
        label: "Sécurisation",
        desc: "Mise en place de contrôles pour limiter les erreurs et fiabiliser vos flux.",
      },
    ],
  },
];
