import { Heart, Users, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About MiniMart
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Your trusted partner in online shopping since 2020
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              MiniMart was founded with a simple mission: to make online
              shopping accessible, affordable, and enjoyable for everyone. What
              started as a small startup has grown into a thriving e-commerce
              platform serving thousands of happy customers.
            </p>
            <p className="mb-4">
              We believe that shopping should be an experience, not just a
              transaction. That's why we carefully curate our product selection,
              partner with reliable suppliers, and ensure every customer
              receives the quality they deserve.
            </p>
            <p>
              Today, we're proud to offer a diverse range of products, from
              everyday essentials to unique finds, all backed by our commitment
              to exceptional customer service and competitive pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition-shadow">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-red-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Customer First</h3>
            <p className="text-gray-600">
              Your satisfaction is our top priority. We go above and beyond to
              ensure you're happy.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Community</h3>
            <p className="text-gray-600">
              We're building a community of shoppers who value quality and great
              service.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
            <p className="text-gray-600">
              We constantly improve our platform to provide you with the best
              shopping experience.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Excellence</h3>
            <p className="text-gray-600">
              We maintain high standards in everything we do, from product
              quality to customer support.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-12 text-center">
            MiniMart by the Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10,000+</div>
              <div className="text-indigo-100 text-lg">Happy Customers</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">5,000+</div>
              <div className="text-indigo-100 text-lg">Products Available</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">99.5%</div>
              <div className="text-indigo-100 text-lg">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Join the MiniMart Family
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience the difference that quality and care make
          </p>
          <Link
            to="/products"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Start Shopping
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
