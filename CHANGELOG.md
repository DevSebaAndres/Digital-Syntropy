# Historial de Cambios — Digital Syntropy Web

Registro cronológico de modificaciones, optimizaciones y refactorizaciones realizadas en el proyecto.

---

## [2026-08-29] — Optimización WPO, Accesibilidad WCAG y Navegación Agéntica (llms.txt)

### 🚀 Rendimiento Web (Core Web Vitals — Auditoría Lighthouse)

- **Eliminación de recursos bloqueantes de renderizado (FCP)**:
  - Añadidos `<link rel="preconnect">` para `fonts.googleapis.com` y `fonts.gstatic.com` para reducir la latencia DNS+TCP+TLS.
  - **Inter** (fuente crítica del cuerpo): mantiene carga síncrona con `display=swap` para el renderizado inmediato del texto principal.
  - **Cinzel** y **Material Symbols** (fuentes no críticas): migradas a carga asíncrona mediante patrón `rel="preload" as="style" + onload="this.rel='stylesheet'"` con fallback `<noscript>`, eliminando su impacto en el FCP.

- **Corrección de Cumulative Layout Shift / CLS (imágenes)**:
  - Añadidos atributos `width` y `height` explícitos en **todas** las ilustraciones SVG del sitio para que el navegador reserve el espacio correcto antes de que los archivos terminen de cargar:
    - `undraw_data-at-work_3tbf.svg` (hero): `500×400`
    - `Digital transformation-amico.svg`: `300×224`
    - `Design team-bro.svg`: `300×224`
    - `Performance overview-rafiki.svg`: `300×224`
    - `Team goals-rafiki.svg`: `360×330`
    - `undraw_chatting_29rn.svg`: `210×192`
  - Añadidos `width` y `height` al `<img>` del logotipo en navbar (`96×40`) y footer (`96×48`).

- **Entrega responsiva del logotipo (LCP)**:
  - Implementado atributo `srcset` con descriptor `400w` y `sizes="(max-width: 768px) 73px, 96px"` en ambas instancias del `<picture>` del logo (navbar y footer).
  - El navegador descarga ahora únicamente la versión necesaria según el viewport, evitando la descarga innecesaria de 173 KiB en dispositivos móviles donde el logo se renderiza a 73×40 px.

### ♿ Accesibilidad (WCAG AA — Contraste)

- **Corrección de ratio de contraste en botones CTA del Hero (`#inicio`)**:
  - Botón **"Ver Planes & Precios"** (`bg-secondary-container`): reemplazado `text-white` por `color: #0D0D0D` para superar el ratio mínimo de 4.5:1 sobre fondo claro.
  - Botón **"Consultar por WhatsApp"** (`bg-primary`): reemplazado `text-on-primary` por `color: #0D0D0D` para cumplir la normativa de contraste sobre el color primario de la marca.

### 🤖 Navegación Agéntica (AI Crawlers)

- **Creación de `llms.txt` en la raíz del proyecto**:
  - Archivo Markdown siguiendo la especificación `llms.txt` (análogo a `robots.txt` pero dirigido a crawlers de LLMs como ChatGPT, Perplexity y Gemini).
  - Contiene: encabezado `# Digital Syntropy`, descripción de la agencia, enlaces directos a todas las secciones del sitio (`#servicios`, `#precios`, `#contacto`, `#faqs`), planes y precios, datos de contacto, información de entidad (`LocalBusiness`) e información geográfica.
  - Codificado en UTF-8 con acentos correctos.

---

## [2026-08-26] — Animaciones Slide-Left GPU (Auditor Web), Optimizaciones AEO/SEO Local y Grafo JSON-LD GEO

### 🚀 Animaciones & Rendimiento (Auditor Web Guidance)
- **Animaciones Slide de Izquierda a Derecha (`.reveal-slide-left`)**:
  - Implementación de animación acelerada por GPU utilizando `transform: translate3d(-36px, 0, 0)` -> `translate3d(0, 0, 0)` y `opacity: 0` -> `1` con `will-change: transform, opacity;`.
  - Cero saltos de diseño (CLS = 0) al evitar recálculos de diseño (*reflows* o *repaints*).
  - Aplicación en todas las secciones principales (`#inicio`, `#servicios`, `#precios`, Banner Marquee, `#nosotros`, `#proceso`, `#contacto`, `#faqs`) y secuencias escalonadas (`reveal-delay-100` a `reveal-delay-400`).
- **Soporte de Accesibilidad (`prefers-reduced-motion`)**:
  - Regla `@media (prefers-reduced-motion: reduce)` en `css/input.css` para anular animaciones en sistemas operativos con preferencia de movimiento reducido.
- **IntersectionObserver Nativo (0kb Overheads)**:
  - Reemplazo de scripts pesados por un `IntersectionObserver` nativo ligero con des-observación inmediata (`observer.unobserve(entry.target)`) tras activarse la animación para cero consumo de CPU.

### 🧠 Refinamiento Estratégico AEO (Local SEO & Entity Definition)
- **Titular Principal `<h1>` Transaccional**:
  - Actualización del H1 a `Desarrollo Web y Posicionamiento SEO & GEO en Tucumán | Digital Syntropy`, posicionando palabras clave locales de alta conversión sin modificar las clases CSS existentes.
- **Bloque de Extracción de Entidad AEO**:
  - Inserción de un bloque declarativo `<blockquote>` inmediatamente debajo del `<h1>` que define la entidad comercial en San Miguel de Tucumán optimizado para citas directas en motores IA (ChatGPT, Perplexity, Gemini).
- **Coherencia Semántica en Encabezados `<h2>`**:
  - Ajuste semántico de todos los `<h2>` del sitio (`Servicios de Desarrollo Web & Posicionamiento`, `Planes y Precios de Páginas Web`, `¿Por qué elegir a Digital Syntropy?`, `Proceso de Desarrollo Web en 4 Pasos`, `Solicitá tu Presupuesto Directo`, `Preguntas Frecuentes sobre Páginas Web, SEO y GEO`).

### 🌐 Inyección Técnica GEO & Schema.org JSON-LD
- **Esquema Unificado `@graph` en el `<head>`**:
  - Integración de los tipos `LocalBusiness` / `ProfessionalService` (con NAP completo, geolocalización de Tucumán, coordenadas GPS, áreas atendidas y lista de servicios), `WebSite` y `FAQPage` manteniendo correspondencia 1:1 con el cuerpo HTML.

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
