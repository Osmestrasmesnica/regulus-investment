import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to discuss your mining finance needs? Get in touch with our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-yellow-600 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      Bahrain Financial Harbour<br />
                      East Tower, 21st Floor<br />
                      Manama, Kingdom of Bahrain
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-yellow-600 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+973 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-yellow-600 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@regulusinvestment.bh</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-yellow-600 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">
                      Sunday - Thursday: 8:00 AM - 6:00 PM<br />
                      Friday - Saturday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              {/* <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Interactive map would be embedded here</p>
                  <p className="text-sm">Bahrain Financial Harbour, Manama</p>
                </div> 
              </div> */}
              {/* The container div for the map */}
              <div className="bg-gray-100 rounded-lg h-64 overflow-hidden">
                <iframe
                  className="w-full h-full border-0"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24077.104878198697!2d50.573741846036846!3d26.22649078622364!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49af722776a62d%3A0x8b6738a6070f60c2!2z0JzQsNC90LDQvNCwLCDQkdCw0YXRgNC10LjQvQ!5e0!3m2!1ssr!2srs!4v1755704410072!5m2!1ssr!2srs" // Your copied SRC will go here
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Ways to Connect</h2>
            <p className="text-xl text-gray-600">
              Choose the communication method that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                <Phone className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Schedule a Call</h3>
              <p className="text-gray-600 mb-4">
                Book a consultation with one of our mining finance experts.
              </p>
              <a
                href="tel:+97312345678"
                className="text-yellow-600 hover:text-yellow-700 font-medium"
              >
                +973 1234 5678
              </a>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                <Mail className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">
                Send us an email and we'll respond within 24 hours.
              </p>
              <a
                href="mailto:info@regulusinvestment.bh"
                className="text-yellow-600 hover:text-yellow-700 font-medium"
              >
                info@regulusinvestment.bh
              </a>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Our Office</h3>
              <p className="text-gray-600 mb-4">
                Meet with us in person at our Bahrain headquarters.
              </p>
              <span className="text-yellow-600 font-medium">
                Bahrain Financial Harbour
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
