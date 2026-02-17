import { Button } from "@/components/ui/button";
import { Trophy, Calendar, Users } from "lucide-react";
import heroImage from "@/assets/hero-sri-lanka.jpg";
import heroImagePhone from "@/assets/hero-sri-lanka-phone.jpg";
import bhaggoLogo from "@/assets/logo_bhaggo_white.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Desktop */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Background Image - Mobile */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: `url(${heroImagePhone})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-dark/80 via-emerald-dark/50 to-emerald-dark/90" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-sunset/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex justify-center">
        <div className="max-w-6xl flex flex-col md:flex-row gap-8">
          <div className="flex-1"></div>
          <div className="flex-1">
            {/* Logo */}
            <div className="mb-4 md:mb-8 animate-fade-in-up flex justify-center">
              <img src={bhaggoLogo} alt="Bhaggo" className="h-14" />
            </div>
            
            {/* Badge */}
            <div className="flex justify-center mb-8 animate-fade-in-up">
              <div className="flex items-center justify-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-5 py-2 w-fit">
                <Trophy className="w-4 h-4 text-gold" />
                <span className="text-gold font-medium text-sm tracking-wide">রেফারেল এবং অ্যাফিলিয়েট</span>
              </div>
            </div>
            
            {/* Main Title */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up text-center" style={{ animationDelay: '0.1s' }}>
              <span className="text-primary-foreground">লঙ্কা</span>
             &nbsp;
              <span className="text-gradient-gold">রিট্রিট</span>
            </h1>
            
            {/* Tagline */}
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-light mb-4 animate-fade-in-up text-center" style={{ animationDelay: '0.2s' }}>
              ভাাগ্য তে যোগ দিন এবং <span className="text-gold font-semibold">আরও বেশি আয় করুন</span>, <span className="text-gold font-semibold">আরও বেশি উপভোগ করুন!</span>
            </p>
            
            {/* Description */}
            <p className="text-base md:text-lg text-primary-foreground/70 mb-10 animate-fade-in-up text-center" style={{ animationDelay: '0.3s' }}>
              শ্রীলঙ্কায় একটি বিলাসবহুল ৪ দিনের ভ্রমণ জিতুন! শীর্ষ ৭ অ্যাফিলিয়েট এবং রেফারেল গ্র্যান্ড ট্রাভেল প্যাকেজ এবং মাসিক গিফট কার্ড পুরস্কার জিতুন।
            </p>
            
            {/* Campaign Info Cards */}
            <div className="flex flex-col gap-4 mb-10 animate-fade-in-up md:flex-row md:flex-wrap items-center justify-center" style={{ animationDelay: '0.4s' }}>
              <div className="w-full md:w-56 lg:w-56 bg-card/60 backdrop-blur-md rounded-xl px-5 py-3 flex items-center gap-3 shadow-card">
                <Calendar className="w-5 h-5 text-gold flex-shrink-0" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">প্রোমো সময়কাল</p>
                  <p className="text-sm text-foreground font-semibold">১ ফেব্রুয়ারী - ৩০ এপ্রিল ২০২৬</p>
                </div>
              </div>
              <div className="w-full md:w-56 lg:w-56 bg-card/60 backdrop-blur-md rounded-xl px-5 py-3 flex items-center gap-3 shadow-card">
                <Trophy className="w-5 h-5 text-gold flex-shrink-0" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">গ্র্যান্ড পুরস্কার</p>
                  <p className="text-sm text-foreground font-semibold">৩ রাত/৪ দিন লাক্সারি শ্রীলঙ্কা ট্রিপ</p>
                </div>
              </div>
              <div className="w-full md:w-56 lg:w-56 bg-card/60 backdrop-blur-md rounded-xl px-5 py-3 flex items-center gap-3 shadow-card">
                <Users className="w-5 h-5 text-gold flex-shrink-0" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">বিজয়ী</p>
                  <p className="text-sm text-foreground font-semibold">শীর্ষ ৭ জন + মাসিক ৫ জন</p>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up justify-center" style={{ animationDelay: '0.5s' }}>
              <Button variant="gold" size="xl" asChild>
                <a href="https://www.bhaggo.co/referral/" target="_blank" rel="noopener noreferrer">
                  রেফারেল প্রোগ্রামে যোগ দিন
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="https://www.bhaggo.co/affiliate/news" target="_blank" rel="noopener noreferrer">
                  অ্যাফিলিয়েট প্রোগ্রামে যোগ দিন
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
