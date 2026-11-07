
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-white">

      {/* Page Heading */}
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[4px] text-[#D4AF37]">
          Get in touch
        </p>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Contact <span className="text-[#D4AF37]">Me</span>
        </h1>

        <p className="text-gray-400 text-lg">
          Have a question, collaboration idea, or project in mind?
          Reach out below!
        </p>

        <div className="w-20 h-1 bg-[#D4AF37] rounded-full"></div>
      </div>

      {/* Contact Information and Form */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Contact Information */}
        <div className="space-y-4">

          <Card className="bg-[#171717] border border-[#D4AF37]/30 text-white hover:border-[#D4AF37] transition duration-300">
            <CardContent className="p-5 flex items-center gap-4">
              <Mail className="h-6 w-6 text-[#D4AF37]" />
              <div>
                <p className="text-xs text-gray-400 font-medium">Email</p>
                <p className="text-sm font-semibold break-all">
                  ajdy@gbox.ncf.edu.ph
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#171717] border border-[#D4AF37]/30 text-white hover:border-[#D4AF37] transition duration-300">
            <CardContent className="p-5 flex items-center gap-4">
              <Phone className="h-6 w-6 text-[#D4AF37]" />
              <div>
                <p className="text-xs text-gray-400 font-medium">Phone</p>
                <p className="text-sm font-semibold">
                  +63 9101480408
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#171717] border border-[#D4AF37]/30 text-white hover:border-[#D4AF37] transition duration-300">
            <CardContent className="p-5 flex items-center gap-4">
              <MapPin className="h-6 w-6 text-[#D4AF37]" />
              <div>
                <p className="text-xs text-gray-400 font-medium">Location</p>
                <p className="text-sm font-semibold">
                  Naga City, Philippines
                </p>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Message Form */}
        <Card className="md:col-span-2 bg-[#171717] border border-[#D4AF37]/30 text-white rounded-2xl shadow-lg">

          <CardHeader>
            <CardTitle className="text-xl text-[#D4AF37]">
              Send a Message
            </CardTitle>

            <CardDescription className="text-gray-400">
              Fill out the form below and I'll get back to you soon.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form className="space-y-5">

              {/* Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">
                    Name
                  </label>

                  <Input
                    id="name"
                    placeholder="Antonio Jubal Howem M. Dy"
                    required
                    className="bg-[#0a0a0a] border-[#3D3218] text-white placeholder:text-gray-600 focus-visible:ring-[#D4AF37]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">
                    Email
                  </label>

                  <Input
                    id="email"
                    type="email"
                    placeholder="ajdy@gbox.ncf.edu.ph"
                    required
                    className="bg-[#0a0a0a] border-[#3D3218] text-white placeholder:text-gray-600 focus-visible:ring-[#D4AF37]"
                  />
                </div>

              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                  Subject
                </label>

                <Input
                  id="subject"
                  placeholder="Project Inquiry / Hello"
                  required
                  className="bg-[#0a0a0a] border-[#3D3218] text-white placeholder:text-gray-600 focus-visible:ring-[#D4AF37]"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Message
                </label>

                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Your message here..."
                  required
                  className="bg-[#0a0a0a] border-[#3D3218] text-white placeholder:text-gray-600 focus-visible:ring-[#D4AF37] resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full sm:w-auto bg-[#D4AF37] text-black font-semibold hover:bg-[#B8962E] transition duration-300"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>

            </form>
          </CardContent>
        </Card>

      </div>

      {/* Footer */}
      <div className="text-center pt-6">
        <p className="text-gray-500 text-sm tracking-widest">
          LET'S CONNECT • ANTONIO M. DY
        </p>
      </div>

    </div>
  );
}
