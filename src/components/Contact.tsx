import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    goal: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Thanks! I will get back to you soon.",
      description: "Your message has been received successfully.",
    });

    setFormData({
      name: "",
      phone: "",
      email: "",
      goal: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#0D0D0D] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== Header ===== */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading mb-4 uppercase leading-tight">
            Start Your Fitness Journey with{" "}
            <span className="text-[#e50914]">Sagar Fitness</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-2 sm:px-0">
            Looking to transform your fitness lifestyle? Fill out the form or get in touch directly — let’s start your journey today.
          </p>
        </div>

        {/* ===== Main Layout ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-stretch">
          {/* ===== Left: Contact Form ===== */}
          <div className="bg-[#101010] border border-[#1a1a1a] rounded-2xl p-6 sm:p-8 shadow-lg flex flex-col justify-between h-full">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 flex-1 flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-[#0B0B0B] border border-[#2a2a2a] text-white mt-2"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-[#0B0B0B] border border-[#2a2a2a] text-white mt-2"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {/* Phone and Goal */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="bg-[#0B0B0B] border border-[#2a2a2a] text-white mt-2"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <Label htmlFor="goal">Select Goal *</Label>
                    <Select
                      value={formData.goal}
                      onValueChange={(value) =>
                        setFormData({ ...formData, goal: value })
                      }
                      required
                    >
                      <SelectTrigger className="bg-[#0B0B0B] border border-[#2a2a2a] text-white mt-2">
                        <SelectValue placeholder="Choose your goal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weight-loss">Weight Loss</SelectItem>
                        <SelectItem value="weight-gain">Weight Gain</SelectItem>
                        <SelectItem value="body-toning">Body Toning</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-[#0D0D0D] border border-[#2a2a2a] text-white min-h-[150px] mt-2"
                    placeholder="Tell me about your fitness goals..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-[#e50914] hover:bg-[#b30710] text-white font-semibold uppercase tracking-wider rounded-lg transition-all duration-200 mt-4"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </Button>
            </form>
          </div>

          {/* ===== Right: Contact Info ===== */}
          <div className="space-y-6 flex flex-col justify-start h-full">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-medium mb-3 uppercase">
              Get in Touch
            </h1>

            {/* Description */}
            <p className="text-gray-400 mb-4 text-sm sm:text-base leading-relaxed">
              We're here to help you begin your fitness transformation.
            </p>

            {/* Social Icons */}
            <div className="flex justify-start flex-wrap items-center gap-3 mb-6">
              <a
                href="https://www.facebook.com/share/166pnDhWZL/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#1873EA] transition-all duration-300 group"
                aria-label="Facebook"
              >
                <FaFacebookF
                  size={18}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a
                href="https://www.instagram.com/sagarfitness__"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#CA00C0] transition-all duration-300 group"
                aria-label="Instagram"
              >
                <FaInstagram
                  size={18}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=919876543210&text=Hi+Sagar%2C+I%27m+interested+in+the+3-month+transformation+program.+Can+you+share+more+details%3F&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#25CC63] transition-all duration-300 group"
                aria-label="WhatsApp"
              >
                <FaWhatsapp
                  size={18}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a
                href="https://www.youtube.com/@sagargatlewar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FF0000] transition-all duration-300 group"
                aria-label="YouTube"
              >
                <FaYoutube
                  size={18}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </a>
            </div>

            {/* Contact Info Boxes */}
            <div className="flex flex-col gap-4 sm:gap-6">
              {[
                {
                  icon: <Phone className="w-6 h-6 text-[#e50914]" />,
                  title: "Phone",
                  detail: "+91 92846 49579",
                },
                {
                  icon: <Mail className="w-6 h-6 text-[#e50914]" />,
                  title: "Email",
                  detail: "contact@sagarfitness.com",
                },
                {
                  icon: <MapPin className="w-6 h-6 text-[#e50914]" />,
                  title: "Address",
                  detail: "Erai Multi-Fit Gym",
                  link: "https://share.google/HZjk66b8XQZiAHLsk",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 bg-[#111111] border border-[#1e1e1e] p-5 sm:p-6 rounded-xl transition-all hover:border-[#e50914]/40 hover:bg-[#121212] cursor-pointer"
                  onClick={() => item.link && window.open(item.link, "_blank")}
                >
                  <div className="bg-[#e50914]/20 p-3 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg text-white tracking-wide mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-300 font-light">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
