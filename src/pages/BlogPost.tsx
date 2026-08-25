import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Markdown from 'react-markdown';
import { blogs } from '../data/blogs';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FadeIn } from '../components/FadeIn';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#f7f7f7] text-zinc-950 font-sans flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-medium mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-blue-600 hover:underline">Return to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-zinc-950 font-sans selection:bg-zinc-900/20">
      <Navbar />
      <main className="pt-24 md:pt-32 pb-24 px-6 max-w-4xl mx-auto">
        <FadeIn>
          <Link to="/blog" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 mb-8 md:mb-10 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </FadeIn>
        
        <header className="mb-8 md:mb-12">
          <FadeIn delay={0.1}>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tighter leading-tight mb-4 md:mb-6">
              {blog.title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex gap-4 text-xs md:text-sm font-bold text-zinc-500">
              <span>{blog.date}</span>
              <span>By {blog.author}</span>
            </div>
          </FadeIn>
        </header>

        <FadeIn delay={0.3}>
          <div className="w-full aspect-video md:aspect-[21/9] bg-zinc-200 rounded-[1.5rem] md:rounded-3xl overflow-hidden mb-12 md:mb-16">
            <img 
              src={blog.imageUrl} 
              alt={blog.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>

        <article className="prose prose-base md:prose-lg prose-zinc max-w-none">
          <div className="markdown-body">
            <Markdown 
              components={{
                h3: ({node, ...props}) => <h3 className="text-xl md:text-2xl font-medium mt-10 md:mt-12 mb-4" {...props} />,
                p: ({node, ...props}) => <p className="text-zinc-600 font-medium leading-relaxed mb-6" {...props} />,
                em: ({node, ...props}) => <em className="text-zinc-900 font-bold not-italic" {...props} />,
                code: ({node, ...props}) => <code className="bg-zinc-200 text-zinc-800 px-1.5 py-0.5 rounded font-mono text-sm" {...props} />
              }}
            >
              {blog.content}
            </Markdown>
          </div>
        </article>

        {/* Read More Section */}
        <section className="mt-20 md:mt-24 pt-10 md:pt-12 border-t border-zinc-200">
          <FadeIn>
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-6 md:mb-8">More to read</h3>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {blogs.filter(b => b.id !== blog.id).slice(0, 2).map((relatedBlog, i) => (
              <FadeIn key={relatedBlog.id} delay={i * 0.1}>
                <Link to={`/blog/${relatedBlog.slug}`} className="bg-white rounded-3xl overflow-hidden border border-zinc-200 group cursor-pointer hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="h-48 overflow-hidden shrink-0">
                     <img src={relatedBlog.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={relatedBlog.title} />
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-center">
                    <h4 className="text-lg font-medium tracking-tight mb-3 group-hover:text-zinc-600 transition-colors line-clamp-2">{relatedBlog.title}</h4>
                    <div className="text-xs font-bold text-zinc-500 flex gap-4 mt-auto">
                      <span>{relatedBlog.date}</span>
                      <span>By {relatedBlog.author}</span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
