const services = [
  { title: "Web Development", desc: "Modern responsive websites" },
  { title: "Mobile Apps", desc: "iOS & Android applications" },
  { title: "UI/UX Design", desc: "Clean and user-friendly designs" },
];

export default function Services() {
  return (
    <section className="section section-services">
      <h2 className="section-title">Our Services</h2>

      <div className="card-grid">
        {services.map((s, i) => (
          <div
            key={i}
            className="card"
          >
            <h3 className="card-title">{s.title}</h3>
            <p className="card-text">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}