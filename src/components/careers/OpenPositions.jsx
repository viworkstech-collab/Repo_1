import PositionCard from './PositionCard';

const positions = [
  { dept: 'Engineering', title: 'Senior Fullstack Engineer', location: 'Remote / Full-time' },
  { dept: 'Design', title: 'Product Designer (Systems)', location: 'Berlin or Remote' },
  { dept: 'Operations', title: 'Technical Project Manager', location: 'New York / Hybrid' },
  { dept: 'Marketing', title: 'Growth & Data Analyst', location: 'Remote' },
];

export default function OpenPositions() {
  return (
    <section className="positions-section">
      <p className="positions-label">Open Positions (0{positions.length})</p>
      <div className="positions-list">
        {positions.map((p) => (
          <PositionCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
