import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown } from 'lucide-react';
import { blogs } from '../data/blogs';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FadeIn } from '../components/FadeIn';

export function BlogList() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const featuredBlog = blogs[0];
  const secondaryBlogs = blogs.slice(1);

  const filteredBlogs = secondaryBlogs.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-zinc-950 font-sans selection:bg-zinc-900/20">
      <Navbar />
      <main className="pt-24 md:pt-32 pb-20 md:pb-32 px-6 max-w-[1200px] mx-auto">
        
        {/* Header */}
        <header className="mb-16 md:mb-24 text-center max-w-3xl mx-auto pt-10">
          <FadeIn>
            <h1 className="text-4xl md:text-[4rem] lg:text-[4.5rem] font-medium tracking-tighter leading-tight mb-6 md:mb-8">
              My design insights &<br/>creative resources
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-black font-medium text-base md:text-[1.1rem] leading-relaxed max-w-[42rem] mx-auto">
              A collection of articles sharing professional design expertise, creative processes,
              and strategic thinking. Browse these resources to elevate your brand and
              understand the impact thoughtful design can have on your business.
            </p>
          </FadeIn>
        </header>

        {/* Featured Post */}
        <FadeIn delay={0.3}>
          <Link to={`/blog/${featuredBlog.slug}`} className="mb-12 md:mb-16 bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-zinc-200 group cursor-pointer hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-[550px] overflow-hidden shrink-0 bg-zinc-100">
               <img src={featuredBlog.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={featuredBlog.title} />
            </div>
            <div className="w-full md:w-1/2 p-6 md:p-16 flex flex-col justify-center">
              <h2 className="text-2xl md:text-[2.75rem] font-medium tracking-tight mb-4 md:mb-6 group-hover:text-zinc-600 transition-colors leading-tight md:pr-4">
                {featuredBlog.title}
              </h2>
              <div className="text-xs font-bold text-black flex gap-4 mb-4 md:mb-6">
                <span className="text-zinc-600 font-medium">{featuredBlog.date}</span>
                <span>By {featuredBlog.author}</span>
              </div>
              <p className="text-zinc-600 font-medium text-base md:text-lg leading-relaxed line-clamp-3 md:line-clamp-4">
                {featuredBlog.excerpt}
              </p>
            </div>
          </Link>
        </FadeIn>

        {/* Search and Filter */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 sm:py-2.5 rounded-xl border border-zinc-200 text-sm font-medium focus:outline-none focus:border-zinc-400 bg-white min-w-[200px] shadow-sm transition-colors"
              />
            </div>
            <div className="relative w-full sm:w-auto">
              <select className="w-full appearance-none pl-6 pr-12 py-3 sm:py-2.5 rounded-xl border border-zinc-200 text-sm font-medium focus:outline-none focus:border-zinc-400 bg-white min-w-[140px] shadow-sm cursor-pointer transition-colors">
                <option>All</option>
                <option>Design</option>
                <option>Development</option>
                <option>Strategy</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
            </div>
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {filteredBlogs.map((blog, i) => (
            <FadeIn key={blog.id} delay={i * 0.1}>
              <Link to={`/blog/${blog.slug}`} className="bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-zinc-200 group cursor-pointer hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="h-56 sm:h-72 md:h-[320px] overflow-hidden shrink-0 bg-zinc-100">
                   <img src={blog.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={blog.title} />
                </div>
                <div className="p-6 md:p-10 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4 group-hover:text-zinc-600 transition-colors leading-tight line-clamp-2">
                    {blog.title}
                  </h3>
                  <div className="text-xs font-bold text-black flex gap-4 mb-4 md:mb-6">
                    <span className="text-zinc-600 font-medium">{blog.date}</span>
                    <span>By {blog.author}</span>
                  </div>
                  <p className="text-zinc-600 font-medium leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
