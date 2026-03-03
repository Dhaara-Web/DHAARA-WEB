import {
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaLinkedinIn,
  FaTiktok
} from "react-icons/fa";

export default function PageFooter() {
  return (
    <footer className="py-8 px-4 backdrop-blur-md bg-slate-900/80 border-t border-amber-500/20">
      <div className="container mx-auto text-center text-gray-300 text-sm">

        {/* Connect Section */}
        <h3 className="text-amber-400 font-semibold mb-4 text-lg">
          Connect Us On
        </h3>

        <div className="flex justify-center gap-6 mb-6 text-xl">

          <a
            href="https://www.facebook.com/flairclub.usj/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition duration-300"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.youtube.com/@flairusj"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition duration-300"
          >
            <FaYoutube />
          </a>

          <a
            href="https://whatsapp.com/channel/0029Vb5ohPMADTO8WJ3SuX40"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition duration-300"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://www.linkedin.com/company/flair-club-of-university-of-sri-jayewardenepura"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition duration-300"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://www.tiktok.com/@flair_club"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition duration-300"
          >
            <FaTiktok />
          </a>

        </div>

        {/* Copyright */}
        <p>&copy; 2026 DHAARA. All rights reserved.</p>

      </div>
    </footer>
  );
}