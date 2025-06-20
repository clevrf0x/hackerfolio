import React from 'react';
import { Shield, Terminal, Wrench } from 'lucide-react';
import Card from './Card';

const SkillsGrid = () => {
  const skills = [
    {
      icon: Shield,
      title: 'Penetration Testing',
      description: 'Web applications, networks, and infrastructure security assessments.',
    },
    {
      icon: Terminal,
      title: 'Vulnerability Research',
      description: 'Zero-day discovery and responsible disclosure processes.',
    },
    {
      icon: Wrench,
      title: 'Tool Development',
      description: 'Custom security tools and automation scripts.',
    },
  ];

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
      {skills.map((skill, index) => (
        <Card key={index}>
          <div className='flex flex-col items-center text-center'>
            <skill.icon className='text-red-400 mb-4' size={32} />
            <h3 className='font-bold mb-2'>{skill.title}</h3>
            <p className='text-gray-400'>{skill.description}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default SkillsGrid;
