// --- 1. EFECTO DE ESCRITURA AUTOMÁTICA EN LA PORTADA ---
document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector(".typed-text")) {
        new Typed(".typed-text", {
            strings: [
                "búsqueda y rescate",
                "entornos extremos"
            ],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 2000,
            loop: true
        });
    }
});

// --- 2. FUNCIONALIDAD DEL POP-UP Y ENVÍO A CORREO ---
const modal = document.getElementById("contactModal");
const openModalBtn = document.getElementById("openModalBtn");
const openTeamModalBtn = document.getElementById("openTeamModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const form = document.getElementById("popupForm");

// Abrir pop-up desde el botón principal
if (openModalBtn) {
    openModalBtn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "flex";
    });
}

// Abrir pop-up desde el botón de la sección de equipo
if (openTeamModalBtn) {
    openTeamModalBtn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "flex";
    });
}

// Cerrar pop-up con la "X"
if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

// Cerrar haciendo clic fuera de la caja
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Envío asíncrono de los datos a manugms25@gmail.com vía Formspree
if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const data = new FormData(form);
        
        let response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'json'
            }
        });

        if (response.ok) {
            alert("¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.");
            form.reset();
            modal.style.display = "none";
        } else {
            alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
        }
    });
}
// Inicialización del menú hamburguesa móvil
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('open');
        });

        // Cerrar menú al hacer clic en cualquier enlace
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('open');
            });
        });
    }
});