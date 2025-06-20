import React from 'react';
import { Mail, Github, Twitter, Linkedin } from 'lucide-react';
import { useColorMode } from '../App';
import { getActiveColor } from '../utils/colors';

const certifications = [
  {
    name: 'OffSec Certified Expert 3 (OSCE³)',
    badge: '/images/osce3-icon.png',
    link: '#',
  },
  {
    name: 'OffSec Exploit Developer (OSED)',
    badge: '/images/osed-icon.png',
    link: '#',
  },
  {
    name: 'OffSec Web Expert (OSWE)',
    badge: '/images/oswe-icon.png',
    link: '#',
  },
  {
    name: 'OffSec Experienced Penetration Tester (OSEP)',
    badge: '/images/osep-icon.png',
    link: '#',
  },
  {
    name: 'OffSec Certified Professional (OSCP)',
    badge: '/images/oscp-icon.png',
    link: '#',
  },
  {
    name: 'Certified Red Team Operator',
    badge: '/images/crto-icon.png',
    link: '#',
  },
  {
    name: 'Certified Red Team Lead',
    badge: '/images/crtl-icon.png',
    link: '#',
  },
  {
    name: 'Certified Red Team Expert',
    badge: '/images/crte-icon.png',
    link: '#',
  },
  {
    name: 'Burp Suite Certified Practitioner',
    badge: '/images/bscp-icon.png',
    link: '#',
  },
];

const About = () => {
  const { colorMode } = useColorMode();

  const activeColor = getActiveColor(colorMode);

  return (
    <div className='max-w-5xl mx-auto mt-8 md:mt-16 px-2 sm:px-4'>
      <h1 className='text-3xl md:text-4xl font-bold text-white font-mono mb-8'>About Me</h1>
      <div className='bg-[rgba(51,65,85,0.5)] border border-gray-500/50 rounded-xl p-4 sm:p-6 md:p-8 mb-8 md:mb-12 text-gray-200 font-mono text-base leading-relaxed shadow-lg'>
        <p className='mb-4'>
          I'm Favas M (clevrf0x), a penetration tester and security researcher with a passion for
          uncovering and exploiting vulnerabilities in web applications, networks, and
          infrastructure.
        </p>
        <p className='mb-4'>
          With extensive experience in offensive security, I specialize in exploit development,
          security research, and red team operations. My work involves identifying security
          weaknesses, developing proof-of-concept exploits, and helping organizations strengthen
          their security posture.
        </p>
        <p className='mb-4'>
          Throughout my career, I've earned several professional certifications and discovered
          multiple vulnerabilities that have been assigned CVEs. I'm constantly expanding my
          knowledge and skills, staying up-to-date with the latest security trends and attack
          vectors.
        </p>
        <p>
          When I'm not breaking into systems (ethically, of course), I enjoy sharing my knowledge
          through blog posts, developing security tools, and contributing to the security community.
        </p>
      </div>
      <h2 className='text-2xl md:text-3xl font-bold text-white font-mono mb-4 md:mb-6'>
        Certifications
      </h2>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-14'>
        {certifications.map(cert => (
          <div
            key={cert.name}
            className='bg-[rgba(51,65,85,0.5)] border border-gray-500/50 rounded-xl p-4 flex flex-col items-start gap-2 md:gap-3 shadow-lg relative'>
            <div className='flex items-center gap-3 mb-2'>
              <img src={cert.badge} alt={cert.name} className='w-10 h-10 object-contain' />
              <span className='font-mono text-base text-gray-100 font-semibold leading-tight'>
                {cert.name}
              </span>
            </div>
            <a
              href={cert.link}
              target='_blank'
              rel='noopener noreferrer'
              className={`text-${activeColor}-400 font-mono text-sm hover:underline flex items-center gap-1`}>
              View Credential
              <svg
                width='16'
                height='16'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='inline-block'>
                <path d='M7 17l9-9m0 0v6m0-6h-6' />
              </svg>
            </a>
          </div>
        ))}
      </div>
      <h2 className='text-2xl md:text-3xl font-bold text-white font-mono mb-4 md:mb-6'>
        Get in Touch
      </h2>
      <div className='bg-[rgba(51,65,85,0.5)] border border-gray-500/50 rounded-xl p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-4 md:gap-8 font-mono text-white shadow-lg'>
        <div className='flex-1 mb-2 md:mb-0'>
          <div className='font-semibold mb-2 text-lg text-white'>Contact Information</div>
          <a
            href='mailto:Favas@gmail.com'
            style={{ '--hover-color': `var(--accent-color)` }}
            className='flex items-center gap-2 text-base text-white transition-colors duration-200 hover:text-[var(--hover-color)]'>
            <Mail className='transition-colors duration-200' size={18} />
            <span>Favas@gmail.com</span>
          </a>
        </div>
        <div className='flex-1'>
          <div className='font-semibold mb-2 text-lg text-white'>Social Media</div>
          <div className='flex flex-col gap-2 text-base'>
            <a
              href='#'
              style={{ '--hover-color': `var(--accent-color)` }}
              className='flex items-center gap-2 text-white transition-colors duration-200 hover:text-[var(--hover-color)]'>
              <Github className='transition-colors duration-200' size={18} />
              <span>GitHub</span>
            </a>
            <a
              href='#'
              style={{ '--hover-color': `var(--accent-color)` }}
              className='flex items-center gap-2 text-white transition-colors duration-200 hover:text-[var(--hover-color)]'>
              <Twitter className='transition-colors duration-200' size={18} />
              <span>Twitter</span>
            </a>
            <a
              href='#'
              style={{ '--hover-color': `var(--accent-color)` }}
              className='flex items-center gap-2 text-white transition-colors duration-200 hover:text-[var(--hover-color)]'>
              <Linkedin className='transition-colors duration-200' size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
