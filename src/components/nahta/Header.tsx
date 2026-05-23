import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Instagram, Mail, MapPin, Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/nahta/logo.png";
import logoWhite from "@/assets/nahta/logo-white.png";

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
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top bar — hidden on mobile */}
      <div className="hidden sm:block bg-secondary text-sm text-foreground/80">
        <div className="mx-auto flex max-w-7xl flex-row items-center justify-between px-4 py-3">
          <div className="flex items-center gap-6">
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

          {/* Desktop nav */}
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
                  // Wrapper has no gap (pt-3 creates visual space inside) so hover never breaks
                  <div className="invisible absolute left-0 top-full z-30 w-56 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                    <div className="rounded-md border border-border bg-background shadow-lg overflow-hidden">
                      {item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          className="block px-4 py-3 text-sm text-primary hover:bg-secondary hover:text-brand transition-colors"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Hamburger — mobile only */}
          <button
            className="lg:hidden text-primary p-1"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* ── Mobile Slide-in Drawer ── */}
      {/* Backdrop */}
      <div
        className={`mobile-drawer-backdrop ${open ? "mobile-drawer-backdrop--open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div className={`mobile-drawer ${open ? "mobile-drawer--open" : ""}`} role="dialog" aria-modal="true" aria-label="Navigation menu">
        {/* Drawer header */}
        <div className="mobile-drawer-header">
          <img src={logoWhite} alt="Nahta Sea Brines" className="h-12 w-auto" />
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="mobile-drawer-close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer nav links */}
        <nav className="mobile-drawer-nav">
          {nav.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    className="mobile-drawer-link mobile-drawer-link--parent"
                    onClick={() => setProductsOpen(!productsOpen)}
                  >
                    {item.label}
                    <ChevronDown
                      className={`mobile-drawer-chevron ${productsOpen ? "mobile-drawer-chevron--open" : ""}`}
                    />
                  </button>
                  <div className={`mobile-drawer-submenu ${productsOpen ? "mobile-drawer-submenu--open" : ""}`}>
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        onClick={() => { setOpen(false); setProductsOpen(false); }}
                        className="mobile-drawer-sublink"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="mobile-drawer-link [&.active]:text-brand [&.active]:font-semibold"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Drawer footer — social icons */}
        <div className="mobile-drawer-footer">
          <a href="#" aria-label="Facebook" className="mobile-drawer-social"><Facebook className="h-4 w-4" /></a>
          <a href="#" aria-label="Twitter" className="mobile-drawer-social"><Twitter className="h-4 w-4" /></a>
          <a href="#" aria-label="Instagram" className="mobile-drawer-social"><Instagram className="h-4 w-4" /></a>
        </div>
      </div>
    </header>
  );
}
