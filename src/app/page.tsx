import { Hero } from '@/components/home/Hero';
import { Intro } from '@/components/home/Intro';
import { Personalised } from '@/components/home/Personalised';
import { LearningJourney } from '@/components/home/LearningJourney';
import { CommunityStories } from '@/components/home/CommunityStories';
import { AtAGlance } from '@/components/home/AtAGlance';
import { Programmes } from '@/components/home/Programmes';
import { VisitBand } from '@/components/home/VisitBand';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Personalised />
      <LearningJourney />
      <CommunityStories />
      <AtAGlance />
      <Programmes />
      <VisitBand />
    </>
  );
}
