
import { Mail, Phone, MapPin, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Contact Us</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to start your project? Contact our team of experts for a consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <Card className="border-0 shadow-md">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-lg">
                    <div className="p-2 bg-teal-100 rounded-lg mr-3">
                      <Phone className="h-5 w-5 text-teal-600" />
                    </div>
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-600">011 568 6201</p>
                  <p className="text-slate-600">063 786 0069</p>
                  <p className="text-sm text-slate-500">Business Hours</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-lg">
                    <div className="p-2 bg-green-100 rounded-lg mr-3">
                      <Mail className="h-5 w-5 text-green-600" />
                    </div>
                    Email & Website
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-600">info@lemosangconsulting.co.za</p>
                  <p className="text-slate-600">www.lemosangconsulting.co.za</p>
                  <p className="text-sm text-slate-500">24-hour response time</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-lg">
                    <div className="p-2 bg-purple-100 rounded-lg mr-3">
                      <MapPin className="h-5 w-5 text-purple-600" />
                    </div>
                    Office Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-600">No. 35, Waterford Office Park</p>
                  <p className="text-slate-600">Maroeladal, Randburg 2194</p>
                  <p className="text-slate-600">South Africa</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-lg">
                    <div className="p-2 bg-orange-100 rounded-lg mr-3">
                      <Award className="h-5 w-5 text-orange-600" />
                    </div>
                    CIDB Registration
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-600">CIDB (212256)</p>
                  <p className="text-slate-600">7EP & 7EB</p>
                  <p className="text-sm text-slate-500">Certified & Registered</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">Start Your Project</CardTitle>
                <p className="text-slate-600">Fill out the form below and we'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <Input type="email" placeholder="john.doe@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                    <Input placeholder="+27 11 568 6201" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                  <Input placeholder="Company Name" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Service Required</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500">
                    <option>Select service type...</option>
                    <option>Smart Water & Electricity Metering</option>
                    <option>Power Plant Maintenance</option>
                    <option>Revenue Management & Enhancement</option>
                    <option>Construction Management</option>
                    <option>Electrical & Plumbing Services</option>
                    <option>Engineering Services & Consulting</option>
                    <option>Renewable Technologies</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Project Description</label>
                  <Textarea 
                    placeholder="Please describe your project requirements, timeline, and any specific needs..."
                    rows={4}
                  />
                </div>

                <Button size="lg" className="w-full bg-teal-600 hover:bg-teal-700">
                  Submit Project Request
                </Button>

                <p className="text-sm text-slate-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
