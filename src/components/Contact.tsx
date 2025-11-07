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
import { MessageCircle } from "lucide-react";

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

  const whatsappNumber = "919876543210"; // Replace with actual number
  const whatsappMessage = encodeURIComponent(
    "Hi Sagar, I'm interested in the 3-month transformation program. Can you share more details?"
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-heading mb-4">
            Start Your Fitness Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a question or ready to begin? Send a message and I will reply soon.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* WhatsApp Button */}
          <div className="text-center mb-8">
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold uppercase tracking-wider gap-2"
              onClick={() => window.open(whatsappLink, "_blank", "noopener,noreferrer")}
              aria-label="Contact via WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Me
            </Button>
          </div>

          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-muted/30 text-muted-foreground">or fill the form</span>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-foreground">
                Name *
              </Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-card border-border text-foreground"
                placeholder="Your full name"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="phone" className="text-foreground">
                  Phone *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-card border-border text-foreground"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-card border-border text-foreground"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="goal" className="text-foreground">
                Goal *
              </Label>
              <Select
                value={formData.goal}
                onValueChange={(value) => setFormData({ ...formData, goal: value })}
                required
              >
                <SelectTrigger className="bg-card border-border text-foreground">
                  <SelectValue placeholder="Select your fitness goal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weight-loss">Weight Loss</SelectItem>
                  <SelectItem value="weight-gain">Weight Gain</SelectItem>
                  <SelectItem value="body-toning">Body Toning</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="message" className="text-foreground">
                Message
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-card border-border text-foreground min-h-32"
                placeholder="Tell me about your fitness journey and goals..."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-accent text-primary-foreground font-bold uppercase tracking-wider btn-glow"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
