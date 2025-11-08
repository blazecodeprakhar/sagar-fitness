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

    // Simulate form submission
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
    <section id="contact" className="py-20 bg-[#0B0B0B] text-white">
      <div className="container mx-auto px-4">
        {/* ===== Header ===== */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-heading mb-4 uppercase">
            Start Your Fitness Journey with{" "}
            <span className="text-[#e50914]">Sagar Fitness</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Looking to transform your fitness lifestyle? Fill out the form or get in touch directly
            — let’s start your journey today.
          </p>
        </div>

        {/* ===== Main Layout ===== */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* ===== Left: Contact Form ===== */}
          <div className="bg-[#101010] border border-[#1a1a1a] rounded-2xl p-8 shadow-lg flex flex-col justify-between h-full">
            <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-[#0B0B0B] border border-[#2a2a2a] text-white"
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
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-[#0B0B0B] border border-[#2a2a2a] text-white"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-[#0B0B0B] border border-[#2a2a2a] text-white"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <Label htmlFor="goal">Select Goal *</Label>
                    <Select
                      value={formData.goal}
                      onValueChange={(value) => setFormData({ ...formData, goal: value })}
                      required
                    >
                      <SelectTrigger className="bg-[#0B0B0B] border border-[#2a2a2a] text-white">
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

                <div>
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-[#0B0B0B] border border-[#2a2a2a] text-white min-h-[180px]"
                    placeholder="Tell me about your fitness goals..."
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-[#e50914] hover:bg-[#b30710] text-white font-bold uppercase tracking-wider rounded-lg transition-all duration-200 mt-6"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </Button>
            </form>
          </div>

          {/* ===== Right: Contact Info ===== */}
          <div className="space-y-6 flex flex-col justify-between h-full">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold mb-6 uppercase">Get in Touch</h1>
              <p className="text-gray-400 mb-10 max-w-md">
                We're here to help you begin your fitness transformation. Feel free to reach out via
                phone, email, or visit our training center.
              </p>

              <div className="flex flex-col gap-6">
                {/* Each Card */}
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
                    className="flex items-center gap-4 bg-[#111111] border border-[#1e1e1e] p-6 rounded-xl min-h-[100px] transition-all hover:border-[#e50914]/40 hover:bg-[#121212] cursor-pointer"
                    onClick={() => item.link && window.open(item.link, "_blank")}
                  >
                    <div className="bg-[#e50914]/20 p-3 rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg text-white tracking-wide mb-1">{item.title}</h4>
                      <p className="text-base text-gray-300 font-light">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
