import { Heart, Users, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
      {/* Hero Section with Beach Background */}
      <section className="relative overflow-hidden h-96">
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
              About MiniMart
            </h1>
            <p className="text-xl text-cyan-100 max-w-3xl drop-shadow-md">
              Your trusted beachside partner since 2020
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

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-cyan-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              MiniMart was founded with a simple mission: to make beachside
              shopping accessible, affordable, and enjoyable for everyone. What
              started as a small beach stand has grown into a thriving shop
              serving thousands of happy beachgoers and locals.
            </p>
            <p className="mb-4">
              We believe that shopping should be an experience, not just a
              transaction. That's why we carefully curate our product selection,
              partner with reliable suppliers, and ensure every customer
              receives the quality they deserve.
            </p>
            <p>
              Today, we're proud to offer a diverse range of products, from
              beach essentials to unique finds, all backed by our commitment to
              exceptional customer service and competitive pricing.
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
          <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition-shadow border-2 border-transparent hover:border-cyan-200">
            <div className="bg-gradient-to-br from-cyan-100 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-cyan-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Customer First</h3>
            <p className="text-gray-600">
              Your satisfaction is our top priority. We go above and beyond to
              ensure you're happy.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-200">
            <div className="bg-gradient-to-br from-blue-100 to-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Community</h3>
            <p className="text-gray-600">
              We're building a beachside community of shoppers who value quality
              and great service.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition-shadow border-2 border-transparent hover:border-teal-200">
            <div className="bg-gradient-to-br from-teal-100 to-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="text-teal-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
            <p className="text-gray-600">
              We constantly improve our offerings to provide you with the best
              shopping experience.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition-shadow border-2 border-transparent hover:border-cyan-200">
            <div className="bg-gradient-to-br from-cyan-100 to-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-cyan-600" size={32} />
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
        <div className="relative overflow-hidden bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 rounded-2xl p-12 text-white shadow-2xl">
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
            <h2 className="text-3xl font-bold mb-12 text-center">
              MiniMart by the Numbers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">10,000+</div>
                <div className="text-cyan-100 text-lg">Happy Customers</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">5,000+</div>
                <div className="text-cyan-100 text-lg">Products Available</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">99.5%</div>
                <div className="text-cyan-100 text-lg">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Real feedback from real shoppers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Review Card 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow border-2 border-transparent hover:border-cyan-200">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Very nice store, great selection, once bought one too many
              bottles from here and blacked out from too much liqour. Thank
              you!!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                BM
              </div>
              <div>
                <p className="font-semibold text-gray-800">Brendan M.</p>
                <p className="text-sm text-gray-500">Verified Buyer</p>
              </div>
            </div>
          </div>

          {/* Review Card 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow border-2 border-transparent hover:border-cyan-200">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Local spot with great selection of beers, wine, and quick food.
              The guy is always smiling and helpful whenever I stop by."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                GR
              </div>
              <div>
                <p className="font-semibold text-gray-800">Greg Riche</p>
                <p className="text-sm text-gray-500">Verified Buyer</p>
              </div>
            </div>
          </div>

          {/* Review Card 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow border-2 border-transparent hover:border-cyan-200">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Extremely well-stocked. Courteous, helpful staff. And, they
              deliver!!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                GW
              </div>
              <div>
                <p className="font-semibold text-gray-800">George Wolfberg</p>
                <p className="text-sm text-gray-500">Verified Buyer</p>
              </div>
            </div>
          </div>

          {/* Review Card 4 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow border-2 border-transparent hover:border-cyan-200">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic">
              "I go here all the time! Always a great experience!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                PD
              </div>
              <div>
                <p className="font-semibold text-gray-800">PatrickDW</p>
                <p className="text-sm text-gray-500">Verified Buyer</p>
              </div>
            </div>
          </div>

          {/* Review Card 5 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow border-2 border-transparent hover:border-cyan-200">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Awesome ridiculous hats Amazing hat salesman of the year 😂 …"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                AK
              </div>
              <div>
                <p className="font-semibold text-gray-800">Anya K.</p>
                <p className="text-sm text-gray-500">Verified Buyer</p>
              </div>
            </div>
          </div>

          {/* Review Card 6 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow border-2 border-transparent hover:border-cyan-200">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic">
              "A little bit of everything at a good price"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                EO
              </div>
              <div>
                <p className="font-semibold text-gray-800">Erick Ortega</p>
                <p className="text-sm text-gray-500">Verified Buyer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Rating Summary */}
        <div className="mt-12 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-2xl p-8 border-2 border-cyan-200">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-2">
                3.7
              </div>
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600">Based on 66 reviews</p>
            </div>
            <div className="w-px h-24 bg-gray-300 hidden md:block"></div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-800 mb-2">98%</p>
              <p className="text-gray-600">Would recommend to friends</p>
            </div>
            <div className="w-px h-24 bg-gray-300 hidden md:block"></div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-800 mb-2">4.8</p>
              <p className="text-gray-600">Average product quality rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center border-2 border-cyan-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Join the MiniMart Family
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience the difference that quality and care make
          </p>

          <Link
            to="/products"
            className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-lg"
          >
            Start Shopping
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
