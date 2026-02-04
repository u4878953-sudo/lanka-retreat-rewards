import { FileText, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const termsCategories = [
  {
    title: "Eligibility & Participation",
    terms: [
      "All affiliates must comply with Bhaggo Referral or Affiliate Program Terms & Conditions.",
      "Affiliates and Referrals are required to maintain an active Bhaggo depositing account to be eligible for this promotion.",
      "This tournament is limited to Referral or Affiliates who promote Bhaggo.",
      "Referrer/Affiliates must not have a gaming account registered under their own Referral/Affiliate.",
      "To enter the competition, all Referral or Affiliate must onboard at least 10 qualified players.",
      "To enter the grand prize list, all Referral or Affiliate must confirm that minimum 50 qualified players onboard.",
    ],
  },
  {
    title: "Player Qualification",
    terms: [
      "Invited players must meet minimum deposit of 500 BDT and turnover requirements at Bhaggo to be a qualified downline.",
      "Referral or Affiliates are required to encourage invited players to deposit at least 500BDT and play any games and play at least 1 time of their deposit in order to qualify the member.",
      "Qualified referees and referrals will be subject to validation.",
    ],
  },
  {
    title: "Prizes & Rewards",
    terms: [
      "Monthly gift card winners can only win once per month.",
      "Monthly and Grand Prize winners may opt to convert their prize into cash. The monthly prize can be converted to 1,500 BDT.",
      "Grand prize cash amount will be determined by Bhaggo based on flight and hotel costs for the chosen dates.",
      "All rewards are non-transferable and subject to availability.",
      "Winners must confirm acceptance of their prize within seven (7) days of notification or may forfeit the prize.",
    ],
  },
  {
    title: "Rankings & Tiebreakers",
    terms: [
      "If two or more Referral or Affiliate achieve the same number of players, the one with highest net revenue will be given priority.",
      "In the event of a tie in leaderboard points, prize distribution will be determined based on the earliest achievement date.",
      "The leaderboard rankings will be updated once daily at 2PM (GMT +6).",
    ],
  },
  {
    title: "Winner Announcements",
    terms: [
      "Monthly prizes will be declared within 15th of next month.",
      "Grand Prize winners will be notified around 15th May 2026 via Bhaggo official Telegram, Facebook and sales call through KYC.",
      "Monthly winners will be notified by a sales KYC call on the 15th of the following month.",
    ],
  },
  {
    title: "Fraud Prevention",
    terms: [
      "Fraudulent or suspicious sign-ups will be disqualified.",
      "If we detect that your friends created multiple accounts, logged into, or used on the same device, you will be disqualified.",
      "Any form of abuse, fraud, or opposite betting shall result in disqualification.",
      "Bhaggo reserves the right to disqualify any referee's entry if fraudulent or suspicious activity is detected.",
      "Withdrawal of winnings is subject to review. Bhaggo reserves the right to suspend or block an account if fraud is detected.",
    ],
  },
  {
    title: "General Terms",
    terms: [
      "Bhaggo reserves the right to modify or terminate the tournament at any time without prior notice.",
      "Bhaggo reserves the right to withdraw the availability of any offer to any member at its sole discretion.",
      "Bhaggo reserves the right to review members' activity and disqualify any member deemed inconsistent with promotion's intent.",
      "Change of account information is not allowed after using this bonus; winnings may be removed if changed.",
      "These T&Cs are subject to General Terms & Conditions of the website.",
    ],
  },
];

const TermsSection = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2 mb-6">
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold text-sm tracking-wide">TERMS & CONDITIONS</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Campaign Rules
            </h2>
            <p className="text-muted-foreground">
              Please read all terms carefully before participating
            </p>
          </div>

          {/* Terms Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {termsCategories.map((category, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border-none shadow-card overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-secondary/50 transition-colors [&[data-state=open]]:bg-secondary/50">
                  <span className="font-semibold text-foreground text-left">
                    {category.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <ul className="space-y-3">
                    {category.terms.map((term, termIndex) => (
                      <li key={termIndex} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{term}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default TermsSection;
