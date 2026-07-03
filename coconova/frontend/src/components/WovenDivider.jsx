export default function WovenDivider({ flip = false }) {
  return (
    <div className={`woven-divider ${flip ? 'flip' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path className="strand strand-a" d="M0,30 C150,5 300,55 450,30 C600,5 750,55 900,30 C1000,14 1100,44 1200,30" />
        <path className="strand strand-b" d="M0,30 C150,55 300,5 450,30 C600,55 750,5 900,30 C1000,44 1100,14 1200,30" />
      </svg>
    </div>
  )
}
