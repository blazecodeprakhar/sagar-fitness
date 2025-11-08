import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const faqs = [
    {
      question: "Are sessions live?",
      answer: "Yes. Every session is guided live.",
    },
    {
      question: "Do I need equipment?",
      answer: "A mat is enough. Bands or dumbbells are optional.",
    },
    {
      question: "Is this suitable for beginners?",
      answer: "Yes. Everything is scaled to your level.",
    },
    {
      question: "Do I get a diet plan?",
      answer: "You get simple nutrition guidance you can follow daily.",
    },
    {
      question: "What if I miss a session?",
      answer: "We adjust within the week when possible.",
    },
    {
      question: "Refund policy?",
      answer: "Programs are non-refundable once started.",
    },
  ];

  return (
    <section id="faqs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-heading mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
