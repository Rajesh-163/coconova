import { useState } from 'react'
import WovenDivider from './components/WovenDivider'
import ContactForm from './components/ContactForm'
import './App.css'

const PRODUCTS = [
  { name: 'Coir Cups', desc: 'Single-use replacement cups molded from pressed coir, compostable end to end.' },
  { name: 'Coir Tea & Coffee Cups / Gilas', desc: 'Traditional gilas and cups for hot beverages, built for cafés and hotels.' },
  { name: 'Coir Planters & Garden Pots', desc: 'Breathable, biodegradable pots that feed the soil as they break down.' },
  { name: 'Coir Kitchen Scrubbers', desc: 'Naturally abrasive, plastic-free scrubbers for daily kitchen use.' },
  { name: 'Custom Coir Molded Products', desc: 'Bespoke shapes and forms pressed to your specification.' },
  { name: 'Private Label & OEM', desc: 'White-label manufacturing with your branding, ready for retail.' },
  { name: 'Coconut Disposables', desc: 'A full range of single-use coconut-based disposable items.' },
  { name: 'Coconut Product Range', desc: 'Broader coconut-derived product lines, built to order.' },
]

const WHY = [
  '100% natural coconut coir',
  'Eco-friendly & biodegradable',
  'Strong and durable products',
  'Sustainable manufacturing process',
  'Premium quality assurance',
  'Bulk supply & export ready',
  'Custom design and branding available',
]

const PROCESS = [
  { step: '01', title: 'Source', desc: 'High-quality coconut husks are sourced from trusted regional suppliers.' },
  { step: '02', title: 'Clean', desc: 'Husks are cleaned to separate raw coir fiber from pith and debris.' },
  { step: '03', title: 'Dry', desc: 'Fiber is dried to the moisture level required for consistent molding.' },
  { step: '04', title: 'Mold & Press', desc: 'Coir is pressed and molded into the target product shape.' },
  { step: '05', title: 'Finish', desc: 'Each piece is trimmed, treated, and finished for a clean, food-safe surface.' },
  { step: '06', title: 'Inspect', desc: 'Every batch passes quality inspection before it leaves the facility.' },
]

const INDUSTRIES = [
  'Tea & Coffee Brands', 'Cafés & Restaurants', 'Hotels & Resorts',
  'Gardening & Nursery', 'Retail Stores', 'Export Markets', 'Corporate & Promotional Gifts'
]

function useMobileNav() {
  const [open, setOpen] = useState(false)
  return { open, toggle: () => setOpen(o => !o), close: () => setOpen(false) }
}

export default function App() {
  const nav = useMobileNav()

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="wordmark">Coco<span>Nova</span></a>
          <nav className={`main-nav ${nav.open ? 'open' : ''}`}>
            <a href="#products" onClick={nav.close}>Products</a>
            <a href="#process" onClick={nav.close}>Process</a>
            <a href="#industries" onClick={nav.close}>Industries</a>
            <a href="#contact" onClick={nav.close} className="btn btn-primary btn-small">Get a quote</a>
          </nav>
          <button className="nav-toggle" onClick={nav.toggle} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="hero-fiber-bg" aria-hidden="true" />
          <div className="container hero-inner">
            <p className="eyebrow">CocoNova Industrial Pvt Ltd</p>
            <h1 className="hero-title">
              Nature Inspired.<br /><span>Future Focused.</span>
            </h1>
            <p className="hero-sub">
              We transform renewable coconut fiber into sustainable, durable, biodegradable
              products — replacing single-use plastic, batch by batch.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">Request bulk quote</a>
              <a href="#products" className="btn btn-ghost">See what we manufacture</a>
            </div>
          </div>
        </section>

        <WovenDivider />

        {/* ABOUT / MISSION / VISION */}
        <section className="section about">
          <div className="container about-grid">
            <div>
              <p className="eyebrow">Who we are</p>
              <h2>Manufacturing that starts with a husk, not a barrel of plastic.</h2>
              <p className="body-lg">
                CocoNova is an eco-friendly manufacturing company producing premium-quality
                goods from natural coconut coir. Our process combines modern technique with
                natural raw material to deliver products that meet high standards of quality,
                strength, and sustainability.
              </p>
            </div>
            <div className="mission-vision">
              <div className="mv-card">
                <p className="eyebrow">Mission</p>
                <p>Replace single-use plastic with eco-friendly coconut coir alternatives, promoting sustainable manufacturing and environmental responsibility.</p>
              </div>
              <div className="mv-card">
                <p className="eyebrow">Vision</p>
                <p>To become a trusted global brand in eco-friendly coconut coir products through innovation, quality, and sustainability.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="section products" id="products">
          <div className="container">
            <p className="eyebrow">What we manufacture</p>
            <h2>Eight product lines, one raw material.</h2>
            <div className="product-grid">
              {PRODUCTS.map((p) => (
                <div className="product-card" key={p.name}>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <WovenDivider flip />

        {/* WHY CHOOSE US */}
        <section className="section why">
          <div className="container why-grid">
            <div>
              <p className="eyebrow">Why CocoNova</p>
              <h2>Built to replace plastic, not imitate it.</h2>
            </div>
            <ul className="why-list">
              {WHY.map((w) => (
                <li key={w}><span className="check">✓</span>{w}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* PROCESS */}
        <section className="section process" id="process">
          <div className="container">
            <p className="eyebrow">Our manufacturing process</p>
            <h2>From husk to finished product, six controlled stages.</h2>
            <div className="process-track">
              {PROCESS.map((s) => (
                <div className="process-step" key={s.step}>
                  <span className="process-number">{s.step}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="section industries" id="industries">
          <div className="container">
            <p className="eyebrow">Industries we serve</p>
            <h2>From café counters to export containers.</h2>
            <div className="industry-tags">
              {INDUSTRIES.map((i) => (
                <span className="industry-tag" key={i}>{i}</span>
              ))}
            </div>
          </div>
        </section>

        <WovenDivider />

        {/* SUSTAINABILITY */}
        <section className="section sustainability">
          <div className="container sustainability-inner">
            <p className="eyebrow">Sustainability commitment</p>
            <h2>Coconut waste in. A greener future out.</h2>
            <p className="body-lg">
              Sustainability is at the heart of everything we do. By converting coconut waste
              into valuable products, we reduce environmental impact and contribute to a
              cleaner planet — one cup, planter, and scrubber at a time.
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact" id="contact">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">Contact us</p>
              <h2>Bulk orders, OEM manufacturing, export supply.</h2>
              <div className="contact-details">
                <p><strong>CocoNova Industrial Pvt Ltd</strong></p>
                <p>Eco-friendly coconut coir products manufacturer</p>
                <p><a href="mailto:ummeshswami2000@gmail.com">ummeshswami2000@gmail.com</a></p>
                <p><a href="tel:+919983552027">+91 99835 52027</a></p>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span className="wordmark">Coco<span>Nova</span></span>
          <p>© {new Date().getFullYear()} CocoNova Industrial Pvt Ltd. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
