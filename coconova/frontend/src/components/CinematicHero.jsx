export default function CinematicHero() {
  return (
    <div className="cinematic-bg" aria-hidden="true">
      <video
        className="cinematic-video"
        src="/video/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="cinematic-overlay" />
    </div>
  )
}
