export default function Marquee({ items }) {
  const doubled = [...items, ...items]
  return (
    <div className="marquee">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span className="marquee-item" key={i}>
            {item}
            <span className="marquee-dot">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
