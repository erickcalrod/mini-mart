import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
      {/* Header Section with Beach Background */}
      <section className="relative overflow-hidden h-80">
        {/* Beach Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2000')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/80 via-blue-600/70 to-teal-600/80"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
              Contact Us
            </h1>
            <p className="text-xl text-cyan-100 max-w-3xl drop-shadow-md">
              We'd love to hear from you. Get in touch with our team.
            </p>
          </div>
        </div>

        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="rgb(236 254 255)"
            />
          </svg>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Have questions? We're here to help. Reach out to us through any
                of the following channels.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-cyan-200">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-cyan-100 to-blue-100 p-3 rounded-lg">
                    <Phone className="text-cyan-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-1">
                      Phone
                    </h3>
                    <p className="text-gray-600">+1 (310) 230-3222</p>
                    <p className="text-gray-600">+1 (555) 765-4321</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-teal-200">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-teal-100 to-cyan-100 p-3 rounded-lg">
                    <Mail className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-1">
                      Email
                    </h3>
                    <p className="text-gray-600">support@minimart.com</p>
                    <p className="text-gray-600">info@minimart.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-200">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-100 to-teal-100 p-3 rounded-lg">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-1">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      14801 Pacific Coast Highway, 101 Entrada Dr
                    </p>
                    <p className="text-gray-600">Santa Monica, CA 90402</p>
                    <p className="text-gray-600">United States</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-cyan-200">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-cyan-100 to-teal-100 p-3 rounded-lg">
                    <Clock className="text-cyan-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Sunday: 9:30 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-cyan-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h2>

            {submitted && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-800 font-medium">
                  ✓ Message sent successfully! We'll get back to you soon.
                </p>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition resize-none"
                  placeholder="Tell us what you need..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              >
                <Send size={20} />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-cyan-200">
          <div className="relative overflow-hidden p-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500">
            {/* Beach pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2000')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white">
                Visit Our Beachside Store
              </h2>
              <p className="text-cyan-100 mt-1">
                Find us at our physical location on the Pacific Coast
              </p>
            </div>
          </div>
          <div className="relative h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.61616531919!2d-118.52132272503135!3d34.02806221900803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a490596feaad%3A0x48ba85c39e6233fd!2sState%20Beach%20Liquor%20Mini%20Mart!5e0!3m2!1sen!2sus!4v1767829520204!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MiniMart Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
