import { displayPhone, icon } from "./base.js";
class SiteHeader extends HTMLElement {
  connectedCallback() { this.innerHTML = `<header class="header"><div class="container nav"><a class="brand" href="#inicio" aria-label="APRI Cerrajería 24 hs, inicio"><img src="assets/brand/apri-logo.png" alt="APRI Cerrajería 24 hs" width="190" height="94"></a><nav aria-label="Principal"><a href="#servicios">Servicios</a><a href="#como-funciona">Cómo funciona</a><a href="#opiniones">Opiniones</a><a href="#zona">Cobertura</a></nav><a class="button button-small" href="tel:+5492615188484">${icon("phone")}<span>${displayPhone}</span></a><button class="menu" aria-label="Abrir menú" aria-expanded="false"><span></span><span></span></button></div></header>`; const b=this.querySelector('.menu'), n=this.querySelector('nav'); b.onclick=()=>{const open=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!open));n.classList.toggle('open',!open)}; n.onclick=()=>{b.setAttribute('aria-expanded','false');n.classList.remove('open')}; }
}
customElements.define("site-header", SiteHeader);

