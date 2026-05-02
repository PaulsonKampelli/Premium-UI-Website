import React from 'react';
import SlideWrapper from '../components/SlideWrapper';
import EyebrowText from '../components/EyebrowText';
import { TierCard } from '../components/Cards';
import { motion } from 'framer-motion';

const Slide09Sponsorship = ({ isActive, onInquire }) => {
  const tiers = [
    {
      title: "Presenting Partner",
      badge: "Top Tier",
      points: [
        "Category exclusivity",
        "Logo on all property communications",
        "Dedicated activation zone (up to 10,000 sq ft)",
        "55M impression guarantee annually"
      ],
      buttonText: "Learn More",
      highlight: true
    },
    {
      title: "Category Sponsor",
      points: [
        "Category exclusivity within vertical",
        "Digital + physical placement",
        "Seasonal campaign integration"
      ],
      buttonText: "Learn More"
    },
    {
      title: "Activation Partner",
      points: [
        "Pop-up activation space",
        "Event co-branding opportunities",
        "Social media amplification"
      ],
      buttonText: "Learn More"
    },
    {
      title: "Digital & Media Partner",
      points: [
        "In-mall digital screen network",
        "App placement + push notifications",
        "CRM access to opted-in visitor base"
      ],
      buttonText: "Learn More"
    }
  ];

  return (
    <SlideWrapper isActive={isActive}>
      <EyebrowText>Brand Partnerships</EyebrowText>
      <h2 className="headline-lg font-display text-white mb-6">Own the Moment. Own the Audience.</h2>

      <div className="flex md:grid md:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-6 overflow-x-auto pb-4 snap-x custom-scrollbar w-full">
        {tiers.map((tier, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="min-w-[260px] md:min-w-0 shrink-0 snap-center h-full"
          >
            <TierCard {...tier} onInquire={() => onInquire("Partnership Inquiry")} />
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-gold font-bold tracking-widest text-lg">
          Average sponsor sees 4.7× brand recall lift vs. out-of-home alternatives
        </p>
      </div>
    </SlideWrapper>
  );
};

export default Slide09Sponsorship;
