import { Github, Twitter, Mail } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className='flex justify-center space-x-6'>
      <a
        href='https://github.com/yourusername'
        target='_blank'
        rel='noopener noreferrer'
        className='p-3 rounded-full bg-gray-800/50 hover:bg-red-400/20 transition-all duration-300 hover:scale-110'>
        <Github className='text-red-400' size={24} />
      </a>
      <a
        href='https://twitter.com/yourusername'
        target='_blank'
        rel='noopener noreferrer'
        className='p-3 rounded-full bg-gray-800/50 hover:bg-red-400/20 transition-all duration-300 hover:scale-110'>
        <Twitter className='text-red-400' size={24} />
      </a>
      <a
        href='mailto:your.email@example.com'
        className='p-3 rounded-full bg-gray-800/50 hover:bg-red-400/20 transition-all duration-300 hover:scale-110'>
        <Mail className='text-red-400' size={24} />
      </a>
    </div>
  );
};

export default SocialLinks;
