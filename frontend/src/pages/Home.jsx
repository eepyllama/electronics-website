import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star,
  Monitor,
  Wrench,
  Laptop,
  Shield,
  HardDrive,
  Headphones,
  Award,
  Zap,
  DollarSign,
  CheckCircle,
  Heart,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import { businessInfo, services, whyChooseUs, customerReviews } from '../mock';

const iconMap = {
  Monitor,
  Wrench,
  Laptop,
  Shield,
  HardDrive,
  Headphones,
  Award,
  Zap,
  DollarSign,
  CheckCircle,
  MapPin,
  Heart
};

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  const handleCallNow = () => {
    window.location.href = `tel:${businessInfo.phone}`;
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex flex-col">
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">{businessInfo.name.english}</h1>
              <p className="text-xs text-sky-600">{businessInfo.name.hindi}</p>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-sky-600 transition-colors text-sm font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-sky-600 transition-colors text-sm font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-gray-600 hover:text-sky-600 transition-colors text-sm font-medium">
                Reviews
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-sky-600 transition-colors text-sm font-medium">
                Contact
              </button>
              <Button onClick={handleCallNow} className="bg-sky-600 hover:bg-sky-700 text-white">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-600 hover:text-sky-600 py-2">
                Services
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-600 hover:text-sky-600 py-2">
                About
              </button>
              <button onClick={() => scrollToSection('reviews')} className="block w-full text-left text-gray-600 hover:text-sky-600 py-2">
                Reviews
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-600 hover:text-sky-600 py-2">
                Contact
              </button>
              <Button onClick={handleCallNow} className="w-full bg-sky-600 hover:bg-sky-700 text-white">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-white via-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 mr-1 fill-sky-600" />
                {businessInfo.rating} Rating · {businessInfo.totalReviews} Reviews
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {businessInfo.tagline}
              </h1>
              
              <p className="text-lg text-gray-600">
                Trusted local computer service provider in Gurugram offering quality sales, rental, and repair services for all your computing needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleCallNow} size="lg" className="bg-sky-600 hover:bg-sky-700 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
                <Button onClick={() => scrollToSection('contact')} size="lg" variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50">
                  Get a Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2 text-sky-600" />
                  <span className="text-sm">{businessInfo.workingHours}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2 text-sky-600" />
                  <span className="text-sm">Sector 4, Gurugram</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">Quick Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-sky-600 mr-3" />
                      <a href={`tel:${businessInfo.phone}`} className="text-gray-900 hover:text-sky-600 font-medium">
                        {businessInfo.phone}
                      </a>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-sky-600 mr-3 mt-1" />
                      <p className="text-gray-600 text-sm">{businessInfo.address}</p>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-sky-600 mr-3" />
                      <p className="text-gray-600 text-sm">{businessInfo.workingHours}</p>
                    </div>
                  </div>
                  <Button onClick={() => scrollToSection('contact')} className="w-full bg-sky-600 hover:bg-sky-700 text-white mt-4">
                    Visit Our Store
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive computer and laptop solutions for all your needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Card key={service.id} className="border-2 hover:border-sky-400 hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-14 h-14 bg-sky-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-600 transition-colors duration-300">
                      <IconComponent className="w-7 h-7 text-sky-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-sky-50 text-sky-700 hover:bg-sky-100">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">About Vaishno Computer System</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We are a trusted local computer service provider based in Gurugram, Haryana. With years of experience in the industry, we specialize in laptop and desktop sales, rental services, and expert repair solutions.
                </p>
                <p>
                  Our mission is to provide quality, affordable, and reliable computer services to home users, students, small businesses, and corporate clients throughout Gurugram and nearby areas.
                </p>
                <p>
                  We pride ourselves on our commitment to customer satisfaction, using genuine parts, maintaining transparent pricing, and delivering quick turnaround times for all services.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-4xl font-bold text-sky-600 mb-2">1000+</div>
                <div className="text-gray-600 text-sm">Happy Customers</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-4xl font-bold text-sky-600 mb-2">5+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-4xl font-bold text-sky-600 mb-2">98%</div>
                <div className="text-gray-600 text-sm">Success Rate</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-4xl font-bold text-sky-600 mb-2">24/7</div>
                <div className="text-gray-600 text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your trusted partner for all computer and laptop services in Gurugram
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => {
              const IconComponent = iconMap[item.icon];
              return (
                <div key={item.id} className="text-center group">
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sky-600 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-sky-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-6 h-6 ${i < Math.floor(businessInfo.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
              ))}
              <span className="text-2xl font-bold text-gray-900 ml-2">{businessInfo.rating}</span>
              <span className="text-gray-600">({businessInfo.totalReviews} reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {customerReviews.map((review) => (
              <Card key={review.id} className="bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-sm text-gray-500">{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have a question or need a service? Contact us today!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>We'll get back to you as soon as possible</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        name="service"
                        placeholder="Service Required"
                        value={formData.service}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleFormChange}
                        rows={4}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 text-white">
                      Submit Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-sky-50 rounded-lg">
                  <Phone className="w-6 h-6 text-sky-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a href={`tel:${businessInfo.phone}`} className="text-sky-600 hover:underline">
                      {businessInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-sky-50 rounded-lg">
                  <Mail className="w-6 h-6 text-sky-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a href={`mailto:${businessInfo.email}`} className="text-sky-600 hover:underline">
                      {businessInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-sky-50 rounded-lg">
                  <MapPin className="w-6 h-6 text-sky-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">{businessInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-sky-50 rounded-lg">
                  <Clock className="w-6 h-6 text-sky-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Working Hours</h3>
                    <p className="text-gray-600">{businessInfo.workingHours}</p>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="rounded-lg overflow-hidden shadow-lg h-64">
                <iframe
                  src={businessInfo.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vaishno Computer System Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2">{businessInfo.name.english}</h3>
              <p className="text-sky-400 mb-4">{businessInfo.name.hindi}</p>
              <p className="text-gray-400 text-sm">
                Your trusted partner for laptop and computer sales, rental, and repair services in Gurugram.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <button onClick={() => scrollToSection('services')} className="hover:text-sky-400 transition-colors">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about')} className="hover:text-sky-400 transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('reviews')} className="hover:text-sky-400 transition-colors">
                    Reviews
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="hover:text-sky-400 transition-colors">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-sky-400" />
                  {businessInfo.phone}
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-sky-400" />
                  {businessInfo.email}
                </li>
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 text-sky-400 mt-1" />
                  <span>Sector 4, Gurugram, Haryana</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 Vaishno Computer System. All rights reserved.</p>
            <p className="mt-2">Serving Gurugram & nearby areas with quality computer services</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
