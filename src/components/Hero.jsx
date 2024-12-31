import security from "../assets/security.png";

function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-18 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F] via-[#003366] to-[#004080] opacity-90"></div>

        {/* Radial Glow to Blend with Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-radial-gradient rounded-full opacity-50"></div>
        </div>

        <div className="container mx-auto px-6 relative grid md:grid-cols-2 gap-8 items-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 sparkling-text">
              Professional Security Solutions
            </h2>
            <p className="text-xl mb-8 text-gray-300 sparkling-text">
              Protecting what matters most with dedication and expertise since
              2079
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
                Get Started
              </button>
              <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-blue-900 transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative flex justify-center">
            <img
              src={security}
              alt="Security Guard"
              className="w-full max-w-2xl mx-auto mb-0 md:mb-0"
            />
          </div>
        </div>
      </section>
      <style jsx>{`
        .sparkling-text {
          color: #ffffff;
          text-shadow: 0 0 4px rgba(255, 255, 255, 0.6),
            0 0 8px rgba(255, 255, 255, 0.5), 0 0 15px rgba(255, 255, 255, 0.3);
          background: linear-gradient(90deg, #ffffff, #e0e0e0, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: sparkle 3s infinite;
        }

        @keyframes sparkle {
          0% {
            text-shadow: 0 0 4px rgba(255, 255, 255, 0.6),
              0 0 8px rgba(255, 255, 255, 0.5),
              0 0 15px rgba(255, 255, 255, 0.3);
          }
          50% {
            text-shadow: 0 0 8px rgba(255, 255, 255, 0.8),
              0 0 15px rgba(255, 255, 255, 0.6),
              0 0 30px rgba(255, 255, 255, 0.4);
          }
          100% {
            text-shadow: 0 0 4px rgba(255, 255, 255, 0.6),
              0 0 8px rgba(255, 255, 255, 0.5),
              0 0 15px rgba(255, 255, 255, 0.3);
          }
        }

        .bg-radial-gradient {
          background: radial-gradient(
            circle at center,
            rgba(0, 31, 63, 0.8) 0%,
            rgba(0, 52, 104, 0.6) 60%,
            rgba(0, 66, 128, 0.5) 100%
          );
        }
      `}</style>
    </>
  );
}

export default Hero;
