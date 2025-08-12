import Navigation from '@/components/Navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MapPin } from "lucide-react";
import Projects from "@/data/projects.json";
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const AllProjects = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <br/>
      <br/>
        <br/>
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
                <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Projects</h2>
                <p className="text-xl text-slate-600 mx-auto">
                    Explore our portfolio of successful water and energy efficiency engineering projects. 
                    From innovative water conservation systems to advanced renewable energy solutions, our team has delivered impactful results for clients across various sectors. 
                    Each project showcases our commitment to sustainability, technical excellence, and client satisfaction. 
                    Discover how we turn challenges into opportunities and help communities thrive through smart engineering.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Projects.map((project, index) => (
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
        </div>
        </section>
        <Contact />
        <Footer />
    </div>
  )
}

export default AllProjects