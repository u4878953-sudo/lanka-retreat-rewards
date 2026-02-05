import { Button } from "@/components/ui/button";
import { Trophy, Calendar, Users } from "lucide-react";
import heroImage from "@/assets/hero-sri-lanka.jpg";
import bhaggoLogo from "@/assets/logo_bhaggo_white.svg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-dark/80 via-emerald-dark/50 to-emerald-dark/90" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-sunset/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in-up">
            <img src={bhaggoLogo} alt="Bhaggo" className="h-8 mx-auto" />
          </div>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-5 py-2 mb-8 animate-fade-in-up">
            <Trophy className="w-4 h-4 text-gold" />
            <span className="text-gold font-medium text-sm tracking-wide">REFERRAL & AFFILIATE</span>
          </div>
          
          {/* Main Title */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-primary-foreground">LANKA</span>
            <br />
            <span className="text-gradient-gold">RETREAT</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Join with Bhaggo and <span className="text-gold font-semibold">Earn More</span>, <span className="text-gold font-semibold">Enjoy More!</span>
          </p>
          
          {/* Description */}
          <p className="text-base md:text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Win a luxurious 4-day trip to Sri Lanka! Top 7 affiliates & referrals win grand travel packages plus monthly gift card rewards.
          </p>
          
          {/* Campaign Info Cards */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-card/95 backdrop-blur-md rounded-xl px-6 py-4 flex items-center gap-3 shadow-card">
              <Calendar className="w-5 h-5 text-gold" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Promo Period</p>
                <p className="text-sm text-foreground font-semibold">1st Feb - 30th Apr 2026</p>
              </div>
            </div>
            <div className="bg-card/95 backdrop-blur-md rounded-xl px-6 py-4 flex items-center gap-3 shadow-card">
              <Trophy className="w-5 h-5 text-gold" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Grand Prize</p>
                <p className="text-sm text-foreground font-semibold">3N/4D Sri Lanka Trip</p>
              </div>
            </div>
            <div className="bg-card/95 backdrop-blur-md rounded-xl px-6 py-4 flex items-center gap-3 shadow-card">
              <Users className="w-5 h-5 text-gold" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Winners</p>
                <p className="text-sm text-foreground font-semibold">Top 7 + Monthly Top 5</p>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Button variant="gold" size="xl" asChild>
              <a href="https://www.bhaggo.co/referral/" target="_blank" rel="noopener noreferrer">
                Join Referral Program
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="https://www.bhaggo.co/affiliate/news" target="_blank" rel="noopener noreferrer">
                Become an Affiliate
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
