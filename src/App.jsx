import React from 'react';
import DeckShell from './components/DeckShell';
import Slide01Opening from './slides/Slide01Opening';
import Slide02Scale from './slides/Slide02Scale';
import Slide03Location from './slides/Slide03Location';
import Slide04Retail from './slides/Slide04Retail';
import Slide05Luxury from './slides/Slide05Luxury';
import Slide06Dining from './slides/Slide06Dining';
import Slide07Attractions from './slides/Slide07Attractions';
import Slide08Events from './slides/Slide08Events';
import Slide09Sponsorship from './slides/Slide09Sponsorship';
import Slide10Venues from './slides/Slide10Venues';
import Slide11SocialProof from './slides/Slide11SocialProof';
import Slide12CTA from './slides/Slide12CTA';

const slides = [
  { label: "Opening", component: Slide01Opening },
  { label: "The Scale", component: Slide02Scale },
  { label: "Location", component: Slide03Location },
  { label: "Retail", component: Slide04Retail },
  { label: "Luxury", component: Slide05Luxury },
  { label: "Dining", component: Slide06Dining },
  { label: "Attractions", component: Slide07Attractions },
  { label: "Events", component: Slide08Events },
  { label: "Sponsorship", component: Slide09Sponsorship },
  { label: "Venues", component: Slide10Venues },
  { label: "Social Proof", component: Slide11SocialProof },
  { label: "Contact", component: Slide12CTA },
];

function App() {
  return (
    <DeckShell slides={slides} />
  );
}

export default App;
