import Card from './Card';

const AboutSection = () => {
  return (
    <Card>
      <h2 className='text-2xl font-bold text-red-400 mb-4'>About</h2>
      <p className='text-gray-300 leading-relaxed'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </Card>
  );
};

export default AboutSection;
