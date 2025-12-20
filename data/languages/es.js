// Spanish language file
const translations = {
    site: {
        title: "Brújula de Inversión",
        description: "Pruebe su estilo de inversión para entender a qué escuela de inversión pertenece"
    },
    nav: {
        home: "Inicio",
        test: "Empezar Prueba",
        articles: "Conocimiento de Inversión"
    },
    language: {
        zh: "中文",
        en: "English",
        fr: "Français",
        es: "Español"
    },
    home: {
        heroTitle: "Brújula de Inversión",
        heroSubtitle: "Pruebe su estilo de inversión para entender a qué escuela de inversión pertenece",
        startButton: "Empezar Prueba",
        about: "Sobre Nosotros",
        aboutContent: "Brújula de Inversión es una plataforma profesional de prueba de estilo de inversión que ayuda a los inversores a comprender sus preferencias y estilos de inversión a través de preguntas de prueba científicas, desarrollando así estrategias de inversión más adecuadas.",
        schools: "Escuelas de Inversión",
        schoolsValue: "Escuela de Valor/Fundamental",
        schoolsValueDesc: "Se enfoca en el valor intrínseco de los activos, realiza investigaciones exhaustivas sobre las finanzas de las empresas, los modelos de negocio y las brechas, y mantiene a largo plazo activos de alta calidad.",
        schoolsTrend: "Escuela de Tendencia/Técnica",
        schoolsTrendDesc: "Sigue las tendencias del mercado, capturando oportunidades de inversión derivadas de las fluctuaciones de precios a través del análisis gráfico, indicadores técnicos y sistemas de trading.",
        schoolsMacro: "Escuela Macro/Cíclica",
        schoolsMacroDesc: "Asigna diferentes clases de activos según los ciclos económicos macro y los entornos políticos, aprovechando las oportunidades de inversión brindadas por las transiciones de los ciclos económicos.",
        schoolsNarrative: "Escuela de Información/Narración",
        schoolsNarrativeDesc: "Se enfoca en el sentimiento del mercado y la comunicación narrativa, obteniendo rendimientos excesivos capturando y verificando rápidamente nuevas historias de inversión."
    },
    test: {
        title: "Prueba de Estilo de Inversión",
        progress: "Progreso de la Prueba",
        question: "Pregunta",
        prevButton: "Pregunta Anterior",
        nextButton: "Pregunta Siguiente",
        submitButton: "Enviar Prueba",
        selectOption: "¡Por favor, seleccione una opción antes de continuar!",
        completeAll: "¡Por favor, complete todas las preguntas antes de enviar!"
    },
    schools: {
        value: {
            name: "Escuela de Valor/Fundamental",
            core: "Centrarse en el valor intrínseco, buscar activos de calidad infravalorados",
            introduction: "La inversión por valor es una filosofía de inversión clásica que hace hincapié en comprar activos de calidad a precios inferiores a su valor intrínseco y retenerlos a largo plazo. Este estilo requiere inversionistas que tengan capacidades de análisis financiero profundas, capaces de identificar el verdadero valor y el potencial de crecimiento a largo plazo de las empresas. Los inversionistas por valor generalmente se centran en indicadores de valoración como el ratio P/E y el ratio P/B, buscando oportunidades infravaloradas por el mercado.",
            strengths: [
                "Centrarse en el valor a largo plazo, evitar interferencias de fluctuaciones a corto plazo",
                "Basado en una investigación fundamental sólida, decisiones más robustas",
                "Utilizar fluctuaciones del sentimiento del mercado para crear oportunidades de compra",
                "Preocuparse por la competitividad a largo plazo de las empresas y sus fosos estratégicos"
            ],
            weaknesses: [
                "Puede perderse tendencias a corto plazo y oportunidades calientes del mercado",
                "Ciclo de investigación largo, requiere mucho tiempo y conocimiento profesional",
                "Puede soportar una presión mayor durante una irracionalidad prolongada del mercado",
                "Difícil de evaluar industrias emergentes y empresas no rentables"
            ],
            notes: [
                "Evitar la sobrediversificación o sobreconcentración de posiciones",
                "Reevaluar regularmente los cambios en los fundamentos empresariales",
                "Estar atento a las trampas de valor, distinguir entre infravaloración temporal y declive permanente",
                "Mantener un margen de seguridad suficiente"
            ],
            improvement: [
                "Fortalecer la comprensión de nuevas tecnologías e industrias emergentes",
                "Aprender análisis técnico apropiado para ayudar a juzgar el momento de compra",
                "Prestar atención a cambios en la dirección y ajustes estratégicos de empresas",
                "Establecer modelos de valoración y procesos de decisión más sistemáticos"
            ]
        },
        trend: {
            name: "Escuela de Tendencia/Técnica",
            core: "Seguir tendencias del mercado, usar análisis técnico para formular estrategias de trading",
            introduction: "La inversión por tendencia es una estrategia de trading basada en tendencias del mercado, identificando la dirección y la fuerza de los movimientos de precios a través del análisis técnico. Los inversionistas por tendencia creen que 'la tendencia es tu amigo' y seguirán las tendencias principales del mercado para operar, al mismo tiempo que establecen niveles estrictos de stop-loss para controlar el riesgo. Este estilo requiere inversionistas que tengan una buena sensibilidad al mercado y disciplina.",
            strengths: [
                "Puede responder rápidamente a cambios del mercado, capturar oportunidades a corto plazo",
                "Reglas claras de entrada y stop-loss, riesgo controlable",
                "Adecuado para diversos entornos de mercado, incluyendo mercados bajistas",
                "No requiere investigación profunda en fundamentos empresariales"
            ],
            weaknesses: [
                "Fácilmente perturbado por ruido del mercado y falsas rupturas",
                "Mal desempeño en mercados oscilantes laterales",
                "Los rendimientos compuestos a largo plazo pueden ser inferiores a la inversión por valor",
                "Requiere disciplina estricta para superar sesgos psicológicos"
            ],
            notes: [
                "Evitar el sobretrading, controlar costos de transacción",
                "Usar múltiples indicadores técnicos para validarse mutuamente, reducir señales falsas",
                "Establecer niveles de stop-loss razonables para evitar pérdidas significativas",
                "No depender excesivamente de un solo método de análisis técnico"
            ],
            improvement: [
                "Aprender análisis fundamental para ayudar a juzgar la sostenibilidad de tendencias",
                "Optimizar sistemas de trading, reducir tasa de victoria pero mejorar relación beneficio-pérdida",
                "Cultivar paciencia, esperar señales de trading de alta certeza",
                "Registrar diarios de trading, resumir experiencias y lecciones"
            ]
        },
        macro: {
            name: "Escuela Macro/Cíclica",
            core: "Formular estrategias de inversión basadas en ciclos económicos macro y cambios de política",
            introduction: "La inversión macro es un enfoque de inversión descendente que primero analiza el entorno económico macro, las tendencias políticas y los ciclos del mercado, luego selecciona las clases de activos y sectores apropiados. Los inversionistas macro prestan atención a indicadores macro como el crecimiento del PIB, la inflación y los cambios en las tasas de interés, tratando de capturar grandes tendencias del mercado y oportunidades de asignación de activos.",
            strengths: [
                "Capaz de capturar grandes ciclos y tendencias del mercado",
                "Tiene significado directivo macro para la asignación de activos",
                "Ventajas evidentes durante periodos de transformación económica",
                "Adecuado para grandes fondos y asignación de activos a largo plazo"
            ],
            weaknesses: [
                "Predicción macro difícil, baja precisión",
                "Atención insuficiente a situaciones microempresariales",
                "Puede perderse oportunidades estructurales",
                "Requiere un ciclo de inversión más largo"
            ],
            notes: [
                "Evitar la sobreconfianza, mantener diversificación de riesgos",
                "Prestar atención a múltiples indicadores macro, evitar decisiones de un solo factor",
                "Combinar análisis industrial e investigación empresarial",
                "Actualizar regularmente modelos macroeconómicos"
            ],
            improvement: [
                "Aprender análisis industrial, profundizar comprensión de cadenas de suministro",
                "Combinar análisis técnico para juzgar el momento preciso de inflexión de ciclos",
                "Prestar atención a interacciones macroeconómicas globales",
                "Cultivar sensibilidad a cambios políticos"
            ]
        },
        narrative: {
            name: "Escuela de Información/Narrativa",
            core: "Centrarse en el sentimiento del mercado y la difusión de narrativas, capturar puntos calientes del mercado y oportunidades de inversión temática",
            introduction: "La inversión narrativa de información se centra en el impacto del sentimiento del mercado, los eventos noticiosos y las historias temáticas en los precios de los activos. Los inversionistas de este estilo son buenos para capturar puntos calientes del mercado y tendencias emergentes, buscando oportunidades de inversión al analizar la difusión de información y las reacciones del mercado. La inversión narrativa de información requiere inversionistas que tengan la capacidad de obtener y analizar información rápidamente, al mismo tiempo que están vigilantes contra burbujas del mercado y especulación excesiva.",
            strengths: [
                "Puede capturar rápidamente puntos calientes del mercado y tendencias emergentes",
                "Sensible a cambios en el sentimiento del mercado",
                "Adecuado para inversiones en industrias emergentes y campos innovadores",
                "Gran potencial de rendimiento a corto plazo"
            ],
            weaknesses: [
                "Fácilmente caer en burbujas y especulación excesiva",
                "Falta de apoyo fundamental sólido",
                "Sobrecarga de información, difícil distinguir verdadero de falso",
                "Altos riesgos de tenencia a largo plazo"
            ],
            notes: [
                "Evitar perseguir precios altos, establecer reglas estrictas de stop-profit y stop-loss",
                "Verificar la fiabilidad de fuentes de información",
                "Prestar atención a la sostenibilidad y capacidad de realización de narrativas",
                "Controlar posiciones, evitar sobreconcentración"
            ],
            improvement: [
                "Aprender análisis fundamental, evaluar la racionalidad de narrativas",
                "Establecer mecanismos de filtrado y verificación de información",
                "Cultivar capacidad de juicio independiente, evitar seguir a la manada",
                "Combinar análisis técnico para juzgar puntos de inflexión del sentimiento del mercado"
            ]
        }
    },
    result: {
        title: "Resultados de la Prueba de Estilo de Inversión",
        yourSchool: "Su estilo de inversión: ",
        radarChart: "Gráfico de radar de estilo de inversión",
        strengths: "Análisis de Fortalezas",
        weaknesses: "Análisis de Debilidades",
        notes: "Notas",
        improvement: "Ruta de Mejora Futura",
        styleIntro: "Su estilo de inversión se refleja principalmente como {name}, {core}. {introduction}Comprender su estilo de inversión le ayuda a formular una estrategia de inversión más adecuada, aprovechar sus fortalezas, evitar riesgos y alcanzar metas de inversión a largo plazo. También muestra diversos grados de rendimiento en otros estilos, lo que refleja la diversidad y flexibilidad de su filosofía de inversión.",
        actionText: "Puede copiar y compartir la URL con más amigos para ayudarles a entender su estilo de inversión. Puede descargar este resultado de la prueba para referencia futura.",
        shareText: "Puede copiar y compartir la URL con más amigos para ayudarles a entender su estilo de inversión.",
        downloadText: "Puede descargar este resultado de la prueba para referencia futura.",
        copyUrl: "Copiar URL",
        downloadResult: "Descargar Resultado",
        backHome: "Volver al Inicio",
        viewArticles: "Ver Artículos",
        copySuccess: "¡URL copiada al portapapeles!",
        copyFailed: "Fallo al copiar, por favor copie la URL manualmente: ",
        downloadFailed: "¡Fallo al descargar, por favor inténtelo de nuevo!",
        noResults: "¡Por favor complete la prueba primero!"
    },
    articles: {
        title: "Conocimiento de Inversión",
        category: "Categoría",
        recent: "Artículos Recientes",
        popular: "Artículos Populares",
        basic: "Artículos Básicos"
    },
    about: {
        title: "Sobre Nosotros",
        intro: "Brújula de Inversión es una plataforma profesional de prueba de estilo de inversión y de compartir conocimientos sobre inversiones, dedicada a ayudar a los inversores a comprender mejor sus estilos de inversión y a mejorar sus habilidades de toma de decisiones.",
        mission: "Nuestra Misión",
        missionContent: "Nuestra misión es ayudar a los inversores a reconocer sus preferencias y características de estilo de inversión a través de métodos de prueba científicos y conocimientos profesionales sobre inversiones, formulando así estrategias de inversión más adecuadas y logrando rendimientos estables a largo plazo.",
        vision: "Nuestra Visión",
        visionContent: "Convertirnos en la plataforma de prueba de estilo de inversión y educación más confiable para los inversores, brindando asesoramiento de inversión personalizado y profesional para ayudar a los inversores a tomar decisiones inteligentes en entornos de mercado complejos.",
        team: "Presentación del Equipo",
        teamContent: "Nuestro equipo está compuesto por un grupo de profesionales que aman las inversiones y tienen una rica experiencia en la industria financiera, incluyendo analistas de inversión, asesores financieros, científicos de datos y diseñadores de experiencia de usuario. Nos comprometemos a presentar conocimientos profesionales de inversión de una manera fácil de entender para ayudar a los inversores a mejorar sus capacidades de inversión.",
        values: "Valores Fundamentales",
        value1: "Profesionalismo: Adherimos a una actitud y métodos profesionales para proporcionar servicios a los inversores.",
        value2: "Objetividad: Mantenemos una posición objetiva y neutral y no recomendamos productos de inversión específicos.",
        value3: "Practicidad: Nos enfocamos en la practicidad del contenido para ayudar a los inversores a resolver problemas reales.",
        value4: "Innovación: Constantemente innovamos en modelos de servicio y formas de contenido para mejorar la experiencia del usuario.",
        contact: "Información de Contacto",
        contactInfo: "Si tiene comentarios o sugerencias sobre nuestra plataforma, no dude en contactarnos a través de los siguientes métodos:"
    },
    privacy: {
        title: "Política de Privacidad",
        intro: "Brújula de Inversión (en adelante denominada \"nosotros\") valora la protección de la privacidad de los usuarios. Recolectaremos, usaremos, almacenaremos y divulgaremos su información personal de acuerdo con las disposiciones de esta política de privacidad.",
        section1: "1. Información que Recolectamos",
        content1: "Cuando utilice nuestros servicios, es posible que recopilemos la siguiente información:",
        info1: "Sus respuestas y resultados de la prueba",
        info2: "Su tipo de navegador y su versión",
        info3: "Su dirección IP",
        info4: "Sus preferencias de idioma",
        section2: "2. Cómo Usamos Su Información",
        content2: "La información que recopilamos se utilizará para los siguientes fines:",
        use1: "Proporcionar y mejorar nuestros servicios",
        use2: "Guardar su progreso y resultados de la prueba",
        use3: "Personalizar su experiencia de usuario",
        use4: "Analizar y estadificar el comportamiento de los usuarios",
        section3: "3. Almacenamiento y Protección de la Información",
        protect1: "Tomaremos medidas de seguridad razonables para proteger su información personal y evitar la pérdida, abuso o acceso no autorizado, divulgación, modificación y destrucción de la información.",
        protect2: "Sus respuestas y resultados de la prueba se almacenarán en el localStorage de su navegador, y no subiremos esta información al servidor.",
        section4: "4. Compartir Información",
        content4: "No venderemos, alquilaremos ni compartiremos su información personal con terceros, a menos que:",
        share1: "Usted consienta explícitamente",
        share2: "La ley nos lo requiera",
        share3: "Para proteger nuestros derechos, propiedad o seguridad",
        section5: "5. Cambios en la Política de Privacidad",
        changes: "Es posible que actualicemos esta política de privacidad de vez en cuando, y le notificaremos a través de anuncios en el sitio web u otros medios apropiados.",
        section6: "6. Información de Contacto",
        contact: "Si tiene alguna pregunta sobre esta política de privacidad, póngase en contacto con nosotros a través de los siguientes métodos:",
        email: "Correo electrónico: zbenhan0123@gmail.com"
    },
    terms: {
        title: "Términos de Servicio",
        intro: "Bienvenido a Brújula de Inversión (en adelante denominada \"nosotros\" o \"el sitio web\"). Por favor, lea detenidamente los siguientes términos de servicio, ya que su uso de nuestros servicios se considerará como aceptación de los términos aquí establecidos.",
        section1: "1. Contenido del Servicio",
        content1: "Brújula de Inversión es una plataforma de prueba de estilo de inversión que ofrece servicios como pruebas de estilo de inversión y lectura de artículos sobre conocimientos de inversión.",
        section2: "2. Derechos y Obligaciones del Usuario",
        right1: "El usuario tiene derecho a utilizar libremente los servicios de prueba proporcionados por el sitio web y a navegar por los artículos sobre conocimientos de inversión.",
        right2: "El usuario debe cumplir con las leyes y regulaciones, y no utilizar el sitio web para ninguna actividad ilegal.",
        right3: "El usuario debe respetar los derechos de propiedad intelectual y no reproducir, difundir o modificar el contenido del sitio web.",
        right4: "El usuario debe proteger la seguridad de su cuenta y contactarnos inmediatamente si detecta alguna anomalía en la cuenta.",
        section3: "3. Derechos y Obligaciones del Sitio Web",
        obligation1: "El sitio web tiene derecho a ajustar el contenido y las funciones del servicio según sea necesario.",
        obligation2: "El sitio web tiene la obligación de proteger la privacidad y la seguridad de la información personal del usuario.",
        obligation3: "El sitio web tiene derecho a eliminar contenido que viole las leyes y regulaciones o los términos de servicio.",
        obligation4: "El sitio web tiene la obligación de proporcionar un servicio estable, pero no garantiza que el servicio esté exento de fallos.",
        section4: "4. Protección de Derechos de Propiedad Intelectual",
        ip: "Todo el contenido del sitio web, incluyendo pero no limitado a texto, imágenes, audio, video, gráficos y diseño, está protegido por leyes de propiedad intelectual. Sin autorización, nadie puede reproducir, modificar, difundir o usar para fines comerciales.",
        section5: "5. Descargo de Responsabilidad",
        disclaimer: "Los conocimientos de inversión y los resultados de las pruebas proporcionados por el sitio web son solo para referencia y no constituyen ningún consejo de inversión. El usuario debe asumir sus propios riesgos de inversión, y el sitio web no se hace responsable de ninguna pérdida derivada del uso del contenido del sitio web.",
        section6: "6. Cambios en los Términos de Servicio",
        changes: "Podemos actualizar estos términos de servicio de vez en cuando, y los términos actualizados se publicarán en el sitio web. El usuario debe revisar periódicamente los cambios en los términos de servicio, y el uso continuado del servicio del sitio web se considerará como aceptación de los términos modificados.",
        section7: "7. Aplicación de la Ley y Resolución de Controversias",
        law: "La interpretación y aplicación de estos términos de servicio se rigen por las leyes de la República Popular China. En caso de controversia, ambas partes deben primero intentar resolverla amigablemente; si no se logra un acuerdo, cualquiera de las partes puede presentar una demanda ante los tribunales competentes.",
        section8: "8. Información de Contacto",
        contact: "Si tiene alguna pregunta sobre estos términos de servicio, por favor contáctenos a través de los siguientes métodos:"
    },
    footer: {
        contact: "Información de Contacto",
        email: "Correo Electrónico",
        links: "Enlaces de Amistad",
        legal: "Declaración Legal",
        privacy: "Política de Privacidad",
        terms: "Términos de Servicio",
        about: "Sobre el Sitio Web",
        copyright: "© 2025 Brújula de Inversión - A-share.com. Todos los derechos reservados."
    }
};