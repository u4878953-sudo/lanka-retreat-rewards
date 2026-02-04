import { Gift, Sparkles } from "lucide-react";

const MonthlyPrizesSection = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary-foreground rounded-full" />
        <div className="absolute top-20 right-20 w-48 h-48 border-2 border-primary-foreground rounded-full" />
        <div className="absolute bottom-10 left-1/3 w-24 h-24 border-2 border-primary-foreground rounded-full" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full px-5 py-2 mb-8">
            <Gift className="w-4 h-4 text-gold" />
            <span className="text-gold font-semibold text-sm tracking-wide">MONTHLY REWARDS</span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Win Every Month!
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10">
            Top 5 performing Referrals/Affiliates each month win exclusive gift cards
          </p>
          
          {/* Prize Card */}
          <div className="inline-block">
            <div className="relative bg-card rounded-2xl p-8 md:p-12 shadow-elevated shimmer">
              {/* Sparkle decorations */}
              <Sparkles className="absolute top-4 right-4 w-6 h-6 text-gold float-animation" />
              <Sparkles className="absolute bottom-4 left-4 w-5 h-5 text-gold float-animation" style={{ animationDelay: '1s' }} />
              
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                {/* Gift Card Visual */}
                <div className="w-48 h-28 bg-gradient-gold rounded-xl flex items-center justify-center shadow-gold relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-card/10 to-transparent" />
                  <div className="text-center z-10">
                    <p className="text-foreground font-serif font-bold text-lg">AARONG</p>
                    <p className="text-foreground/80 text-sm">Gift Card</p>
                  </div>
                </div>
                
                {/* Prize Details */}
                <div className="text-center md:text-left">
                  <p className="text-5xl md:text-6xl font-serif font-bold text-gradient-gold mb-2">
                    3,000 BDT
                  </p>
                  <p className="text-muted-foreground text-lg">
                    for <span className="text-primary font-semibold">Top 5</span> Winners Each Month
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Note */}
          <p className="text-primary-foreground/60 text-sm mt-8">
            Winners announced by 15th of the following month
          </p>
        </div>
      </div>
    </section>
  );
};

export default MonthlyPrizesSection;
