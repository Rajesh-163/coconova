const SLIDES = [
  '/products/workshop-group.jpg',
  '/products/tray-bowl.jpg',
  '/products/painted-planter.jpg',
  '/products/scrubbers-stack.jpg',
]

export default function CinematicHero() {
  return (
    <div className="cinematic-bg" aria-hidden="true">
      {SLIDES.map((src, i) => (
        <div
          className="cinematic-slide"
          key={src}
          style={{
            backgroundImage: `url(${src})`,
            animationDelay: `${i * 6}s`,
          }}
        />
      ))}
      <div className="cinematic-overlay" />
    </div>
  )
}
