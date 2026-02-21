const heroSlides = [
  {
    eyebrow: 'Products',
    title: 'The DA1532 Pocket Door Slide — Modern answer to heavy-duty wardrobes and cabinets.',
    description:
      'Precision-engineered movement systems built for demanding spaces, tested for long lifecycle performance.',
    cta: 'Find Out More',
    image: 'https://images.unsplash.com/photo-1582582494700-0b8c4f1f2f37?auto=format&fit=crop&w=1600&q=80',
  },
  {
    eyebrow: 'Engineering',
    title: 'Designing motion hardware systems that blend durability, safety, and seamless user experience.',
    description:
      'From concept to deployment, our teams deliver configurable, market-ready systems for global industries.',
    cta: 'Explore Solutions',
    image: 'https://images.unsplash.com/photo-1565060169187-6f07b2b5f0e0?auto=format&fit=crop&w=1600&q=80',
  },
];

const latestProducts = [
  {
    name: 'Medium Duty Slide With Lock-In and Detent-Out DZ3360-DO-2',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80',
    summary: 'Reliable motion hardware for repeat-use cabinetry and storage systems.',
  },
  {
    name: 'Heavy Duty Aluminium Two-Way Travel Slide DA4165',
    image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=900&q=80',
    summary: 'Built for robust applications requiring smooth bidirectional movement.',
  },
  {
    name: 'Over Extension Telescopic Slide DZ3357-2',
    image: 'https://images.unsplash.com/photo-1565636291299-a17f0f6839d8?auto=format&fit=crop&w=900&q=80',
    summary: 'Extended access with secure front disconnect for service-friendly installs.',
  },
];

const latestCaseStudies = [
  {
    title: 'Precision Handling in Harsh Environments',
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=900&q=80',
    result: 'Increased reliability by 38% across mission-critical production lines.',
  },
  {
    title: 'Global Retail Rollout for Motion Systems',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=900&q=80',
    result: 'Delivered 1,200+ units with zero field failures during launch quarter.',
  },
  {
    title: 'Climate Chamber System Modernisation',
    image: 'https://images.unsplash.com/photo-1581092334448-2d39c55a2f20?auto=format&fit=crop&w=900&q=80',
    result: 'Reduced system validation timelines by 27% using modular rails.',
  },
];

const benefits = [
  {
    title: 'AWARD-WINNING RESULTS',
    text: 'Recognized delivery quality with measurable outcomes across high-stakes projects.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'CUSTOMISATION',
    text: 'Tailored product engineering to your dimensions, loads, and integration needs.',
    image: 'https://images.unsplash.com/photo-1581091012184-5c6c2f6d7ecb?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'ONGOING SUPPORT',
    text: 'From prototyping to after-sales, we provide continuous technical partnership.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'GLOBAL REACH',
    text: 'Worldwide supply and support network for consistent delivery at scale.',
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'ENGINEERING EXPERTISE',
    text: 'Deep motion-system knowledge backed by practical, field-tested experience.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80',
  },
];

export default function HomePage() {
  return (
    <main className="modern-home">
      <div className="top-alert text-center py-2">
        If you experience any issues with VAT, orders, or login, contact us at support@accuride.com.
      </div>

      <nav className="navbar navbar-expand-lg bg-white main-nav shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            Accuride<span>Modern</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav ms-auto gap-lg-2">
              <li className="nav-item"><a className="nav-link" href="#">Products</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Markets</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Resources</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Support</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="heroSlider" className="carousel slide full-hero" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#heroSlider"
              data-bs-slide-to={i}
              className={i === 0 ? 'active' : ''}
              aria-current={i === 0}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="carousel-inner">
          {heroSlides.map((slide, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={slide.title}>
              <article className="hero-full-slide" style={{ backgroundImage: `url(${slide.image})` }}>
                <div className="hero-overlay" />
                <div className="container hero-content py-5">
                  <p className="section-label text-warning">{slide.eyebrow}</p>
                  <h1 className="display-4 fw-bold text-white col-lg-7">{slide.title}</h1>
                  <p className="lead text-white col-lg-6">{slide.description}</p>
                  <button className="btn btn-warning fw-semibold px-4 py-2">{slide.cta}</button>
                </div>
              </article>
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
        <h2 className="text-center h1 mb-4">Latest Products</h2>
        <div id="productsSlider" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {latestProducts.map((item, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={item.name}>
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <article className="feature-slider-card">
                      <img src={item.image} alt={item.name} className="feature-image" />
                      <div className="feature-body p-4">
                        <h3 className="h4">{item.name}</h3>
                        <p className="mb-3">{item.summary}</p>
                        <button className="btn btn-primary btn-sm">View Product</button>
                      </div>
                    </article>
                  </div>
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

      <section className="container py-5">
        <h2 className="text-center h1 mb-4">Latest Case Studies</h2>
        <div id="caseStudiesSlider" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {latestCaseStudies.map((item, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={item.title}>
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <article className="feature-slider-card case-study-card">
                      <img src={item.image} alt={item.title} className="feature-image" />
                      <div className="feature-body p-4">
                        <h3 className="h4">{item.title}</h3>
                        <p className="mb-3">{item.result}</p>
                        <button className="btn btn-outline-primary btn-sm">Read Case Study</button>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#caseStudiesSlider" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#caseStudiesSlider" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section className="benefits-wrap py-5">
        <div className="container">
          <h2 className="text-center mb-4">THE BENEFITS OF WORKING WITH ACCURIDE</h2>
          <div className="row g-4">
            {benefits.map((benefit) => (
              <div className="col-md-6 col-lg-4" key={benefit.title}>
                <article className="benefit-card h-100">
                  <img src={benefit.image} alt={benefit.title} className="benefit-image" />
                  <div className="p-3 p-lg-4">
                    <h3 className="h6 fw-bold mb-2">{benefit.title}</h3>
                    <p className="mb-0 text-secondary small">{benefit.text}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band py-5">
        <div className="container text-center">
          <p className="section-label text-warning mb-2">Let’s Build Better Together</p>
          <h2 className="text-white mb-3">Speak to one of our specialists today</h2>
          <p className="text-white-50 mb-4">Get support on product selection, custom engineering, and global deployment planning.</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <button className="btn btn-warning fw-semibold px-4">Get In Touch</button>
            <button className="btn btn-outline-light px-4">Book Consultation</button>
          </div>
        </div>
      </section>
    </main>
  );
}
