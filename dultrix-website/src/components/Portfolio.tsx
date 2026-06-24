const projects = [
  { name: "E-Commerce Platform" },
  { name: "School Management System" },
  { name: "AI Chat Application" },
];

export default function Portfolio() {
  return (
    <section className="section section-portfolio" id="portfolio">
      <h2 className="section-title">
        Our Portfolio
      </h2>

      <div className="card-grid">
        {projects.map((p, i) => (
          <div
            key={i}
            className="card"
          >
            <h3 className="card-title">{p.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}