import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag } from 'lucide-react';
import { getActiveColor } from '../utils/colors';

const BlogCard = ({ post, colorMode }) => {
  const activeColor = getActiveColor(colorMode);

  // Parse tags as array
  let tags = [];
  if (post.tags) {
    if (Array.isArray(post.tags)) {
      tags = post.tags;
    } else if (typeof post.tags === 'string') {
      tags = post.tags
        .split(',')
        .map(tag => tag.trim())
        .filter(Boolean);
    }
  }

  return (
    <Card colorMode={colorMode}>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-wrap items-center justify-between mb-1 gap-2'>
          <div className='flex flex-wrap gap-2'>
            {tags.map(tag => (
              <span
                key={tag}
                className='bg-slate-700/60 text-blue-200 font-mono text-xs px-2 py-0.5 rounded select-none border border-gray-600'>
                {tag}
              </span>
            ))}
          </div>
          <span className='text-xs text-gray-400 font-mono ml-auto'>{post.date}</span>
        </div>
        <h3 className={`text-lg md:text-xl font-bold font-mono text-${activeColor}-400 mb-1`}>
          {post.title}
        </h3>
        {post.excerpt && (
          <p className='text-gray-300 text-base font-mono leading-relaxed mb-1 line-clamp-2'>
            {post.excerpt}
          </p>
        )}
        <div className='mt-2'>
          <Link
            to={`/blog/${post.slug}`}
            className={`text-${activeColor}-400 font-mono text-base hover:underline hover:text-${activeColor}-300 transition-colors`}>
            Read full post &rarr;
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default BlogCard;
