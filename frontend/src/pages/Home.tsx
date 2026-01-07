import { ShoppingBag, Truck, Shield, Headphones } from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to MiniMart
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-2xl mx-auto">
              Discover amazing products at unbeatable prices. Your one-stop shop
              for everything you need.
            </p>
            <a
              href="/products"
              className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Shop Now
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="rgb(248 250 252)"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-indigo-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <ShoppingBag className="text-indigo-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
            <p className="text-gray-600">
              Curated selection of premium items you'll love
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Truck className="text-green-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
            <p className="text-gray-600">Free delivery on orders over $50</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Shield className="text-blue-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
            <p className="text-gray-600">
              Your transactions are safe and encrypted
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Headphones className="text-purple-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Always here to help with your questions
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Explore our wide range of products and find exactly what you're
            looking for
          </p>
          <a
            href="/products"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-all transform hover:scale-105 shadow-lg"
          >
            Browse Products
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
