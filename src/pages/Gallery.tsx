import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  const galleryImages = [
    {
      url: './images/v1.png',
      category: 'Bridal Makeup',
    },
    {
      url: './images/v2.png',
      category: 'Makeover',
    },
    {
      url: './images/v3.png',
      category: 'Hair Styling',
    },
    {
      url: './images/v4.png',
      category: 'Makeup',
    },
    {
      url: './images/v5.png',
      category: 'Makeover',
    },
    {
      url: './images/v6.png',
      category: 'Makeover',
    },
    {
      url: './images/v9.png',
      category: 'Makeover',
    },
    {
      url: './images/v7.png',
      category: 'Bridal',
    },
    {
      url: './images/v8.png',
      category: 'Makeup',
    },
    {
      url: './images/v10.png',
      category: 'Makeover',
    },
    {
      url: 'https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg',
      category: 'Styling',
    },
    {
      url: 'https://images.pexels.com/photos/3065196/pexels-photo-3065196.jpeg',
      category: 'Bridal',
    },
  ];

  const openLightbox = (url: string) => {
    setSelectedImage(url);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="gallery-page">
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content fade-in">
          <h1>Our Gallery</h1>
          <p>Explore our beautiful transformations and stunning work</p>
        </div>
      </section>

      <section className="gallery-full-section">
        <div className="container">
          <div className="gallery-intro fade-in">
            <h2>Witness Beauty in Every Frame</h2>
            <p>
              Browse through our collection of beautiful makeovers, stunning hairstyles, and
              satisfied smiles. Each image tells a story of transformation and confidence.
            </p>
          </div>

          <div className="gallery-full-grid">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="gallery-full-item fade-in"
                onClick={() => openLightbox(image.url)}
              >
                <img src={image.url} alt={image.category} />
                <div className="gallery-full-overlay">
                  <span className="gallery-category">{image.category}</span>
                  <span className="gallery-view">Click to View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <X size={32} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Gallery" />
          </div>
        </div>
      )}

      <section className="cta-section fade-in">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Create Your Own Beautiful Story?</h2>
            <p>Book your appointment and let us make you shine</p>
            <a href="/#booking" className="cta-button">Book Appointment</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
