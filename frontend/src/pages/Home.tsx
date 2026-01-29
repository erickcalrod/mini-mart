import { ShoppingBag, Truck, Shield, Headphones } from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
      {/* Hero Section with Beach Background */}
      <section className="relative overflow-hidden h-screen">
        {/* Beach Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000')",
          }}
        ></div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
                Welcome to MiniMart
              </h1>
              <p className="text-xl md:text-3xl mb-12 text-cyan-50 max-w-3xl mx-auto drop-shadow-md">
                Your beachside shop for everything you need. Fresh products
                delivered to your beach spot!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://www.doordash.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-50 transition-all transform hover:scale-105 shadow-2xl"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.071 8.409a6.09 6.09 0 00-5.396-3.228H.584A.589.589 0 00.17 6.184L3.894 9.93a1.752 1.752 0 001.242.516h12.049a1.554 1.554 0 11.031 3.108H8.91a.589.589 0 00-.415 1.003l3.725 3.747a1.752 1.752 0 001.242.516h3.757c4.887 0 8.584-5.225 5.852-10.411z" />
                  </svg>
                  Order on DoorDash
                </a>
                <a
                  href="https://www.ubereats.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-all transform hover:scale-105 shadow-2xl"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 17.5h-3v-11h3v11zm7.5 0h-3v-6.5c0-1.378-1.122-2.5-2.5-2.5S10 9.622 10 11v6.5H7V6.5h3v1.528c.736-.924 1.874-1.528 3.25-1.528 2.206 0 4 1.794 4 4v7z" />
                  </svg>
                  Order on Uber Eats
                </a>
              </div>
            </div>
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

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-2 border-transparent hover:border-cyan-200">
            <div className="bg-gradient-to-br from-cyan-100 to-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <ShoppingBag className="text-cyan-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
            <p className="text-gray-600">
              Curated selection of beachside essentials you'll love
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-2 border-transparent hover:border-teal-200">
            <div className="bg-gradient-to-br from-teal-100 to-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Truck className="text-teal-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Quick delivery right to your beach location
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-200">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Shield className="text-blue-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
            <p className="text-gray-600">
              Your transactions are safe and encrypted
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-2 border-transparent hover:border-cyan-200">
            <div className="bg-gradient-to-br from-cyan-100 to-teal-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Headphones className="text-cyan-600" size={28} />
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
        <div className="relative overflow-hidden rounded-2xl p-12 text-center text-white shadow-2xl">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2000')",
            }}
          />

          {/* Ultra-subtle color tint */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-400/5 to-teal-400/10" />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Shopping?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Order now through your favorite delivery platform
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://www.doordash.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-50 transition-all transform hover:scale-105 shadow-lg"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.071 8.409a6.09 6.09 0 00-5.396-3.228H.584A.589.589 0 00.17 6.184L3.894 9.93a1.752 1.752 0 001.242.516h12.049a1.554 1.554 0 11.031 3.108H8.91a.589.589 0 00-.415 1.003l3.725 3.747a1.752 1.752 0 001.242.516h3.757c4.887 0 8.584-5.225 5.852-10.411z" />
                </svg>
                Order on DoorDash
              </a>

              <a
                href="https://www.ubereats.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-all transform hover:scale-105 shadow-lg"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 17.5h-3v-11h3v11zm7.5 0h-3v-6.5c0-1.378-1.122-2.5-2.5-2.5S10 9.622 10 11v6.5H7V6.5h3v1.528c.736-.924 1.874-1.528 3.25-1.528 2.206 0 4 1.794 4 4v7z" />
                </svg>
                Order on Uber Eats
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
