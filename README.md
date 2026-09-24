# Cerrajería APRI 24 hs — Versión 3

Rediseño independiente de APRI en Gran Mendoza, construido con **Astro 7.3.1**, TypeScript estricto y HTML estático. Este repositorio V2 no modifica el sitio ni el repositorio original.

## Renovación visual V3

Portada orientada a urgencias, símbolo circular de APRI, sección destacada de venta e instalación de cerraduras inteligentes y bloque del local. Los horarios se centralizan en `src/data/business.ts` y se reutilizan en el pie y los datos estructurados. La atención del local termina a medianoche; el servicio de urgencias sigue disponible las 24 horas.

Las imágenes de D1 Pro, D2 Vexa y D3 Ultra provienen del sitio oficial [Privé Digital Force](https://privedigitalforce.com.ar/). Se guardan en `src/assets/locks/` y Astro genera las versiones WebP. Archivos originales: `/wp-content/uploads/2026/05/D1-PRO-copia-1-600x600.png`, `D2-VEXA-copia-1-600x600.png` y `D3-ULTRA-copia-1-600x600.png`. Falta incorporar las fotos nuevas del local. Antes de reemplazar el sitio original, coordinar las URLs de campañas y la medición existente.

## Decisión de arquitectura

Investigación revisada el 7 de septiembre de 2026. Para una landing de servicios con teléfono, WhatsApp, video y preguntas frecuentes, Astro permite generar el contenido completo en el servidor de compilación, sin enviar un framework de interfaz al navegador. JavaScript queda limitado al menú móvil y al control de reproducción.

- **Astro:** elegido por componentes nativos, generación estática y optimización integrada de imágenes. [Islas](https://docs.astro.build/en/concepts/islands/), [componentes](https://docs.astro.build/en/basics/astro-components/).
- **Next.js:** también permite [exportación estática](https://nextjs.org/docs/app/guides/static-exports), pero sus capacidades de aplicación no aportan una ventaja concreta para este alcance. No se descarta por incapacidad ni por una supuesta penalización SEO automática.
- **Eleventy:** alternativa estática sólida y liviana. Astro encaja mejor aquí por su flujo integrado de componentes, TypeScript e imágenes. [Documentación de Eleventy](https://www.11ty.dev/docs/).

La elección responde al proyecto, no a que exista un framework universalmente mejor.

## Organización

- `src/pages/index.astro`: importa y compone las secciones; no concentra su implementación.
- `src/components/`: encabezado, hero, servicios, confianza, proceso, opiniones, cobertura, preguntas frecuentes, pie y contacto móvil. Marca, iconos y video tienen componentes propios.
- `src/layouts/BaseLayout.astro`: documento, idioma, metadatos y datos estructurados.
- `src/data/business.ts`: teléfono, email y generador de enlaces WhatsApp.
- `src/assets/`: logo procesado por `astro:assets`, con variantes WebP y dimensiones explícitas.
- `src/styles/`: identidad visual compartida y reglas de accesibilidad.
- `public/assets/`: video, mapa y archivos que deben conservarse sin transformación.
- `tests/`: verificaciones del HTML compilado, enlaces internos, archivos y contacto.

Se siguen las guías oficiales de [estructura](https://docs.astro.build/en/basics/project-structure/), [TypeScript](https://docs.astro.build/en/guides/typescript/), [imágenes](https://docs.astro.build/en/guides/images/) y [scripts](https://docs.astro.build/en/guides/client-side-scripts/). No se agregan React, un adaptador de servidor ni una base de datos porque no son necesarios.

## UX, rendimiento y accesibilidad

Se conserva la identidad negra y dorada, el video original y el mapa de Gran Mendoza. El contacto se prioriza en móvil; las preguntas frecuentes usan `details/summary` nativos. El menú tiene estados accesibles, cierre con Escape y alternativa sin JavaScript. El video ofrece pausa, no fuerza reproducción con movimiento reducido y respeta ahorro de datos cuando el navegador lo informa.

Los criterios de rendimiento se basan en [Core Web Vitals](https://web.dev/articles/vitals), y el control de movimiento en [W3C: Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html). Estas medidas no equivalen a una certificación WCAG ni a resultados medidos de usuarios reales.

Los testimonios y datos comerciales se conservan de la V2 anterior: antes de una publicación comercial deben ser confirmados por el dueño. El mapa es orientativo, no un servicio de navegación ni una garantía de cobertura; mantiene la atribución a OpenStreetMap.

## Desarrollo

Requiere Node.js 22.12 o superior. Instalar con `npm ci`; iniciar con `npm run dev`.

## Producción

`npm run check` valida tipos y componentes. `npm run build` genera la página. Después, `npm test` verifica el resultado y `npm run preview` permite servirlo localmente. `npm run format:check` revisa formato.

La salida estática queda en `dist/`.

`SITE_URL` configura la URL canónica al compilar; por defecto apunta a `https://apri-cerrajeria-v2.vercel.app`. No usar el dominio original hasta que el dueño autorice reemplazar su sitio. La configuración `.openai/hosting.json` conserva la vista privada de Sites existente. Para otros alojamientos estáticos, publicar `dist/` en la raíz del dominio.
