'use client';

import { useState, useEffect } from 'react';

const slides = [
  '/villa.png',
  '/treehouse.png',
  '/bungalow.png'
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'rooms', label: 'Rooms' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'booking', label: 'Booking' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="bg-resort-cream min-h-screen">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-white/80 backdrop-blur-sm py-4'
          }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1
            className={`font-serif font-bold text-resort-forest transition-all duration-300 ${scrolled ? 'text-xl' : 'text-2xl'
              }`}
          >
            Divine Shade Resort
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-resort-forest/80 hover:text-resort-terracotta font-cormorant text-lg font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-resort-terracotta transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-resort-forest p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-resort-sand">
            <nav className="flex flex-col py-4 px-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-resort-forest hover:text-resort-terracotta font-cormorant text-lg font-medium py-3 border-b border-resort-sand/50 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>

        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition duration-300"
          onClick={prevSlide}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition duration-300"
          onClick={nextSlide}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-wide">
            Welcome to Paradise
          </h2>
          <p className="font-cormorant text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Escape to the tranquil rainforest mountains of the Scenic Rim, Queensland. A Bali-inspired couples wellness retreat.
          </p>
          <button
            onClick={() => scrollToSection('booking')}
            className="bg-resort-terracotta hover:bg-resort-forest text-white px-8 py-4 rounded-full font-cormorant text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Book Your Stay
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 md:py-28 bg-resort-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-resort-forest mb-4 tracking-wide">
            About Divine Shade Resort
          </h2>
          <div className="w-24 h-1 bg-resort-terracotta mx-auto mb-8"></div>
          <p className="font-cormorant text-xl text-center max-w-3xl mx-auto mb-16 text-gray-600 leading-relaxed">
            Located in the beautiful Scenic Rim, Queensland, Divine Shade Resort offers a serene getaway in the rainforest mountain area, reminiscent of a Bali couples retreat. Surrounded by lush greenery and mountain views, our resort provides the perfect setting for relaxation, rejuvenation, and romance.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Wellness Focus', desc: 'Yoga sessions, meditation, and spa treatments in a natural environment.', icon: '🧘' },
              { title: 'Eco-Friendly', desc: 'Sustainable practices to preserve the rainforest beauty.', icon: '🌿' },
              { title: 'Romantic Getaways', desc: 'Intimate settings for couples to reconnect.', icon: '💕' },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-resort-sand/50"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-xl font-semibold text-resort-forest mb-3">{item.title}</h3>
                <p className="font-cormorant text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section id="rooms" className="py-20 md:py-28 bg-resort-sand/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-resort-forest mb-4 tracking-wide">
            Accommodations
          </h2>
          <div className="w-24 h-1 bg-resort-terracotta mx-auto mb-16"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Villa Suite',
                desc: 'Spacious villa with private balcony overlooking the rainforest. King bed, en-suite bathroom.',
                price: '$1,200',
                image: '/villa.png'
              },
              {
                name: 'Treehouse Retreat',
                desc: 'Unique treehouse experience with panoramic views. Queen bed, outdoor shower.',
                price: '$1,500',
                image: '/treehouse.png'
              },
              {
                name: 'Garden Bungalow',
                desc: 'Ground-level bungalow surrounded by tropical gardens. King bed, private terrace.',
                price: '$1,000',
                image: '/bungalow.png'
              },
            ].map((room, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-resort-sand/50"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-64 object-cover object-center hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-resort-terracotta text-white px-4 py-1 rounded-full font-cormorant text-sm font-semibold">
                    {room.price}/night
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-semibold text-resort-forest mb-2">{room.name}</h3>
                  <p className="font-cormorant text-gray-600 mb-4">{room.desc}</p>
                  <button className="text-resort-terracotta hover:text-resort-forest font-cormorant font-semibold transition-colors flex items-center gap-2">
                    View Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="py-20 md:py-28 bg-resort-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-resort-forest mb-4 tracking-wide">
            Amenities & Activities
          </h2>
          <div className="w-24 h-1 bg-resort-terracotta mx-auto mb-16"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Spa & Wellness', desc: 'Indulge in traditional Balinese massages and wellness therapies.', image: '/balcony-hottub.png' },
              { title: 'Yoga & Meditation', desc: 'Daily yoga classes overlooking the rainforest.', image: '/yoga.png' },
              { title: 'Organic Dining', desc: 'Fresh, locally-sourced meals prepared with love.', image: '/organic-food.png' },
              { title: 'Nature Walks', desc: 'Explore the Scenic Rim\'s breathtaking trails.', image: '/walking-track.png' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover object-center hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-resort-forest mb-2">{item.title}</h3>
                  <p className="font-cormorant text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 md:py-28 bg-resort-sand/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-resort-forest mb-4 tracking-wide">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-resort-terracotta mx-auto mb-8"></div>
          <p className="font-cormorant text-lg text-center max-w-2xl mx-auto mb-12 text-gray-600">
            Experience the beauty of Divine Shade Resort through our curated collection of images.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {['/bungalow.png', '/villa.png', '/treehouse.png', '/hinterland-lookout-view.png'].map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover object-center hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="https://www.instagram.com/divineshaderesort?igsh=bTVvN3k2ejI2ZnY%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-resort-forest hover:bg-resort-terracotta text-white px-8 py-3 rounded-full font-cormorant text-lg font-semibold transition-all duration-300 inline-block hover:shadow-lg"
            >
              View More on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="py-20 md:py-28 bg-resort-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-resort-forest mb-4 tracking-wide">
            Book Your Stay
          </h2>
          <div className="w-24 h-1 bg-resort-terracotta mx-auto mb-16"></div>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-resort-sand/50">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-resort-forest mb-6">Check Availability</h3>
                <div className="bg-resort-sand/20 p-6 rounded-xl">
                  <h4 className="font-cormorant font-semibold mb-4 text-lg text-resort-forest">October 2024 Availability</h4>
                  <div className="grid grid-cols-7 gap-1 text-sm">
                    <div className="text-center font-semibold text-resort-forest">Su</div>
                    <div className="text-center font-semibold text-resort-forest">Mo</div>
                    <div className="text-center font-semibold text-resort-forest">Tu</div>
                    <div className="text-center font-semibold text-resort-forest">We</div>
                    <div className="text-center font-semibold text-resort-forest">Th</div>
                    <div className="text-center font-semibold text-resort-forest">Fr</div>
                    <div className="text-center font-semibold text-resort-forest">Sa</div>
                    {Array.from({ length: 31 }, (_, i) => {
                      const day = i + 1;
                      const available = [5, 6, 12, 13, 19, 20, 26, 27].includes(day);
                      return (
                        <div
                          key={day}
                          className={`text-center p-2 rounded font-cormorant ${available
                              ? 'bg-resort-sage/30 text-resort-forest'
                              : 'bg-resort-terracotta/20 text-resort-terracotta'
                            }`}
                        >
                          {day}
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4 flex gap-6 text-sm font-cormorant">
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 bg-resort-sage/30 rounded"></span>Available
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 bg-resort-terracotta/20 rounded"></span>Booked
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-resort-forest mb-6">Make a Reservation</h3>
                <form className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-cormorant text-gray-600 mb-1">Check-in</label>
                      <input
                        type="date"
                        className="w-full p-3 border border-resort-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-resort-terracotta focus:border-transparent bg-resort-cream/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-cormorant text-gray-600 mb-1">Check-out</label>
                      <input
                        type="date"
                        className="w-full p-3 border border-resort-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-resort-terracotta focus:border-transparent bg-resort-cream/50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-cormorant text-gray-600 mb-1">Room Type</label>
                    <select className="w-full p-3 border border-resort-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-resort-terracotta focus:border-transparent bg-resort-cream/50 font-cormorant">
                      <option>Select Room Type</option>
                      <option>Villa Suite</option>
                      <option>Treehouse Retreat</option>
                      <option>Garden Bungalow</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-cormorant text-gray-600 mb-1">Guests</label>
                    <input
                      type="number"
                      placeholder="Number of guests"
                      className="w-full p-3 border border-resort-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-resort-terracotta focus:border-transparent bg-resort-cream/50 font-cormorant"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-resort-terracotta hover:bg-resort-forest text-white py-4 rounded-lg font-cormorant text-lg font-semibold transition-all duration-300 hover:shadow-lg"
                  >
                    Request Booking
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 md:py-28 bg-resort-forest text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4 tracking-wide">
            What Our Guests Say
          </h2>
          <div className="w-24 h-1 bg-resort-terracotta mx-auto mb-16"></div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { quote: 'An absolute paradise! The wellness focus and natural beauty made our stay unforgettable.', author: 'Sarah & John, Sydney' },
              { quote: 'The perfect romantic getaway. We felt completely rejuvenated.', author: 'Emma & Michael, Brisbane' },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-resort-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-cormorant text-lg mb-4 italic leading-relaxed">"{testimonial.quote}"</p>
                <cite className="text-resort-gold font-cormorant font-semibold not-italic">— {testimonial.author}</cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-28 bg-resort-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-resort-forest mb-4 tracking-wide">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-resort-terracotta mx-auto mb-16"></div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { title: 'Location', content: 'Scenic Rim, Queensland, Australia', icon: '📍' },
                { title: 'Email', content: 'info@divineshaderesort.com', icon: '✉️' },
                { title: 'Phone', content: '+61 400 123 456', icon: '📞' },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-resort-terracotta mb-1">{item.title}</h3>
                    <p className="font-cormorant text-gray-600 text-lg">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <form className="space-y-5 bg-white p-8 rounded-xl shadow-lg border border-resort-sand/50">
              <div>
                <label className="block text-sm font-cormorant text-gray-600 mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full p-3 border border-resort-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-resort-terracotta focus:border-transparent bg-resort-cream/50 font-cormorant"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-cormorant text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full p-3 border border-resort-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-resort-terracotta focus:border-transparent bg-resort-cream/50 font-cormorant"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-cormorant text-gray-600 mb-1">Message</label>
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="w-full p-3 border border-resort-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-resort-terracotta focus:border-transparent bg-resort-cream/50 font-cormorant resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-resort-terracotta hover:bg-resort-forest text-white py-4 rounded-lg font-cormorant text-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-resort-forest text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl font-bold mb-4">Divine Shade Resort</h3>
          <p className="font-cormorant text-white/80 mb-6">Your Bali-inspired sanctuary in the Queensland rainforest</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://www.instagram.com/divineshaderesort?igsh=bTVvN3k2ejI2ZnY%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-resort-gold transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/divineshaderesort"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-resort-gold transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
          <p className="font-cormorant text-white/60">&copy; {new Date().getFullYear()} Divine Shade Resort. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
