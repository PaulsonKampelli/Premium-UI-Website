import React from 'react';
import SlideWrapper from '../components/SlideWrapper';
import EyebrowText from '../components/EyebrowText';
import { AttractionCard } from '../components/Cards';
import { motion } from 'framer-motion';

const Slide07Attractions = ({ isActive }) => {
  const attractions = [
    {
      icon: "🎢",
      title: "Nickelodeon Universe",
      stat: "35+ Rides",
      body: "Largest indoor theme park in the Western Hemisphere"
    },
    {
      icon: "🌊",
      title: "DreamWorks Water Park",
      stat: "40+ Slides",
      body: "Largest indoor water park in North America"
    },
    {
      icon: "⛷",
      title: "Big SNOW",
      stat: "Only One in N. America",
      body: "The only indoor real-snow ski slope in North America"
    },
    {
      icon: "🐠",
      title: "SEA LIFE Aquarium",
      stat: "Immersive",
      body: "Walk-through marine experience for all ages"
    },
    {
      icon: "🏒",
      title: "NHL Ice Rink",
      stat: "NHL Regulation",
      body: "Year-round skating, events, and hockey programming"
    },
    {
      icon: "🎡",
      title: "Observation Wheel",
      stat: "360° Views",
      body: "Iconic indoor wheel with views across the entire property"
    }
  ];

  return (
    <SlideWrapper isActive={isActive}>
      <EyebrowText>Attractions & Entertainment</EyebrowText>
      <h2 className="headline-lg font-display text-white mb-12">No Mall on Earth Competes With This</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {attractions.map((attr, i) => (
          <AttractionCard key={i} {...attr} index={i} />
        ))}
      </div>
    </SlideWrapper>
  );
};

export default Slide07Attractions;
