import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
import Card from '../components/Card';
import fm from 'front-matter';
import { useColorMode } from '../App';
import { getActiveColor } from '../utils/colors';

const BlogDetail = ({ blogPosts }) => {
  const { slug } = useParams();
  const { colorMode } = useColorMode();

  const activeColor = getActiveColor(colorMode);

  const postMeta = blogPosts.find(p => p.slug === slug);
  const [content, setContent] = useState('');
  const [meta, setMeta] = useState(postMeta || {});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContent() {
      if (!postMeta) return setLoading(false);
      const res = await fetch(`/blogs/${postMeta.file}`);
      const text = await res.text();
      const { attributes, body } = fm(text);
      setMeta(attributes);
      setContent(body);
      setLoading(false);
    }
    fetchContent();
  }, [postMeta]);

  // Helper to format date
  function formatDate(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  // Parse tags as array
  let tags = [];
  if (meta.tags) {
    if (Array.isArray(meta.tags)) {
      tags = meta.tags;
    } else if (typeof meta.tags === 'string') {
      tags = meta.tags
        .split(',')
        .map(tag => tag.trim())
        .filter(Boolean);
    }
  }

  if (loading) {
    return <div className='text-center text-gray-400'>Loading...</div>;
  }
  if (!postMeta) {
    return <div className='text-center text-red-400'>Blog post not found.</div>;
  }

  return (
    <div className='max-w-3xl mx-auto mt-10 px-2 md:px-0'>
      <Link to='/blog' className={`text-${activeColor}-400 hover:underline mb-6 inline-block`}>
        &larr; Back to Blog
      </Link>
      <h1 className='text-3xl md:text-4xl font-bold text-white mb-4 leading-tight'>{meta.title}</h1>
      {meta.image && (
        <img
          src={meta.image}
          alt={meta.title}
          className='w-full max-h-80 object-cover rounded-lg mb-6 shadow-lg'
        />
      )}
      <div className='flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6'>
        <span>
          <span className='font-semibold text-gray-300'>Date:</span> {formatDate(meta.date)}
        </span>
        {meta.readTime && (
          <span>
            <span className='font-semibold text-gray-300'>Read:</span> {meta.readTime}
          </span>
        )}
        {meta.author && (
          <span>
            <span className='font-semibold text-gray-300'>Author:</span> {meta.author}
          </span>
        )}
        {tags.length > 0 && (
          <span className='flex flex-wrap items-center gap-2'>
            <span className='font-semibold text-gray-300 mr-1'>Tags:</span>
            <span className='flex flex-wrap gap-2'>
              {tags.map(tag => (
                <span
                  key={tag}
                  className={`inline-block bg-gray-800 border border-${activeColor}-500/60 text-${activeColor}-200 font-semibold px-3 py-1 rounded-full shadow-sm text-xs tracking-wide hover:bg-${activeColor}-950 hover:text-${activeColor}-300 hover:border-${activeColor}-400 transition-all duration-150 mr-1 mb-1`}>
                  {tag}
                </span>
              ))}
            </span>
          </span>
        )}
      </div>
      <div className='prose prose-invert max-w-none'>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: () => null,
            h2: props => (
              <h2
                className={`text-2xl md:text-3xl font-bold text-${activeColor}-400 mt-10 mb-4`}
                style={{ lineHeight: '24px' }}
                {...props}
              />
            ),
            h3: props => (
              <h3
                className={`text-xl md:text-2xl font-bold text-${activeColor}-400 mt-8 mb-3`}
                {...props}
              />
            ),
            p: props => (
              <p
                className='text-gray-300 mb-5'
                style={{ lineHeight: '1.6', fontSize: '16px' }}
                {...props}
              />
            ),
            ul: props => <ul className='list-disc list-inside mb-5 text-gray-300' {...props} />,
            ol: props => <ol className='list-decimal list-inside mb-5 text-gray-300' {...props} />,
            li: props => <li className='mb-2' {...props} />,
            a: props => (
              <a
                className={`text-${activeColor}-400 underline hover:text-${activeColor}-300`}
                target='_blank'
                rel='noopener noreferrer'
                {...props}
              />
            ),
            blockquote: props => (
              <blockquote
                className={`border-l-4 border-${activeColor}-400/40 pl-4 italic text-gray-400 my-6`}
                {...props}
              />
            ),
            code: ({ className, children, ...props }) => {
              if (!className) {
                // Inline code
                return (
                  <code
                    className='font-mono text-red-400 bg-gray-800 px-1 py-0.5 rounded text-sm'
                    style={{ display: 'inline' }}
                    {...props}>
                    {children}
                  </code>
                );
              }
              // Code block
              let code = String(children).replace(/\n$/, '');
              let lang = '';
              if (className && className.startsWith('language-')) {
                lang = className.replace('language-', '');
              }
              const highlighted =
                lang && hljs.getLanguage(lang)
                  ? hljs.highlight(code, { language: lang }).value
                  : hljs.highlightAuto(code).value;
              return (
                <pre className='bg-gray-900 rounded-lg p-4 overflow-x-auto mb-5'>
                  <code
                    className={className}
                    dangerouslySetInnerHTML={{ __html: highlighted }}
                    {...props}
                  />
                </pre>
              );
            },
            hr: () => <hr className='my-10 border-gray-700' />,
            strong: props => <strong className='font-bold text-white' {...props} />,
            em: props => <em className='italic text-gray-300' {...props} />,
          }}
          children={content}
        />
      </div>
    </div>
  );
};

export default BlogDetail;
