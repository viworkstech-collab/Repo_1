import BenefitCard from './BenefitCard';

const benefits = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c0392b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    name: 'Remote First',
    desc: 'Synchronous work when it matters, deep focus time when it counts. Anywhere in the world.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c0392b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3.33 2 8.67 2 12 0v-5"/>
      </svg>
    ),
    name: 'Growth Fund',
    desc: 'Annual $5k budget for books, courses, conferences, and specialized technical certifications.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c0392b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <line x1="12" y1="8" x2="12" y2="14"/>
        <line x1="9" y1="11" x2="15" y2="11"/>
      </svg>
    ),
    name: 'Total Wellness',
    desc: 'Comprehensive medical, dental, and vision plus a dedicated monthly mental health stipend.',
  },
];

export default function Benefits() {
  return (
    <section className="benefits-section">
      <div className="benefits-header">
        <div className="benefits-header-left">
          <h2 className="benefits-title">Engineering the ideal work environment.</h2>
          <p className="benefits-subtitle">
            We prioritize focus, health, and continuous growth through structured benefits designed
            for the modern engineer.
          </p>
        </div>
      </div>
      <div className="benefits-grid">
        {benefits.map((b) => (
          <BenefitCard key={b.name} {...b} />
        ))}
      </div>
    </section>
  );
}
