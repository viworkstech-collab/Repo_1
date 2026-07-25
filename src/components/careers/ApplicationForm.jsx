import { useState } from 'react';

export default function ApplicationForm() {
  const [form, setForm] = useState({
    name: '', email: '', position: '', portfolio: '', cover: '',
  });

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    alert('Application submitted!');
  };

  return (
    <section className="application-section" id="apply">
      <div className="form-wrapper">
        <h2 className="form-title">Ready to begin?</h2>
        <p className="form-subtitle">Fill out the form below and our team will be in touch within 48 hours.</p>

        <form onSubmit={submit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input className="form-input" name="name" placeholder="John Doe" value={form.name} onChange={handle} required />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input className="form-input" name="email" type="email" placeholder="john@example.com" value={form.email} onChange={handle} required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Desired Position</label>
              <select className="form-select" name="position" value={form.position} onChange={handle} required>
                <option value="" disabled>Select a role...</option>
                <option>Senior Fullstack Engineer</option>
                <option>Product Designer (Systems)</option>
                <option>Technical Project Manager</option>
                <option>Growth & Data Analyst</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Link to Portfolio / LinkedIn</label>
              <input className="form-input" name="portfolio" placeholder="https://" value={form.portfolio} onChange={handle} />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Cover Letter / Why ViworkTech?</label>
            <textarea className="form-textarea" name="cover" placeholder="Tell us about your technical philosophy..." value={form.cover} onChange={handle} />
          </div>

          <hr className="form-divider" />
          <button type="submit" className="form-submit">Submit Application</button>
        </form>
      </div>
    </section>
  );
}
