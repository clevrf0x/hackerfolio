import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useColorMode } from '../App';
import { getActiveColor } from '../utils/colors';

const cves = [
  {
    id: 'CVE-2024-32136',
    description:
      'A SQL injection vulnerability in database systems leading to unauthorized access.',
    url: '#',
  },
  {
    id: 'CVE-2023-0830',
    description:
      'Vulnerability in EasyNAS backup and restore script allowing arbitrary command execution with root privileges.',
    url: '#',
  },
  {
    id: 'CVE-2024-0365',
    description: 'A security flaw in system components allowing privilege escalation.',
    url: '#',
  },
  {
    id: 'CVE-2024-0399',
    description: 'A critical vulnerability affecting data integrity and confidentiality.',
    url: '#',
  },
  {
    id: 'CVE-2024-0405',
    description: 'An input validation vulnerability leading to remote code execution.',
    url: '#',
  },
  // {
  //   id: 'CVE-2024-0566',
  //   description: 'A SQL injection vulnerability allowing data exfiltration in web applications.',
  //   url: '#',
  // },
  // {
  //   id: 'CVE-2024-30240',
  //   description:
  //     'A critical SQL injection vulnerability allowing authentication bypass in systems.',
  //   url: '#',
  // },
  // {
  //   id: 'CVE-2024-31370',
  //   description: 'An injection vulnerability allowing arbitrary code execution.',
  //   url: '#',
  // },
  // {
  //   id: 'CVE-2024-33911',
  //   description: 'A vulnerability affecting system configurations and security controls.',
  //   url: '#',
  // },
];

const CVE = () => {
  const { colorMode } = useColorMode();

  const activeColor = getActiveColor(colorMode);

  return (
    <div className='max-w-5xl mx-auto mt-8 md:mt-12 px-2 sm:px-4'>
      <h1 className='text-3xl md:text-4xl font-bold text-white font-mono mb-2'>CVEs</h1>
      <p className='text-gray-400 font-mono mb-6 md:mb-10 text-base'>
        Common Vulnerabilities and Exposures (CVEs) discovered and responsibly disclosed as part of
        security research and penetration testing efforts.
      </p>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8'>
        {cves.map(cve => (
          <div
            key={cve.id}
            className={`bg-[rgba(51,65,85,0.5)] border border-gray-500/50 rounded-xl p-6 font-mono text-gray-100 shadow-lg shadow-black/10 flex flex-col gap-3 relative transition-colors duration-200 hover:border-${activeColor}-400`}>
            <div className='absolute top-4 right-4'>
              <span
                className={`bg-${activeColor}-400/10 text-${activeColor}-400 border border-${activeColor}-400/30 rounded px-2 py-0.5 text-xs font-mono select-none`}>
                CVE
              </span>
            </div>
            <h2 className={`text-[18px] font-bold text-${activeColor}-400 mb-1 font-mono`}>
              {cve.id}
            </h2>
            <p
              className='text-white mb-2 whitespace-pre-line line-clamp-3'
              style={{ fontSize: '14px' }}>
              {cve.description}
            </p>
            <a
              href={cve.url}
              className={`flex items-center gap-1 text-${activeColor}-400 hover:text-${activeColor}-300 text-sm font-mono mt-2`}
              target='_blank'
              rel='noopener noreferrer'>
              View CVE Details <ExternalLink size={14} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CVE;
