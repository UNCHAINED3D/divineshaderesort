'use client';

import { useState, useEffect } from 'react';

const slides = [
  'https://images.unsplash.com/photo-1598522325074-042db73aa4e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1508193638397-1c4234db14d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
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
  };

  return (
    <div className="font-['Poppins'] bg-gradient-to-br from-amber-200 via-orange-300 to-green-400 min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full bg-amber-100/90 backdrop-blur-sm shadow-lg z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-800">Divine Shade Resort</h1>
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('home')} className="text-orange-700 hover:text-green-600 font-medium">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-orange-700 hover:text-green-600 font-medium">About</button>
            <button onClick={() => scrollToSection('rooms')} className="text-orange-700 hover:text-green-600 font-medium">Rooms</button>
            <button onClick={() => scrollToSection('amenities')} className="text-orange-700 hover:text-green-600 font-medium">Amenities</button>
            <button onClick={() => scrollToSection('gallery')} className="text-orange-700 hover:text-green-600 font-medium">Gallery</button>
            <button onClick={() => scrollToSection('booking')} className="text-orange-700 hover:text-green-600 font-medium">Booking</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-orange-700 hover:text-green-600 font-medium">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="text-orange-700 hover:text-green-600 font-medium">Contact</button>
          </nav>
        </div>
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
        </div>
        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70" onClick={prevSlide}>&#10094;</button>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70" onClick={nextSlide}>&#10095;</button>
        <div className="relative z-10 bg-black/50 p-8 rounded-lg text-center text-white max-w-lg">
          <h2 className="text-4xl font-bold mb-4 text-amber-200">Welcome to Paradise</h2>
          <p className="text-lg mb-6">Escape to the tranquil rainforest mountains of the Scenic Rim, Queensland. A Bali-inspired couples wellness retreat.</p>
          <button onClick={() => scrollToSection('contact')} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition duration-300">Book Now</button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white/80">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12">About Divine Shade Resort</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-700">
            Located in the beautiful Scenic Rim, Queensland, Divine Shade Resort offers a serene getaway in the rainforest mountain area, reminiscent of a Bali couples retreat. Surrounded by lush greenery and mountain views, our resort provides the perfect setting for relaxation, rejuvenation, and romance.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-amber-50 rounded-lg">
              <h3 className="text-xl font-semibold text-orange-800 mb-4">Wellness Focus</h3>
              <p className="text-gray-600">Yoga sessions, meditation, and spa treatments in a natural environment.</p>
            </div>
            <div className="text-center p-6 bg-amber-50 rounded-lg">
              <h3 className="text-xl font-semibold text-orange-800 mb-4">Eco-Friendly</h3>
              <p className="text-gray-600">Sustainable practices to preserve the rainforest beauty.</p>
            </div>
            <div className="text-center p-6 bg-amber-50 rounded-lg">
              <h3 className="text-xl font-semibold text-orange-800 mb-4">Romantic Getaways</h3>
              <p className="text-gray-600">Intimate settings for couples to reconnect.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section id="rooms" className="py-20 bg-white/80">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12">Accommodations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Luxury Villa Suite in Rainforest" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-green-800 mb-2">Villa Suite</h3>
                <p className="text-gray-600 mb-4">Spacious villa with private balcony overlooking the rainforest. King bed, en-suite bathroom.</p>
                <p className="text-2xl font-bold text-tan-orange">$1,200/night</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Treehouse Retreat in Australian Rainforest" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-green-800 mb-2">Treehouse Retreat</h3>
                <p className="text-gray-600 mb-4">Unique treehouse experience with panoramic views. Queen bed, outdoor shower.</p>
                <p className="text-2xl font-bold text-tan-orange">$1,500/night</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Garden Bungalow in Sunshine Coast Hinterland" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-green-800 mb-2">Garden Bungalow</h3>
                <p className="text-gray-600 mb-4">Ground-level bungalow surrounded by tropical gardens. King bed, private terrace.</p>
                <p className="text-2xl font-bold text-tan-orange">$1,000/night</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="py-20 bg-amber-50/80">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12">Amenities & Activities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Spa Treatment in Rainforest" className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Spa & Wellness</h3>
              <p className="text-gray-600">Indulge in traditional Balinese massages and wellness therapies.</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Yoga in Australian Rainforest" className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Yoga & Meditation</h3>
              <p className="text-gray-600">Daily yoga classes overlooking the rainforest.</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Organic Dining at Rainforest Resort" className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Organic Dining</h3>
              <p className="text-gray-600">Fresh, locally-sourced meals prepared with love.</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Nature Walks in Scenic Rim" className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Nature Walks</h3>
              <p className="text-gray-600">Explore the Scenic Rim's breathtaking trails.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-white/80">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12">Gallery</h2>
          <p className="text-lg text-center max-w-2xl mx-auto mb-12 text-gray-700">
            Experience the beauty of Divine Shade Resort through our curated collection of images.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <img src="https://images.unsplash.com/photo-1508193638397-1c4234db14d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Sunshine Coast Hinterland Resort" className="w-full h-64 object-cover rounded-lg hover:scale-105 transition duration-300" />
            <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Luxury Rainforest Cabin" className="w-full h-64 object-cover rounded-lg hover:scale-105 transition duration-300" />
            <img src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Australian Rainforest Retreat" className="w-full h-64 object-cover rounded-lg hover:scale-105 transition duration-300" />
            <img src="https://images.unsplash.com/photo-1598522325074-042db73aa4e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Scenic Rim Rainforest" className="w-full h-64 object-cover rounded-lg hover:scale-105 transition duration-300" />
          </div>
          <div className="text-center mt-8">
            <a href="https://www.instagram.com/divineshaderesort?igsh=bTVvN3k2ejI2ZnY%3D" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300 inline-block">View More on Instagram</a>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="py-20 bg-amber-50/80">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12">Book Your Stay</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-green-800 mb-4">Check Availability</h3>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">October 2024 Availability</h4>
                  <div className="grid grid-cols-7 gap-1 text-sm">
                    <div className="text-center font-semibold">Su</div>
                    <div className="text-center font-semibold">Mo</div>
                    <div className="text-center font-semibold">Tu</div>
                    <div className="text-center font-semibold">We</div>
                    <div className="text-center font-semibold">Th</div>
                    <div className="text-center font-semibold">Fr</div>
                    <div className="text-center font-semibold">Sa</div>
                    {Array.from({ length: 31 }, (_, i) => {
                      const day = i + 1;
                      const available = [5, 6, 12, 13, 19, 20, 26, 27].includes(day);
                      return (
                        <div key={day} className={`text-center p-2 rounded ${available ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                          {day}
                        </div>
                      );
                    })}
                  </div>
                  <p className="mt-4 text-sm text-gray-600">
                    <span className="inline-block w-4 h-4 bg-green-200 rounded mr-2"></span>Available
                    <span className="inline-block w-4 h-4 bg-red-200 rounded ml-4 mr-2"></span>Booked
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-green-800 mb-4">Make a Reservation</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Check-in" />
                    <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Check-out" />
                  </div>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>Select Room Type</option>
                    <option>Villa Suite</option>
                    <option>Treehouse Retreat</option>
                    <option>Garden Bungalow</option>
                  </select>
                  <input type="number" placeholder="Guests" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
                  <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition duration-300">Request Booking</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-amber-50/80">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12">What Our Guests Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=150" alt="Guest" className="w-16 h-16 rounded-full mx-auto mb-4" />
              <p className="text-gray-600 mb-4 italic">"An absolute paradise! The wellness focus and natural beauty made our stay unforgettable."</p>
              <cite className="text-tan-orange font-semibold">- Sarah & John, Sydney</cite>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=150" alt="Guest" className="w-16 h-16 rounded-full mx-auto mb-4" />
              <p className="text-gray-600 mb-4 italic">"The perfect romantic getaway. We felt completely rejuvenated."</p>
              <cite className="text-tan-orange font-semibold">- Emma & Michael, Brisbane</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white/80">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-tan-orange mb-2">Location</h3>
                <p className="text-gray-600">Scenic Rim, Queensland, Australia</p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-tan-orange mb-2">Email</h3>
                <p className="text-gray-600">info@divineshaderesort.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-tan-orange mb-2">Phone</h3>
                <p className="text-gray-600">+61 400 123 456</p>
              </div>
            </div>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
              <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
              <textarea placeholder="Message" rows={4} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none" required></textarea>
              <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition duration-300">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">&copy; 2024 Divine Shade Resort. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/divineshaderesort?igsh=bTVvN3k2ejI2ZnY%3D" target="_blank" rel="noopener noreferrer" className="hover:text-amber-200 transition duration-300">Instagram</a>
            <a href="https://www.facebook.com/divineshaderesort" target="_blank" rel="noopener noreferrer" className="hover:text-amber-200 transition duration-300">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
