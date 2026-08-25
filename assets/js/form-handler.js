const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzfN5tpJtECkhBgINDQeT8SQ_2JLLhk941V1EPD2ZMJ75YGcowOvCoks8_vhFH4fwqLXg/exec'
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const btnIcon = document.getElementById('btn-icon');
    const statusMsg = document.getElementById('form-status');

    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // 1. Estado de carga visual y de accesibilidad
        submitBtn.disabled = true;
        submitBtn.setAttribute('aria-busy', 'true');
        btnText.textContent = 'Enviando solicitud...';
        btnIcon.textContent = 'hourglass_top';
        statusMsg.classList.add('hidden');

        const payload = {
            nombre: contactForm.nombre.value.trim(),
            email: contactForm.email.value.trim(),
            telefono: contactForm.telefono.value.trim(),
            mensaje: contactForm.mensaje.value.trim(),
            website: contactForm.website ? contactForm.website.value.trim() : ''
        };

        try {
            // 2. Envío asíncrono a Google Apps Script
            await fetch(APPS_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            // 3. Feedback de éxito accesible
            statusMsg.textContent = '✓ ¡Solicitud enviada con éxito! Te contactaremos a la brevedad.';
            statusMsg.className = 'text-center text-sm font-medium text-emerald-600 block mt-2';
            statusMsg.setAttribute('aria-live', 'polite');
            contactForm.reset();
        } catch (error) {
            // 4. Fallback por error de envío
            statusMsg.textContent = '✕ Ocurrió un error al enviar. Por favor contactanos por WhatsApp.';
            statusMsg.className = 'text-center text-sm font-medium text-red-500 block mt-2';
            statusMsg.setAttribute('aria-live', 'assertive');
        } finally {
            // 5. Restauración del botón y estado aria
            submitBtn.disabled = false;
            submitBtn.setAttribute('aria-busy', 'false');
            btnText.textContent = 'Enviar Solicitud';
            btnIcon.textContent = 'send';
        }
    });
});
