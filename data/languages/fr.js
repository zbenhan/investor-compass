// French language file
const translations = {
    site: {
        title: "Boussole d'Investissement",
        description: "Testez votre style d'investissement pour comprendre à quelle école d'investissement vous appartenez"
    },
    nav: {
        home: "Accueil",
        test: "Commencer le test",
        articles: "Connaissances sur les investissements"
    },
    language: {
        zh: "中文",
        en: "English",
        fr: "Français",
        es: "Español"
    },
    home: {
        heroTitle: "Boussole d'Investissement",
        heroSubtitle: "Testez votre style d'investissement pour comprendre à quelle école d'investissement vous appartenez",
        startButton: "Commencer le test",
        about: "À propos de nous",
        aboutContent: "Boussole d'Investissement est une plateforme professionnelle de test de style d'investissement qui aide les investisseurs à comprendre leurs préférences et leurs styles d'investissement grâce à des questions de test scientifiques, développant ainsi des stratégies d'investissement plus appropriées.",
        schools: "Écoles d'investissement",
        schoolsValue: "École de Valeur/Fondamentale",
        schoolsValueDesc: "Se concentrant sur la valeur intrinsèque des actifs, effectuant des recherches approfondies sur les finances des entreprises, les modèles commerciaux et les fossés, et détenant de manière à long terme des actifs de haute qualité.",
        schoolsTrend: "École de Tendance/Technique",
        schoolsTrendDesc: "Suivant les tendances du marché, capturant les opportunités d'investissement provenant des fluctuations des prix par le biais de l'analyse graphique, des indicateurs techniques et des systèmes de trading.",
        schoolsMacro: "École Macro/Cyclique",
        schoolsMacroDesc: "Allouant différentes classes d'actifs en fonction des cycles économiques macro et des environnements politiques, saisissant les opportunités d'investissement apportées par les transitions des cycles économiques.",
        schoolsNarrative: "École d'Information/Narration",
        schoolsNarrativeDesc: "Se concentrant sur le sentiment du marché et la communication narrative, obtenant des rendements excessifs en capturant et en vérifiant rapidement de nouvelles histoires d'investissement."
    },
    test: {
        title: "Test de style d'investissement",
        progress: "Progression du test",
        question: "Question",
        prevButton: "Question précédente",
        nextButton: "Question suivante",
        submitButton: "Soumettre le test",
        selectOption: "Veuillez sélectionner une option avant de continuer !",
        completeAll: "Veuillez terminer toutes les questions avant de soumettre !"
    },
    schools: {
        value: {
            name: "École de la Valeur/Fondamentale",
            core: "Se concentrer sur la valeur intrinsèque, rechercher des actifs de qualité sous-évalués",
            introduction: "L'investissement en valeur est une philosophie d'investissement classique qui met l'accent sur l'achat d'actifs de qualité à des prix inférieurs à leur valeur intrinsèque et leur détention à long terme. Ce style nécessite des investisseurs qui ont des capacités d'analyse financière approfondies, capables d'identifier la vraie valeur et le potentiel de croissance à long terme des entreprises. Les investisseurs en valeur se concentrent généralement sur des indicateurs de valorisation tels que le ratio P/E et le ratio P/B, à la recherche d'opportunités sous-évaluées par le marché.",
            strengths: [
                "Se concentrer sur la valeur à long terme, éviter les perturbations des fluctuations à court terme",
                "Basé sur une recherche fondamentale solide, décisions plus robustes",
                "Utiliser les fluctuations de l' sentiment du marché pour créer des opportunités d'achat",
                "S'intéresser à la compétitivité à long terme des entreprises et à leurs fossés stratégiques"
            ],
            weaknesses: [
                "Peut manquer les tendances à court terme et les opportunités chaudes du marché",
                "Cycle de recherche long, nécessite beaucoup de temps et de connaissances professionnelles",
                "Peut subir une pression plus forte pendant une irrationalité prolongée du marché",
                "Difficile à évaluer les industries émergentes et les entreprises non rentables"
            ],
            notes: [
                "Éviter la sur-diversification ou la sur-concentration des positions",
                "Réévaluer régulièrement les changements des fondamentaux des entreprises",
                "Être vigilant contre les pièges de la valeur, distinguer l'undervaluation temporaire de la déclin permanente",
                "Maintenir une marge de sécurité suffisante"
            ],
            improvement: [
                "Renforcer la compréhension des nouvelles technologies et des industries émergentes",
                "Apprendre une analyse technique appropriée pour aider à juger le moment d'achat",
                "Prêter attention aux changements de direction et aux ajustements stratégiques des entreprises",
                "Établir des modèles de valorisation et des processus de décision plus systématiques"
            ]
        },
        trend: {
            name: "École de la Tendance/Technique",
            core: "Suivre les tendances du marché, utiliser l'analyse technique pour formuler des stratégies de trading",
            introduction: "L'investissement tendanciel est une stratégie de trading basée sur les tendances du marché, identifiant la direction et la force des mouvements de prix grâce à l'analyse technique. Les investisseurs tendanciels croient que 'la tendance est votre ami' et suivront les tendances principales du marché pour trader, tout en définissant des niveaux de stop-loss stricts pour contrôler le risque. Ce style nécessite des investisseurs qui ont une bonne sensibilité au marché et une discipline.",
            strengths: [
                "Peut répondre rapidement aux changements du marché, capturer des opportunités à court terme",
                "Règles claires d'entrée et de stop-loss, risque contrôlable",
                "Adapté à divers environnements de marché, y compris les marchés baissiers",
                "Ne nécessite pas de recherche approfondie sur les fondamentaux des entreprises"
            ],
            weaknesses: [
                "Facilement perturbé par le bruit du marché et les fausses ruptures",
                "Performance médiocre dans les marchés oscillants latéraux",
                "Retours composés à long terme peuvent être inférieurs à l'investissement en valeur",
                "Nécessite une discipline stricte pour surmonter les biais psychologiques"
            ],
            notes: [
                "Éviter le surtrading, contrôler les coûts de transaction",
                "Utiliser plusieurs indicateurs techniques pour se vérifier mutuellement, réduire les faux signaux",
                "Définir des niveaux de stop-loss raisonnables pour éviter des pertes significatives",
                "Ne pas trop dépendre d'une seule méthode d'analyse technique"
            ],
            improvement: [
                "Apprendre l'analyse fondamentale pour aider à juger la durabilité des tendances",
                "Optimiser les systèmes de trading, réduire le taux de victoire mais améliorer le rapport profit-perte",
                "Cultiver la patience, attendre des signaux de trading à haute certitude",
                "Enregistrer des journaux de trading, résumer les expériences et les leçons"
            ]
        },
        macro: {
            name: "École Macro/Cyclique",
            core: "Formuler des stratégies d'investissement basées sur les cycles économiques macro et les changements de politique",
            introduction: "L'investissement macro est une approche d'investissement descendante qui analyse d'abord l'environnement économique macro, les tendances politiques et les cycles du marché, puis sélectionne les classes d'actifs et les industries appropriées. Les investisseurs macro prêtent attention à des indicateurs macro tels que la croissance du PIB, l'inflation et les changements de taux d'intérêt, essayant de saisir les grandes tendances du marché et les opportunités d'allocation d'actifs.",
            strengths: [
                "Capable de saisir les grands cycles et tendances du marché",
                "A une significance directive macro pour l'allocation des actifs",
                "Avantages évidents pendant les périodes de transformation économique",
                "Adapté aux grands fonds et à l'allocation d'actifs à long terme"
            ],
            weaknesses: [
                "Prévision macro difficile, faible précision",
                "Attention insuffisante aux situations micro-entreprises",
                "Peut manquer des opportunités structurelles",
                "Nécessite un cycle d'investissement plus long"
            ],
            notes: [
                "Éviter la surconfiance, maintenir la diversification des risques",
                "Prêter attention à plusieurs indicateurs macro, éviter la décision à facteur unique",
                "Combiner l'analyse industrielle et la recherche sur les entreprises",
                "Mettre à jour régulièrement les modèles macroéconomiques"
            ],
            improvement: [
                "Apprendre l'analyse industrielle, approfondir la compréhension des chaînes d'approvisionnement",
                "Combiner l'analyse technique pour juger le moment précis des points de retournement des cycles",
                "Prêter attention aux interactions macroéconomiques mondiales",
                "Cultiver la sensibilité aux changements politiques"
            ]
        },
        narrative: {
            name: "École de l'Information/Récit",
            core: "Se concentrer sur le sentiment du marché et la diffusion des récits, capturer les points chauds du marché et les opportunités d'investissement thématiques",
            introduction: "L'investissement par récit d'information se concentre sur l'impact du sentiment du marché, des événements d'actualité et des histoires thématiques sur les prix des actifs. Les investisseurs de ce style sont bons à capturer les points chauds du marché et les tendances émergentes, à la recherche d'opportunités d'investissement en analysant la diffusion de l'information et les réactions du marché. L'investissement par récit d'information nécessite des investisseurs qui ont la capacité d'obtenir et d'analyser rapidement l'information, tout en étant vigilants contre les bulles du marché et la spéculation excessive.",
            strengths: [
                "Peut rapidement saisir les points chauds du marché et les tendances émergentes",
                "Sensible aux changements de sentiment du marché",
                "Adapté aux investissements dans les industries émergentes et les domaines innovants",
                "Grand potentiel de rendement à court terme"
            ],
            weaknesses: [
                "Facilement tomber dans les bulles et la spéculation excessive",
                "Manque de support fondamental solide",
                "Surabondance d'informations, difficile de distinguer le vrai du faux",
                "Risques élevés de détention à long terme"
            ],
            notes: [
                "Éviter de courir après les prix élevés, établir des règles strictes de stop-profit et stop-loss",
                "Vérifier la fiabilité des sources d'information",
                "Prêter attention à la durabilité et à la capacité de réalisation des récits",
                "Contrôler les positions, éviter la sur-concentration"
            ],
            improvement: [
                "Apprendre l'analyse fondamentale, évaluer la rationalité des récits",
                "Établir des mécanismes de filtrage et de vérification des informations",
                "Cultiver la capacité de jugement indépendant, éviter de suivre le troupeau",
                "Combiner l'analyse technique pour juger les points de retournement du sentiment du marché"
            ]
        }
    },
    result: {
        title: "Résultats du test de style d'investissement",
        yourSchool: "Votre style d'investissement :",
        radarChart: "Diagramme radar du style d'investissement",
        strengths: "Analyse des forces",
        weaknesses: "Analyse des faiblesses",
        notes: "Notes",
        improvement: "Chemin d'amélioration future",
        styleIntro: "Votre style d'investissement s'incarne principalement en tant que {name}, {core}. {introduction} Comprendre votre style d'investissement aide à formuler une stratégie d'investissement plus adaptée à vous-même, à exercer vos forces, à éviter les risques et à atteindre vos objectifs d'investissement à long terme. Vous avez également des performances différentes dans d'autres styles, ce qui reflète la diversité et la flexibilité de votre philosophie d'investissement.",
        actionText: "Vous pouvez copier et partager l'URL avec plus d'amis pour les aider à comprendre leurs styles d'investissement. Vous pouvez également télécharger les résultats du test pour référence future.",
        shareText: "Vous pouvez copier et partager l'URL avec plus d'amis pour les aider à comprendre leurs styles d'investissement.",
        downloadText: "Vous pouvez télécharger les résultats du test pour référence future.",
        copyUrl: "Copier l'URL",
        downloadResult: "Télécharger les résultats",
        backHome: "Retour à l'accueil",
        viewArticles: "Voir les articles",
        copySuccess: "URL copiée dans le presse-papiers !",
        copyFailed: "Échec de la copie. Veuillez copier l'URL manuellement :",
        downloadFailed: "Échec du téléchargement. Veuillez réessayer !",
        noResults: "Veuillez d'abord terminer le test !"
    },
    articles: {
        title: "Connaissances sur les investissements",
        category: "Catégorie",
        recent: "Articles récents",
        popular: "Articles populaires",
        basic: "Articles de base"
    },
    terms: {
        title: "Conditions d'utilisation",
        intro: "Bienvenue sur Boussole d'Investissement (ci-après dénommée \"nous\" ou \"le site\") . Veuillez lire attentivement les conditions d'utilisation ci-dessous. Votre utilisation de nos services sera considérée comme une acceptation de ces conditions.",
        section1: "1. Contenu du service",
        content1: "Boussole d'Investissement est une plateforme de test de style d'investissement qui propose aux utilisateurs des services tels que des tests de style d'investissement et la lecture d'articles sur les connaissances en investissement.",
        section2: "2. Droits et obligations des utilisateurs",
        right1: "Les utilisateurs ont le droit d'utiliser librement les services de test fournis par le site et de consulter les articles sur les connaissances en investissement.",
        right2: "Les utilisateurs doivent respecter les lois et règlements et ne pas utiliser le site pour toute activité illégale.",
        right3: "Les utilisateurs doivent respecter les droits de propriété intellectuelle et ne pas copier, diffuser ou modifier le contenu du site.",
        right4: "Les utilisateurs doivent protéger la sécurité de leur compte et contacter immédiatement nous en cas d'anomalie du compte.",
        section3: "3. Droits et obligations du site",
        obligation1: "Le site a le droit d'ajuster le contenu et les fonctions du service selon les besoins.",
        obligation2: "Le site a l'obligation de protéger la vie privée et la sécurité des informations personnelles des utilisateurs.",
        obligation3: "Le site a le droit de supprimer le contenu qui viole les lois et règlements ou les conditions d'utilisation.",
        obligation4: "Le site a l'obligation de fournir un service stable, mais ne garantit pas que le service est absolument exempt de pannes.",
        section4: "4. Protection des droits de propriété intellectuelle",
        ip: "Tout le contenu du site, y compris mais sans s'y limiter au texte, aux images, à l'audio, à la vidéo, aux graphiques, au design, etc., est protégé par le droit de la propriété intellectuelle. Nul ne peut le copier, modifier, diffuser ou l'utiliser à des fins commerciales sans autorisation.",
        section5: "5. Avertissement de non-responsabilité",
        disclaimer: "Les connaissances en investissement et les résultats des tests fournis par le site ne sont que des références et ne constituent pas un conseil en investissement. Les utilisateurs doivent assumer leurs propres risques d'investissement, et le site ne sera pas responsable des pertes causées par l'utilisation du contenu du site.",
        section6: "6. Modifications des conditions d'utilisation",
        changes: "Nous pouvons mettre à jour ces conditions d'utilisation de temps à autre. Les conditions mises à jour seront publiées sur le site. Les utilisateurs doivent vérifier régulièrement les modifications des conditions d'utilisation. La poursuite de l'utilisation des services du site sera considérée comme une acceptation des conditions mises à jour.",
        section7: "7. Application de la loi et résolution des litiges",
        law: "L'interprétation et l'application de ces conditions d'utilisation sont régies par les lois de la République populaire de Chine. En cas de litige, les deux parties doivent d'abord tenter de le résoudre par une négociation amicale ; si la négociation échoue, l'une ou l'autre partie peut intenter une action en justice devant le tribunal populaire compétent.",
        section8: "8. Coordonnées",
        contact: "Si vous avez des questions sur ces conditions d'utilisation, veuillez nous contacter par les moyens suivants :"
    },
    about: {
        title: "À propos de nous",
        intro: "Boussole d'Investissement est une plateforme professionnelle de test de style d'investissement et de partage de connaissances sur les investissements, dédiée à aider les investisseurs à mieux comprendre leurs styles d'investissement et à améliorer leurs compétences en prise de décision.",
        mission: "Notre mission",
        missionContent: "Notre mission est d'aider les investisseurs à reconnaître leurs préférences et leurs caractéristiques de style d'investissement grâce à des méthodes de test scientifiques et des connaissances professionnelles sur les investissements, formulant ainsi des stratégies d'investissement plus adaptées et atteignant des rendements stables à long terme.",
        vision: "Notre vision",
        visionContent: "Devenir la plateforme de test de style d'investissement et d'éducation la plus fiable pour les investisseurs, offrant des conseils d'investissement personnalisés et professionnels pour aider les investisseurs à prendre des décisions éclairées dans des environnements de marché complexes.",
        team: "Présentation de l'équipe",
        teamContent: "Notre équipe est composée d'un groupe de professionnels qui aiment les investissements et ont une riche expérience dans l'industrie financière, y compris des analystes financiers, des conseillers financiers, des scientifiques des données et des designers d'expérience utilisateur. Nous nous engageons à présenter des connaissances professionnelles sur les investissements d'une manière facile à comprendre pour aider les investisseurs à améliorer leurs capacités d'investissement.",
        values: "Valeurs fondamentales",
        value1: "Professionnalisme : Nous adhérons à une attitude et à des méthodes professionnelles pour fournir des services aux investisseurs.",
        value2: "Objectivité : Nous maintenons une position objective et neutre et ne recommandons pas de produits d'investissement spécifiques.",
        value3: "Praticalité : Nous nous concentrons sur la praticité du contenu pour aider les investisseurs à résoudre des problèmes réels.",
        value4: "Innovation : Nous innovons constamment nos modèles de service et nos formes de contenu pour améliorer l'expérience utilisateur.",
        contact: "Informations de contact",
        contactInfo: "Si vous avez des commentaires ou des suggestions sur notre plateforme, n'hésitez pas à nous contacter par les moyens suivants :"
    },
    privacy: {
        title: "Politique de confidentialité",
        intro: "Boussole d'Investissement (ci-après dénommée \"nous\") attache une grande importance à la protection de la vie privée des utilisateurs. Nous collecterons, utilisons, stockerons et divulguerons vos informations personnelles conformément aux dispositions de cette politique de confidentialité.",
        section1: "1. Informations que nous collectons",
        content1: "Lorsque vous utilisez nos services, nous pouvons collecter les informations suivantes :",
        info1: "Vos réponses et résultats de test",
        info2: "Votre type de navigateur et sa version",
        info3: "Votre adresse IP",
        info4: "Vos préférences linguistiques",
        section2: "2. Comment nous utilisons vos informations",
        content2: "Les informations que nous collectons seront utilisées aux fins suivantes :",
        use1: "Fournir et améliorer nos services",
        use2: "Enregistrer votre progression et vos résultats de test",
        use3: "Personnaliser votre expérience utilisateur",
        use4: "Analyser et faire des statistiques sur le comportement des utilisateurs",
        section3: "3. Stockage et protection des informations",
        protect1: "Nous prendrons des mesures de sécurité raisonnables pour protéger vos informations personnelles afin de prévenir la perte, l'abus ou l'accès non autorisé, la divulgation, la modification et la destruction des informations.",
        protect2: "Vos réponses et résultats de test seront stockés dans le localStorage de votre navigateur, et nous ne téléchargerons pas ces informations sur le serveur.",
        section4: "4. Partage d'informations",
        content4: "Nous ne vendrons, ne louerons pas ni ne partagerons vos informations personnelles avec des tiers, sauf :",
        share1: "Vous avez expressément consenti",
        share2: "La loi nous oblige à le faire",
        share3: "Pour protéger nos droits, notre propriété ou notre sécurité",
        section5: "5. Modifications de la politique de confidentialité",
        changes: "Nous pouvons mettre à jour cette politique de confidentialité de temps à autre, et nous vous informerons par des annonces sur le site web ou d'autres moyens appropriés.",
        section6: "6. Informations de contact",
        contact: "Si vous avez des questions sur cette politique de confidentialité, veuillez nous contacter par les moyens suivants :",
        email: "Email : zbenhan0123@gmail.com"
    },
    footer: {
        contact: "Informations de contact",
        email: "Email",
        links: "Liens d'amitié",
        legal: "Déclaration légale",
        privacy: "Politique de confidentialité",
        terms: "Conditions d'utilisation",
        about: "À propos du site web",
        copyright: "© 2025 Boussole d'Investissement - A-share.com. Tous droits réservés."
    }
};