const EMAILJS_SERVICE_ID = "service_is25pyp";
const EMAILJS_TEMPLATE_ID = "template_jiupplo";
const EMAILJS_PUBLIC_KEY = "K6mxHqoDCcylFyAEy";

const translations = {
    es: {
        toggleText: "EN",
        toggleLabel: "Cambiar idioma a inglés",
        navHome: "Inicio",
        navAbout: "Acerca de mí",
        navProjects: "Portafolio",
        navContact: "Contacto",
        navToggler: "Mostrar navegación",
        heroGreeting: "¡Hola, mundo!",
        heroName: "Mi nombre es Amellali Mercado Aguilar",
        heroRole: "Desarrolladora Fullstack con especial interés en Backend.",
        heroDescription: "Me interesan las soluciones poderosas, el desarrollo y la programación creativa, así como la incorporación de mujeres en el mundo tech.",
        heroPhoto: "Fotografía de Angélica Amellali Mercado Aguilar",
        aboutHeading: "Acerca de mí",
        aboutIllustration: "Ilustración interactiva de una laptop con código de desarrollo web",
        buildingIdeas: "CREANDO IDEAS",
        studies: "Estudios",
        biography: "Soy licenciada en matemáticas egresada de la Facultad de Ciencias, UNAM. Mis principales áreas de interés durante la carrera fueron Probabilidad y Estadística, Investigación de Operaciones, Programación Lineal y Ciencias de la Computación. Participé activamente en eventos de divulgación científica, como el Festival Matemático del Instituto de Matemáticas de la UNAM (2019–2022) y el Día de Pi (2022–2024). También me interesa mucho la enseñanza de las matemáticas.",
        stackIntro: "Mi stack principal en Desarrollo Web:",
        certifications: "Certificaciones",
        certificationDescription: "He complementado mi formación con cursos y certificaciones orientados al desarrollo web, la programación y las tecnologías digitales.",
        certificationJava: "Introducción a JAVA by Learning to Earning / Accenture",
        certificationPowerBi: "Power BI by Santander Open Academy",
        projectsHeading: "Proyectos",
        hackathon: "Hackatón",
        hackathonProject: "Proyecto de hackatón",
        sportsStore: "Landing page",
        project1Title: "Landing page para tienda deportiva",
        project1Description: "Diseñé esta página durante un hackatón para presentar una tienda deportiva, destacar sus productos y ofrecer una experiencia visual adaptable a distintos dispositivos.",
        viewProject: "Ver proyecto",
        onlineCourse: "Curso en línea",
        education: "Educación",
        calculus: "Multivariable",
        project2Title: "Curso en línea",
        project2Description: "Implementé un curso universitario de Cálculo Diferencial e Integral de varias variables para Matemáticas a Distancia. Incluye recursos interactivos y graficadores creados con Python, R y GeoGebra.",
        viewCourse: "Ver curso",
        phoneBook: "Agenda Telefónica",
        project3Title: "Agenda Telefónica",
        project3Description: "Desarrollé durante un hackatón una agenda telefónica en Java, aplicando programación orientada a objetos e incorporando funciones para gestionar contactos.",
        contactHeading: "Contáctame",
        contactIntro: "Si deseas ponerte en contacto conmigo, puedes escribirme a:",
        nameLabel: "Nombre",
        namePlaceholder: "Ingresa tu nombre",
        emailLabel: "Correo electrónico",
        emailPlaceholder: "ejemplo@correo.com",
        messageLabel: "Mensaje",
        messagePlaceholder: "Escribe tu mensaje...",
        sendMessage: "Enviar mensaje",
        footerCopyright: "© 2026 Amellali Aguilar. Todos los derechos reservados.",
        validationName: "Ingresa un nombre de mínimo 4 caracteres",
        validationEmail: "Correo inválido. Verifica el formato y el dominio.",
        validationMessage: "Tu mensaje debe contener al menos 5 caracteres y máximo 500 caracteres.",
        sending: "Enviando…",
        sent: "¡Tu mensaje se envió correctamente!",
        sendError: "No se pudo enviar el mensaje. Inténtalo de nuevo más tarde."
    },
    en: {
        toggleText: "ES",
        toggleLabel: "Switch language to Spanish",
        navHome: "Home",
        navAbout: "About me",
        navProjects: "Portfolio",
        navContact: "Contact",
        navToggler: "Show navigation",
        heroGreeting: "Hello, world!",
        heroName: "My name is Amellali Mercado Aguilar",
        heroRole: "Full-stack developer with a special interest in backend.",
        heroDescription: "I'm interested in powerful solutions, development, and creative programming, as well as bringing more women into tech.",
        heroPhoto: "Photo of Angélica Amellali Mercado Aguilar",
        aboutHeading: "About me",
        aboutIllustration: "Interactive illustration of a laptop with web development code",
        buildingIdeas: "BUILDING IDEAS",
        studies: "Education",
        biography: "I hold a bachelor's degree in Mathematics from the Faculty of Sciences at UNAM. My main areas of interest during my studies were Probability and Statistics, Operations Research, Linear Programming, and Computer Science. I actively participated in science outreach events, including the Mathematics Festival at UNAM's Institute of Mathematics (2019–2022) and Pi Day (2022–2024). I am also deeply interested in mathematics education.",
        stackIntro: "My main web development stack:",
        certifications: "Certifications",
        certificationDescription: "I have complemented my education with courses and certifications in web development, programming, and digital technologies.",
        certificationJava: "Introduction to Java by Learning to Earning / Accenture",
        certificationPowerBi: "Power BI by Santander Open Academy",
        projectsHeading: "Projects",
        hackathon: "Hackathon",
        hackathonProject: "Hackathon project",
        sportsStore: "Landing page",
        project1Title: "Landing Page for a Sports Store",
        project1Description: "I designed this page during a hackathon to introduce a sports store, showcase its products, and provide a visual experience that adapts to different devices.",
        viewProject: "View project",
        onlineCourse: "Online course",
        education: "Education",
        calculus: "Multivariable",
        project2Title: "Online Course",
        project2Description: "I implemented a university-level course in multivariable differential and integral calculus for the Matemáticas a Distancia project. It includes interactive resources and graphing tools created with Python, R, and GeoGebra.",
        viewCourse: "View course",
        phoneBook: "Phone Book",
        project3Title: "Phone Book",
        project3Description: "During a hackathon, I developed a phone book in Java, applying object-oriented programming (OOP) and adding features to manage contacts.",
        contactHeading: "Contact me",
        contactIntro: "If you'd like to get in touch, you can email me at:",
        nameLabel: "Name",
        namePlaceholder: "Enter your name",
        emailLabel: "Email address",
        emailPlaceholder: "name@example.com",
        messageLabel: "Message",
        messagePlaceholder: "Write your message...",
        sendMessage: "Send message",
        footerCopyright: "© 2026 Amellali Aguilar. All rights reserved.",
        validationName: "Please enter a name with at least 4 characters.",
        validationEmail: "Invalid email. Check the format and domain.",
        validationMessage: "Your message must contain at least 5 characters and no more than 500 characters.",
        sending: "Sending…",
        sent: "Your message was sent successfully!",
        sendError: "Your message could not be sent. Please try again later."
    }
};

let currentLanguage = "es";
try {
    currentLanguage = localStorage.getItem("portfolio-language") === "en" ? "en" : "es";
} catch (error) {
    // The page still works when browser storage is unavailable.
}

const languageToggle = document.querySelector("#language-toggle");

function applyLanguage(language) {
    currentLanguage = language;
    const text = translations[language];
    document.documentElement.lang = language;

    const setText = (selector, value, root = document) => {
        const element = root.querySelector(selector);
        if (element) element.textContent = value;
    };

    const navLinks = document.querySelectorAll("#navbarNav .nav-link");
    [text.navHome, text.navAbout, text.navProjects, text.navContact].forEach((value, index) => {
        if (navLinks[index]) navLinks[index].textContent = value;
    });
    document.querySelector(".navbar-toggler")?.setAttribute("aria-label", text.navToggler);
    if (languageToggle) {
        languageToggle.textContent = text.toggleText;
        languageToggle.setAttribute("aria-label", text.toggleLabel);
        languageToggle.title = text.toggleLabel;
    }

    setText(".hero h1", text.heroGreeting);
    setText(".hero h2", text.heroName);
    setText(".hero h3", text.heroRole);
    setText(".hero .col-lg-7 p", text.heroDescription);
    const heroPhoto = document.querySelector(".hero-img");
    if (heroPhoto) heroPhoto.alt = text.heroPhoto;

    setText(".about h2", text.aboutHeading);
    const aboutVisual = document.querySelector(".about-dev-visual");
    if (aboutVisual) aboutVisual.setAttribute("aria-label", text.aboutIllustration);
    const svgLabels = document.querySelectorAll(".about-dev-visual .dev-small-label");
    if (svgLabels[1]) svgLabels[1].textContent = text.buildingIdeas;

    const aboutContent = document.querySelector(".about .col-lg-7");
    if (aboutContent) {
        const headings = aboutContent.querySelectorAll("h3");
        if (headings[0]) headings[0].textContent = text.studies;
        if (headings[1]) headings[1].textContent = text.certifications;
        const paragraphs = aboutContent.querySelectorAll("p");
        if (paragraphs[0]) paragraphs[0].textContent = text.biography;
        if (paragraphs[1]) paragraphs[1].innerHTML = `${text.stackIntro}<br>JS | HTML | CSS | BOOTSTRAP | JAVA | MYSQL | SPRINGBOOT`;
        if (paragraphs[2]) paragraphs[2].textContent = text.certificationDescription;
        const certificationItems = aboutContent.querySelectorAll("li");
        if (certificationItems[0]) certificationItems[0].textContent = text.certificationJava;
        if (certificationItems[1]) certificationItems[1].textContent = text.certificationPowerBi;
    }

    setText(".proyectos h2", text.projectsHeading);
    const projectCards = document.querySelectorAll(".projects .card");
    const projectText = [
        { badge: text.hackathon, title: text.project1Title, description: text.project1Description, button: text.viewProject, preview: text.hackathonProject, footer: text.sportsStore, aria: language === "en" ? "Illustrative preview of a sports store landing page" : "Vista previa ilustrativa de la landing page para una tienda deportiva" },
        { badge: text.education, title: text.project2Title, description: text.project2Description, button: text.viewCourse, preview: text.onlineCourse, footer: text.calculus, aria: language === "en" ? "Illustrative preview of the multivariable calculus course" : "Vista previa ilustrativa del curso de cálculo multivariable" },
        { badge: text.hackathon, title: text.project3Title, description: text.project3Description, button: text.viewProject, preview: text.hackathonProject, footer: text.phoneBook, aria: language === "en" ? "Illustrative preview of the Java phone book" : "Vista previa ilustrativa de la agenda telefónica desarrollada en Java" }
    ];
    projectCards.forEach((card, index) => {
        const item = projectText[index];
        if (!item) return;
        setText(".badge", item.badge, card);
        setText(".card-title", item.title, card);
        setText(".card-text", item.description, card);
        setText(".card-btn-container a", item.button, card);
        const preview = card.querySelector(".card-img-top");
        if (preview) {
            preview.setAttribute("aria-label", item.aria);
            const labels = preview.querySelectorAll("span");
            if (labels[0]) labels[0].textContent = item.preview;
            if (labels[1]) labels[1].textContent = item.footer;
        }
    });

    setText(".contacto-info h2", text.contactHeading);
    setText(".contacto-info p", text.contactIntro);
    setText('label[for="nombre"]', text.nameLabel);
    setText('label[for="correo"]', text.emailLabel);
    setText('label[for="mensaje"]', text.messageLabel);
    const nameField = document.querySelector("#nombre");
    const emailField = document.querySelector("#correo");
    const messageField = document.querySelector("#mensaje");
    if (nameField) nameField.placeholder = text.namePlaceholder;
    if (emailField) emailField.placeholder = text.emailPlaceholder;
    if (messageField) messageField.placeholder = text.messagePlaceholder;
    setText('.contacto button[type="submit"]', text.sendMessage);
    setText(".footer p", text.footerCopyright);
    const footerLinks = document.querySelectorAll(".footer .footer-link");
    if (footerLinks[0]) footerLinks[0].textContent = text.navProjects;
    if (footerLinks[1]) footerLinks[1].textContent = text.navContact;

    try {
        localStorage.setItem("portfolio-language", language);
    } catch (error) {
        // Language switching remains available for this page view.
    }
}

if (languageToggle) {
    languageToggle.addEventListener("click", () => {
        applyLanguage(currentLanguage === "es" ? "en" : "es");
    });
}
applyLanguage(currentLanguage);

const contactForm = document.querySelector(".contacto form");
if (contactForm) {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    contactForm.noValidate = true;

    const nameInput = contactForm.querySelector("#nombre");
    const emailInput = contactForm.querySelector("#correo");
    const messageInput = contactForm.querySelector("#mensaje");
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const status = document.createElement("div");
    status.className = "mt-3 text-center";
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");
    contactForm.append(status);

    function showFieldError(input, message) {
        input.classList.add("is-invalid");
        input.setAttribute("aria-invalid", "true");
        let feedback = input.parentElement.querySelector(".js-validation-message");
        if (!feedback) {
            feedback = document.createElement("div");
            feedback.className = "invalid-feedback js-validation-message";
            input.insertAdjacentElement("afterend", feedback);
        }
        feedback.textContent = message;
    }

    function clearFieldError(input) {
        input.classList.remove("is-invalid");
        input.removeAttribute("aria-invalid");
        input.parentElement.querySelector(".js-validation-message")?.remove();
    }

    function validateForm() {
        let valid = true;
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();
        const emailPattern = /^[A-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?(?:\.[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?)*\.[A-Z]{2,}$/i;
        [nameInput, emailInput, messageInput].forEach(clearFieldError);

        if (name.length < 4) {
            showFieldError(nameInput, translations[currentLanguage].validationName);
            valid = false;
        }
        if (!emailPattern.test(email)) {
            showFieldError(emailInput, translations[currentLanguage].validationEmail);
            valid = false;
        }
        if (message.length < 5 || message.length > 500) {
            showFieldError(messageInput, translations[currentLanguage].validationMessage);
            valid = false;
        }
        return valid;
    }

    [nameInput, emailInput, messageInput].forEach((input) => {
        input.addEventListener("input", () => {
            clearFieldError(input);
            status.textContent = "";
        });
    });

    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        status.textContent = "";
        if (!validateForm()) return;

        submitButton.disabled = true;
        submitButton.textContent = translations[currentLanguage].sending;
        const message = messageInput.value.trim();
        const templateParams = {
            name: nameInput.value.trim(),
            title: message,
            email: emailInput.value.trim(),
            message
        };

        try {
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
            status.className = "mt-3 text-center text-success";
            status.textContent = translations[currentLanguage].sent;
            contactForm.reset();
        } catch (error) {
            console.error("Error al enviar el formulario con EmailJS:", error);
            status.className = "mt-3 text-center text-danger";
            status.textContent = translations[currentLanguage].sendError;
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = translations[currentLanguage].sendMessage;
        }
    });
}