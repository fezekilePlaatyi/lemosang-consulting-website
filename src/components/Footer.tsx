
import { Zap, Cog, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold">Lemosang Consulting</h3>
            </div>
            <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
              Leading electrical and mechanical engineering consultancy, delivering innovative 
              solutions for complex projects across commercial, industrial, and residential sectors.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Certificates</h4>
            <ul className="space-y-2 text-slate-300">
              <li>ISO</li>
              <li>BBEEE</li>
              <li>COIDA</li>
              <li>CSD</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Smart Water & Electricity Metering</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Power Plant Maintenance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Revenue Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Construction Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Engineering Consulting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Renewable Technologies</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Contact</h4>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-blue-400" />
                <div>
                  <p>011 568 6201</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-blue-400" />
                <div>
                  <span>info@lemosang.com</span>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-blue-400 mt-1" />
                <div>
                  <p>No. 35, Waterford Office Park</p>
                  <p>Maroeladal, Randburg 2194</p>
                  <p>South Africa</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
              <p className="text-slate-400">
                © 2024 Lemosang Consulting. All rights reserved.
              </p>
              <p className="text-slate-400">
                Developed by{" "}
                <a 
                  href="https://myplusplus.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  mY++
                </a>
              </p>
            </div>
            <div className="flex space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Careers</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
