import { Trophy, Plane, Hotel, UtensilsCrossed, Car, CreditCard } from "lucide-react";

const prizes = [
  {
    rank: "1st",
    title: "Full Package",
    quantity: "1 Winner",
    features: [
      { icon: CreditCard, text: "Visa Cost Covered" },
      { icon: Plane, text: "Economy Class Flight" },
      { icon: Hotel, text: "4-Star Accommodation" },
      { icon: UtensilsCrossed, text: "Full Board F&B" },
      { icon: Car, text: "Airport Transfers" },
    ],
    gradient: "from-gold via-gold-dark to-sunset",
    highlight: true,
  },
  {
    rank: "2nd",
    title: "Half Package",
    quantity: "2 Winners",
    features: [
      { icon: Plane, text: "Economy Class Flight" },
      { icon: Hotel, text: "4-Star Accommodation" },
      { icon: UtensilsCrossed, text: "Half Board F&B" },
      { icon: Car, text: "Airport Transfers" },
    ],
    gradient: "from-muted-foreground/60 to-muted-foreground/40",
    highlight: false,
  },
  {
    rank: "3rd",
    title: "Partial Package",
    quantity: "4 Winners",
    features: [
      { icon: Plane, text: "Economy Class Flight" },
      { icon: Hotel, text: "4-Star Accommodation" },
      { icon: Car, text: "Airport Transfers" },
    ],
    gradient: "from-sunset/80 to-sunset/50",
    highlight: false,
  },
];

const GrandPrizesSection = () => {
  return (
    <section className="py-24 bg-gradient-sunset relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-emerald-dark/20 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2 mb-6">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm tracking-wide">GRAND PRIZES</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            3 Nights & 4 Days
          </h2>
          <p className="text-xl text-muted-foreground">
            Luxurious Trip to Sri Lanka for <span className="text-primary font-semibold">Top 7</span> Referrals/Affiliates
          </p>
        </div>

        {/* Prize Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {prizes.map((prize, index) => (
            <div
              key={prize.rank}
              className={`relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 ${
                prize.highlight ? 'md:-mt-6 md:mb-6 prize-glow' : ''
              }`}
            >
              {/* Rank Badge */}
              <div className={`bg-gradient-to-r ${prize.gradient} p-1`}>
                <div className={`${prize.highlight ? 'bg-card' : 'bg-card'} rounded-t-xl`}>
                  <div className={`bg-gradient-to-r ${prize.gradient} text-center py-4`}>
                    <span className="text-lg font-bold text-foreground drop-shadow-lg">
                      {prize.rank} PLACE
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="bg-card p-8 shadow-elevated">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  {prize.title}
                </h3>
                <p className="text-gold font-semibold mb-6">{prize.quantity}</p>
                
                <div className="space-y-4">
                  {prize.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${prize.highlight ? 'bg-gold/20' : 'bg-muted'}`}>
                        <feature.icon className={`w-4 h-4 ${prize.highlight ? 'text-gold' : 'text-primary'}`} />
                      </div>
                      <span className="text-foreground/80">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Bottom Gradient */}
              <div className={`h-2 bg-gradient-to-r ${prize.gradient}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrandPrizesSection;
