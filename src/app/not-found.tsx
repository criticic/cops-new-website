import FuzzyText from '@/components/FuzzyText';

const NotFound = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='flex h-fit w-fit flex-col items-center justify-center gap-10'>
        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={1.34}
          enableHover={true}
          fontSize={200}
        >
          404
        </FuzzyText>
        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={1.34}
          enableHover={true}
          fontSize={50}
        >
          nope don&apos;t have that
        </FuzzyText>
      </div>
    </div>
  );
};

export default NotFound;
