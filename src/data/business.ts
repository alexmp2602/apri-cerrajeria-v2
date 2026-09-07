export const business = {
  name: "Cerrajería APRI 24 hs",
  phone: "+5492615188484",
  displayPhone: "+54 9 261 518-8484",
  email: "cerrajeriaapri@gmail.com",
  street: "Tropero Sosa 360",
  locality: "San José",
  region: "Mendoza",
  serviceArea: "Gran Mendoza",
} as const;

export function whatsapp(
  message = "Hola APRI, necesito un servicio de cerrajería.",
) {
  return `https://wa.me/${business.phone.replace("+", "")}?text=${encodeURIComponent(message)}`;
}
