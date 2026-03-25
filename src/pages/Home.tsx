import { useState, useEffect, useRef } from 'react';
import { Sparkles, Scissors, Palette, Heart, Droplet, Star } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_APPOINTMENT_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const services = [
    { icon: <Sparkles />, name: 'Bridal Makeup', description: 'Look stunning on your special day' },
    { icon: <Scissors />, name: 'Hair Styling', description: 'Expert cuts and styling' },
    { icon: <Palette />, name: 'Facial & Skin Care', description: 'Rejuvenate your skin' },
    { icon: <Heart />, name: 'Manicure & Pedicure', description: 'Perfect nails every time' },
    { icon: <Droplet />, name: 'Spa Therapy', description: 'Relax and unwind' },
    { icon: <Star />, name: 'Hair Coloring', description: 'Vibrant colors that shine' },
  ];

  const galleryImages = [
    './images/v1.png',
    './images/v2.png',
    './images/v3.png',
    './images/v4.png',
    './images/v5.png',
    './images/v6.png',
  ];

  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content fade-in">
          <h1 className="hero-title">Welcome to Vaishali Beauty Parlour</h1>
          <p className="hero-subtitle">Where Beauty Meets Excellence</p>
          <p className="hero-description">
            Experience the ultimate in beauty care with our expert stylists and luxurious treatments
          </p>
          <a href="#booking" className="hero-button">Book Appointment</a>
        </div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </section>

      <section className="intro-section fade-in">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-image">
              <img
                src="./images/v6.png"
                alt="Beauty Services"
              />
            </div>
            <div className="intro-content">
              <h2>Your Beauty Journey Starts Here</h2>
              <p>
                At Vaishali Beauty Parlour, we believe that every woman deserves to feel beautiful
                and confident. Our experienced team of beauty professionals is dedicated to
                providing personalized care and exceptional service.
              </p>
              <p>
                From bridal makeup to everyday styling, we use only the finest products and
                latest techniques to enhance your natural beauty. Step into our world of elegance
                and let us pamper you with treatments designed to make you look and feel Vaishali.
              </p>
            </div>
          </div>

          <div className="intro-grid reverse">
            <div className="intro-content">
              <h2>Customer-Centric Approach</h2>
              <p>
                We understand that every client is unique, which is why we take the time to
                listen to your needs and preferences. Our consultations ensure that you receive
                treatments perfectly tailored to your style and personality.
              </p>
              <p>
                With a warm and welcoming atmosphere, we create a sanctuary where you can relax
                and indulge in self-care. Your satisfaction is our priority, and we're committed
                to exceeding your expectations with every visit.
              </p>
            </div>
            <div className="intro-image">
              <img
                src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg"
                alt="Customer Care"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="services-section fade-in">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Discover our range of beauty treatments</p>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="video-section fade-in">
        <div className="container">
          <h2 className="section-title">Experience Vaishali Beauty Parlour</h2>
          <p className="section-subtitle">Watch our work unfold</p>
          <div className="video-container">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/ov3onxBcBlc?si=7R0HYhowe34crQ7c"
              title="Beauty Parlour Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="gallery-preview fade-in">
        <div className="container">
          <h2 className="section-title">Our Gallery</h2>
          <p className="section-subtitle">Glimpse of our beautiful transformations</p>
          <div className="gallery-grid">
            {galleryImages.map((img, index) => (
              <div key={index} className="gallery-item">
                <img src={img} alt={`Gallery ${index + 1}`} />
                <div className="gallery-overlay">
                  <span>View</span>
                </div>
              </div>
            ))}
          </div>
          <div className="gallery-link">
            <a href="/gallery" className="view-more-btn">View Full Gallery</a>
          </div>
        </div>
      </section>

      <section id="booking" className="booking-section fade-in">
        <div className="container">
          <h2 className="section-title">Book Your Appointment</h2>
          <p className="section-subtitle">Let us make you feel Vaishali</p>
          <form ref={formRef} onSubmit={handleSubmit} className="booking-form">
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Service</option>
                  <option value="bridal">Bridal Makeup</option>
                  <option value="hair">Hair Styling</option>
                  <option value="facial">Facial & Skin Care</option>
                  <option value="manicure">Manicure & Pedicure</option>
                  <option value="spa">Spa Therapy</option>
                  <option value="coloring">Hair Coloring</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Special Requests (Optional)"
                value={formData.message}
                onChange={handleChange}
                rows={4}
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Book Appointment</button>
            {formStatus === 'success' && (
              <div className="form-message success">
                Appointment booked successfully! We'll contact you soon.
              </div>
            )}
            {formStatus === 'error' && (
              <div className="form-message error">
                Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
