import { useState, useEffect } from 'react'
import ContactForm from './components/ContactForm'
import Reveal from './components/Reveal'
import ScrollProgress from './components/ScrollProgress'
import CinematicHero from './components/CinematicHero'
import Marquee from './components/Marquee'
import './App.css'

const PRODUCTS = [
  { name: 'Coir Cups', desc: 'Pressed from pure coconut fiber. No plastic lining, no wax coating. Returns to the earth in weeks, not centuries.', image: '/products/plain-cup.jpg' },
  { name: 'Tea & Coffee Cups, Gilas', desc: 'The gilas your grandmother used, reimagined for cafés. Thick-walled, naturally insulated, fully compostable.', image: '/products/cup-spoon.jpg' },
  { name: 'Planters & Garden Pots', desc: "Pots that don't just hold soil, they feed it as the coir breaks down around the roots.", image: '/products/painted-planter.jpg' },
  { name: 'Kitchen Scrubbers', desc: 'Naturally abrasive coir, stitched tight to outlast plastic scourers, then compost instead of clogging a landfill.', image: '/products/scrubbers-stack.jpg' },
  { name: 'Custom Molded Products', desc: 'Trays, bowls, and bespoke forms pressed to your exact specification.', image: '/products/tray-bowl.jpg' },
  { name: 'Coconut Disposables', desc: 'A complete single-use line, built for one use and engineered to vanish after.', image: '/products/scrubbers-mat.jpg' },
]

const WHY = [
  '100% natural coconut coir',
  'Fully biodegradable, zero plastic',
  'Food-safe, durable finish',
  'Low-waste manufacturing process',
  'Bulk supply & export logistics',
  'Private-label & custom branding',
]

const SYSTEM = [
  { step: '01', title: 'Source', product: 'RAW COCONUT HUSK', desc: 'Husks arrive fresh from regional coconut farms, selected for fiber quality and consistency before a single piece is molded.', image: '/products/workshop-group.jpg' },
  { step: '02', title: 'Clean', product: 'WASHED COIR FIBER', desc: 'Fiber is separated from pith and washed until nothing but strong, usable coir remains.', image: '/products/scrubbers-mat.jpg' },
  { step: '03', title: 'Mold & Press', product: 'PRESSED FORM', desc: 'Fiber is pressed under heat and pressure into the final cup, bowl, or planter shape.', image: '/products/tray-bowl.jpg' },
  { step: '04', title: 'Finish & Inspect', product: 'READY TO SHIP', desc: 'Edges trimmed, surfaces treated, every batch checked by hand before it clears the floor.', image: '/products/painted-planter.jpg' },
]

const INDUSTRIES = [
  'Tea & Coffee Brands', 'Cafés & Restaurants', 'Hotels & Resorts',
  'Gardening & Nursery', 'Retail Stores', 'Export Markets', 'Corporate & Promotional Gifts'
]

function useMobileNav() {
  const [open, setOpen] = useState(false)
  return { open, toggle: () => setOpen(o => !o), close: () => setOpen(false) }
}

function useScrolledHeader() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > window.innerHeight * 0.72)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return scrolled
}

export default function App() {
  const nav = useMobileNav()
  const scrolled = useScrolledHeader()

  return (
    <>
      <ScrollProgress />
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-inner">
          <nav className="main-nav main-nav-left">
            <a href="#products">Products</a>
            <a href="#process">Process</a>
          </nav>
          <a href="#top" className="wordmark">Coco<span>Nova</span></a>
          <nav className={`main-nav main-nav-right ${nav.open ? 'open' : ''}`}>
            <a href="#industries" onClick={nav.close}>Industries</a>
            <a href="#contact" onClick={nav.close} className="btn btn-primary btn-small">Get a quote</a>
          </nav>
          <button className="nav-toggle" onClick={nav.toggle} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </div>
      </header>

      <main id="top">
        {/* CINEMATIC HERO */}
        <section className="hero-cinema">
          <CinematicHero />
          <div className="container hero-cinema-inner">
            <p className="eyebrow hero-eyebrow">CocoNova Industrial Pvt Ltd</p>
            <h1 className="hero-cinema-title">
              Coconut Coir,<br />Engineered for a<br /><span>Plastic-Free Future.</span>
            </h1>
            <p className="hero-cinema-sub">
              Premium eco-friendly manufacturing, pressed from renewable coconut fiber.
              Bulk orders, OEM, and export supply.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">Request bulk quote</a>
              <a href="#products" className="btn btn-ghost-light">See the collection</a>
            </div>
          </div>
          <div className="scroll-cue">Scroll down</div>
        </section>

        {/* COLLECTION - horizontal premium carousel */}
        <section className="section collection" id="products">
          <div className="container">
            <Reveal>
              <p className="eyebrow">The collection</p>
              <h2>Manufactured, not mass produced.</h2>
            </Reveal>
          </div>
          <div className="product-rail">
            {PRODUCTS.map((p, i) => (
              <Reveal as="div" key={p.name} delay={i * 70} className="product-card">
                <div className="product-image">
                  <img src={p.image} alt={p.name} loading="lazy" />
                </div>
                <div className="product-card-body">
                  <span className="product-index">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PHILOSOPHY - full bleed statement */}
        <section className="philosophy">
          <div className="philosophy-bg" style={{ backgroundImage: 'url(/products/workshop-group.jpg)' }} />
          <div className="philosophy-overlay" />
          <div className="container philosophy-inner">
            <Reveal>
              <p className="eyebrow philosophy-eyebrow">Our philosophy</p>
              <h2 className="philosophy-statement">
                Every product we press is designed to disappear, not to last forever in a landfill.
              </h2>
              <a href="#process" className="btn btn-ghost-light">Explore our process</a>
            </Reveal>
          </div>
        </section>

        {/* SYSTEM - big numbered editorial steps */}
        <section className="section system" id="process">
          <div className="container">
            <Reveal>
              <p className="eyebrow">The manufacturing system</p>
              <h2>Four stages that turn husk into product.</h2>
            </Reveal>
          </div>
          <div className="system-list">
            {SYSTEM.map((s, i) => (
              <Reveal as="div" key={s.step} delay={i * 100} className={`system-row ${i % 2 === 1 ? 'reverse' : ''}`}>
                <div className="system-image">
                  <img src={s.image} alt={s.title} loading="lazy" />
                </div>
                <div className="system-text">
                  <span className="system-step">{s.step}/</span>
                  <h3>{s.title}</h3>
                  <p className="system-product">{s.product}</p>
                  <p className="system-desc">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="section why">
          <div className="container why-grid">
            <Reveal>
              <p className="eyebrow">Why CocoNova</p>
              <h2>Built to replace plastic, not imitate it.</h2>
            </Reveal>
            <ul className="why-list">
              {WHY.map((w, i) => (
                <Reveal as="li" key={w} delay={i * 60}>
                  <span className="check">/</span>
                  <span>{w}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* INDUSTRIES - marquee */}
        <section className="section industries" id="industries">
          <div className="container">
            <Reveal><p className="eyebrow">Industries we serve</p></Reveal>
          </div>
          <Marquee items={INDUSTRIES} />
        </section>

        {/* CONTACT */}
        <section className="section contact" id="contact">
          <div className="container contact-grid">
            <Reveal>
              <p className="eyebrow">Contact us</p>
              <h2>Bulk orders, OEM manufacturing, export supply.</h2>
              <div className="contact-details">
                <p><strong>CocoNova Industrial Pvt Ltd</strong></p>
                <p>Eco-friendly coconut coir products manufacturer</p>
                <p><a href="mailto:ummeshswami2000@gmail.com">ummeshswami2000@gmail.com</a></p>
                <p><a href="tel:+919983552027">+91 99835 52027</a></p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top">
          <span className="wordmark footer-wordmark">Coco<span>Nova</span></span>
          <div className="footer-links">
            <a href="#products">Products</a>
            <a href="#process">Process</a>
            <a href="#industries">Industries</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} CocoNova Industrial Pvt Ltd. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
