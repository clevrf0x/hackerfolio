import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Code2, Search } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import { useColorMode } from '../App';
import { getActiveColor } from '../utils/colors';

function formatDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

const Home = ({ blogPosts = [] }) => {
  const { colorMode } = useColorMode();

  const activeColor = getActiveColor(colorMode);

  // Filter and sort posts as in Blog.jsx
  const validPosts = blogPosts
    .filter(post => post && post.slug && post.title && post.excerpt)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  const latestPosts = validPosts
    .slice(0, 3)
    .map(post => ({ ...post, date: formatDate(post.date) }));

  return (
    <div className='max-w-5xl mx-auto mt-12 px-4'>
      <div className='mb-12'>
        <h1 className='text-5xl md:text-6xl font-bold text-white font-mono mb-2 leading-tight'>
          Favas M
        </h1>
        <div className={`text-${activeColor}-400 font-mono text-2xl mb-2 leading-tight`}>
          Penetration Tester
        </div>
        <p className='text-gray-300 mb-8 max-w-2xl text-lg leading-relaxed'>
          Specialized in discovering and exploiting security vulnerabilities in web applications,
          networks, and infrastructure to help organizations improve their security posture.
        </p>
        <div className='flex flex-wrap gap-4 mb-10'>
          <Link
            to='/blog'
            className={`bg-${activeColor}-900/40 text-${activeColor}-300 font-mono px-5 py-2 rounded shadow hover:bg-${activeColor}-800 hover:text-white border border-${activeColor}-400/40 transition-all text-lg`}>
            Read My Blog
          </Link>
          <Link
            to='/cve'
            className={`bg-${activeColor}-900/40 text-${activeColor}-300 font-mono px-5 py-2 rounded shadow hover:bg-${activeColor}-800 hover:text-white border border-${activeColor}-400/40 transition-all text-lg`}>
            View My CVEs
          </Link>
        </div>
      </div>
      <div className='mb-14'>
        <h2
          className={`text-2xl md:text-3xl font-bold text-white font-mono mb-6 border-b border-${activeColor}-400/30 pb-2`}>
          Expertise
        </h2>
        <div className='grid md:grid-cols-3 gap-6'>
          <div
            className={`rounded-xl p-6 flex flex-col items-start gap-2 bg-[rgba(51,65,85,0.5)] border border-gray-500/50 transition-colors duration-200 hover:border-${activeColor}-400`}>
            <ShieldCheck className={`text-${activeColor}-400 mb-2`} size={32} />
            <h3 className={`font-mono text-lg font-bold mb-1 text-${activeColor}-400`}>
              Web Application Security
            </h3>
            <p className='text-gray-300 text-base leading-relaxed'>
              Identifying and exploiting vulnerabilities in web applications to prevent potential
              security breaches.
            </p>
          </div>
          <div
            className={`rounded-xl p-6 flex flex-col items-start gap-2 bg-[rgba(51,65,85,0.5)] border border-gray-500/50 transition-colors duration-200 hover:border-${activeColor}-400`}>
            <Code2 className={`text-${activeColor}-400 mb-2`} size={32} />
            <h3 className={`font-mono text-lg font-bold mb-1 text-${activeColor}-400`}>
              Exploit Development
            </h3>
            <p className='text-gray-300 text-base leading-relaxed'>
              Creating proof-of-concept exploits and custom security tools for specialized testing
              scenarios.
            </p>
          </div>
          <div
            className={`rounded-xl p-6 flex flex-col items-start gap-2 bg-[rgba(51,65,85,0.5)] border border-gray-500/50 transition-colors duration-200 hover:border-${activeColor}-400`}>
            <Search className={`text-${activeColor}-400 mb-2`} size={32} />
            <h3 className={`font-mono text-lg font-bold mb-1 text-${activeColor}-400`}>
              Security Research
            </h3>
            <p className='text-gray-300 text-base leading-relaxed'>
              Discovering and responsibly disclosing vulnerabilities in software and systems with
              published CVEs.
            </p>
          </div>
        </div>
      </div>
      <div className='mb-10'>
        <h2
          className={`text-2xl md:text-3xl font-bold text-white font-mono mb-6 border-b border-${activeColor}-400/30 pb-2`}>
          Latest Posts
        </h2>
        <div className='flex flex-col gap-8 mb-4'>
          {latestPosts.map(post => (
            <BlogCard key={post.slug} post={post} colorMode={colorMode} />
          ))}
        </div>
        <Link to='/blog' className={`text-${activeColor}-400 font-mono hover:underline text-lg`}>
          View all posts →
        </Link>
      </div>
    </div>
  );
};

export default Home;
