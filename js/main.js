const EMAILJS_SERVICE_ID = "service_is25pyp";
const EMAILJS_TEMPLATE_ID = "template_jiupplo";
const EMAILJS_PUBLIC_KEY = "K6mxHqoDCcylFyAEy";

const contactForm = document.querySelector(".contacto form");

if (contactForm) {
    // EmailJS SDK must be loaded before this file.
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
            showFieldError(nameInput, "Ingresa un nombre de mínimo 4 caracteres");
            valid = false;
        }

        if (!emailPattern.test(email)) {
            showFieldError(emailInput, "Correo inválido. Verifica el formato y el dominio.");
            valid = false;
        }

        if (message.length < 5 || message.length > 500) {
            showFieldError(messageInput, "Tu mensaje debe contener al menos 5 caracteres y máximo 500 caracteres.");
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

        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = "Enviando…";

        const message = messageInput.value.trim();
        const templateParams = {
            name: nameInput.value.trim(),
            title: message,
            email: emailInput.value.trim(),
            message,
        };

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams
            );
            status.className = "mt-3 text-center text-success";
            status.textContent = "¡Tu mensaje se envió correctamente!";
            contactForm.reset();
        } catch (error) {
            console.error("Error al enviar el formulario con EmailJS:", error);
            status.className = "mt-3 text-center text-danger";
            status.textContent = "No se pudo enviar el mensaje. Inténtalo de nuevo más tarde.";
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });
}