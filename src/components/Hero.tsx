
import { ArrowRight, Zap, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("#contact");
    window.scrollTo({ top: document.getElementById("contact")?.offsetTop, behavior: "smooth" });
  }
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/8ddde660-2f14-4465-afdc-3c9f104a7afe.png"
          alt="Power Plant Infrastructure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-teal-900/70 to-slate-800/80"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-white/20 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/20 rotate-12"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-white/20 -rotate-45"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="flex justify-center items-center mb-6 space-x-4"></div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          <span className="text-teal-400">Energy</span> & <span className="text-blue-400">Water Efficiency</span>
          <br />
          Engineering Solutions
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Helping our clients achieve their energy and water efficiency targets through innovative engineering solutions and strategic partnerships.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8 py-4 group" onClick={handleNavigate}>
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <h3 className="text-3xl font-bold text-teal-400 mb-2">15+</h3>
            <p className="text-slate-300">Years Experience</p>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <h3 className="text-3xl font-bold text-teal-400 mb-2">32K+</h3>
            <p className="text-slate-300">Smart Meters Installed</p>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <h3 className="text-3xl font-bold text-teal-400 mb-2">13+</h3>
            <p className="text-slate-300">Strategic Partners</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
