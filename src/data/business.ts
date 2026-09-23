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

export const shopHours = [
  {
    label: "Lunes a viernes",
    display: "08:00 a 00:00",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "00:00",
  },
  {
    label: "Sábados y domingos",
    display: "09:00 a 00:00",
    days: ["Saturday", "Sunday"],
    opens: "09:00",
    closes: "00:00",
  },
] as const;
