# Historial de Cambios — Digital Syntropy Web

Registro cronológico de modificaciones, optimizaciones y refactorizaciones realizadas en el proyecto.

---

## [2026-08-20] — Rediseño Hero Ambient Blur, Tarjetas de Servicios Pastel y Acordeón de Precios

### 🎨 UI & Layout
- **Rediseño de Sección Hero (`#inicio`)**:
  - Reemplazo de la ilustración principal por `assets/img/undraw_data-at-work_3tbf.svg`.
  - Inclusión de fondo ambiental difuminado (`ambient gradient blur`) con orbes y auras de luz basadas en los tonos corporativos Cyan (`#00d1da`) y Verde (`#25d366`).
  - Incorporación de anillos concéntricos y marco esmerilado `backdrop-blur-md` detrás del contenedor gráfico.

- **Rediseño Estructural de Tarjetas de Servicios (`#servicios`)**:
  - Implementación de tarjetas tipo bloque pastel con matices derivados de la paleta oficial (`#3DADD9`, `#3F858C`, `#5EF2E3`, `#99F2E9`):
    - **Card 1 (Impulsamos tu presencia digital)**: Tono pastel menta (`bg-[#eaf9fa]`), ilustración `Digital transformation-amico.svg`, desglose de Google My Business, SEO Local, AEO y GEO.
    - **Card 2 (Desarrollo Web)**: Tono pastel celeste (`bg-[#e8f5fb]`), ilustración `Design team-bro.svg`, desglose de estándares Google, responsive, hosting/dominio y coherencia de marca.
    - **Card 3 (Análisis de Rendimiento)**: Tono pastel verde agua (`bg-[#e7f5f4]`), ilustración `Performance overview-rafiki.svg`, desglose de Google Analytics, informes de tráfico y optimización basada en datos.

- **Sección de Precios & Acordeón Desplegable (`#precios`)**:
  - Inserción de enlaces de consulta directa en las cards: `¿Qué servicios incluye mi landing page?` y `¿Qué servicios incluye mi sitio institucional?`.
  - Creación de acordeón interactivo de 2 filas (`#acordeon-servicios-precios`) posicionado inmediatamente debajo de las tarjetas de precios:
    - **Landing Page**: 6 apartados detallados (Página única de alta velocidad, Presencia oficial en Google/GMB, Respuestas para asistentes de voz/AEO, Formulario CRM sin costo mensual, Botón directo a WhatsApp, Todo incluido por 1 año).
    - **Sitio Institucional**: 6 apartados detallados (Estructura multipágina completa, Múltiples puertas de entrada en Google, Preparado para IA/GEO, Validación y confianza, Panel de medición comercial Google Analytics, Ecosistema corporativo por 1 año).
  - Función JavaScript `togglePrecioAccordion(id)` para auto-despliegue y desplazamiento suave al hacer clic en los enlaces de las tarjetas.

### ⚙️ Build & CSS Pipeline
- **Persistencia CSS de `.navbar-dark`**: Integración de la clase `.navbar-dark` en `css/input.css` para garantizar la persistencia del estilo del Navbar y Footer al recompilar con Tailwind CLI.

---

## [2026-08-18] — Rediseño de Contacto, Modularización JS y Accesibilidad

### 🎨 UI & Layout
- **Reestructuración de la sección de contacto (`#contacto`)**:
  - Se eliminó la tarjeta secundaria izquierda con información estática.
  - Se promovió el título `¡Contanos sobre tu negocio!` a encabezado principal `<h2>` centrado con divisor decorativo.
  - Se centró la tarjeta del formulario (`max-w-3xl mx-auto`) para una vista más limpia e integrada.

### ⚡ Modularización & JS Serverless
- **Creación de `assets/js/form-handler.js`**:
  - Se extrajo el script inline del formulario a un módulo JavaScript dedicado.
  - Implementación de fetch asíncrono hacia el webhook de Google Apps Script.
  - Inclusión del script con el atributo `defer` antes del cierre de `</body>`.
  - Integración del campo honeypot antispam (`#website`).

### ♿ Accesibilidad & Semántica (Chrome Auditor Web Standards)
- **Vinculación de etiquetas `<label>`**: Se asociaron explícitamente mediante `for="..."` con sus respectivos campos `id="..."`.
- **Autocompletado nativo**: Adición de atributos `autocomplete="name"`, `autocomplete="email"` y `autocomplete="tel"`.
- **Estados ARIA en tiempo real**:
  - `aria-busy="true"` en `#submit-btn` durante la ejecución de la petición.
  - `aria-live="polite"` en el contenedor `#form-status` para anunciación en lectores de pantalla.
- **Ocultamiento de íconos decorativos**: Atributo `aria-hidden="true"` en íconos SVG/Material Symbols.
