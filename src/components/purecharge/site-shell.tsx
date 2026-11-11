import { useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, Phone, Wind, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contacts, navigation } from "@/lib/purecharge-data";

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-frame">
      <header className="site-header">
        <div className="site-header-inner">
          <Link className="brand-lockup" to="/" onClick={() => setMenuOpen(false)}>
            <span className="brand-icon" aria-hidden="true">
              <Wind size={21} />
            </span>
            <span className="brand-copy">
              <strong>PURECHARGE</strong>
              <span>CLIMATE SYSTEMS</span>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={pathname === item.to ? "nav-link active" : "nav-link"}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button asChild className="header-quote">
            <Link to="/contact">
              Get a quote <ArrowUpRight size={15} />
            </Link>
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="mobile-menu-toggle"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={pathname === item.to ? "mobile-nav-link active" : "mobile-nav-link"}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
                <ArrowUpRight size={15} />
              </Link>
            ))}
          </nav>
        )}
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <Link className="brand-lockup footer-lockup" to="/">
              <span className="brand-icon" aria-hidden="true">
                <Wind size={21} />
              </span>
              <span className="brand-copy">
                <strong>PURECHARGE</strong>
                <span>CLIMATE SYSTEMS</span>
              </span>
            </Link>
            <p>
              Harare’s climate specialists. Supply, installation, repairs, and ongoing care for
              cooler homes and workplaces.
            </p>
            <span className="service-area-tag">
              <span /> Serving Greater Harare
            </span>
          </div>
          <div className="footer-column">
            <h2>Explore</h2>
            {navigation.slice(1, 6).map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="footer-column">
            <h2>Contact</h2>
            <span>Harare, Zimbabwe</span>
            <a href={`tel:${contacts.primaryPhone.replaceAll(" ", "")}`}>{contacts.primaryPhone}</a>
            <a href={`tel:${contacts.secondaryPhone.replaceAll(" ", "")}`}>
              {contacts.secondaryPhone}
            </a>
            <span>Residential &amp; commercial</span>
          </div>
          <div className="footer-contact">
            <h2>Need a cooler room?</h2>
            <p>Tell us what you need and we’ll help you choose the right next step.</p>
            <Button asChild variant="secondary">
              <a
                href={`https://wa.me/${contacts.primaryWhatsApp}`}
                target="_blank"
                rel="noreferrer"
              >
                <Phone size={16} /> Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© PureCharge Climate Systems</span>
          <span>Harare, Zimbabwe</span>
        </div>
      </footer>
      <div className="mobile-contact-shortcuts" aria-label="Contact PureCharge">
        <Button asChild variant="outline" size="icon">
          <a href={`tel:${contacts.primaryPhone.replaceAll(" ", "")}`} aria-label="Call PureCharge">
            <Phone size={18} />
          </a>
        </Button>
        <Button asChild size="icon">
          <a
            href={`https://wa.me/${contacts.primaryWhatsApp}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <Wind size={18} />
          </a>
        </Button>
      </div>
    </div>
  );
}

export function PageHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="page-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}

export function QuoteCallout() {
  return (
    <section className="quote-callout">
      <div>
        <p className="eyebrow">A good place to start</p>
        <h2>Let’s find the right cooling for your space.</h2>
        <p>
          Share a few details about your room or building and our Harare team will get back to you.
        </p>
      </div>
      <Button asChild variant="secondary">
        <Link to="/contact">
          Request a quotation <ArrowUpRight size={16} />
        </Link>
      </Button>
    </section>
  );
}
