import { useState } from "react";
import axios from "axios";
import { Mail, Phone, MapPin, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const EMAIL_ENDPOINT =
  "https://kdtaj5dootrjfpaqowomhua5ce0okvek.lambda-url.af-south-1.on.aws/";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear error when typing
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.firstName) newErrors.firstName = "First name is required";
    if (!form.lastName) newErrors.lastName = "Last name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.phone) newErrors.phone = "Phone number is required";
    if (!form.company) newErrors.company = "Company name is required";
    if (!form.service) newErrors.service = "Please select a service";
    if (!form.description)
      newErrors.description = "Project description is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      alert("❌ Please fill in all required fields.");
      return;
    }

    setSubmitting(true);

    const subject = `New Project Request from ${form.firstName} ${form.lastName}`;
    const body = `
  <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; border: 1px solid #e5e5e5; border-radius: 8px; overflow: hidden;">
    <div style="background-color: #0d9488; color: #fff; padding: 20px; text-align: center;">
      <h2 style="margin: 0;">🚀 New Project Request</h2>
    </div>
    <div style="padding: 20px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px; font-weight: bold; width: 150px;">Name:</td>
          <td style="padding: 8px;">${form.firstName} ${form.lastName}</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="padding: 8px; font-weight: bold;">Email:</td>
          <td style="padding: 8px;">${form.email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Phone:</td>
          <td style="padding: 8px;">${form.phone}</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="padding: 8px; font-weight: bold;">Company:</td>
          <td style="padding: 8px;">${form.company}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Service Required:</td>
          <td style="padding: 8px;">${form.service}</td>
        </tr>
        <tr style="background-color: #f9f9f9; vertical-align: top;">
          <td style="padding: 8px; font-weight: bold;">Project Description:</td>
          <td style="padding: 8px;">${form.description.replace(
            /\n/g,
            "<br/>"
          )}</td>
        </tr>
      </table>
    </div>
    <div style="background-color: #f3f4f6; color: #555; padding: 15px; font-size: 12px; text-align: center;">
      <p style="margin: 0;">This message was sent from the <strong>Lemosang Consulting</strong> website contact form.</p>
    </div>
  </div>
`;

    const payload = {
      toAddresses: ["info@lemosangconsulting.co.za"],
      subject,
      body,
      fromAddress: "info@lemosangconsulting.co.za",
    };

    try {
      await axios.post(EMAIL_ENDPOINT, payload);
      alert("✅ Your request has been submitted successfully!");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        description: "",
      });
    } catch (error) {
      console.error("Email error:", error);
      alert(
        "❌ Something went wrong while submitting your request. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="text-center mb-16">
          {" "}
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Contact Us
          </h2>{" "}
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {" "}
            Ready to start your project? Contact our team of experts for a
            consultation{" "}
          </p>{" "}
        </div>{" "}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {" "}
          {/* Contact Information */}{" "}
          <div className="lg:col-span-1">
            {" "}
            <div className="space-y-6">
              {" "}
              <Card className="border-0 shadow-md">
                {" "}
                <CardHeader className="pb-4">
                  {" "}
                  <CardTitle className="flex items-center text-lg">
                    {" "}
                    <div className="p-2 bg-teal-100 rounded-lg mr-3">
                      {" "}
                      <Phone className="h-5 w-5 text-teal-600" />{" "}
                    </div>{" "}
                    Phone{" "}
                  </CardTitle>{" "}
                </CardHeader>{" "}
                <CardContent className="pt-0">
                  {" "}
                  <p className="text-slate-600">011 568 6201</p>{" "}
                  <p className="text-sm text-slate-500">Business Hours</p>{" "}
                </CardContent>{" "}
              </Card>{" "}
              <Card className="border-0 shadow-md">
                {" "}
                <CardHeader className="pb-4">
                  {" "}
                  <CardTitle className="flex items-center text-lg">
                    {" "}
                    <div className="p-2 bg-green-100 rounded-lg mr-3">
                      {" "}
                      <Mail className="h-5 w-5 text-green-600" />{" "}
                    </div>{" "}
                    Email & Website{" "}
                  </CardTitle>{" "}
                </CardHeader>{" "}
                <CardContent className="pt-0">
                  {" "}
                  <p className="text-slate-600">info@lemosangconsulting.co.za</p>{" "}
                  <p className="text-slate-600">www.lemosangconsulting.co.za</p>{" "}
                  <p className="text-slate-600">www.lemosang.com</p>{" "}
                  <p className="text-sm text-slate-500">
                    24-hour response time
                  </p>{" "}
                </CardContent>{" "}
              </Card>{" "}
              <Card className="border-0 shadow-md">
                {" "}
                <CardHeader className="pb-4">
                  {" "}
                  <CardTitle className="flex items-center text-lg">
                    {" "}
                    <div className="p-2 bg-purple-100 rounded-lg mr-3">
                      {" "}
                      <MapPin className="h-5 w-5 text-purple-600" />{" "}
                    </div>{" "}
                    Office Location{" "}
                  </CardTitle>{" "}
                </CardHeader>{" "}
                <CardContent className="pt-0">
                  {" "}
                  <p className="text-slate-600">
                    No. 35, Waterford Office Park
                  </p>{" "}
                  <p className="text-slate-600">Maroeladal, Randburg 2194</p>{" "}
                  <p className="text-slate-600">South Africa</p>{" "}
                </CardContent>{" "}
              </Card>{" "}
              <Card className="border-0 shadow-md">
                {" "}
                <CardHeader className="pb-4">
                  {" "}
                  <CardTitle className="flex items-center text-lg">
                    {" "}
                    <div className="p-2 bg-orange-100 rounded-lg mr-3">
                      {" "}
                      <Award className="h-5 w-5 text-orange-600" />{" "}
                    </div>{" "}
                    CIDB Registration{" "}
                  </CardTitle>{" "}
                </CardHeader>{" "}
                <CardContent className="pt-0">
                  {" "}
                  <p className="text-slate-600">CIDB (212256)</p>{" "}
                  <p className="text-slate-600">8EP & 8EB</p>{" "}
                  <p className="text-sm text-slate-500">
                    Certified & Registered
                  </p>{" "}
                </CardContent>{" "}
              </Card>{" "}
            </div>{" "}
          </div>
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">
                  Start Your Project
                </CardTitle>
                <p className="text-slate-600">
                  Fill out the form below and we'll get back to you within 24
                  hours
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        First Name
                      </label>
                      <Input
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="John"
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Last Name
                      </label>
                      <Input
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john.doe@company.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone
                      </label>
                      <Input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+27 11 568 6201"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Company
                    </label>
                    <Input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company Name"
                    />
                    {errors.company && (
                      <p className="text-red-500 text-sm">{errors.company}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Service Required
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="">Select service type...</option>
                      <option>Smart Water & Electricity Metering</option>
                      <option>Power Plant Maintenance</option>
                      <option>Revenue Management & Enhancement</option>
                      <option>Construction Management</option>
                      <option>Electrical & Plumbing Services</option>
                      <option>Engineering Services & Consulting</option>
                      <option>Renewable Technologies</option>
                      <option>Other</option>
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-sm">{errors.service}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Project Description
                    </label>
                    <Textarea
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                      placeholder="Please describe your project requirements, timeline, and any specific needs..."
                      rows={4}
                    />
                    {errors.description && (
                      <p className="text-red-500 text-sm">
                        {errors.description}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-teal-600 hover:bg-teal-700"
                    disabled={submitting}
                  >
                    {submitting ? "Submitting..." : "Submit Project Request"}
                  </Button>
                </form>

                <p className="text-sm text-slate-500 text-center">
                  By submitting this form, you agree to our privacy policy and
                  terms of service.
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
