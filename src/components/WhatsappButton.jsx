"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  const phoneNumber = "628773819"; // 📱 tu número en formato internacional (sin +)
  const message = "Hola, quiero más información sobre sus productos."; // mensaje predefinido

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-5 sm:p-6 rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-green-500/30"
      aria-label="Chat en WhatsApp"
    >
      <FaWhatsapp size={36} />
    </a>
  );
}
