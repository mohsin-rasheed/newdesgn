const heroSlides = [
  {
    eyebrow: 'Products',
    title: 'The DA1532 Pocket Door Slide — Modern answer to heavy-duty wardrobes and cabinets.',
    description:
      'Precision-engineered movement systems built for demanding spaces, tested for long lifecycle performance.',
    cta: 'Find Out More',
    image: 'https://images.unsplash.com/photo-1582582494700-0b8c4f1f2f37?auto=format&fit=crop&w=900&q=80',
  },
  {
    eyebrow: 'Engineering',
    title: 'Designing motion hardware systems that blend durability, safety, and seamless user experience.',
    description:
      'From concept to deployment, our teams deliver configurable, market-ready systems for global industries.',
    cta: 'Explore Solutions',
    image: 'https://images.unsplash.com/photo-1565060169187-6f07b2b5f0e0?auto=format&fit=crop&w=900&q=80',
  },
];

const highlights = [
  {
    label: 'Latest Blogs',
    title: 'The Future Medical Equipment Landscape: Automation, Sterility and Smart Access',
  },
  {
    label: 'Latest Case Studies',
    title: 'Precision Handling in Harsh Environments for Critical Infrastructure Projects',
  },
];

const products = [
  {
    name: 'Medium Duty Slide With Lock-In and Detent-Out DZ3360-DO-2',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Heavy Duty Aluminium Two-Way Travel Slide DA4165',
    image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Over Extension Telescopic Slide With Front Disconnect DZ3357-2',
    image: 'https://images.unsplash.com/photo-1565636291299-a17f0f6839d8?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Heavy Duty Full Extension Slide DS5320',
    image: 'https://images.unsplash.com/photo-1581090700227-1e8e8f9ff4df?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Stainless Steel Compact Runner SS4012',
    image: 'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Industrial Locking Rail System IRL900',
    image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=800&q=80',
  },
];


const productSlides = products.reduce((groups, product, index) => {
  const groupIndex = Math.floor(index / 3);
  if (!groups[groupIndex]) groups[groupIndex] = [];
  groups[groupIndex].push(product);
  return groups;
}, []);

const benefits = [
  'AWARD-WINNING RESULTS',
  'CUSTOMISATION',
  'ONGOING SUPPORT',
  'GLOBAL REACH',
  'ENGINEERING EXPERTISE',
];

const latestBlogs = [
  'How smart slide systems are transforming healthcare storage.',
  'Choosing the right movement hardware for high-cycle applications.',
  'Designing for noise reduction in compact living environments.',
];

const latestCaseStudies = [
  'Climate chamber installation achieved 100% reliability in stress testing.',
  'OEM modernization reduced installation time by 27% across 9 plants.',
  'Global retail rollout delivered 1,200+ units with zero field failures.',
];

const socialPosts = [
  {
    network: 'YouTube',
    text: 'Metrol show: Accuride heavy-duty slides showcased at Commercial Vehicles Show.',
  },
  {
    network: 'LinkedIn',
    text: 'New launch: lightweight precision rails engineered for industrial automation.',
  },
  {
    network: 'X',
    text: 'From concept to commissioning in 12 weeks — see the full case recap.',
  },
];

export default function HomePage() {
  return (
    <main className="modern-home">
      <div className="top-alert text-center py-2">
        If you experience any issues with VAT, orders, or login, contact us at support@accuride.com.
      </div>

      <div className="utility-bar py-2">
        <div className="container d-flex flex-wrap justify-content-end gap-3 small">
          <a href="#">News Signup</a>
          <a href="#">Login / Sign Up</a>
          <a href="#">Contact Sales & Technical</a>
          <a href="#">+44 (0)1604 663571</a>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-white main-nav shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            Accuride<span>Modern</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
            aria-controls="navbarMain"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
              <li className="nav-item"><a className="nav-link" href="#">Products</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Store</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Configurator</a></li>
              <li className="nav-item dropdown position-static">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Markets
                </a>
                <div className="dropdown-menu mega-menu border-0 shadow-lg p-4 mt-3">
                  <div className="row g-4">
                    <div className="col-md-4">
                      <h6 className="text-uppercase fw-bold">By Industry</h6>
                      <a className="dropdown-item" href="#">Healthcare</a>
                      <a className="dropdown-item" href="#">Industrial</a>
                      <a className="dropdown-item" href="#">Retail & Interiors</a>
                    </div>
                    <div className="col-md-4">
                      <h6 className="text-uppercase fw-bold">By Capability</h6>
                      <a className="dropdown-item" href="#">Heavy Duty Systems</a>
                      <a className="dropdown-item" href="#">Soft-close Integration</a>
                      <a className="dropdown-item" href="#">Custom Engineering</a>
                    </div>
                    <div className="col-md-4">
                      <h6 className="text-uppercase fw-bold">Featured</h6>
                      <p className="small text-secondary">2026 Product Selection Guide for motion systems.</p>
                      <button className="btn btn-sm btn-primary">Download Now</button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item"><a className="nav-link" href="#">Resources</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Support</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="container py-4 py-lg-5">
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-8">
            <div id="heroSlider" className="carousel slide h-100" data-bs-ride="carousel">
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
              <div className="carousel-inner h-100">
                {heroSlides.map((slide, index) => (
                  <div className={`carousel-item h-100 ${index === 0 ? 'active' : ''}`} key={slide.title}>
                    <article className="hero-card h-100 p-4 p-lg-5">
                      <div className="row g-3 align-items-center h-100">
                        <div className="col-md-6">
                          <p className="section-label">{slide.eyebrow}</p>
                          <h1 className="display-6 fw-bold">{slide.title}</h1>
                          <p className="text-secondary">{slide.description}</p>
                          <button className="btn btn-warning fw-semibold px-4">{slide.cta}</button>
                        </div>
                        <div className="col-md-6 text-center">
                          <img src={slide.image} alt={slide.title} className="img-fluid hero-image" />
                        </div>
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
            </div>
          </div>
          <div className="col-lg-4">
            <div className="d-flex flex-column gap-3 h-100">
              {highlights.map((card) => (
                <article key={card.label} className="highlight-card p-4">
                  <p className="section-label mb-2">{card.label}</p>
                  <h3 className="h5 mb-3">{card.title}</h3>
                  <button className="btn btn-sm btn-warning">Read More</button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <h2 className="text-center h1 mb-4">New Products</h2>
        <div id="productsSlider" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {productSlides.map((group, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={`group-${index}`}>
                <div className="row g-4">
                  {group.map((product) => (
                    <div className="col-md-6 col-lg-4" key={product.name}>
                      <div className="product-focus text-center p-4 h-100">
                        <img src={product.image} alt={product.name} className="img-fluid product-image mb-4" />
                        <h3 className="h6 fw-bold text-uppercase mb-3">{product.name}</h3>
                        <button className="btn btn-primary btn-sm">View Product</button>
                      </div>
                    </div>
                  ))}
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

      <section className="benefits-wrap py-5">
        <div className="container">
          <h2 className="text-center mb-3">THE BENEFITS OF WORKING WITH ACCURIDE</h2>
          <p className="text-center text-muted mx-auto benefits-copy">
            We combine engineering rigor, global scale, and tailored support to deliver motion solutions that perform under pressure.
          </p>
          <div className="row g-3 mt-3 justify-content-center">
            {benefits.map((benefit) => (
              <div className="col-12 col-sm-6 col-lg" key={benefit}>
                <div className="benefit-pill text-center py-3 px-2">{benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="impact-band py-5">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-5 text-white">
              <p className="section-label text-warning">Proven delivery</p>
              <h2 className="h1 mb-3">A Strong Track Record of Hitting Project Deadlines</h2>
              <p>
                Our engineering teams consistently deliver complex projects on time, helping partners launch faster while reducing operational risk.
              </p>
              <button className="btn btn-warning fw-semibold">Read More</button>
            </div>
            <div className="col-lg-7">
              <div className="impact-image" />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band py-4 text-center text-lg-start">
        <div className="container d-lg-flex align-items-center justify-content-between">
          <h3 className="h2 text-white mb-3 mb-lg-0">Speak to one of our specialists today!</h3>
          <button className="btn btn-warning fw-semibold px-4">Get in touch</button>
        </div>
      </section>

      <section className="container py-5">
        <div className="row g-4">
          <div className="col-lg-6">
            <h3 className="section-heading mb-3">Latest Blogs</h3>
            <div className="list-group shadow-sm rounded-4 overflow-hidden">
              {latestBlogs.map((item) => (
                <a key={item} href="#" className="list-group-item list-group-item-action p-3">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="section-heading mb-3">Latest Case Studies</h3>
            <div className="list-group shadow-sm rounded-4 overflow-hidden">
              {latestCaseStudies.map((item) => (
                <a key={item} href="#" className="list-group-item list-group-item-action p-3">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="social-section py-5">
        <div className="container">
          <h3 className="section-heading mb-4">Social Media</h3>
          <div id="socialSlider" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {socialPosts.map((post, index) => (
                <div key={post.text} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <div className="social-card text-center p-4 p-lg-5">
                    <span className="badge text-bg-danger mb-3">{post.network}</span>
                    <p className="h4 mb-0">{post.text}</p>
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
        </div>
      </section>

      <footer className="site-footer py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-6 col-lg-3">
              <h4 className="h6 text-uppercase">Legal</h4>
              <ul className="list-unstyled small">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Quality & Warranty</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="col-6 col-lg-3">
              <h4 className="h6 text-uppercase">Information</h4>
              <ul className="list-unstyled small">
                <li>Pocket Door Configurator</li>
                <li>Exhibitions</li>
                <li>Resources</li>
              </ul>
            </div>
            <div className="col-6 col-lg-3">
              <h4 className="h6 text-uppercase">Global</h4>
              <ul className="list-unstyled small">
                <li>North America</li>
                <li>Europe</li>
                <li>China</li>
                <li>Japan</li>
              </ul>
            </div>
            <div className="col-6 col-lg-3">
              <h4 className="h6 text-uppercase">Social</h4>
              <p className="small">Subscribe for news updates</p>
              <div className="input-group input-group-sm">
                <input className="form-control" placeholder="Email" />
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
