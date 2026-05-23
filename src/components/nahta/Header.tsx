import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Instagram, Mail, MapPin, Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/nahta/logo.png";

const nav = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  {
    label: "Our Products",
    to: "/products",
    children: [
      { label: "Food Grade Salt", to: "/products/food-grade" },
      { label: "Industrial Grade", to: "/products/industrial-grade" },
      { label: "Pharma Grade", to: "/products/pharma-grade" },
      { label: "Water Softener Salt", to: "/products/water-softener" },
    ],
  },
  { label: "Contact Us", to: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-secondary text-sm text-foreground/80">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand" />
              D.B.Z-S-60, Near Municipal Office, Opp. Rotary Bhavan, Gandhidham, Gujarat 370201
            </span>
            <a href="mailto:vijay@nahtabrines.com" className="flex items-center gap-2 hover:text-brand">
              <Mail className="h-4 w-4 text-brand" />
              vijay@nahtabrines.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="rounded-full border border-primary/30 p-2 text-primary hover:bg-brand hover:border-brand hover:text-white transition"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="rounded-full border border-primary/30 p-2 text-primary hover:bg-brand hover:border-brand hover:text-white transition"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="rounded-full border border-primary/30 p-2 text-primary hover:bg-brand hover:border-brand hover:text-white transition"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Nahta Sea Brines" className="h-12 w-auto sm:h-14" />
          </Link>
          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  to={item.to}
                  className="flex items-center gap-1 text-[15px] font-medium text-primary transition hover:text-brand [&.active]:text-brand"
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-4 w-4" />}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-0 top-full z-30 mt-2 w-56 rounded-md border border-border bg-background opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="block px-4 py-3 text-sm text-primary hover:bg-secondary hover:text-brand"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <button
            className="lg:hidden text-primary"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <div className="mx-auto max-w-7xl px-4 py-3">
              {nav.map((item) => (
                <div key={item.label} className="py-1">
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block py-2 font-medium text-primary"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 border-l border-border pl-3">
                      {item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm text-muted-foreground hover:text-brand"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
