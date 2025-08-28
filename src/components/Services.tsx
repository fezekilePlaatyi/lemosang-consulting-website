
import { Zap, Cog, Droplets, Building, Factory, Shield, TreePine, Building2, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Cog className="h-8 w-8 text-blue-600" />,
      title: "Power Plant Maintenance",
      description: "Turbine generation services and maintenance for power stations including Matimba, Lethabo, Arnot, Matla, Tutuka, Camden, and Majuba.",
      features: ["Turbine Maintenance", "Auxiliary Services", "Power Station Support", "Equipment Servicing"],
      image: "/lemosang-uploads/8ddde660-2f14-4465-afdc-3c9f104a7afe.png"
    },
    {
      icon: <Zap className="h-8 w-8 text-teal-600" />,
      title: "Revenue Management & Enhancement",
      description: "Advanced metering infrastructure for efficient utility management and monitoring.",
      features: ["Smart Meter Installation", "Revenue Management", "Energy Efficiency", "Real-time Monitoring"],
      image: "/lemosang-uploads/meter_installation.jpg"
    },
    {
      icon: <Building2 className="h-8 w-8 text-cyan-600" />,
      title: "Municipal Energy Consulting",
      description: "Comprehensive consulting services for municipalities to optimize energy usage and improve service delivery.",
      features: ["Municipal Solutions", "National Treasury Programs", "Revenue Optimization", "Utility Management"],
      image: "/lemosang-uploads/how-to-start-a-consulting-company.jpg"
    },
    {
      icon: <Building className="h-8 w-8 text-green-600" />,
      title: "Construction Management and Services",
      description: "Complete construction management services for residential and commercial projects.",
      features: ["Project Management", "Residential Construction", "Quality Control", "Timeline Management"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop&auto=format"
    },
    {
      icon: <Factory className="h-8 w-8 text-orange-600" />,
      title: "Electrical & Plumbing Services",
      description: "Professional electrical and plumbing maintenance for various sectors including government facilities.",
      features: ["Installation Services", "Maintenance Contracts", "Infrastructure Upgrades", "Emergency Repairs"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&auto=format"
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Business Development & Consultations",
      description: "Technical consulting and auditing services for energy systems and infrastructure projects.",
      features: ["Technical Audits", "Compliance Consulting", "System Design", "Performance Analysis", "BBBEE Partnership"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop&auto=format"
    },
    {
      icon: <TreePine className="h-8 w-8 text-emerald-600" />,
      title: "Renewable Technologies",
      description: "Solar water equipment and renewable energy solutions for sustainable development.",
      features: ["Solar Water Systems", "Energy Saving Devices", "Renewable Energy", "Sustainability Solutions"],
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600&h=300&fit=crop&auto=format"
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Helping our clients achieve their water and energy efficiency targets through comprehensive engineering solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 p-3 bg-white/90 rounded-lg">
                  {service.icon}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">{service.title}</CardTitle>
                <CardDescription className="text-slate-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
