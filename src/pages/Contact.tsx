import { useEffect, useState, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content fade-in">
          <h1>Contact Us</h1>
          <p>Get in touch with us today</p>
        </div>
      </section>

      <section className="contact-info-section fade-in">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="contact-icon">
                <MapPin size={32} />
              </div>
              <h3>Our Location</h3>
              <p>Shop No LG-09,10, Jay Laxmi, Shree Complex </p>
              <p>Bhestan, Surat, Gujarat 395023</p>
            </div>
            <div className="contact-info-card">
              <div className="contact-icon">
                <Phone size={32} />
              </div>
              <h3>Phone Number</h3>
              
              <p>+91 97373 16502</p>
            </div>
            <div className="contact-info-card">
              <div className="contact-icon">
                <Mail size={32} />
              </div>
              <h3>Email Address</h3>
              <p>info@fabulousbeauty.com</p>
              <p>booking@fabulousbeauty.com</p>
            </div>
            <div className="contact-info-card">
              <div className="contact-icon">
                <Clock size={32} />
              </div>
              <h3>Working Hours</h3>
              <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
              <p>Sunday: 10:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section fade-in">
        <div className="container">
          <div className="contact-form-grid">
            <div className="contact-form-content">
              <h2>Send Us a Message</h2>
              <p>
                Have questions or want to book an appointment? Fill out the form and we'll get
                back to you as soon as possible.
              </p>
              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
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
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
                {formStatus === 'success' && (
                  <div className="form-message success">
                    Message sent successfully! We'll contact you soon.
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="form-message error">
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
            <div className="contact-sidebar">
              <div className="sidebar-card">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <Facebook size={24} />
                    <span>Facebook</span>
                  </a>
                  <a href="#" className="social-link">
                    <Instagram size={24} />
                    <span>Instagram</span>
                  </a>
                  <a href="#" className="social-link">
                    <Twitter size={24} />
                    <span>Twitter</span>
                  </a>
                </div>
              </div>
              <div className="sidebar-card">
                <h3>Why Choose Us?</h3>
                <ul className="why-list">
                  <li>Expert Beauty Professionals</li>
                  <li>Premium Quality Products</li>
                  <li>Hygienic & Safe Environment</li>
                  <li>Personalized Services</li>
                  <li>Affordable Pricing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section fade-in">
        <div className="container">
          <h2 className="section-title">Find Us Here</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3367.8848317502625!2d72.85287707471703!3d21.127157584392737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0511a39a328a3%3A0x1a3ef3f40d749f90!2sVaishali%20Beauty%20Parlour!5e1!3m2!1sen!2sin!4v1774090151376!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
