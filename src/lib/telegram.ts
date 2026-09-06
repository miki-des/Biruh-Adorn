import { contactConfig } from "../config/contact";
import { brandConfig } from "../config/brand";
import { ConsultationPayload } from "./whatsapp"; // Reusing the same payload type

type TelegramInquiryType = "general" | "product" | "custom" | "contact";

interface ProductInquiryPayload {
  name: string;
  reference: string;
  [key: string]: any;
}

export function generateTelegramUrl(
  type: TelegramInquiryType,
  payload?: ProductInquiryPayload | ConsultationPayload
): string {
  const username = contactConfig.telegram;
  const baseUrl = `https://t.me/${username}`;

  let message = "";

  switch (type) {
    case "general":
      message = `Hello ${brandConfig.name}, I would like to make an inquiry.`;
      break;
    case "product":
      if (payload && "reference" in payload) {
        const p = payload as ProductInquiryPayload;
        message = `Hello ${brandConfig.name}, I am interested in ${p.name}, Ref. ${p.reference}. Please provide availability and ordering details.`;
      } else {
        message = `Hello ${brandConfig.name}, I am interested in a piece of jewelry from your collection.`;
      }
      break;
    case "custom":
      if (payload && "idea" in payload) {
        const c = payload as ConsultationPayload;
        let msg = `Hello ${brandConfig.name},\n\nI would like to discuss a custom jewelry piece.\n\n`;
        msg += `Name:\n${c.name}\n\n`;
        msg += `Phone/Contact:\n${c.phone}\n\n`;
        msg += `Jewelry:\n${c.jewelryType}\n\n`;
        msg += `My idea:\n${c.idea}\n\n`;
        if (c.materials) msg += `Materials:\n${c.materials}\n\n`;
        if (c.stone) msg += `Stone:\n${c.stone}\n\n`;
        if (c.size) msg += `Size:\n${c.size}\n\n`;
        if (c.additionalDetails) msg += `Additional details:\n${c.additionalDetails}\n\n`;
        msg += `I can share inspiration images here as well.`;
        message = msg;
      } else {
        message = `Hello ${brandConfig.name}, I am interested in discussing a custom jewelry piece.`;
      }
      break;
    case "contact":
      message = `Hello ${brandConfig.name}, I would like to get in touch.`;
      break;
    default:
      message = `Hello ${brandConfig.name}`;
  }

  const encodedMessage = encodeURIComponent(message);
  return `${baseUrl}?text=${encodedMessage}`;
}
