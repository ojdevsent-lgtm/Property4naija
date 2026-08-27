const properties = [
  { title: 'Modern 4-Bedroom Residence', location: 'Lekki Phase 1, Lagos', price: '₦85,000,000', type: 'For Sale', meta: '4 beds · 5 baths', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Contemporary Family Home', location: 'Ikeja GRA, Lagos', price: '₦12,000,000 / year', type: 'For Rent', meta: '4 beds · 4 baths', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Elegant City Apartment', location: 'Victoria Island, Lagos', price: '₦9,500,000 / year', type: 'For Rent', meta: '3 beds · 3 baths', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85' },
];

const services = [
  ['Property Sales', 'Find the right property and move from discovery to inspection with confidence.'],
  ['Property Lettings', 'Quality rental opportunities across sought-after Lagos locations.'],
  ['Property Management', 'Professional oversight that protects property value and reduces owner stress.'],
  ['Investment Consultancy', 'Practical guidance for property decisions and long-term opportunities.'],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="#">PROPERTY<span>4</span>NAIJA</a>
          <nav className="nav-links">
            <a href="#properties">Properties</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="/christian-story/">Story Game</a>
          </nav>
          <a className="nav-cta" href="/christian-story/">Play Story</a>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-content">
          <div className="eyebrow">Lagos property, made simpler</div>
          <h1 className="serif">Find a place worth calling home.</h1>
          <p>Discover homes, investment opportunities and spaces across Lagos with a property partner focused on helping you make the right move.</p>
          <div className="search-panel" aria-label="Property search">
            <div className="search-field"><small>Looking for</small><strong>Buy, rent or shortlet</strong></div>
            <div className="search-field"><small>Location</small><strong>Lagos</strong></div>
            <div className="search-field"><small>Property type</small><strong>Any property</strong></div>
            <button className="search-btn">Explore</button>
          </div>
        </div>
      </section>

      <section className="section" id="properties">
        <div className="container">
          <div className="section-head">
            <div><div className="eyebrow">Featured opportunities</div><h2 className="serif">Properties worth seeing.</h2></div>
            <p className="section-intro">A curated starting point for your search. More listings can be connected as the platform grows.</p>
          </div>
          <div className="cards">
            {properties.map((property) => (
              <article className="card" key={property.title}>
                <div className="card-image" style={{ backgroundImage: `url(${property.image})` }}><span className="tag">{property.type}</span></div>
                <div className="card-body"><h3>{property.title}</h3><div className="card-location">{property.location}</div><div className="card-price">{property.price}</div><div className="card-meta"><span>{property.meta}</span><span>View details →</span></div></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="container">
          <div className="eyebrow">What we do</div><h2 className="serif">More than finding a house.</h2>
          <div className="service-grid">
            {services.map(([title, text]) => <div className="service" key={title}><h3>{title}</h3><p>{text}</p><span>Explore service →</span></div>)}
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container section-head">
          <div><div className="eyebrow">Property4Naija</div><h2 className="serif">A better way to move through Lagos property.</h2></div>
          <p className="section-intro">From sales and lettings to property management and investment consultancy, Property4Naija brings property services together in one place.</p>
        </div>
      </section>

      <footer className="footer" id="contact"><div className="container footer-row"><span>PROPERTY4NAIJA</span><span>14 Adeshina Street, off Awolowo Way, Ikeja, Lagos</span><span>+234 809 536 5434</span></div></footer>
    </main>
  );
}
