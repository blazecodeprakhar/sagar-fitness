const Timeline = () => {
  const steps = [
    "Book a call and share your goals",
    "Fitness and mobility assessment",
    "Get your personalised program",
    "Train live online five days a week",
    "Weekly progress review and guidance",
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-heading mb-4">
            How Online Training Works
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex items-start gap-6 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Number Circle */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-heading relative z-10">
                    {index + 1}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-3">
                    <p className="text-xl text-foreground">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-muted-foreground italic text-lg mt-12">
            Clarity. Accountability. Consistency. That is the formula.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
