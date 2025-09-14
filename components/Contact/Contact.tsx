import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ContactUs: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6 lg:px-20" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl font-extrabold text-center text-green1 mb-4">
          Contact Us
        </h2>
        <p className="text-center text-green1 mb-12">
          Feel free to reach out to us for inquiries or assistance!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-cream shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-green1 mb-4">
              Get in Touch
            </h3>
            <p className="text-green1 mb-6">
              We would love to hear from you! Contact us via any of the channels
              below:
            </p>
            <ul className="space-y-4">
              {/* Phone Number */}
              <li className="flex items-center">
                <i className="bx bx-phone text-green1 text-2xl mr-4"></i>
                <a
                  href="tel:+918800969741"
                  className="text-green1 hover:text-[#7F9492] transition-colors"
                >
                  +918800969741
                </a>
              </li>

              {/* Email Address */}
              <li className="flex items-center">
                <i className="bx bx-envelope text-green1 text-2xl mr-4"></i>
                <a
                  href="mailto:business@hostmenindia.com"
                  className="text-green1 hover:text-[#7F9492] transition-colors"
                >
                  business@hostmenindia.com
                </a>
              </li>

              {/* Address */}
              <li className="flex items-center">
                <i className="bx bx-map text-green1 text-2xl mr-4"></i>
                <span className="text-green1">
                  111A/72A, Kanpur, Uttar Pradesh, India
                </span>
              </li>
            </ul>

            {/* WhatsApp Chat Button */}
            <div className="mt-6">
              <a
                href="https://wa.me/918800969741?text=Hello!%20I'm%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white flex items-center justify-center px-4 py-2 rounded-lg hover:bg-green-600 transition"
              >
                <FaWhatsapp className="mr-2" size={20} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-green1 mb-4">
              Our Location
            </h3>
            <p className="text-green1 mb-6">
              Find us at our office or contact us for more details.
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d259108.82031564556!2d80.12633639057806!3d26.44992330178127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47748c515cbd%3A0x55aaee4066e7c5d3!2sKanpur%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1694703325000!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
