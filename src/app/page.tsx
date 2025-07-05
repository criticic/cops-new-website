import HeroSubsection from '@/components/layout/HeroSubsection';
import AchievementsSubsection from '@/components/layout/AchievementsSubsection';
import ProjectsSubsection from '@/components/layout/ProjectsSubsection';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <HeroSubsection />
      <AchievementsSubsection />
      <ProjectsSubsection />
    </div>
  );
}
