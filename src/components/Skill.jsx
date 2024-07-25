export function Skill(label, width) {
  return (
    <div className="skill">
      <div className="label">{label}</div>
      <div className="bar" style={{width: `${width}%`}}></div>
    </div>
  )
}