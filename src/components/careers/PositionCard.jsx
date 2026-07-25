export default function PositionCard({ dept, title, location }) {
  return (
    <div className="position-card">
      <div className="position-left">
        <span className="position-dept">{dept}</span>
        <h3 className="position-title">{title}</h3>
      </div>
      <div className="position-right">
        <span className="position-location">{location}</span>
        <a href="#apply" className="position-apply">Apply Now</a>
      </div>
    </div>
  );
}
