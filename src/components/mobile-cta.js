import { whatsapp, icon } from './base.js';
class MobileCta extends HTMLElement{connectedCallback(){this.innerHTML=`<aside class="mobile-cta" aria-label="Contacto rápido"><a href="tel:+5492615188484">${icon('phone')} Llamar</a><a href="${whatsapp('Hola APRI, necesito ayuda ahora. Estoy en: ')}">${icon('message')} WhatsApp</a></aside>`}}
customElements.define('mobile-cta',MobileCta);

