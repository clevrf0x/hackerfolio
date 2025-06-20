import React from 'react';
import { Download, Github } from 'lucide-react';
import { useColorMode } from '../App';
import { getActiveColor } from '../utils/colors';

const tools = [
  {
    name: 'InterceptReady',
    badge: 'Tool',
    description:
      'An automated toolkit for configuring Android emulators with Frida and Burp Suite for mobile security testing. It handles the installation of Frida, configuration of Burp Suite certificates, and setting up proxy settings for a fully-functional mobile testing environment.',
    github: '#',
    download: '#',
  },
  {
    name: 'AspXVenom',
    badge: 'Tool',
    description:
      'Automates the process of generating encoded shellcode and embedding it into ASPX webshells, providing a smooth workflow for penetration testers during security assessments. The tool is specifically designed for testing ASPX-enabled web servers and .NET environments.',
    github: '#',
    download: '#',
  },
  {
    name: 'MacroPhantom',
    badge: 'Tool',
    description:
      'MacroPhantom automates the process of generating XOR+Caesar encrypted shellcode and embedding it into VBA macros for Microsoft Office documents. The tool streamlines the workflow for security professionals during penetration tests and security assessments, particularly for phishing simulations.',
    github: '#',
    download: '#',
  },
  {
    name: 'GoPhish Deploy',
    badge: 'Tool',
    description:
      'Python script to automate the deployment and configuration of the GoPhish phishing framework. The script installs all necessary dependencies, configures SSL certificates, and sets up the environment for a production-ready deployment.',
    github: '#',
    download: '#',
  },
];

const Tools = () => {
  const { colorMode } = useColorMode();
  const activeColor = getActiveColor(colorMode);

  return (
    <div className='max-w-5xl mx-auto mt-8 md:mt-12 px-2 sm:px-4'>
      <h1 className='text-3xl md:text-4xl font-bold text-white font-mono mb-2'>Tools</h1>
      <p className='text-gray-400 font-mono mb-6 md:mb-10 text-base'>
        Open-source security tools and utilities developed to assist with penetration testing,
        vulnerability research, and security assessments.
      </p>

      <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
        {tools.map(tool => (
          <div
            key={tool.name}
            className={`bg-[rgba(51,65,85,0.5)] border border-gray-500/50 rounded-xl p-6 font-mono text-gray-100 shadow-lg shadow-black/10 flex flex-col gap-3 relative transition-colors duration-200 hover:border-${activeColor}-400`}>
            <div className='absolute top-4 right-4'>
              <span className='bg-gray-800 text-gray-300 border border-gray-700 rounded px-2 py-0.5 text-xs font-mono select-none'>
                {tool.badge}
              </span>
            </div>
            <h2 className='text-lg font-bold text-gray-100 mb-1 font-mono'>{tool.name}</h2>
            <p className='text-gray-400 text-sm mb-2 whitespace-pre-line'>{tool.description}</p>
            <div className='flex items-center gap-4 mt-2'>
              <a
                href={tool.github}
                className={`flex items-center gap-1 text-${activeColor}-400 hover:text-${activeColor}-300 text-sm font-mono`}
                target='_blank'
                rel='noopener noreferrer'>
                <Github size={16} /> GitHub
              </a>
              <a
                href={tool.download}
                className={`flex items-center gap-1 text-${activeColor}-400 hover:text-${activeColor}-300 text-sm font-mono`}
                target='_blank'
                rel='noopener noreferrer'>
                <Download size={16} /> Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
