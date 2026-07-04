import { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronDown, Menu, X, Check, Download, Play, BookOpen, FileText, BarChart3, Zap, Globe, Calculator, Settings, Users, Phone, Mail, MapPin, Clock, Shield, TrendingUp, Layers, Monitor, Smartphone, CreditCard, ShoppingCart, MessageSquare, Calendar, FileCheck, Workflow, Database, PieChart, Lightbulb, Target, Award, CheckCircle2, ArrowUpRight, ChevronRight, Star, Building2, Coffee, Store, Briefcase, Wrench, UtensilsCrossed, LayoutDashboard, GitBranch, Bot, FolderOpen, Send, ExternalLink } from "lucide-react";

/* ─── Design Tokens ─── */
const C = {
  green: "#1B6B4A",
  greenDark: "#145237",
  greenLight: "#EDF6F0",
  greenMid: "#D0E8DA",
  gold: "#C49A2D",
  goldLight: "#FBF5E6",
  charcoal: "#1C1C28",
  gray900: "#2A2A3C",
  gray600: "#6B6B80",
  gray400: "#9E9EB0",
  gray200: "#E2E3E8",
  gray100: "#F3F4F6",
  gray50: "#F8F9FB",
  white: "#FFFFFF",
};

/* ─── Shared Styles ─── */
const font = `"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;

const baseBtn = {
  display: "inline-flex", alignItems: "center", gap: 8, fontFamily: font,
  fontSize: 15, fontWeight: 600, borderRadius: 12, cursor: "pointer",
  transition: "all 0.25s ease", border: "none", textDecoration: "none",
};
const btnPrimary = {
  ...baseBtn, background: C.green, color: C.white, padding: "14px 28px",
};
const btnSecondary = {
  ...baseBtn, background: "transparent", color: C.green, padding: "14px 28px",
  border: `1.5px solid ${C.green}`,
};
const btnGold = {
  ...baseBtn, background: C.gold, color: C.white, padding: "14px 28px",
};

/* ─── Page definitions ─── */
const PAGES = [
  { id: "home", label: "Home" },
  { id: "accounting", label: "Accounting Services" },
  { id: "websites", label: "Website Development" },
  { id: "systems", label: "Digital Business Systems" },
  { id: "automation", label: "Process Optimization" },
  { id: "resources", label: "Resources" },
  { id: "about", label: "About" },
  { id: "new-clients", label: "New Clients" },
  { id: "contact", label: "Contact" },
];

/* ─── Utility Components ─── */
function Section({ children, bg = C.white, style = {}, id }) {
  return (
    <section id={id} style={{ background: bg, padding: "96px 24px", ...style }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>{children}</div>
    </section>
  );
}

function SectionLabel({ children, color = C.green }) {
  return (
    <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color, marginBottom: 12 }}>
      {children}
    </div>
  );
}

function H2({ children, style = {} }) {
  return (
    <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, color: C.charcoal, lineHeight: 1.15, letterSpacing: -0.5, margin: 0, ...style }}>
      {children}
    </h2>
  );
}

function Paragraph({ children, style = {} }) {
  return <p style={{ fontSize: 17, lineHeight: 1.7, color: C.gray600, margin: 0, ...style }}>{children}</p>;
}

function ServiceCard({ icon: Icon, title, desc, onClick, accent = C.green }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: C.white, borderRadius: 16, padding: 32,
        border: `1px solid ${hov ? accent : C.gray200}`,
        cursor: onClick ? "pointer" : "default",
        transition: "all 0.3s ease",
        transform: hov ? "translateY(-4px)" : "none",
        boxShadow: hov ? "0 12px 32px rgba(27,107,74,0.08)" : "0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      <div style={{ width: 48, height: 48, borderRadius: 12, background: C.greenLight, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
        <Icon size={22} color={accent} />
      </div>
      <h3 style={{ fontSize: 19, fontWeight: 700, color: C.charcoal, margin: "0 0 10px" }}>{title}</h3>
      <Paragraph>{desc}</Paragraph>
      {onClick && (
        <div style={{ marginTop: 16, fontSize: 14, fontWeight: 600, color: accent, display: "flex", alignItems: "center", gap: 6 }}>
          Learn more <ArrowRight size={14} />
        </div>
      )}
    </div>
  );
}

function ServiceList({ items }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12, marginTop: 24 }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 0" }}>
          <Check size={16} color={C.green} style={{ marginTop: 3, flexShrink: 0 }} />
          <span style={{ fontSize: 15, color: C.gray600, lineHeight: 1.5 }}>{item}</span>
        </div>
      ))}
    </div>
  );
}

function CTABanner({ title, desc, btnText, onClick, bg }) {
  return (
    <Section bg={bg || C.green}>
      <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
        <H2 style={{ color: C.white }}>{title}</H2>
        <Paragraph style={{ color: "rgba(255,255,255,0.8)", marginTop: 16 }}>{desc}</Paragraph>
        <button onClick={onClick} style={{ ...btnPrimary, background: C.gold, marginTop: 28 }}>
          {btnText} <ArrowRight size={16} />
        </button>
      </div>
    </Section>
  );
}

function PhotoPlaceholder({ label, aspect = "56.25%", style = {} }) {
  return (
    <div style={{
      position: "relative", paddingBottom: aspect, borderRadius: 16, overflow: "hidden",
      background: `linear-gradient(135deg, ${C.greenLight} 0%, ${C.greenMid} 100%)`,
      ...style,
    }}>
      <div style={{
        position: "absolute", inset: 0, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", color: C.green, gap: 8,
      }}>
        <Monitor size={28} />
        <span style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, textAlign: "center", padding: "0 16px" }}>
          {label}
        </span>
      </div>
    </div>
  );
}

function Input({ label, type = "text", placeholder, textarea, options }) {
  const shared = {
    width: "100%", padding: "12px 16px", border: `1.5px solid ${C.gray200}`,
    borderRadius: 10, fontSize: 15, fontFamily: font, color: C.charcoal,
    background: C.white, outline: "none", boxSizing: "border-box",
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontSize: 13, fontWeight: 600, color: C.gray600 }}>{label}</label>
      {textarea ? (
        <textarea rows={4} placeholder={placeholder} style={{ ...shared, resize: "vertical" }} />
      ) : options ? (
        <select style={shared}>
          <option value="">{placeholder}</option>
          {options.map((o, i) => <option key={i} value={o}>{o}</option>)}
        </select>
      ) : (
        <input type={type} placeholder={placeholder} style={shared} />
      )}
    </div>
  );
}

/* ─── NAVIGATION ─── */
function Nav({ current, onNav }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, fontFamily: font,
      background: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.8)",
      backdropFilter: "blur(16px)", borderBottom: `1px solid ${scrolled ? C.gray200 : "transparent"}`,
      transition: "all 0.3s ease",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        {/* Logo */}
        <div onClick={() => onNav("home")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: `linear-gradient(135deg, ${C.green}, ${C.greenDark})`, display: "flex", alignItems: "center", justifyContent: "center", color: C.white, fontSize: 14, fontWeight: 800, letterSpacing: 1 }}>
            G
          </div>
          <span style={{ fontSize: 17, fontWeight: 700, color: C.charcoal, letterSpacing: -0.3 }}>
            GBI Partners
          </span>
        </div>

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="desktop-nav">
          {PAGES.filter(p => !["home"].includes(p.id)).slice(0, 6).map(p => (
            <button
              key={p.id} onClick={() => onNav(p.id)}
              style={{
                ...baseBtn, padding: "8px 14px", fontSize: 13.5, fontWeight: 500,
                color: current === p.id ? C.green : C.gray600,
                background: current === p.id ? C.greenLight : "transparent",
                borderRadius: 8,
              }}
            >
              {p.label}
            </button>
          ))}
          <button onClick={() => onNav("contact")} style={{ ...btnPrimary, padding: "10px 20px", fontSize: 13.5, marginLeft: 8 }}>
            Get Started
          </button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="mobile-nav-btn" style={{ background: "none", border: "none", cursor: "pointer", padding: 8 }}>
          {open ? <X size={24} color={C.charcoal} /> : <Menu size={24} color={C.charcoal} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: C.white, borderTop: `1px solid ${C.gray200}`, padding: "16px 24px 24px" }} className="mobile-menu">
          {PAGES.map(p => (
            <button
              key={p.id}
              onClick={() => { onNav(p.id); setOpen(false); }}
              style={{
                display: "block", width: "100%", textAlign: "left", padding: "14px 12px",
                background: current === p.id ? C.greenLight : "transparent",
                border: "none", borderRadius: 8, fontSize: 15, fontWeight: 500,
                color: current === p.id ? C.green : C.charcoal, cursor: "pointer", fontFamily: font,
              }}
            >
              {p.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ─── FOOTER ─── */
function Footer({ onNav }) {
  const cols = [
    { title: "Services", links: [
      { label: "Accounting Services", id: "accounting" },
      { label: "Website Development", id: "websites" },
      { label: "Digital Business Systems", id: "systems" },
      { label: "Process Optimization", id: "automation" },
    ]},
    { title: "Company", links: [
      { label: "About", id: "about" },
      { label: "Resources", id: "resources" },
      { label: "New Clients", id: "new-clients" },
      { label: "Contact", id: "contact" },
    ]},
    { title: "Legal", links: [
      { label: "Privacy Policy", id: null },
      { label: "Terms of Service", id: null },
      { label: "Client Portal", id: null },
    ]},
  ];
  return (
    <footer style={{ background: C.charcoal, padding: "80px 24px 40px", fontFamily: font }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48, marginBottom: 64 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: C.green, display: "flex", alignItems: "center", justifyContent: "center", color: C.white, fontSize: 13, fontWeight: 800 }}>G</div>
              <span style={{ fontSize: 16, fontWeight: 700, color: C.white }}>GBI Partners</span>
            </div>
            <p style={{ fontSize: 14, color: C.gray400, lineHeight: 1.7, maxWidth: 260 }}>
              Financial clarity for growing businesses. Accounting, technology, and business systems—integrated.
            </p>
          </div>
          {cols.map((col, i) => (
            <div key={i}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: C.gray400, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 16 }}>{col.title}</h4>
              {col.links.map((l, j) => (
                <button key={j} onClick={() => l.id && onNav(l.id)} style={{
                  display: "block", background: "none", border: "none", color: C.gray400,
                  fontSize: 14, padding: "6px 0", cursor: l.id ? "pointer" : "default",
                  fontFamily: font, transition: "color 0.2s",
                }}>
                  {l.label}
                </button>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: `1px solid rgba(255,255,255,0.08)`, paddingTop: 24, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 13, color: C.gray400 }}>© 2008–2026 GBI Partners LLC. All rights reserved.</span>
          <span style={{ fontSize: 13, color: C.gray400 }}>Florence, Kentucky</span>
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE: HOME ─── */
function HomePage({ onNav }) {
  return (
    <>
      {/* Hero */}
      <section style={{
        minHeight: "92vh", display: "flex", alignItems: "center",
        background: `linear-gradient(165deg, ${C.white} 0%, ${C.greenLight} 55%, ${C.greenMid} 100%)`,
        padding: "120px 24px 80px", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "-20%", right: "-10%", width: "60%", height: "120%",
          background: `radial-gradient(circle, rgba(196,154,45,0.06) 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 1120, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="hero-grid">
          <div>
            <SectionLabel color={C.gold}>GBI Partners LLC</SectionLabel>
            <h1 style={{
              fontSize: "clamp(36px, 5.5vw, 64px)", fontWeight: 800, color: C.charcoal,
              lineHeight: 1.05, letterSpacing: -1.5, margin: "8px 0 0",
            }}>
              Financial Clarity.<br />
              <span style={{ color: C.green }}>Smarter Systems.</span><br />
              Growing Businesses.
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: C.gray600, marginTop: 24, maxWidth: 480 }}>
              GBI Partners helps small businesses improve financial operations by connecting accounting, websites, customer experiences, digital systems, and automation into one integrated business solution.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 }}>
              <button onClick={() => onNav("contact")} style={btnPrimary}>
                Schedule a Consultation <ArrowRight size={16} />
              </button>
              <button onClick={() => onNav("accounting")} style={btnSecondary}>
                Explore Services
              </button>
            </div>
          </div>
          <div>
            <PhotoPlaceholder label="Business owner reviewing financial dashboard on laptop" aspect="75%" />
          </div>
        </div>
      </section>

      {/* What We Do */}
      <Section>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <SectionLabel>What We Do</SectionLabel>
          <H2>One partner for your accounting, technology, and growth.</H2>
          <Paragraph style={{ maxWidth: 560, margin: "16px auto 0" }}>
            We help business owners spend less time managing systems and more time running their business.
          </Paragraph>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20 }}>
          <ServiceCard icon={Calculator} title="Accounting Services" desc="Financial clarity through expert bookkeeping, advisory, and accounting systems that support better business decisions." onClick={() => onNav("accounting")} />
          <ServiceCard icon={Globe} title="Website Development" desc="Websites that help customers interact with your business while supporting the operations behind the scenes." onClick={() => onNav("websites")} />
          <ServiceCard icon={Layers} title="Digital Business Systems" desc="Connected systems that allow information to flow seamlessly from customers through operations and into your financials." onClick={() => onNav("systems")} />
          <ServiceCard icon={Zap} title="Process Optimization" desc="Reduce repetitive work, improve consistency, and save time through smart automation and streamlined workflows." onClick={() => onNav("automation")} />
        </div>
      </Section>

      {/* Why GBI */}
      <Section bg={C.gray50}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="hero-grid">
          <PhotoPlaceholder label="Modern workspace with dual monitors showing financial dashboards" aspect="70%" />
          <div>
            <SectionLabel>Why GBI Partners</SectionLabel>
            <H2>Accounting expertise meets modern technology.</H2>
            <Paragraph style={{ marginTop: 16 }}>
              Most businesses work with separate providers for accounting, websites, and technology. GBI Partners brings it all together—so your systems talk to each other, your data is reliable, and your time is spent on growth, not troubleshooting.
            </Paragraph>
            <div style={{ display: "grid", gap: 16, marginTop: 32 }}>
              {[
                { icon: Shield, t: "25+ Years of Experience", d: "Deep expertise in accounting, finance systems, and business process improvement." },
                { icon: TrendingUp, t: "Integrated Solutions", d: "Accounting, websites, and business systems designed to work together." },
                { icon: Target, t: "Small Business Focus", d: "Solutions built for the way small businesses actually operate." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: C.greenLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <item.icon size={18} color={C.green} />
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: C.charcoal }}>{item.t}</div>
                    <div style={{ fontSize: 14, color: C.gray600, marginTop: 4, lineHeight: 1.6 }}>{item.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Industries */}
      <Section>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <SectionLabel>Who We Work With</SectionLabel>
          <H2>Built for the businesses that build communities.</H2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 16 }}>
          {[
            { icon: Coffee, label: "Coffee Shops" },
            { icon: Store, label: "Retail Stores" },
            { icon: UtensilsCrossed, label: "Restaurants" },
            { icon: Briefcase, label: "Professional Services" },
            { icon: Wrench, label: "Contractors" },
            { icon: Building2, label: "Small Businesses" },
          ].map((ind, i) => (
            <div key={i} style={{
              textAlign: "center", padding: "28px 16px", borderRadius: 14,
              background: C.gray50, border: `1px solid ${C.gray200}`,
            }}>
              <ind.icon size={28} color={C.green} style={{ marginBottom: 10 }} />
              <div style={{ fontSize: 14, fontWeight: 600, color: C.charcoal }}>{ind.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Ready to simplify your business operations?"
        desc="Schedule a free consultation to discover how GBI Partners can help you gain financial clarity and build smarter systems."
        btnText="Schedule a Consultation"
        onClick={() => onNav("contact")}
      />
    </>
  );
}

/* ─── PAGE: ACCOUNTING ─── */
function AccountingPage({ onNav }) {
  return (
    <>
      <Section style={{ paddingTop: 140 }} bg={C.greenLight}>
        <div style={{ maxWidth: 720 }}>
          <SectionLabel>Accounting Services & Business Systems</SectionLabel>
          <H2>Your accounting system should support your business—not slow it down.</H2>
          <Paragraph style={{ marginTop: 20 }}>
            GBI Partners combines accounting expertise with decades of financial systems experience to improve financial visibility, streamline processes, and create reliable business information for better decisions.
          </Paragraph>
        </div>
      </Section>

      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "flex-start" }} className="hero-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: C.greenLight, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <BarChart3 size={20} color={C.green} />
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: C.charcoal, margin: 0 }}>Accounting Advisory & Systems Optimization</h3>
            </div>
            <Paragraph>
              Go beyond basic bookkeeping. We review your financial processes, optimize workflows, and build reporting systems that give you real visibility into your business performance.
            </Paragraph>
            <ServiceList items={[
              "Financial process reviews", "Accounting workflow optimization", "Business process consulting",
              "Cash flow visibility", "Management reporting", "KPI dashboards",
              "QuickBooks optimization", "Chart of Accounts design", "Internal controls",
              "Month-end close improvements", "Business process documentation", "Technology recommendations",
            ]} />
          </div>
          <PhotoPlaceholder label="Financial dashboard showing KPIs and cash flow trends" aspect="80%" />
        </div>
      </Section>

      <Section bg={C.gray50}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "flex-start" }} className="hero-grid">
          <PhotoPlaceholder label="Accountant reviewing financials on modern workspace" aspect="80%" />
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: C.greenLight, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FileText size={20} color={C.green} />
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: C.charcoal, margin: 0 }}>Bookkeeping & Accounting</h3>
            </div>
            <Paragraph>
              Reliable, accurate bookkeeping that keeps your finances current. From monthly reconciliations to CPA-ready financials, we handle the details so you can focus on your business.
            </Paragraph>
            <ServiceList items={[
              "Monthly bookkeeping", "Bank reconciliations", "Credit card reconciliations",
              "Financial statements", "Catch-up bookkeeping", "Cleanup bookkeeping",
              "Accounts payable support", "Accounts receivable support", "Payroll coordination",
              "Month-end close", "Year-end support", "CPA-ready financials", "QuickBooks Online support",
            ]} />
          </div>
        </div>
      </Section>

      <CTABanner
        title="Let's improve your financial operations."
        desc="Schedule a consultation to discuss how we can optimize your accounting systems and give you better visibility into your business."
        btnText="Schedule a Consultation"
        onClick={() => onNav("contact")}
      />
    </>
  );
}

/* ─── PAGE: WEBSITES ─── */
function WebsitesPage({ onNav }) {
  return (
    <>
      <Section style={{ paddingTop: 140 }} bg={C.greenLight}>
        <div style={{ maxWidth: 720 }}>
          <SectionLabel>Website Development</SectionLabel>
          <H2>A website should do more than look attractive.</H2>
          <Paragraph style={{ marginTop: 20 }}>
            It should help customers interact with your business while supporting the operations behind the scenes. We build websites that work as hard as you do.
          </Paragraph>
        </div>
      </Section>

      <Section>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: C.greenLight, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Monitor size={20} color={C.green} />
          </div>
          <h3 style={{ fontSize: 22, fontWeight: 700, color: C.charcoal, margin: 0 }}>Website Design & Development</h3>
        </div>
        <Paragraph style={{ maxWidth: 640 }}>
          From full business websites to targeted landing pages, we design and develop sites that are fast, mobile-optimized, and built for search visibility.
        </Paragraph>
        <ServiceList items={[
          "Business websites", "Website redesigns", "Landing pages", "SEO-ready structure",
          "Service pages", "Portfolio pages", "Photo galleries", "Contact forms",
          "Quote requests", "Appointment scheduling", "Mobile optimization", "Google Business Profile integration",
        ]} />
      </Section>

      <Section bg={C.gray50}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "flex-start" }} className="hero-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: C.goldLight, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ShoppingCart size={20} color={C.gold} />
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: C.charcoal, margin: 0 }}>Front-End Customer Experience</h3>
            </div>
            <Paragraph>Turn your website into an active sales and service channel. We integrate the tools your customers actually want to use.</Paragraph>
            <ServiceList items={[
              "Online ordering", "Gift card sales", "Customer portals", "Product catalogs",
              "Pickup scheduling", "Delivery requests", "Online payments", "Loyalty programs",
              "Memberships", "Subscriptions", "Reservations", "Event registrations",
              "Newsletter signup", "Customer reviews", "FAQs", "Live chat", "SMS marketing signup", "Interactive maps",
            ]} />
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: C.greenLight, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Settings size={20} color={C.green} />
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: C.charcoal, margin: 0 }}>Business Operations Features</h3>
            </div>
            <Paragraph>Behind every great customer experience is a well-organized back end. We build the operational tools your team needs.</Paragraph>
            <ServiceList items={[
              "Vendor portals", "Employment applications", "Secure document uploads",
              "Customer intake forms", "New client onboarding", "Invoice payment portals",
              "Electronic signatures", "File sharing", "Support ticket requests", "Online scheduling",
            ]} />
          </div>
        </div>
      </Section>

      <CTABanner
        title="Your website should work for your business."
        desc="Let's discuss how a well-designed website can improve your customer experience and streamline your operations."
        btnText="Start a Project"
        onClick={() => onNav("contact")}
      />
    </>
  );
}

/* ─── PAGE: DIGITAL BUSINESS SYSTEMS ─── */
function SystemsPage({ onNav }) {
  const flowSteps = [
    { icon: Users, label: "Customer" },
    { icon: Globe, label: "Website" },
    { icon: FileCheck, label: "Online Forms" },
    { icon: MessageSquare, label: "CRM" },
    { icon: CreditCard, label: "Payments" },
    { icon: ShoppingCart, label: "POS" },
    { icon: Database, label: "Inventory" },
    { icon: Calculator, label: "Accounting" },
    { icon: LayoutDashboard, label: "Dashboard" },
  ];

  return (
    <>
      <Section style={{ paddingTop: 140 }} bg={C.greenLight}>
        <div style={{ maxWidth: 720 }}>
          <SectionLabel>Digital Business Systems</SectionLabel>
          <H2>Modern businesses use many software systems. The challenge is making them work together.</H2>
          <Paragraph style={{ marginTop: 20 }}>
            GBI Partners designs connected business systems that allow information to flow from customers through accounting, reporting, and business operations—without the gaps.
          </Paragraph>
        </div>
      </Section>

      {/* Workflow Graphic */}
      <Section>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <SectionLabel>Connected Systems</SectionLabel>
          <H2>See how your business data flows.</H2>
          <Paragraph style={{ maxWidth: 560, margin: "12px auto 0" }}>
            From the moment a customer interacts with your business to the management dashboard you review each week—every step connected.
          </Paragraph>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0, maxWidth: 500, margin: "0 auto" }}>
          {flowSteps.map((step, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 16, padding: "16px 32px",
                background: C.white, borderRadius: 14, border: `1.5px solid ${C.greenMid}`,
                boxShadow: "0 2px 12px rgba(27,107,74,0.06)", width: 260,
              }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: i === 0 || i === flowSteps.length - 1 ? C.green : C.greenLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <step.icon size={18} color={i === 0 || i === flowSteps.length - 1 ? C.white : C.green} />
                </div>
                <span style={{ fontSize: 15, fontWeight: 600, color: C.charcoal }}>{step.label}</span>
              </div>
              {i < flowSteps.length - 1 && (
                <div style={{ width: 2, height: 24, background: `linear-gradient(${C.green}, ${C.greenMid})` }} />
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section bg={C.gray50}>
        <H2>Services that connect your systems.</H2>
        <Paragraph style={{ marginTop: 12, maxWidth: 560 }}>
          We design, implement, and optimize the technology infrastructure that keeps your business running smoothly.
        </Paragraph>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20, marginTop: 40 }}>
          {[
            { icon: GitBranch, t: "Business Workflow Design", d: "Map and design efficient workflows that reduce manual handoffs." },
            { icon: Layers, t: "Digital Transformation", d: "Move paper-based processes into modern digital systems." },
            { icon: Settings, t: "Systems Optimization", d: "Get more from the software tools you already use." },
            { icon: Workflow, t: "Business Process Mapping", d: "Document and improve how work moves through your organization." },
            { icon: Lightbulb, t: "Technology Consulting", d: "Make informed decisions about the right tools for your business." },
            { icon: PieChart, t: "Business Intelligence", d: "Turn your business data into actionable insights and reports." },
          ].map((s, i) => (
            <ServiceCard key={i} icon={s.icon} title={s.t} desc={s.d} />
          ))}
        </div>
      </Section>

      <CTABanner
        title="Connect your business systems."
        desc="Let's map your current technology and design an integrated system that works as one."
        btnText="Schedule a Consultation"
        onClick={() => onNav("contact")}
      />
    </>
  );
}

/* ─── PAGE: PROCESS OPTIMIZATION ─── */
function AutomationPage({ onNav }) {
  return (
    <>
      <Section style={{ paddingTop: 140 }} bg={C.greenLight}>
        <div style={{ maxWidth: 720 }}>
          <SectionLabel>Process Optimization & Automation</SectionLabel>
          <H2>Reduce repetitive work. Improve consistency. Save time.</H2>
          <Paragraph style={{ marginTop: 20 }}>
            Automation should simplify your business—not complicate it. We identify the tasks that consume your team's time and build practical solutions that free them to focus on what matters.
          </Paragraph>
        </div>
      </Section>

      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {[
            { icon: Workflow, t: "Workflow Automation", items: ["Workflow automation", "Document routing", "Vendor invoice processing", "Approval workflows", "Task automation"] },
            { icon: FolderOpen, t: "Document & Cloud Management", items: ["Google Workspace optimization", "Microsoft 365 optimization", "Google Drive organization", "Cloud document management", "Digital document management"] },
            { icon: Mail, t: "Communication & Reporting", items: ["Email automation", "Business dashboards", "Recurring reports", "Management reporting"] },
            { icon: Users, t: "Onboarding & AI", items: ["Customer onboarding automation", "Employee onboarding automation", "AI-assisted document processing", "Future AI workflow planning"] },
          ].map((group, i) => (
            <div key={i} style={{ background: C.white, borderRadius: 16, padding: 32, border: `1px solid ${C.gray200}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: C.greenLight, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <group.icon size={18} color={C.green} />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: C.charcoal, margin: 0 }}>{group.t}</h3>
              </div>
              {group.items.map((item, j) => (
                <div key={j} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0" }}>
                  <Check size={14} color={C.green} />
                  <span style={{ fontSize: 14, color: C.gray600 }}>{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Stop doing manually what your systems can handle."
        desc="Let's identify the processes that are costing you time and build practical automation solutions."
        btnText="Get Started"
        onClick={() => onNav("contact")}
      />
    </>
  );
}

/* ─── PAGE: RESOURCES ─── */
function ResourcesPage({ onNav }) {
  const resources = [
    { icon: FileCheck, t: "Business Startup Checklist", d: "Essential steps for launching your business on solid financial footing.", tag: "Checklist" },
    { icon: Calendar, t: "Monthly Close Checklist", d: "A step-by-step guide to closing your books accurately every month.", tag: "Checklist" },
    { icon: TrendingUp, t: "Cash Flow Guide", d: "Understand and manage your cash flow for sustainable growth.", tag: "Guide" },
    { icon: Shield, t: "Internal Controls Checklist", d: "Protect your business with proper financial controls and procedures.", tag: "Checklist" },
    { icon: Zap, t: "Business Automation Guide", d: "Identify opportunities to automate repetitive tasks and save time.", tag: "Guide" },
    { icon: Lightbulb, t: "Technology Planning Guide", d: "Make smart technology decisions that support your business goals.", tag: "Guide" },
    { icon: Calculator, t: "QuickBooks Tips", d: "Get more from QuickBooks with practical tips and best practices.", tag: "Tips" },
  ];

  return (
    <>
      <Section style={{ paddingTop: 140 }} bg={C.greenLight}>
        <div style={{ maxWidth: 720 }}>
          <SectionLabel>Resources</SectionLabel>
          <H2>Practical tools and guides for growing businesses.</H2>
          <Paragraph style={{ marginTop: 20 }}>
            Free resources designed to help you improve your financial operations, streamline processes, and make better business decisions.
          </Paragraph>
        </div>
      </Section>

      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {resources.map((r, i) => (
            <div key={i} style={{ background: C.white, borderRadius: 16, padding: 28, border: `1px solid ${C.gray200}`, display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: C.greenLight, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <r.icon size={20} color={C.green} />
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: C.gold, background: C.goldLight, padding: "4px 10px", borderRadius: 6 }}>{r.tag}</span>
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: C.charcoal, margin: "0 0 8px" }}>{r.t}</h3>
              <Paragraph style={{ fontSize: 14 }}>{r.d}</Paragraph>
              <div style={{ marginTop: "auto", paddingTop: 16 }}>
                <button style={{ ...baseBtn, fontSize: 13, fontWeight: 600, color: C.green, padding: 0, background: "none" }}>
                  <Download size={14} /> Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section bg={C.gray50}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }} className="hero-grid">
          <div style={{ background: C.white, borderRadius: 16, padding: 40, border: `1px solid ${C.gray200}`, textAlign: "center" }}>
            <BookOpen size={32} color={C.green} style={{ marginBottom: 16 }} />
            <h3 style={{ fontSize: 20, fontWeight: 700, color: C.charcoal, margin: "0 0 8px" }}>Articles</h3>
            <Paragraph>Insights on accounting, technology, and business operations. Coming soon.</Paragraph>
          </div>
          <div style={{ background: C.white, borderRadius: 16, padding: 40, border: `1px solid ${C.gray200}`, textAlign: "center" }}>
            <Play size={32} color={C.green} style={{ marginBottom: 16 }} />
            <h3 style={{ fontSize: 20, fontWeight: 700, color: C.charcoal, margin: "0 0 8px" }}>Videos & Webinars</h3>
            <Paragraph>Video content and live webinars on business growth topics. Coming soon.</Paragraph>
          </div>
        </div>
      </Section>
    </>
  );
}

/* ─── PAGE: ABOUT ─── */
function AboutPage({ onNav }) {
  return (
    <>
      <Section style={{ paddingTop: 140 }} bg={C.greenLight}>
        <div style={{ maxWidth: 720 }}>
          <SectionLabel>About GBI Partners</SectionLabel>
          <H2>Bridging the gap between accounting and technology since 2008.</H2>
        </div>
      </Section>

      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="hero-grid">
          <div>
            <Paragraph style={{ fontSize: 18 }}>
              GBI Partners was founded in 2008 with a clear mission: help small businesses gain financial clarity through smarter systems and better business processes.
            </Paragraph>
            <Paragraph style={{ marginTop: 20 }}>
              With more than 25 years of experience in accounting, finance systems, ERP consulting, and business process improvement, GBI Partners understands that great financial operations aren't just about accurate numbers—they're about building systems that give business owners the confidence and visibility to make better decisions.
            </Paragraph>
            <Paragraph style={{ marginTop: 20 }}>
              Today, GBI Partners bridges the gap between accounting and technology, helping small businesses connect their financial operations with modern digital systems, websites, and automation—all through one trusted partner.
            </Paragraph>
          </div>
          <PhotoPlaceholder label="Professional team meeting in modern office" aspect="75%" />
        </div>
      </Section>

      <Section bg={C.gray50}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
          {[
            { n: "2008", l: "Founded" },
            { n: "25+", l: "Years of Experience" },
            { n: "100s", l: "Businesses Served" },
            { n: "1", l: "Integrated Partner" },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: "center", padding: 32, background: C.white, borderRadius: 16, border: `1px solid ${C.gray200}` }}>
              <div style={{ fontSize: 36, fontWeight: 800, color: C.green, letterSpacing: -1 }}>{s.n}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: C.gray600, marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <H2>Our goal is simple.</H2>
          <Paragraph style={{ marginTop: 16, fontSize: 18 }}>
            Help business owners spend less time managing systems and more time running their business. Every service we offer—from bookkeeping to business automation—is designed to support that goal.
          </Paragraph>
          <button onClick={() => onNav("contact")} style={{ ...btnPrimary, marginTop: 32 }}>
            Work With Us <ArrowRight size={16} />
          </button>
        </div>
      </Section>
    </>
  );
}

/* ─── PAGE: NEW CLIENTS ─── */
function NewClientsPage({ onNav }) {
  const [active, setActive] = useState(0);
  const steps = [
    { icon: Calendar, t: "Schedule Consultation", d: "Book a free introductory call. We'll learn about your business and discuss how we can help. No pressure, no obligation—just a conversation about your goals." },
    { icon: FileText, t: "Complete Digital Intake", d: "We'll send you a simple online form to gather key details about your business, current systems, and priorities. This helps us prepare for a productive discovery meeting." },
    { icon: Users, t: "Discovery Meeting", d: "We'll walk through your current operations, identify pain points, and explore opportunities. This is where we start mapping the path from where you are to where you want to be." },
    { icon: FileCheck, t: "Proposal", d: "You'll receive a clear, detailed proposal outlining our recommended approach, scope of work, timeline, and investment. No surprises, no hidden fees." },
    { icon: Zap, t: "Implementation", d: "Once you're ready, we begin. Whether it's cleaning up your books, building a website, or connecting your systems—we execute with precision and clear communication." },
    { icon: Award, t: "Ongoing Partnership", d: "Great business relationships don't end at delivery. We provide ongoing support, regular check-ins, and continuous improvement to keep your systems running at their best." },
  ];

  return (
    <>
      <Section style={{ paddingTop: 140 }} bg={C.greenLight}>
        <div style={{ maxWidth: 720 }}>
          <SectionLabel>New Clients</SectionLabel>
          <H2>Getting started is simple.</H2>
          <Paragraph style={{ marginTop: 20 }}>
            We've designed a clear onboarding process so you know exactly what to expect at every step. Here's how we work together.
          </Paragraph>
        </div>
      </Section>

      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 48 }} className="hero-grid">
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {steps.map((s, i) => (
              <button
                key={i} onClick={() => setActive(i)}
                style={{
                  display: "flex", alignItems: "center", gap: 14, padding: "14px 18px",
                  background: active === i ? C.greenLight : "transparent",
                  border: active === i ? `1.5px solid ${C.green}` : "1.5px solid transparent",
                  borderRadius: 12, cursor: "pointer", textAlign: "left", fontFamily: font,
                  transition: "all 0.2s",
                }}
              >
                <div style={{
                  width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                  background: active === i ? C.green : C.gray200,
                  color: active === i ? C.white : C.gray600,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 14, fontWeight: 700,
                }}>
                  {i + 1}
                </div>
                <span style={{ fontSize: 14, fontWeight: 600, color: active === i ? C.green : C.gray600 }}>
                  {s.t}
                </span>
              </button>
            ))}
          </div>
          <div style={{ background: C.gray50, borderRadius: 20, padding: "48px 40px", border: `1px solid ${C.gray200}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: C.green, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {(() => { const Icon = steps[active].icon; return <Icon size={24} color={C.white} />; })()}
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: C.gold, textTransform: "uppercase", letterSpacing: 1 }}>Step {active + 1} of {steps.length}</div>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: C.charcoal, margin: 0 }}>{steps[active].t}</h3>
              </div>
            </div>
            <Paragraph style={{ fontSize: 16 }}>{steps[active].d}</Paragraph>
            {active === 0 && (
              <button onClick={() => onNav("contact")} style={{ ...btnPrimary, marginTop: 28 }}>
                Schedule Your Consultation <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}

/* ─── PAGE: CONTACT ─── */
function ContactPage() {
  return (
    <>
      <Section style={{ paddingTop: 140 }} bg={C.greenLight}>
        <div style={{ maxWidth: 720 }}>
          <SectionLabel>Contact</SectionLabel>
          <H2>Let's talk about your business.</H2>
          <Paragraph style={{ marginTop: 20 }}>
            Whether you need accounting support, a new website, connected business systems, or all of the above—we're here to help. Fill out the form below and we'll be in touch.
          </Paragraph>
        </div>
      </Section>

      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 64, alignItems: "flex-start" }} className="hero-grid">
          <div style={{ background: C.white, borderRadius: 20, padding: 40, border: `1px solid ${C.gray200}`, boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: C.charcoal, margin: "0 0 24px" }}>Tell us about your business</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-grid">
              <Input label="Name" placeholder="Your full name" />
              <Input label="Business Name" placeholder="Your company" />
              <Input label="Email" type="email" placeholder="you@example.com" />
              <Input label="Phone" type="tel" placeholder="(555) 000-0000" />
              <Input label="Industry" placeholder="e.g., Restaurant, Retail, Services" />
              <Input label="Number of Employees" placeholder="e.g., 1-5, 6-20" />
              <Input label="Current Accounting Software" placeholder="e.g., QuickBooks, Xero" />
              <Input label="Current Website" placeholder="yoursite.com" />
              <Input label="POS System" placeholder="e.g., Square, Toast" />
              <Input label="Desired Timeline" options={["Within 1 month", "1-3 months", "3-6 months", "Just exploring"]} placeholder="Select timeline" />
              <Input label="Budget Range" options={["Under $1,000", "$1,000–$5,000", "$5,000–$15,000", "$15,000+", "Not sure yet"]} placeholder="Select range" />
              <Input label="Primary Challenge" placeholder="What's your biggest pain point?" />
            </div>
            <div style={{ marginTop: 16 }}>
              <Input label="Message" textarea placeholder="Tell us more about what you're looking for..." />
            </div>
            <button style={{ ...btnPrimary, marginTop: 24, width: "100%" }}>
              <Send size={16} /> Send Message
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: C.gray50, borderRadius: 16, padding: 28, border: `1px solid ${C.gray200}` }}>
              <h4 style={{ fontSize: 15, fontWeight: 700, color: C.charcoal, margin: "0 0 16px" }}>Get in touch</h4>
              {[
                { icon: Mail, t: "Email", d: "info@gbipartnersllc.com" },
                { icon: MapPin, t: "Location", d: "Florence, Kentucky" },
                { icon: Clock, t: "Response Time", d: "Within 1 business day" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 14 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 9, background: C.greenLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <item.icon size={16} color={C.green} />
                  </div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: C.gray400 }}>{item.t}</div>
                    <div style={{ fontSize: 14, fontWeight: 500, color: C.charcoal }}>{item.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: C.green, borderRadius: 16, padding: 28 }}>
              <h4 style={{ fontSize: 15, fontWeight: 700, color: C.white, margin: "0 0 8px" }}>Free consultation</h4>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", lineHeight: 1.6, margin: 0 }}>
                Every engagement begins with a no-obligation conversation about your business. We'll listen first, then recommend a path forward.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

/* ─── MAIN APP ─── */
export default function App() {
  const [page, setPage] = useState("home");
  const nav = (id) => { setPage(id); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const pages = {
    home: <HomePage onNav={nav} />,
    accounting: <AccountingPage onNav={nav} />,
    websites: <WebsitesPage onNav={nav} />,
    systems: <SystemsPage onNav={nav} />,
    automation: <AutomationPage onNav={nav} />,
    resources: <ResourcesPage onNav={nav} />,
    about: <AboutPage onNav={nav} />,
    "new-clients": <NewClientsPage onNav={nav} />,
    contact: <ContactPage onNav={nav} />,
  };

  return (
    <div style={{ fontFamily: font, color: C.charcoal, overflowX: "hidden" }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; }
        body { margin: 0; -webkit-font-smoothing: antialiased; }
        button:hover { opacity: 0.92; }
        input:focus, select:focus, textarea:focus { border-color: ${C.green} !important; outline: none; }
        .desktop-nav { display: flex; }
        .mobile-nav-btn { display: none !important; }
        .mobile-menu { display: block; }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-btn { display: flex !important; }
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .form-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 901px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
      <Nav current={page} onNav={nav} />
      <main>{pages[page]}</main>
      <Footer onNav={nav} />
    </div>
  );
}
