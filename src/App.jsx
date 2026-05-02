import React, { Suspense, lazy } from 'react';
import DeckShell from './components/DeckShell';

// Lazy load slides for 90+ Lighthouse performance
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

// Narrative Chapter Groupings
const slides = [
  { label: "Opening", component: Slide01Opening, chapter: "Destination" },
  { label: "The Scale", component: Slide02Scale, chapter: "Destination" },
  { label: "Location", component: Slide03Location, chapter: "Destination" },
  { label: "Retail", component: Slide04Retail, chapter: "Marketplace" },
  { label: "Luxury", component: Slide05Luxury, chapter: "Marketplace" },
  { label: "Dining", component: Slide06Dining, chapter: "Marketplace" },
  { label: "Attractions", component: Slide07Attractions, chapter: "Experience" },
  { label: "Events", component: Slide08Events, chapter: "Experience" },
  { label: "Sponsorship", component: Slide09Sponsorship, chapter: "Partnership" },
  { label: "Venues", component: Slide10Venues, chapter: "Partnership" },
  { label: "Social Proof", component: Slide11SocialProof, chapter: "Partnership" },
  { label: "Contact", component: Slide12CTA, chapter: "Partnership" },
];

function App() {
  return (
    <Suspense fallback={
      <div className="h-screen w-screen bg-bg-primary flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-gold border-t-transparent animate-spin" />
      </div>
    }>
      <DeckShell slides={slides} />
    </Suspense>
  );
}

export default App;
