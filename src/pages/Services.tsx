import { useEffect } from 'react';
import { Sparkles, Scissors, Palette, Heart, Droplet, Star, Clock, DollarSign } from 'lucide-react';

const Services = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Sparkles size={48} />,
      name: 'Bridal Makeup',
      description: 'Look absolutely stunning on your special day with our expert bridal makeup services. We create a flawless, long-lasting look that photographs beautifully.',
      duration: '3-4 hours',
      price: 'Starting from ₹200',
      features: ['Pre-bridal consultation', 'Trial makeup session', 'HD makeup', 'Hairstyling included'],
      image: 'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg',
    },
    {
      icon: <Scissors size={48} />,
      name: 'Hair Styling',
      description: 'Transform your look with our professional hair styling services. From classic cuts to trendy styles, our expert stylists bring your vision to life.',
      duration: '1-2 hours',
      price: 'Starting from ₹50',
      features: ['Personalized consultation', 'Precision cutting', 'Blow-dry styling', 'Hair treatment'],
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg',
    },
    {
      icon: <Palette size={48} />,
      name: 'Facial & Skin Care',
      description: 'Rejuvenate and nourish your skin with our luxurious facial treatments. Customized to your skin type for optimal results.',
      duration: '60-90 minutes',
      price: 'Starting from ₹80',
      features: ['Deep cleansing', 'Exfoliation', 'Facial massage', 'Moisturizing mask'],
      image: 'https://images.pexels.com/photos/3764228/pexels-photo-3764228.jpeg',
    },
    {
      icon: <Heart size={48} />,
      name: 'Manicure & Pedicure',
      description: 'Pamper your hands and feet with our comprehensive nail care services. Enjoy perfectly shaped, polished nails in a relaxing environment.',
      duration: '45-60 minutes',
      price: 'Starting from ₹40',
      features: ['Nail shaping', 'Cuticle care', 'Exfoliation', 'Polish application'],
      image: 'https://images.pexels.com/photos/3992859/pexels-photo-3992859.jpeg',
    },
    {
      icon: <Droplet size={48} />,
      name: 'Spa Therapy',
      description: 'Escape the stress of daily life with our soothing spa treatments. Relax, rejuvenate, and restore your inner balance.',
      duration: '90-120 minutes',
      price: 'Starting from ₹150',
      features: ['Aromatherapy', 'Body massage', 'Steam therapy', 'Relaxation lounge'],
      image: 'https://images.pexels.com/photos/3992860/pexels-photo-3992860.jpeg',
    },
    {
      icon: <Star size={48} />,
      name: 'Hair Coloring',
      description: 'Add vibrant color or subtle highlights to your hair. Our color experts use premium products for stunning, long-lasting results.',
      duration: '2-3 hours',
      price: 'Starting from ₹100',
      features: ['Color consultation', 'Premium products', 'Color protection', 'Styling included'],
      image: 'https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg',
    },
  ];

  return (
    <div className="services-page">
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content fade-in">
          <h1>Our Services</h1>
          <p>Discover our comprehensive range of beauty treatments</p>
        </div>
      </section>

      <section className="services-detail-section">
        <div className="container">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-detail-card fade-in ₹{index % 2 === 1 ? 'reverse' : ''}`}
            >
              <div className="service-detail-image">
                <img src={service.image} alt={service.name} />
              </div>
              <div className="service-detail-content">
                <div className="service-detail-icon">{service.icon}</div>
                <h2>{service.name}</h2>
                <p className="service-detail-description">{service.description}</p>
                <div className="service-meta">
                  <div className="meta-item">
                    <Clock size={20} />
                    <span>{service.duration}</span>
                  </div>
                  <div className="meta-item">
                    <DollarSign size={20} />
                    <span>{service.price}</span>
                  </div>
                </div>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <a href="/#booking" className="book-service-btn">Book This Service</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="packages-section fade-in">
        <div className="container">
          <h2 className="section-title">Special Packages</h2>
          <p className="section-subtitle">Save more with our exclusive packages</p>
          <div className="packages-grid">
            <div className="package-card">
              <h3>Bridal Package</h3>
              <div className="package-price">₹450</div>
              <ul>
                <li>Bridal Makeup</li>
                <li>Hair Styling</li>
                <li>Manicure & Pedicure</li>
                <li>Pre-wedding Facial</li>
                <li>Trial Session</li>
              </ul>
              <a href="/#booking" className="package-btn">Choose Package</a>
            </div>
            <div className="package-card featured">
              <div className="package-badge">Most Popular</div>
              <h3>Glamour Package</h3>
              <div className="package-price">₹250</div>
              <ul>
                <li>Facial Treatment</li>
                <li>Hair Styling</li>
                <li>Makeup</li>
                <li>Manicure & Pedicure</li>
              </ul>
              <a href="/#booking" className="package-btn">Choose Package</a>
            </div>
            <div className="package-card">
              <h3>Relaxation Package</h3>
              <div className="package-price">₹180</div>
              <ul>
                <li>Spa Therapy</li>
                <li>Facial Treatment</li>
                <li>Manicure</li>
                <li>Pedicure</li>
              </ul>
              <a href="/#booking" className="package-btn">Choose Package</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
