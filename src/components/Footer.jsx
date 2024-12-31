import { Star } from "lucide-react";
function Footer() {
  return (
    <>
      {/* Footer */}
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Star className="text-blue-900 w-6 h-6" />
                </div>
                <span className="font-bold">Goldstar Security</span>
              </div>
              <p className="text-gray-400">Security with Sensibility</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Security Guards
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Corporate Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Event Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Emergency: 24/7</li>
                <li>Email: info@goldstar.com</li>
                <li>Phone: (977) 1-XXXX-XXX</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Goldstar Security. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
