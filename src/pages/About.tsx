import { useEffect } from 'react';
import { Award, Users, Heart, Target } from 'lucide-react';

const About = () => {
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

  const team = [
    {
      name: 'Vaishali Patel',
      role: 'Lead Stylist',
      image: 'https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg',
    },
    {
      name: 'Janvi Desai',
      role: 'Makeup Artist',
      image: 'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg',
    },
    {
      name: 'Veshuka Patel',
      role: 'Skin Specialist',
      image: 'https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg',
    },
    {
      name: 'Bhavika More',
      role: 'Hair Colorist',
      image: 'https://images.pexels.com/photos/3992860/pexels-photo-3992860.jpeg',
    },
  ];

  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content fade-in">
          <h1>About Us</h1>
          <p>Discover the story behind Fabulous Beauty Parlour</p>
        </div>
      </section>

      <section className="about-story fade-in">
        <div className="container">
          <div className="story-grid">
            <div className="story-image">
              <img
                src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg"
                alt="Our Story"
              />
            </div>
            <div className="story-content">
              <h2>Our Story</h2>
              <p>
                Founded in 2010, Fabulous Beauty Parlour began with a simple vision: to create
                a space where women could feel pampered, beautiful, and confident. What started
                as a small salon has grown into a premier beauty destination, serving thousands
                of satisfied clients.
              </p>
              <p>
                Our journey has been driven by passion, dedication, and an unwavering commitment
                to excellence. We've continuously evolved, embracing the latest beauty trends
                and techniques while maintaining the personal touch that makes each visit special.
              </p>
              <p>
                Today, we're proud to be recognized as one of the leading beauty parlours in the
                region, known for our exceptional service, talented team, and stunning results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision fade-in">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">
                <Target size={48} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower women by enhancing their natural beauty and boosting their confidence
                through personalized care, expert techniques, and luxurious treatments in a warm
                and welcoming environment.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">
                <Heart size={48} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted and sought-after beauty destination, setting new standards
                in beauty care while creating lasting relationships with our clients based on
                trust, quality, and exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section fade-in">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <Award size={40} />
              <h4>Excellence</h4>
              <p>We strive for perfection in every service we provide</p>
            </div>
            <div className="value-card">
              <Users size={40} />
              <h4>Client-Focused</h4>
              <p>Your satisfaction and comfort are our top priorities</p>
            </div>
            <div className="value-card">
              <Heart size={40} />
              <h4>Passion</h4>
              <p>We love what we do and it shows in our work</p>
            </div>
            <div className="value-card">
              <Target size={40} />
              <h4>Innovation</h4>
              <p>We stay ahead with the latest trends and techniques</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section fade-in">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Our talented professionals are here to make you look and feel fabulous
          </p>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section fade-in">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience Fabulous?</h2>
            <p>Book your appointment today and let us pamper you</p>
            <a href="/#booking" className="cta-button">Book Now</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
