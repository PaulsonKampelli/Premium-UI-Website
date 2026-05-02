import React, { Suspense, lazy } from 'react';
import DeckShell from './components/DeckShell';

// Lazy load slides for 90+ Lighthouse performance
const Slide01Opening = lazy(() => import('./slides/Slide01Opening'));
const Slide02Scale = lazy(() => import('./slides/Slide02Scale'));
const Slide03Location = lazy(() => import('./slides/Slide03Location'));
const Slide04Retail = lazy(() => import('./slides/Slide04Retail'));
const Slide05Luxury = lazy(() => import('./slides/Slide05Luxury'));
const Slide06Dining = lazy(() => import('./slides/Slide06Dining'));
const Slide07Attractions = lazy(() => import('./slides/Slide07Attractions'));
const Slide08Events = lazy(() => import('./slides/Slide08Events'));
const Slide09Sponsorship = lazy(() => import('./slides/Slide09Sponsorship'));
const Slide10Venues = lazy(() => import('./slides/Slide10Venues'));
const Slide11SocialProof = lazy(() => import('./slides/Slide11SocialProof'));
const Slide12CTA = lazy(() => import('./slides/Slide12CTA'));

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
