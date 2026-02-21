const heroSlides = [
  {
    title: 'Build Smarter Product Ecosystems',
    subtitle:
      'Unified hardware, software, and service systems that accelerate time-to-value.',
    cta: 'Explore Platform',
  },
  {
    title: 'Engineer Reliability at Scale',
    subtitle:
      'From architecture to deployment, empower teams with dependable engineering patterns.',
    cta: 'View Engineering Services',
  },
  {
    title: 'Deliver Industry-Ready Experiences',
    subtitle:
      'Purpose-built solutions for complex operations, safety standards, and compliance.',
    cta: 'Browse Industry Solutions',
  },
];

const productSystems = [
  'IoT Device Management',
  'Factory Intelligence Suite',
  'Data Integration Hub',
  'Predictive Maintenance Engine',
  'Customer Portal Framework',
  'AI Ops Toolkit',
];

const industries = [
  {
    name: 'Manufacturing',
    description: 'Digitize plants with connected systems and real-time production intelligence.',
  },
  {
    name: 'Energy',
    description: 'Improve grid reliability and optimize field operations with predictive insights.',
  },
  {
    name: 'Healthcare',
    description: 'Secure, compliant platforms for critical workflows and medical operations.',
  },
];

const caseStudies = [
  {
    company: 'Northline Robotics',
    impact: 'Reduced equipment downtime by 37% across 12 global sites.',
  },
  {
    company: 'Apex Utilities',
    impact: 'Cut incident response times by 54% through unified telemetry systems.',
  },
];

const engineeringResources = [
  {
    title: 'Reference Architecture',
    text: 'Blueprint for scalable multi-tenant platform design with resilience patterns.',
    link: '#',
  },
  {
    title: 'DevOps Playbook',
    text: 'Operational guide for CI/CD, observability, and secure release pipelines.',
    link: '#',
  },
  {
    title: 'API Standards Kit',
    text: 'Best practices and templates for versioned, reliable enterprise APIs.',
    link: '#',
  },
];

export default function HomePage() {
  return (
    <main className="bg-light text-dark">
      <header className="container py-4 d-flex justify-content-between align-items-center">
        <h1 className="h3 m-0 fw-bold">Nova Systems</h1>
        <button className="btn btn-outline-primary">Talk to Team</button>
      </header>

      <section id="heroSlider" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#heroSlider"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="carousel-inner">
          {heroSlides.map((slide, index) => (
            <div key={slide.title} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="hero-slide d-flex align-items-center">
                <div className="container py-5">
                  <div className="col-lg-7">
                    <h2 className="display-5 fw-semibold">{slide.title}</h2>
                    <p className="lead mt-3 mb-4">{slide.subtitle}</p>
                    <button className="btn btn-primary btn-lg">{slide.cta}</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroSlider"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroSlider"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </section>

      <section className="container py-5">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body p-4">
                <h3 className="h4">Path for Buyers</h3>
                <p className="text-secondary">Compare capabilities, ROI, and deployment options.</p>
                <ul className="mb-4">
                  <li>Business case calculator</li>
                  <li>Roadmap alignment workshops</li>
                  <li>Executive implementation plans</li>
                </ul>
                <button className="btn btn-primary">Start Buyer Journey</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body p-4">
                <h3 className="h4">Path for Technical Teams</h3>
                <p className="text-secondary">Dive into architecture, integrations, and delivery guidance.</p>
                <ul className="mb-4">
                  <li>Detailed technical documentation</li>
                  <li>Sandbox environments</li>
                  <li>Solution engineering support</li>
                </ul>
                <button className="btn btn-outline-primary">Enter Technical Path</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white border-top border-bottom">
        <div className="container">
          <h3 className="h2 mb-4">Product Systems Grid</h3>
          <div className="row g-3">
            {productSystems.map((item) => (
              <div className="col-sm-6 col-lg-4" key={item}>
                <div className="p-4 h-100 rounded bg-light border">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-5">
        <h3 className="h2 mb-4">Industry Sections</h3>
        <div className="row g-4">
          {industries.map((industry) => (
            <div className="col-md-4" key={industry.name}>
              <article className="p-4 rounded shadow-sm h-100 bg-white">
                <h4 className="h5">{industry.name}</h4>
                <p className="text-secondary mb-0">{industry.description}</p>
              </article>
            </div>
          ))}
        </div>
      </section>

      <section className="py-5 bg-dark text-white">
        <div className="container">
          <h3 className="h2 mb-4">Case Studies</h3>
          <div className="row g-4">
            {caseStudies.map((study) => (
              <div className="col-md-6" key={study.company}>
                <div className="p-4 rounded border border-secondary h-100">
                  <h4 className="h5">{study.company}</h4>
                  <p className="mb-0">{study.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-5">
        <h3 className="h2 mb-4">Engineering Resource Blocks</h3>
        <div className="row g-4">
          {engineeringResources.map((resource) => (
            <div className="col-lg-4" key={resource.title}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4 d-flex flex-column">
                  <h4 className="h5">{resource.title}</h4>
                  <p className="text-secondary flex-grow-1">{resource.text}</p>
                  <a href={resource.link} className="btn btn-link px-0">
                    Read more →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
