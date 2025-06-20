import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ColorSafelist from './components/ColorSafelist';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Tools from './pages/Tools';
import CVE from './pages/CVE';
import NotFound from './pages/NotFound';
import fm from 'front-matter';

// Create context for color mode
export const ColorModeContext = createContext();

// Custom hook to use color mode
export const useColorMode = () => {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error('useColorMode must be used within a ColorModeProvider');
  }
  return context;
};

const BLOG_FILES = [
  'advanced-web-security.md',
  'cybersecurity-best-practices.md',
  'api-security-testing-guide.md',
];

function App() {
  // Initialize color mode from localStorage or default to 'red'
  const [colorMode, setColorMode] = useState(() => {
    const savedMode = localStorage.getItem('colorMode');
    return savedMode || 'red';
  });

  // Save color mode to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('colorMode', colorMode);
    // Update CSS variable for dynamic color (if needed for other purposes)
    const colorMap = {
      red: 'rgb(248 113 113)',
      green: 'rgb(74 222 128)',
      blue: 'rgb(96 165 250)',
      purple: 'rgb(168 85 247)',
      orange: 'rgb(251 146 60)',
      yellow: 'rgb(250 204 21)',
    };
    document.documentElement.style.setProperty(
      '--accent-color',
      colorMap[colorMode] || colorMap.red
    );
  }, [colorMode]);

  const toggleColorMode = () => {
    const colors = ['red', 'green', 'blue', 'purple', 'orange', 'yellow'];
    setColorMode(prev => {
      const currentIndex = colors.indexOf(prev);
      const nextIndex = (currentIndex + 1) % colors.length;
      return colors[nextIndex];
    });
  };

  const [activeSection, setActiveSection] = useState('home');
  const [blogPosts, setBlogPosts] = useState([]);
  const [blogLoading, setBlogLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      setBlogLoading(true);
      const posts = await Promise.all(
        BLOG_FILES.map(async file => {
          try {
            const res = await fetch(`/blogs/${file}`);
            if (!res.ok) throw new Error(`Failed to fetch ${file}`);
            const text = await res.text();
            const meta = fm(text).attributes;
            if (!meta.slug || !meta.title || !meta.excerpt) return null;
            return {
              ...meta,
              date: meta.date ? String(meta.date) : '',
              readTime: meta.readTime ? String(meta.readTime) : '',
              slug: String(meta.slug),
              excerpt: String(meta.excerpt),
              title: String(meta.title),
              file,
            };
          } catch (err) {
            console.error('Error loading blog:', file, err);
            return null;
          }
        })
      );
      setBlogPosts(posts.filter(Boolean));
      setBlogLoading(false);
    }
    fetchBlogs();
  }, []);

  return (
    <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
      <Router>
        <div className='min-h-screen bg-gray-900 text-white'>
          <ColorSafelist />
          <Header
            colorMode={colorMode}
            toggleColorMode={toggleColorMode}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          <main className='pb-16'>
            <Routes>
              <Route path='/' element={<Home blogPosts={blogPosts} loading={blogLoading} />} />
              <Route path='/about' element={<About />} />
              <Route path='/blog' element={<Blog blogPosts={blogPosts} loading={blogLoading} />} />
              <Route path='/blog/:slug' element={<BlogDetail blogPosts={blogPosts} />} />
              <Route path='/tools' element={<Tools />} />
              <Route path='/cve' element={<CVE />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ColorModeContext.Provider>
  );
}

export default App;
