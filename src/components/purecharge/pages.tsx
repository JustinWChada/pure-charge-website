import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  CheckCircle2,
  Gauge,
  Headset,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  ThermometerSun,
  Wrench,
  Wind,
  Zap,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import technician from "@/assets/purecharge-technician.jpg.asset.json";
import serviceResidential from "@/assets/purecharge-service-residential.jpg.asset.json";
import serviceCommercial from "@/assets/purecharge-service-commercial.jpg.asset.json";
import serviceMaintenance from "@/assets/purecharge-service-maintenance.jpg.asset.json";
import galleryResidence from "@/assets/purecharge-gallery-residence.jpg.asset.json";
import galleryOffice from "@/assets/purecharge-gallery-office.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { QuoteForm } from "@/components/purecharge/quote-form";
import { PageHeading, QuoteCallout } from "@/components/purecharge/site-shell";
import { resolveAssetUrl } from "@/lib/asset-url";
import {
  contacts,
  equipment,
  popularCapacity,
  standardInstallationPrice,
} from "@/lib/purecharge-data";

const services = [
  {
    number: "01",
    label: "Fitment",
    title: "AC supply & installation",
    description:
      "Precision sizing and split-system fitting with neat trunking, sealed penetrations, vacuum testing, and electrical safety checks.",
    detail: "Standard installation is $90 per unit.",
    image: resolveAssetUrl(serviceResidential.url),
    icon: Wind,
  },
  {
    number: "02",
    label: "Repairs",
    title: "AC diagnostics & repairs",
    description:
      "Fast troubleshooting for refrigerant leaks, electrical faults, weak airflow, and noisy compressors.",
    detail: "Same-day emergency callouts available.",
    image: resolveAssetUrl(serviceCommercial.url),
    icon: Wrench,
  },
  {
    number: "03",
    label: "Longevity",
    title: "Preventative maintenance",
    description:
      "Deep coil cleaning, pressure checks, filter care, and performance testing to help your system run efficiently.",
    detail: "Scheduled plans for homes and businesses.",
    image: resolveAssetUrl(serviceMaintenance.url),
    icon: Gauge,
  },
];

const brands = [
  {
    name: "Electro Master",
    label: "High demand",
    description:
      "High efficiency, whisper-quiet operation, and dependable value for Harare homes and workplaces.",
    badge: "Full Inverter Tech",
    icon: "EM",
  },
  {
    name: "TCL",
    label: "Smart cooling",
    description:
      "Smart climate control with rapid turbo cooling and intelligent, generator-friendly cycling.",
    badge: "WiFi App Enabled",
    icon: "TCL",
  },
  {
    name: "Hisense",
    label: "Heavy duty",
    description:
      "Durable engineering with intelligent eco sensing and robust compressor performance.",
    badge: "Gold Fin Radiator",
    icon: "H",
  },
];

const trustReasons = [
  {
    title: "Professional sizing",
    description:
      "Capacity recommendations consider sun exposure, glazing, ceiling height, and how the room is used.",
    icon: ThermometerSun,
  },
  {
    title: "Certified installation",
    description: "Careful pipe routing, secure outdoor brackets, and tidy, considered workmanship.",
    icon: ShieldCheck,
  },
  {
    title: "Harare-wide coverage",
    description:
      "Service van dispatch across Borrowdale, Avondale, Mount Pleasant, and surrounding suburbs.",
    icon: MapPin,
  },
  {
    title: "Ongoing support",
    description: "Genuine warranty support, seasonal maintenance, and a team ready to help.",
    icon: Headset,
  },
];

const gallery = [
  {
    location: "Borrowdale Residence",
    unit: "Electro Master · 12,000 BTU Inverter",
    image: resolveAssetUrl(galleryResidence.url),
    alt: "A finished air conditioner installation at a Harare home",
  },
  {
    location: "Avondale Corporate Suites",
    unit: "Commercial system · condenser installation",
    image: resolveAssetUrl(galleryOffice.url),
    alt: "Outdoor climate system installation at a commercial property",
  },
  {
    location: "Mount Pleasant Home",
    unit: "Commissioning · performance checks",
    image: resolveAssetUrl(serviceCommercial.url),
    alt: "A technician inspecting a residential air conditioning unit",
  },
];

const technicianImage = resolveAssetUrl(technician.url);

const testimonials = [
  {
    quote:
      "Exceptional installation in Borrowdale. Neat pipework and the 12,000 BTU Electro Master is ice cold.",
    initials: "HB",
    name: "Homeowner",
    area: "Borrowdale, Harare",
  },
  {
    quote:
      "PureCharge outfitted our Avondale offices. Prompt quotation, fair pricing, and excellent service.",
    initials: "CA",
    name: "Commercial client",
    area: "Avondale, Harare",
  },
  {
    quote:
      "Same-day repair on our lounge split unit. Polite technicians who cleaned up thoroughly.",
    initials: "RM",
    name: "Resident",
    area: "Mount Pleasant, Harare",
  },
];

function EquipmentGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "equipment-grid equipment-grid-compact" : "equipment-grid"}>
      {equipment.map((unit) => (
        <article
          key={unit.capacity}
          className={
            unit.capacity === popularCapacity ? "equipment-card popular" : "equipment-card"
          }
        >
          {unit.capacity === popularCapacity && <span className="popular-label">Most popular</span>}
          <p className="card-eyebrow">Capacity</p>
          <h3>{unit.capacity}</h3>
          <p className="equipment-price">
            <span>$</span>
            {unit.price}
          </p>
          <p className="equipment-price-note">Unit only · VAT inclusive</p>
          <p className="equipment-room">{unit.room}</p>
          <ul>
            {unit.features.map((feature) => (
              <li key={feature}>
                <Check size={14} />
                {feature}
              </li>
            ))}
          </ul>
          <Button
            asChild
            variant={unit.capacity === popularCapacity ? "default" : "outline"}
            className="equipment-action"
          >
            <Link to="/contact" search={{ capacity: unit.capacity }}>
              Request this unit <ArrowUpRight size={14} />
            </Link>
          </Button>
        </article>
      ))}
    </div>
  );
}

export function HomePage() {
  return (
    <>
      <section className="home-hero">
        <img
          className="home-hero-image"
          src={technicianImage}
          alt="A PureCharge technician carefully servicing a wall-mounted air conditioner"
          fetchPriority="high"
        />
        <div className="home-hero-shade" />
        <div className="home-hero-content">
          <span className="hero-location">
            <span /> ZIMBABWE’S CLIMATE SPECIALISTS
          </span>
          <h1>
            Breathe easy,
            <br />
            live cool in Harare.
          </h1>
          <p>
            Premium air conditioning supply, precision installation, and ongoing care for homes and
            workplaces.
          </p>
          <div className="hero-actions">
            <Button asChild size="lg">
              <Link to="/contact">
                Get a free quotation <ArrowRight size={16} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="hero-secondary">
              <a
                href={`https://wa.me/${contacts.primaryWhatsApp}`}
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp <ArrowUpRight size={16} />
              </a>
            </Button>
          </div>
          <div className="hero-proof">
            <span>
              <BadgeCheck size={16} /> Brand retailer
            </span>
            <span>
              <CheckCircle2 size={16} /> $90 flat-rate installation
            </span>
            <span>
              <Zap size={16} /> Rapid response
            </span>
          </div>
        </div>
        <a className="hero-scroll" href="#home-highlights">
          Explore PureCharge <ArrowRight size={15} />
        </a>
      </section>
      <section className="home-highlights" id="home-highlights">
        <div className="highlight-intro">
          <p className="eyebrow">Comfort, without the guesswork</p>
          <h2>Everything your space needs to feel just right.</h2>
          <p>
            From choosing the right unit to the final performance check, our Harare team takes care
            of the details.
          </p>
        </div>
        <div className="highlight-links">
          <Link to="/services">
            <span className="highlight-icon">
              <Wind />
            </span>
            <span>
              <strong>Supply &amp; installation</strong>
              <small>Measured, fitted, and commissioned.</small>
            </span>
            <ArrowUpRight size={17} />
          </Link>
          <Link to="/pricing">
            <span className="highlight-icon green">
              <CheckCircle2 />
            </span>
            <span>
              <strong>Clear, upfront prices</strong>
              <small>Inverter units from $460.</small>
            </span>
            <ArrowUpRight size={17} />
          </Link>
          <Link to="/why-us">
            <span className="highlight-icon cyan">
              <ShieldCheck />
            </span>
            <span>
              <strong>Support close to home</strong>
              <small>Local coverage across Greater Harare.</small>
            </span>
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <section className="home-service-teaser section-band">
        <div className="section-inner">
          <div className="section-topline">
            <div>
              <p className="eyebrow">Our capabilities</p>
              <h2>Expert climate services</h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/services">
                Explore our services <ArrowRight size={15} />
              </Link>
            </Button>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <Link className="service-card" to="/services" key={service.number}>
                <img src={service.image} alt="" loading="lazy" />
                <div className="service-card-copy">
                  <span className="service-number">
                    {service.number} / {service.label}
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="text-link">
                    Discover the service <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <QuoteCallout />
    </>
  );
}

export function ServicesPage() {
  return (
    <>
      <section className="page-intro">
        <div className="content-width">
          <PageHeading
            eyebrow="Our capabilities"
            title="Climate care that’s done properly."
            text="From first measurement to maintenance, every step is planned for the realities of Harare’s climate."
          />
          <div className="intro-note">
            <span className="note-icon">
              <Sparkles size={18} />
            </span>
            <p>
              One team for supply, careful installation, quick repairs, and ongoing maintenance.
            </p>
          </div>
        </div>
      </section>
      <section className="page-section">
        <div className="content-width service-detail-list">
          {services.map((service) => (
            <article className="service-detail" key={service.number}>
              <div className="service-detail-photo">
                <img src={service.image} alt={`${service.title} by PureCharge`} loading="lazy" />
              </div>
              <div className="service-detail-copy">
                <p className="eyebrow">
                  {service.number} · {service.label}
                </p>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <div className="service-detail-note">
                  <service.icon size={18} />
                  <span>{service.detail}</span>
                </div>
                <Button asChild variant="outline">
                  <Link to="/contact">
                    Ask about this service <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <QuoteCallout />
    </>
  );
}

export function BrandsPage() {
  return (
    <>
      <section className="page-intro">
        <div className="content-width">
          <PageHeading
            eyebrow="Trusted inverter brands"
            title="Reliable cooling, from brands we trust."
            text="We help you compare inverter systems for quiet comfort, efficient operation, and the way your home or business runs."
          />
        </div>
      </section>
      <section className="page-section">
        <div className="content-width">
          <div className="brand-grid">
            {brands.map((brand, index) => (
              <article className="brand-card" key={brand.name}>
                <div className={`brand-mark brand-mark-${index}`}>
                  <span>{brand.icon}</span>
                  <span className="brand-label">{brand.label}</span>
                </div>
                <p className="eyebrow">{brand.badge}</p>
                <h2>{brand.name}</h2>
                <p>{brand.description}</p>
                <div className="brand-card-bottom">
                  <span>
                    <CheckCircle2 size={15} /> Inverter range
                  </span>
                  <Button asChild variant="outline">
                    <Link to="/contact">
                      Ask about availability <ArrowRight size={14} />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
          <div className="brand-help">
            <span className="note-icon">
              <Headset size={19} />
            </span>
            <div>
              <h2>Not sure which brand to choose?</h2>
              <p>
                Tell us about your room, backup power, and budget. We’ll help you narrow down the
                options.
              </p>
            </div>
            <Button asChild>
              <Link to="/contact">
                Talk to our team <ArrowRight size={15} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <QuoteCallout />
    </>
  );
}

export function PricingPage() {
  return (
    <>
      <section className="page-intro pricing-intro">
        <div className="content-width">
          <PageHeading
            eyebrow="Equipment & installation"
            title="Know the price before you choose."
            text="Clear Electro Master inverter pricing. TCL and Hisense quotations are available on request."
          />
          <div className="pricing-context">
            <span>
              <CheckCircle2 size={17} /> VAT-inclusive unit prices
            </span>
            <span>
              <CheckCircle2 size={17} /> Installation priced separately
            </span>
          </div>
        </div>
      </section>
      <section className="page-section pricing-section">
        <div className="content-width">
          <EquipmentGrid />
          <div className="install-banner">
            <div className="install-banner-icon">
              <Wrench size={21} />
            </div>
            <div>
              <p className="eyebrow">Professional fitment</p>
              <h2>Standard installation · ${standardInstallationPrice} per unit</h2>
              <p>
                Across Harare. Includes bracket, 3m copper piping, trunking, and full commissioning.
              </p>
            </div>
            <Button asChild variant="secondary">
              <Link to="/contact">
                Book an installation <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
          <p className="pricing-disclaimer">
            Final sizing and installation details are confirmed with our team before you proceed.
            TCL and Hisense prices quoted on request.
          </p>
        </div>
      </section>
      <QuoteCallout />
    </>
  );
}

export function WhyUsPage() {
  return (
    <>
      <section className="page-intro">
        <div className="content-width">
          <PageHeading
            eyebrow="Uncompromising quality"
            title="Good cooling starts with good decisions."
            text="Careful equipment selection and considered installation make all the difference, year after year."
          />
        </div>
      </section>
      <section className="page-section trust-section">
        <div className="content-width trust-layout">
          <div className="trust-photo">
            <img
              src={technicianImage}
              alt="PureCharge technician carrying out a professional air conditioning service"
              loading="lazy"
            />
            <span className="trust-photo-caption">
              <BadgeCheck size={17} /> Harare climate specialists
            </span>
          </div>
          <div className="trust-items">
            {trustReasons.map((reason, index) => (
              <article className="trust-item" key={reason.title}>
                <span className="trust-index">0{index + 1}</span>
                <span className="trust-icon">
                  <reason.icon size={19} />
                </span>
                <div>
                  <h2>{reason.title}</h2>
                  <p>{reason.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="testimonials-section">
        <div className="content-width">
          <div className="section-topline">
            <div>
              <p className="eyebrow">Client experiences</p>
              <h2>Trusted by homes &amp; offices</h2>
            </div>
            <span className="rating-note">
              <span>★★★★★</span> Local customers, real work
            </span>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((item) => (
              <article className="testimonial" key={item.initials}>
                <div className="star-row" aria-label="Five stars">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <blockquote>“{item.quote}”</blockquote>
                <div className="testimonial-author">
                  <span>{item.initials}</span>
                  <p>
                    <strong>{item.name}</strong>
                    <small>{item.area}</small>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <QuoteCallout />
    </>
  );
}

export function GalleryPage() {
  return (
    <>
      <section className="page-intro">
        <div className="content-width">
          <PageHeading
            eyebrow="Our recent work"
            title="The little details make a difference."
            text="A look at installations and service work across homes and workplaces in Harare."
          />
        </div>
      </section>
      <section className="page-section gallery-section">
        <div className="content-width">
          <div className="gallery-grid">
            {gallery.map((project, index) => (
              <figure className={`gallery-card gallery-card-${index + 1}`} key={project.location}>
                <div className="gallery-photo">
                  <img src={project.image} alt={project.alt} loading="lazy" />
                  <span className="gallery-number">0{index + 1}</span>
                </div>
                <figcaption>
                  <div>
                    <h2>{project.location}</h2>
                    <p>{project.unit}</p>
                  </div>
                  <ArrowUpRight size={18} />
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="gallery-caption">
            Every space is different. We’ll recommend the right fit after learning about yours.
          </p>
        </div>
      </section>
      <QuoteCallout />
    </>
  );
}

export function ContactPage({ initialCapacity }: { initialCapacity: string | undefined }) {
  return (
    <>
      <section className="page-intro contact-intro">
        <div className="content-width">
          <PageHeading
            eyebrow="Fast response · Greater Harare"
            title="Let’s talk about your space."
            text="Request a quotation, ask about a product, or get in touch with our local team."
          />
        </div>
      </section>
      <section className="page-section contact-section">
        <div className="content-width contact-layout">
          <div className="contact-details">
            <div className="contact-info-block">
              <span className="contact-info-icon">
                <PhoneIcon />
              </span>
              <div>
                <h2>Call our team</h2>
                <a href={`tel:${contacts.primaryPhone.replaceAll(" ", "")}`}>
                  {contacts.primaryPhone}
                </a>
                <a href={`tel:${contacts.secondaryPhone.replaceAll(" ", "")}`}>
                  {contacts.secondaryPhone}
                </a>
              </div>
            </div>
            <div className="contact-info-block">
              <span className="contact-info-icon green">
                <MapPin size={20} />
              </span>
              <div>
                <h2>Service area</h2>
                <p>{contacts.serviceArea}</p>
              </div>
            </div>
            <div className="contact-whatsapp">
              <p className="eyebrow">Prefer messaging?</p>
              <h2>We’re one message away.</h2>
              <p>Chat directly with our team on WhatsApp.</p>
              <Button asChild variant="secondary">
                <a
                  href={`https://wa.me/${contacts.primaryWhatsApp}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat on WhatsApp <ArrowUpRight size={16} />
                </a>
              </Button>
            </div>
            <p className="contact-hours">
              <span />
              <span>Available 6 days a week · Rapid local dispatch</span>
            </p>
          </div>
          <div className="quote-form-panel">
            <div className="quote-form-heading">
              <p className="eyebrow">Get a tailored quote</p>
              <h2>Tell us what you need.</h2>
              <p>Share a few details and we’ll prepare a message for you to send to our team.</p>
            </div>
            <QuoteForm initialCapacity={initialCapacity} />
          </div>
        </div>
      </section>
    </>
  );
}

function PhoneIcon() {
  return (
    <span className="phone-mark" aria-hidden="true">
      +263
    </span>
  );
}
