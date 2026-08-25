import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';

export function Blog() {
  const featuredBlog = blogs[0];
  const secondaryBlogs = blogs.slice(1, 5);

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-tight">
            <span className="text-zinc-400">From my blog,</span><br/>
            design insights.
          </h2>
          <Link to="/blog" className="font-semibold text-sm flex items-center gap-1 hover:text-zinc-600 transition-colors mb-4">
            View All <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Featured Post */}
          <Link to={`/blog/${featuredBlog.slug}`} className="md:col-span-2 bg-white rounded-3xl overflow-hidden border border-zinc-200 flex flex-col md:flex-row group cursor-pointer hover:shadow-lg transition-shadow">
            <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
               <img src={featuredBlog.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={featuredBlog.title} />
            </div>
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-medium tracking-tight mb-4 group-hover:text-zinc-600 transition-colors">{featuredBlog.title}</h3>
              <div className="text-xs font-bold text-zinc-500 mb-6 flex gap-4">
                <span>{featuredBlog.date}</span>
                <span>By {featuredBlog.author}</span>
              </div>
              <p className="text-zinc-500 font-medium leading-relaxed">
                {featuredBlog.excerpt}
              </p>
            </div>
          </Link>
          
          {/* Secondary Posts */}
          {secondaryBlogs.map((blog) => (
            <Link key={blog.id} to={`/blog/${blog.slug}`} className="bg-white rounded-3xl overflow-hidden border border-zinc-200 group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                 <img src={blog.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={blog.title} />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-medium tracking-tight mb-4 group-hover:text-zinc-600 transition-colors">{blog.title}</h3>
                <div className="text-xs font-bold text-zinc-500 flex gap-4">
                  <span>{blog.date}</span>
                  <span>By {blog.author}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
