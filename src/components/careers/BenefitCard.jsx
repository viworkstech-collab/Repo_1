export default function BenefitCard({ icon, name, desc }) {
  return (
    <div className="benefit-card">
      <div className="benefit-icon">{icon}</div>
      <h4 className="benefit-name">{name}</h4>
      <p className="benefit-desc">{desc}</p>
    </div>
  );
}
