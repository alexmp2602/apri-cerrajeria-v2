import { icon } from './base.js';
class TrustSection extends HTMLElement{connectedCallback(){this.innerHTML=`<section class="trust-band"><div class="container trust-grid"><div><span class="eyebrow light">Por qué APRI</span><h2>La tranquilidad empieza antes de abrir la puerta.</h2></div><div class="trust-list"><article>${icon('clock')}<div><h3>Siempre disponibles</h3><p>Atención los 365 días, de día y de noche.</p></div></article><article>${icon('shield')}<div><h3>Trabajo responsable</h3><p>Herramientas adecuadas y cuidado en cada intervención.</p></div></article><article>${icon('pin')}<div><h3>Servicio local</h3><p>Cobertura en Gran Mendoza con contacto directo.</p></div></article></div></div></section>`}}
customElements.define('trust-section',TrustSection);

