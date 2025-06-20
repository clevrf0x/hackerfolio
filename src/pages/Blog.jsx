import React from 'react';
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom';
import { useColorMode } from '../App';

function formatDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const Blog = ({ blogPosts, loading }) => {
  const { colorMode } = useColorMode();

  const validPosts = blogPosts.filter(post => post && post.slug && post.title && post.excerpt);
  if (loading) {
    return (
      <div className='flex flex-col items-center justify-center min-h-[60vh]'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-red-400 mb-4'></div>
        <span className='text-red-400 text-lg'>Loading blog posts...</span>
      </div>
    );
  }
  if (validPosts.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center min-h-[40vh]'>
        <span className='text-gray-400 text-lg'>No blog posts found.</span>
      </div>
    );
  }
  return (
    <div className='max-w-4xl mx-auto mt-16 px-4'>
      <h1 className='text-3xl md:text-4xl font-bold text-white font-mono mb-2'>Blog</h1>
      <p className='text-gray-300 font-mono mb-10 text-base max-w-3xl'>
        Security research, exploit development, and technical write-ups covering various aspects of
        offensive security and penetration testing.
      </p>
      <div className='flex flex-col gap-8'>
        {validPosts.map(post => (
          <BlogCard
            key={post.slug}
            post={{ ...post, date: formatDate(post.date) }}
            colorMode={colorMode}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
