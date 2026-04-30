export const OPERATOR_WHATSAPP =
  process.env.NEXT_PUBLIC_OPERATOR_WHATSAPP || "385989356521";

export function buildWaUrl(phone: string, text: string) {
  const cleaned = phone.replace(/\D/g, "");
  return `https://wa.me/${cleaned}?text=${encodeURIComponent(text)}`;
}

export function operatorWaUrl(text: string) {
  return buildWaUrl(OPERATOR_WHATSAPP, text);
}
