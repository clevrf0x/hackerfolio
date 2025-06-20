import SocialLinks from './SocialLinks';

const HeroSection = () => {
  return (
    <div className='text-center space-y-6'>
      <div className='space-y-4'>
        <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent'>
          Security Researcher
        </h1>
        <p className='text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto'>
          Penetration testing, vulnerability research, and ethical hacking
        </p>
      </div>

      <SocialLinks />
    </div>
  );
};

export default HeroSection;
