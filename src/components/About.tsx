
import { Users, Award, Target, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "20+", label: "Expert Engineers" },
    { icon: <Award className="h-8 w-8" />, number: "15+", label: "Years Experience" },
    { icon: <Target className="h-8 w-8" />, number: "50+", label: "Projects Delivered" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Leading the Future of Engineering
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              For over 15 years, Lemosang <i>"enlighten the others about us"</i> Consulting has been at the forefront of electrical and mechanical 
              engineering consulting. Our team of expert engineers combines innovative thinking with 
              proven methodologies to deliver exceptional results.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We specialize in complex projects that require deep technical expertise and creative 
              problem-solving. From sustainable energy solutions to advanced automation systems, 
              we help our clients achieve their most ambitious goals.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="flex justify-center text-blue-600 mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-slate-800 mb-1">{stat.number}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-slate-700 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Lemosang Consulting?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Proven Expertise</h4>
                    <p className="text-blue-100 text-sm">Licensed engineers with extensive industry experience</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Innovative Solutions</h4>
                    <p className="text-blue-100 text-sm">Cutting-edge technology and sustainable design practices</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Full-Service Support</h4>
                    <p className="text-blue-100 text-sm">From concept to completion, we're with you every step</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Quality Assurance</h4>
                    <p className="text-blue-100 text-sm">Rigorous testing and compliance with all industry standards</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Member of ECA (Electrical Contractors Association SA)</h4>
                    <p className="text-blue-100 text-sm">
                      Proudly affiliated with the ECA, ensuring the highest standards in electrical contracting
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
