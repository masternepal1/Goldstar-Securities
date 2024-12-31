import { Phone } from "lucide-react";
function Assistance() {
  return (
    <>
      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Need Immediate Assistance?
            </h3>
            <p className="text-gray-300">
              Our security experts are available 24/7
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Contact Now</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
export default Assistance;
