import HeroSection from '@/components/layout/HeroSection';
import AchievementsSection from '@/components/layout/AchievementsSubsection';
import ProjectsSubsection from '@/components/layout/ProjectsSubsection';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <HeroSection />
      <AchievementsSection />
      <ProjectsSubsection />
    </div>
  );
}
