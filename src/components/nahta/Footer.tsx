import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Instagram, Mail, MapPin } from "lucide-react";
import logoWhite from "@/assets/nahta/logo-white.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-3">
        <div>
          <img src={logoWhite} alt="Nahta Sea Brines" className="h-16 w-auto" />
          <p className="mt-6 text-sm leading-relaxed text-primary-foreground/80">
            Kutch Leading Salt Manufacturer & Exporter Located Near Kandla and Mundra Port.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#" aria-label="Facebook" className="rounded-full border border-white/30 p-2 hover:bg-brand hover:border-brand transition"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="rounded-full border border-white/30 p-2 hover:bg-brand hover:border-brand transition"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="rounded-full border border-white/30 p-2 hover:bg-brand hover:border-brand transition"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <div className="mt-2 h-0.5 w-10 bg-brand" />
          <ul className="mt-6 space-y-3 text-sm text-primary-foreground/80">
            <li><Link to="/" className="hover:text-brand">Home</Link></li>
            <li><Link to="/about" className="hover:text-brand">About us</Link></li>
            <li><Link to="/contact" className="hover:text-brand">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <div className="mt-2 h-0.5 w-10 bg-brand" />
          <ul className="mt-6 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-brand" />
              <a href="mailto:info@nahtabrines.com" className="hover:text-brand">info@nahtabrines.com</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-brand" />
              D.B.Z-S-60, Near Municipal Office, Opp. Rotary Bhavan, Gandhidham, Gujarat 370201
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-sm text-primary-foreground/70">
          Copyright 2024 <span className="font-semibold text-white">NahtaSeaBrines.com.</span> All Right Reserved.
        </div>
      </div>
    </footer>
  );
}
