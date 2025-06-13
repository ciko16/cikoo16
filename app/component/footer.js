// Footer.js
import { Instagram, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <div className="font-open-sans text-center py-6">
      <p className="mb-4">Let&apos;s connect and keep in touch!</p>
      <div className="flex justify-center gap-6">
        <a
          href="https://www.instagram.com/chiccoramadhan/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-500 transition"
        >
          <Instagram size={24} />
        </a>
        <a
          href="https://github.com/ciko16"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/ciko1612/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-600 transition"
        >
          <Linkedin size={24} />
        </a>
      </div>
    </div>
  );
}
