import { Send, Facebook, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const FooterSection = () => {
  return (
    <footer className="bg-emerald-dark py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Title */}
          <h3 className="font-serif text-3xl font-bold mb-2">
            <span className="text-primary-foreground">LANKA</span>{" "}
            <span className="text-gradient-gold">RETREAT</span>
          </h3>
          <p className="text-primary-foreground/60 mb-8">
            Bhaggo Referral & Affiliate Campaign
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-10">
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Send className="w-5 h-5 mr-2" />
                Telegram
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5 mr-2" />
                Facebook
              </a>
            </Button>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
            <a 
              href="https://www.bhaggo.co/referral/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-gold transition-colors flex items-center gap-1"
            >
              Referral Program <ExternalLink className="w-3 h-3" />
            </a>
            <a 
              href="https://www.bhaggo.co/affiliate/news" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-gold transition-colors flex items-center gap-1"
            >
              Affiliate Program <ExternalLink className="w-3 h-3" />
            </a>
            <a 
              href="https://bhaggopartners.com/leaderboard" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-gold transition-colors flex items-center gap-1"
            >
              Leaderboard <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          
          {/* Divider */}
          <div className="w-full h-px bg-primary-foreground/20 mb-8" />
          
          {/* Copyright & Disclaimer */}
          <div className="space-y-4 text-xs text-primary-foreground/50">
            <p>
              Promo Period: 1st February 2026 to 30th April 2026
            </p>
            <p>
              © 2026 Bhaggo. All rights reserved. This promotion is subject to terms and conditions.
            </p>
            <p>
              Play responsibly. Gambling involves risk. Only participate if you are of legal age.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
