import FuzzyText from '@/components/FuzzyText';

const NotFound = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='h-fit w-fit flex flex-col justify-center items-center gap-10'>
        <FuzzyText baseIntensity={0.2} hoverIntensity={1.34} enableHover={true} fontSize={200}>
          404
        </FuzzyText>
        <FuzzyText baseIntensity={0.2} hoverIntensity={1.34} enableHover={true} fontSize={50}>
          nope don't have that
        </FuzzyText>
      </div>
    </div>
  );
};

export default NotFound;
