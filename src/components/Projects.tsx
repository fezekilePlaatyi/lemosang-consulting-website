
import { ExternalLink, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Smart Electrical Meter Installation",
      description: "Auditing and Installation of 32,000 smart electrical meters in Gauteng under Eskom CORP3310 program.",
      category: "Smart Metering",
      location: "Gauteng, South Africa",
      year: "2024",
      tags: ["Smart Meters", "Eskom", "CORP3310"],
      image: "/lovable-uploads/dc17be6b-27a6-4501-9edb-8384e3390974.png"
    },
    {
      title: "Underground Cable Installation",
      description: "Laying of 132kVA underground electrical cable from Eskom Dalkeith substation to City Power Lutz substation in Roodepoort.",
      category: "Infrastructure",
      location: "Roodepoort",
      year: "2023",
      tags: ["Underground Cable", "Power Distribution", "132kVA"],
      image: "/lovable-uploads/ddad0d86-3cd6-42d8-bd68-46d55f039dc8.png"
    },
    {
      title: "Power Plant Maintenance Services",
      description: "Maintenance of Turbines and Auxiliary Services at Eskom Power Stations: Matimba, Lethabo, Arnot, Matla, Tutuka, Camden, and Majuba.",
      category: "Power Generation",
      location: "Multiple Eskom Stations",
      year: "2024",
      tags: ["Turbine Maintenance", "Power Plants", "Auxiliary Services"],
      image: "/lovable-uploads/8ddde660-2f14-4465-afdc-3c9f104a7afe.png"
    },
    {
      title: "Smart City Solution Implementation",
      description: "Comprehensive Smart City Solution for Rustenburg Local Municipality for improved service delivery and efficiency.",
      category: "Smart City",
      location: "Rustenburg Local Municipality",
      year: "2023",
      tags: ["Smart City", "Municipality", "Service Delivery"],
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&h=300&fit=crop&auto=format"
    },
    {
      title: "Energy Efficiency Programme",
      description: "Implementation of Energy Efficiency Programme by the Department of Infrastructure Development – Gauteng Provincial Government.",
      category: "Energy Efficiency",
      location: "Gauteng Province",
      year: "2024",
      tags: ["Energy Efficiency", "Government", "Infrastructure"],
      image: "/lovable-uploads/a3edcab4-327c-4c3f-aa18-164da4a6d2d4.png"
    },
    {
      title: "Solar Water Equipment Installation",
      description: "Supply and Installation of Solar Water Equipment in various provinces through GIZ-SAGEN partnership.",
      category: "Renewable Energy",
      location: "Multiple Provinces",
      year: "2023",
      tags: ["Solar Energy", "GIZ-SAGEN", "Water Heating"],
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600&h=300&fit=crop&auto=format"
    },
    {
      title: "Revenue Management for Municipalities",
      description: "Revenue Management and Enhancement for municipalities owing Eskom through National Treasury RT29 Program.",
      category: "Revenue Management",
      location: "Multiple Municipalities",
      year: "2024",
      tags: ["Revenue Management", "National Treasury", "RT29"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=300&fit=crop&auto=format"
    },
    {
      title: "Technical Audits of Energy Devices",
      description: "Technical and Physical Audits of installed energy-saving devices in KZN province by Eskom.",
      category: "Energy Audits",
      location: "KZN Province",
      year: "2023",
      tags: ["Technical Audits", "Energy Saving", "KZN"],
      image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=600&h=300&fit=crop&auto=format"
    },
    {
      title: "Vodacom Base Station Monitoring",
      description: "Installation of Raptors at Vodacom Base Stations to monitor performance and security of the base station.",
      category: "Telecommunications",
      location: "Various Locations",
      year: "2023",
      tags: ["Base Stations", "Monitoring", "Security"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=300&fit=crop&auto=format"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Experience</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our portfolio of successful water and energy efficiency engineering projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <div className="relative h-48 bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-slate-700">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg text-slate-800 group-hover:text-teal-600 transition-colors leading-tight">
                    {project.title}
                  </CardTitle>
                  <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                <CardDescription className="text-slate-600 mb-4 text-sm">
                  {project.description}
                </CardDescription>
                
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.year}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="hover:bg-teal-600 hover:text-white">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
