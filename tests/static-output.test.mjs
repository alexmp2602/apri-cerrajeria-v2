import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
const html = await readFile(
  new URL("../dist/index.html", import.meta.url),
  "utf8",
);

test("Astro entrega todo el contenido sin renderizado del cliente", () => {
  assert.match(html, /Astro v7\.3\.1/);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1);
  for (const content of [
    "Te ayudamos a entrar",
    "Apertura de casas",
    "Copias de llaves",
    "Tropero Sosa",
    "Preguntas frecuentes",
    "Gran Mendoza",
  ])
    assert.ok(html.includes(content), content);
  assert.doesNotMatch(
    html,
    /customElements\.define|<astro-island|<hero-section|src\/main\.js/,
  );
  assert.equal((html.match(/<details[ >]/g) || []).length, 4);
});

test("cada ancla interna apunta a una sección existente", () => {
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]));
  for (const [, id] of html.matchAll(/href="#([^"]+)"/g))
    assert.ok(ids.has(id), id);
});

test("archivos locales y variantes de imágenes existen", async () => {
  const paths = new Set(
    [...html.matchAll(/(?:src|href|poster)="(\/[^"#]+)"/g)].map((m) => m[1]),
  );
  for (const p of paths) await access(new URL(`../dist${p}`, import.meta.url));
  assert.match(html, /srcset=/);
  assert.match(html, /loading="lazy"/);
});

test("metadatos y enlaces de contacto son coherentes", () => {
  const match = html.match(
    /<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/s,
  );
  assert.ok(match);
  const data = JSON.parse(match[1]);
  assert.equal(data["@type"], "Locksmith");
  assert.equal(data.telephone, "+5492615188484");
  assert.ok(html.includes(`href="tel:${data.telephone}"`));
  assert.ok(html.includes("https://wa.me/5492615188484?text="));
  assert.match(html, /lang="es-AR"/);
  assert.match(html, /rel="canonical"/);
});

test("video y menú tienen alternativas y controles accesibles", () => {
  assert.match(html, /aria-controls="brand-video"/);
  assert.match(html, /aria-controls="primary-navigation"/);
  assert.match(html, /prefers-reduced-motion/);
  assert.match(html, /<video[^>]*controls/);
  assert.doesNotMatch(html, /<video[^>]*autoplay/);
});

test("los horarios del local se distinguen del servicio de urgencias", () => {
  const [, raw] = html.match(
    /<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/s,
  );
  const data = JSON.parse(raw);
  assert.equal(data.openingHours, undefined);
  assert.deepEqual(
    data.openingHoursSpecification.map(({ opens, closes }) => [opens, closes]),
    [
      ["08:00", "00:00"],
      ["09:00", "00:00"],
    ],
  );
  assert.equal(
    data.openingHoursSpecification.flatMap(({ dayOfWeek }) => dayOfWeek).length,
    7,
  );
  for (const text of [
    "08:00 a 00:00",
    "09:00 a 00:00",
    "Urgencias las 24 horas",
    "Venta e instalación",
  ])
    assert.ok(html.includes(text), text);
});
