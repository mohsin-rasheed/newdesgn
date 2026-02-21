const heroSlides = [
  {
    title: 'Creative Digital Engineering for Industrial Growth',
    subtitle:
      'Launch high-impact products, streamline operations, and scale confidently with a modern engineering partner.',
    cta: 'Book a Strategy Session',
    stat: '120+ Transformations Delivered',
  },
  {
    title: 'Modern Platforms. Faster Results.',
    subtitle:
      'From discovery to deployment, build resilient, connected systems with measurable business outcomes.',
    cta: 'Explore Product Systems',
    stat: '98% Client Retention',
  },
  {
    title: 'Design + Engineering + Support in One Team',
    subtitle:
      'Accelerate innovation with full-stack specialists across hardware integration, software, and lifecycle support.',
    cta: 'View Industry Solutions',
    stat: '24/7 Global Coverage',
  },
];

const buyerPaths = [
  {
    title: 'Path for Buyers',
    text: 'Evaluate value quickly with business-focused frameworks, ROI visibility, and roadmap confidence.',
    points: ['TCO + ROI models', 'Implementation planning', 'Risk mitigation workshops'],
    action: 'Start Buyer Journey',
    style: 'btn-primary',
  },
  {
    title: 'Path for Technical Teams',
    text: 'Dive into architecture details, integration patterns, and delivery playbooks built for speed.',
    points: ['Solution blueprints', 'Security + compliance checklists', 'Sandbox + API docs'],
    action: 'Start Technical Journey',
    style: 'btn-outline-primary',
  },
];

const productSystems = [
  'Connected Device Cloud',
  'Predictive Maintenance Suite',
  'Operations Command Center',
  'Data Integration Fabric',
  'AI Vision Inspection',
  'Customer Service Portal',
];

const industries = [
  {
    name: 'Manufacturing',
    description: 'Smart factory transformation with real-time monitoring and production optimization.',
  },
  {
    name: 'Mobility',
    description: 'Connected platforms for logistics, fleet reliability, and aftermarket intelligence.',
  },
  {
    name: 'Energy & Utilities',
    description: 'Predictive operations and resilient infrastructure for distributed asset environments.',
  },
  {
    name: 'Healthcare',
    description: 'Secure and compliant systems for mission-critical workflows and patient outcomes.',
  },
];

const latestBlogs = [
  {
    title: 'How Digital Twins Reduce Downtime in Heavy Industry',
    category: 'Engineering',
    date: 'Aug 08, 2026',
  },
  {
    title: '5 Ways to Make Legacy Infrastructure Cloud-Ready',
    category: 'Architecture',
    date: 'Aug 01, 2026',
  },
  {
    title: 'Designing Operator Dashboards that Teams Actually Use',
    category: 'UX Strategy',
    date: 'Jul 26, 2026',
  },
];

const latestCaseStudies = [
  {
    company: 'VoltEdge Components',
    result: '42% faster issue response using a unified operations cockpit.',
  },
  {
    company: 'Nexa Mobility',
    result: '31% increase in asset uptime through predictive diagnostics.',
  },
  {
    company: 'Aurora Industrial',
    result: '2.4x faster onboarding with modular product architecture.',
  },
];

const latestProducts = [
  {
    name: 'AcuriSense Edge',
    text: 'Industrial edge intelligence gateway for real-time anomaly detection.',
  },
  {
    name: 'OpsPilot 360',
    text: 'Command dashboard for monitoring assets, teams, and process KPIs.',
  },
  {
    name: 'ServiceFlow AI',
    text: 'AI-assisted field service orchestration for rapid incident closure.',
  },
];

const benefits = [
  'AWARD-WINNING RESULTS',
  'CUSTOMISATION',
  'ONGOING SUPPORT',
  'GLOBAL REACH',
  'ENGINEERING EXPERTISE',
];

const socialPosts = [
  {
    network: 'LinkedIn',
    post: 'We just launched an AI-assisted quality control workflow for a global manufacturer.',
  },
  {
    network: 'X',
    post: 'Inside our latest case study: scaling connected operations across 4 continents.',
  },
  {
    network: 'YouTube',
    post: 'New demo: building an industrial command center in under 30 days.',
  },
];

export default function HomePage() {
  return (
    <main className="bg-light text-dark">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top py-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            Accuride Digital
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item dropdown position-static">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Solutions
                </a>
                <div className="dropdown-menu mega-menu border-0 shadow-lg p-4 mt-3">
                  <div className="row g-4">
                    <div className="col-md-4">
                      <h6 className="text-uppercase fw-bold">By Capability</h6>
                      <a className="dropdown-item" href="#">Platform Engineering</a>
                      <a className="dropdown-item" href="#">Embedded Systems</a>
                      <a className="dropdown-item" href="#">Cloud Modernization</a>
                    </div>
                    <div className="col-md-4">
                      <h6 className="text-uppercase fw-bold">By Team</h6>
                      <a className="dropdown-item" href="#">Leadership</a>
                      <a className="dropdown-item" href="#">Operations</a>
                      <a className="dropdown-item" href="#">Engineering</a>
                    </div>
                    <div className="col-md-4">
                      <h6 className="text-uppercase fw-bold">Featured</h6>
                      <p className="small text-secondary mb-2">2026 Industrial Acceleration Guide</p>
                      <button className="btn btn-sm btn-primary">Download Guide</button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item"><a className="nav-link" href="#">Case Studies</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Resources</a></li>
              <li className="nav-item ms-lg-2"><button className="btn btn-primary">Talk to Experts</button></li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="heroSlider" className="carousel slide hero-carousel" data-bs-ride="carousel">
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
                <div className="container py-5 position-relative z-1">
                  <div className="row align-items-center g-4">
                    <div className="col-lg-7">
                      <span className="badge text-bg-light text-primary mb-3">Future-Ready Engineering</span>
                      <h1 className="display-5 fw-bold">{slide.title}</h1>
                      <p className="lead opacity-90 mt-3">{slide.subtitle}</p>
                      <div className="d-flex gap-3 flex-wrap mt-4">
                        <button className="btn btn-light btn-lg">{slide.cta}</button>
                        <button className="btn btn-outline-light btn-lg">See Success Stories</button>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="hero-floating-card glass-card">
                        <p className="mb-1 text-uppercase small">Performance Signal</p>
                        <h3 className="h4">{slide.stat}</h3>
                        <p className="mb-0 opacity-75">Scaled delivery for enterprise product teams in 30+ markets.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hero-animated-shape shape-1" />
                <div className="hero-animated-shape shape-2" />
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#heroSlider" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroSlider" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </section>

      <section className="container py-5">
        <div className="row g-4">
          {buyerPaths.map((path) => (
            <div className="col-md-6" key={path.title}>
              <div className="card h-100 border-0 shadow-lg rounded-4">
                <div className="card-body p-4 p-lg-5">
                  <h3 className="h4 fw-bold">{path.title}</h3>
                  <p className="text-secondary">{path.text}</p>
                  <ul className="mb-4">
                    {path.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <button className={`btn ${path.style}`}>{path.action}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-5 bg-white border-top border-bottom">
        <div className="container">
          <h3 className="h2 mb-4">Product Systems Grid</h3>
          <div className="row g-3">
            {productSystems.map((item) => (
              <div className="col-sm-6 col-lg-4" key={item}>
                <div className="p-4 h-100 rounded-4 bg-light border system-card">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-5">
        <h3 className="h2 mb-4">Industry Sections</h3>
        <div className="row g-4">
          {industries.map((industry) => (
            <div className="col-md-6 col-lg-3" key={industry.name}>
              <article className="p-4 rounded-4 shadow-sm h-100 bg-white border industry-card">
                <h4 className="h5 fw-bold">{industry.name}</h4>
                <p className="text-secondary mb-0">{industry.description}</p>
              </article>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
          <h3 className="h2 m-0">Latest Products</h3>
          <a href="#" className="btn btn-outline-dark btn-sm">View all products</a>
        </div>
        <div id="productsSlider" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {latestProducts.map((product, index) => (
              <div key={product.name} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <div className="p-5 rounded-4 bg-gradient-dark text-white product-slide">
                  <h4 className="h3">{product.name}</h4>
                  <p className="mb-0 opacity-75">{product.text}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#productsSlider" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#productsSlider" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section className="py-5 bg-dark text-white">
        <div className="container">
          <h3 className="h2 mb-4">Latest Case Studies</h3>
          <div className="row g-4">
            {latestCaseStudies.map((study) => (
              <div className="col-md-4" key={study.company}>
                <article className="p-4 rounded-4 border border-secondary h-100 case-card">
                  <h4 className="h5 fw-bold">{study.company}</h4>
                  <p className="mb-0 opacity-75">{study.result}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-5">
        <h3 className="h2 mb-4">Latest Blogs</h3>
        <div className="row g-4">
          {latestBlogs.map((blog) => (
            <div className="col-md-4" key={blog.title}>
              <article className="card h-100 border-0 shadow-sm rounded-4 blog-card">
                <div className="card-body p-4">
                  <span className="badge text-bg-primary-subtle text-primary mb-3">{blog.category}</span>
                  <h4 className="h5 fw-bold">{blog.title}</h4>
                  <p className="text-secondary mb-0">{blog.date}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>

      <section className="py-5 benefits-section">
        <div className="container">
          <h3 className="h2 text-center mb-5">THE BENEFITS OF WORKING WITH ACCURIDE</h3>
          <div className="row g-4 justify-content-center">
            {benefits.map((benefit) => (
              <div className="col-12 col-md-6 col-lg-4" key={benefit}>
                <div className="p-4 rounded-4 bg-white shadow-sm border h-100 text-center fw-bold">{benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-5">
        <h3 className="h2 mb-4">Social Media Highlights</h3>
        <div id="socialSlider" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {socialPosts.map((item, index) => (
              <div key={item.network} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <div className="p-5 rounded-4 bg-white shadow-sm border social-slide">
                  <span className="badge text-bg-dark mb-3">{item.network}</span>
                  <p className="h5 mb-0">{item.post}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#socialSlider" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#socialSlider" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </main>
  );
}
