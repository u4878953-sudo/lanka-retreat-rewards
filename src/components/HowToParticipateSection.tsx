import { UserPlus, Link2, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: UserPlus,
    title: "Register",
    description: "Sign up as a Bhaggo Referral or Affiliate through the official program links",
    number: "01",
  },
  {
    icon: Link2,
    title: "Share Your Link",
    description: "Get your unique referral or affiliate link and share it with potential players",
    number: "02",
  },
  {
    icon: Users,
    title: "Onboard Players",
    description: "Minimum 10 qualified players to enter, 50+ for grand prize eligibility",
    number: "03",
  },
  {
    icon: CheckCircle,
    title: "Qualify Them",
    description: "Players must deposit 500 BDT minimum and play at least 1x their deposit",
    number: "04",
  },
];

const HowToParticipateSection = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2 mb-6">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm tracking-wide">HOW TO PARTICIPATE</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Join in 4 Simple Steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start your journey to Sri Lanka with these easy steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-gold to-transparent" />
              )}
              
              <div className="bg-secondary rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-elevated hover:-translate-y-2">
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold">
                  <span className="text-foreground font-bold text-sm">{step.number}</span>
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="default" size="lg" asChild>
            <a href="https://www.bhaggo.co/referral/" target="_blank" rel="noopener noreferrer">
              Join Referral Program
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://www.bhaggo.co/affiliate/news" target="_blank" rel="noopener noreferrer">
              Become an Affiliate
            </a>
          </Button>
        </div>

        {/* Important Notes */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-gold/10 border border-gold/30 rounded-xl p-6">
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-gold rounded-full" />
              Important Requirements
            </h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>• Affiliates/Referrals must have an active Bhaggo account with regular deposit history</li>
              <li>• Minimum 10 qualified players to enter the competition</li>
              <li>• Minimum 50 qualified players required for grand prize eligibility</li>
              <li>• Players must deposit 500 BDT+ and play 1x their deposit to qualify</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToParticipateSection;
