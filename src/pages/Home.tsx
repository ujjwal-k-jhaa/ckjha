import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import { 
  ArrowRight, 
  BarChart3, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  LayoutTemplate, 
  LineChart, 
  MousePointerClick, 
  Target, 
  TrendingUp, 
  Zap,
  Check,
  X,
  Activity,
  Layers,
  ArrowUpRight,
  PenTool,
  Layout,
  Terminal,
  FileCode,
  Paintbrush,
  Code2,
  Search,
  ShieldCheck,
  Gauge,
  Users,
  Briefcase,
  Rocket,
  RefreshCw,
  MessageSquare,
  MonitorSmartphone,
  Workflow,
  AlertCircle,
  Figma,
  User
} from 'lucide-react';

const FadeIn: React.FC<{ children: React.ReactNode, delay?: number, className?: string }> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const TechStack = () => {
  const techs = [
    { name: "Figma", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" className="w-5 h-5" alt="Figma" /> },
    { name: "Framer", icon: <svg viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M0 0h14v7H7L0 0zm0 7h14l-7 7H0V7zm7 7h7l-7 7v-7z" fill="#0055FF"/></svg> },
    { name: "VS Code", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" className="w-5 h-5" alt="VS Code" /> },
    { name: "HTML5", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="w-5 h-5" alt="HTML5" /> },
    { name: "CSS3", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="w-5 h-5" alt="CSS3" /> },
    { name: "JavaScript", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-5 h-5" alt="JavaScript" /> },
    { name: "React", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="w-5 h-5" alt="React" /> },
    { name: "Next.js", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" className="w-5 h-5" alt="Next.js" /> },
  ];
  
  return (
    <div className="w-full max-w-4xl mx-auto overflow-hidden mt-16 relative mask-image-fade py-4">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6">
        {[...techs, ...techs, ...techs].map((tech, i) => (
          <div key={i} className="flex items-center gap-3 px-5 py-2.5 bg-white/60 backdrop-blur-md border border-slate-200/60 rounded-full shadow-sm text-slate-700 font-medium whitespace-nowrap transition-transform hover:scale-105 hover:bg-white cursor-default">
            {tech.icon}
            {tech.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const faqs = [
    {
      question: "Is the strategy call really free?",
      answer: "Yes. The 30-minute strategy call is completely free and comes with no obligation. It's an opportunity for us to identify conversion gaps and see if we're a good fit to work together."
    },
    {
      question: "Who is this for?",
      answer: "I design high-performing websites for all types of businesses—from SaaS startups and B2B consultants to e-commerce brands and local services. If you have traffic but are struggling to convert those visitors into qualified leads, customers, or booked calls, this is for you."
    },
    {
      question: "What if I already have a website?",
      answer: "Perfect. Most of my work involves redesigning and optimizing existing websites. We'll take what's working, fix what isn't, and restructure the user journey for maximum conversions."
    },
    {
      question: "Do you work internationally?",
      answer: "Yes, I work with clients globally. All our communication and strategy sessions are conducted via Zoom, and project management is handled asynchronously for maximum efficiency."
    },
    {
      question: "What platforms do you build on?",
      answer: "I build primarily on modern, high-performance platforms like Webflow, Framer, or custom React/Next.js stacks, depending on your specific technical requirements and scalability needs."
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/40 backdrop-blur-md border-b border-white/20 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center relative">
          <div className="font-bold text-xl tracking-tight">CK Jha<span className="text-blue-600">.</span></div>
          
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
            <Link 
              to="/case-studies" 
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
            >
              Case Studies
            </Link>
          </div>

          <button 
            onClick={() => scrollToSection('strategy-call')}
            className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors flex items-center gap-2 shadow-lg shadow-slate-900/20"
          >
            Book a Strategy Call
          </button>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="min-h-screen pt-40 pb-20 md:pt-52 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
        {/* Premium Gradients & Gridlines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-40 pointer-events-none -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 blur-[120px] rounded-full mix-blend-multiply animate-pulse"></div>
        </div>

        {/* Floating elements for engagement */}
        <motion.div 
          animate={{ y: [0, -30, 0], x: [0, 20, 0], rotate: [0, 10, 0] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-10 md:left-20 w-32 h-32 bg-blue-200/40 backdrop-blur-3xl rounded-full blur-2xl -z-10"
        />
        <motion.div 
          animate={{ y: [0, 40, 0], x: [0, -20, 0], rotate: [0, -15, 0] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 right-10 md:right-20 w-40 h-40 bg-indigo-200/40 backdrop-blur-3xl rounded-full blur-2xl -z-10"
        />
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 left-4 md:left-1/4 w-20 h-20 bg-purple-200/30 backdrop-blur-3xl rounded-full blur-xl -z-10"
        />

        {/* Floating Icons Parallax */}
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="hidden lg:flex absolute top-1/4 left-[8%] w-16 h-16 bg-white/40 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 items-center justify-center text-blue-600/50 z-0"
        >
          <TrendingUp size={32} />
        </motion.div>

        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="hidden lg:flex absolute top-1/3 right-[8%] w-20 h-20 bg-white/40 backdrop-blur-md rounded-full shadow-xl border border-white/50 items-center justify-center text-indigo-600/50 z-0"
        >
          <Zap size={40} />
        </motion.div>

        <motion.div 
          animate={{ y: [0, -25, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="hidden lg:flex absolute bottom-1/4 left-[12%] w-14 h-14 bg-white/40 backdrop-blur-md rounded-xl shadow-xl border border-white/50 items-center justify-center text-purple-600/50 z-0"
        >
          <Layout size={28} />
        </motion.div>

        <motion.div 
          animate={{ y: [0, 15, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="hidden lg:flex absolute bottom-1/3 right-[15%] w-16 h-16 bg-white/40 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 items-center justify-center text-emerald-600/50 z-0"
        >
          <Target size={30} />
        </motion.div>

        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 20, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          className="hidden lg:flex absolute top-1/2 left-[5%] w-12 h-12 bg-white/40 backdrop-blur-md rounded-full shadow-xl border border-white/50 items-center justify-center text-rose-600/50 z-0"
        >
          <Code2 size={24} />
        </motion.div>

        <FadeIn className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm text-blue-700 text-sm font-semibold border border-blue-100 shadow-sm mb-8">
            <TrendingUp size={16} className="text-blue-600" />
            <span>Strategic Web Designer</span>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1} className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 max-w-4xl leading-[1.1] mb-8">
            Turn Your Website Into a Predictable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Revenue Engine</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2} className="relative z-10">
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mb-12 leading-relaxed font-light">
            Hi, I'm CK Jha. I design and optimize websites that increase conversions, booked calls, and measurable growth for your business.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} className="relative z-10">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button 
              onClick={() => scrollToSection('strategy-call')}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-base font-medium transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 hover:scale-105"
            >
              Book a Strategy Call <ArrowRight size={18} />
            </button>
            <Link 
              to="/case-studies"
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-full text-base font-medium transition-colors shadow-sm flex items-center justify-center"
            >
              View Case Studies
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 font-medium flex items-center justify-center gap-2">
            <CheckCircle2 size={14} className="text-emerald-500" /> Free 30-Minute Growth Strategy Session
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <TechStack />
        </FadeIn>
      </section>

      {/* 2. PROBLEM SECTION (RESTORED) */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Your Website Might Be <span className="text-red-500">Holding Back Your Growth</span>
              </h2>
              <p className="text-lg text-slate-600">
                Most websites are built to look pretty, not to sell. If your website is suffering from any of these symptoms, you are leaving money on the table every single day.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="space-y-6">
                {[
                  { title: "High Bounce Rates", desc: "Visitors leave before reading your core message." },
                  { title: "Low Conversion Rates", desc: "Plenty of traffic, but very few actual leads or sales." },
                  { title: "Poor Mobile Experience", desc: "Frustrating navigation on phones drives users to competitors." },
                  { title: "Slow Load Times", desc: "Every second of delay drops conversions by up to 20%." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-red-200 hover:bg-red-50/50 transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-red-100 text-red-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <AlertCircle size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <h3 className="text-white font-bold text-2xl mb-8 relative z-10">The Cost of Inaction</h3>
                
                {/* Custom SVG Graph representing lost revenue */}
                <div className="relative h-64 w-full border-b border-l border-slate-700 mb-6 z-10">
                  {/* Traffic Line (Flat) */}
                  <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M0,20 Q25,25 50,20 T100,20" fill="none" stroke="#3b82f6" strokeWidth="2" vectorEffect="non-scaling-stroke" strokeDasharray="4 4" />
                  </svg>
                  <div className="absolute top-[15%] left-2 text-blue-400 font-mono text-xs">Traffic (Flat)</div>
                  
                  {/* Conversions Line (Dropping) */}
                  <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M0,40 Q25,45 50,60 T100,90" fill="none" stroke="#ef4444" strokeWidth="3" vectorEffect="non-scaling-stroke" className="animate-[dash_3s_ease-out_forwards]" strokeDasharray="200" strokeDashoffset="200" />
                    
                    {/* Area under the curve (Lost Revenue) */}
                    <path d="M0,20 Q25,25 50,20 T100,20 L100,90 Q75,75 50,60 T0,40 Z" fill="url(#redGradient)" opacity="0.2" />
                    <defs>
                      <linearGradient id="redGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#ef4444" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute top-[35%] left-2 text-red-400 font-mono font-bold text-xs">Conversions & Revenue (Dropping)</div>
                  
                  {/* Labels */}
                  <div className="absolute bottom-2 right-4 text-red-400 font-bold text-sm bg-slate-900/80 px-2 py-1 rounded">Lost Revenue Gap</div>
                </div>
                
                <div className="flex justify-between text-slate-400 text-xs font-mono relative z-10">
                  <span>Q1</span>
                  <span>Q2</span>
                  <span>Q3</span>
                  <span>Q4</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. GROWTH FRAMEWORK SECTION (BENTO GRID) */}
      <section id="framework" className="py-24 bg-[#fafafa] relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                My Strategy Behind Every High-Performing Website
              </h2>
              <p className="text-lg text-slate-600">
                I don't just design pretty pages. I implement a proven framework designed to turn your cold traffic into qualified leads and paying clients.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Bento Item 1: Revenue Structure */}
            <FadeIn delay={0.1} className="md:col-span-2">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-10 rounded-3xl text-white relative overflow-hidden group h-full border border-slate-700 shadow-2xl shadow-slate-900/20">
                <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                    <LayoutTemplate className="text-blue-400" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Revenue-Focused Structure</h3>
                  <p className="text-slate-300 leading-relaxed max-w-md">
                    Every page is architected with a single goal: guiding the user toward a buying decision. We remove friction, highlight value, and build a logical hierarchy.
                  </p>
                  
                  {/* Mini Visual */}
                  <div className="mt-8 flex gap-2">
                    <div className="h-2 w-1/3 bg-blue-500 rounded-full"></div>
                    <div className="h-2 w-1/4 bg-blue-400 rounded-full opacity-70"></div>
                    <div className="h-2 w-1/6 bg-blue-300 rounded-full opacity-40"></div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Bento Item 2: Authority */}
            <FadeIn delay={0.2}>
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/40 h-full group hover:border-blue-200 transition-colors">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Authority & Trust Design</h3>
                <p className="text-slate-600 leading-relaxed">
                  Position your brand as the premium choice through strategic social proof and professional aesthetics.
                </p>
              </div>
            </FadeIn>

            {/* Bento Item 3: Strategic Flow */}
            <FadeIn delay={0.3}>
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/40 h-full group hover:border-blue-200 transition-colors">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Workflow className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Strategic Call-to-Action Flow</h3>
                <p className="text-slate-600 leading-relaxed">
                  No more dead ends. We create an intuitive journey that naturally leads prospects to book a call.
                </p>
              </div>
            </FadeIn>

            {/* Bento Item 4: Copywriting */}
            <FadeIn delay={0.4} className="md:col-span-2">
              <div className="bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-xl shadow-slate-900/40 h-full group hover:border-slate-700 transition-colors text-white">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MessageSquare className="text-blue-400" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Conversion Copywriting</h3>
                <p className="text-slate-400 leading-relaxed">
                  Words that sell. We craft compelling messaging that speaks directly to your ideal client's pain points.
                </p>
              </div>
            </FadeIn>

            {/* Bento Item 5: Performance */}
            <FadeIn delay={0.5} className="md:col-span-3">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 md:p-12 rounded-3xl text-white relative overflow-hidden group shadow-2xl shadow-blue-900/20 flex flex-col justify-center">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-30"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 w-full">
                  <div className="flex-1 max-w-2xl">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                      <Gauge className="text-white" size={28} />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Performance & Optimization</h3>
                    <p className="text-blue-100 text-lg leading-relaxed">
                      Fast load times, flawless mobile experiences, and technical SEO foundations ensure you capture and retain every possible lead without drop-offs. A slow website kills conversions before they even start.
                    </p>
                  </div>
                  <div className="w-full md:w-auto shrink-0 bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/20 text-center flex flex-col justify-center shadow-inner">
                    <div className="text-6xl md:text-7xl font-black mb-2 tracking-tighter">99<span className="text-4xl text-blue-300">%</span></div>
                    <div className="text-blue-200 text-sm font-bold uppercase tracking-widest">Performance Score</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3.5 SERVICES SECTION */}
      <section id="services" className="py-32 bg-slate-50 border-t border-slate-200 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Strategic Web Design Services
              </h2>
              <p className="text-lg text-slate-600">
                I build high-performing digital assets designed to scale your business, increase your revenue, and turn cold traffic into loyal customers.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Service 1 */}
            <FadeIn delay={0.1}>
              <div className="bg-slate-900 p-10 md:p-12 rounded-[2.5rem] border border-slate-800 shadow-2xl shadow-slate-900/30 h-full flex flex-col relative overflow-hidden group hover:scale-[1.02] hover:border-blue-500/50 hover:shadow-blue-900/40 transition-all duration-500">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] -mr-20 -mt-20"></div>
                <div className="absolute top-6 right-8 bg-blue-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-blue-500/30">Most Popular</div>
                
                <div className="w-16 h-16 bg-slate-800 text-blue-400 rounded-2xl flex items-center justify-center mb-8 border border-slate-700 group-hover:scale-110 transition-transform duration-300 relative z-10">
                  <LayoutTemplate size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white relative z-10">Premium Website Design</h3>
                <p className="text-slate-400 text-base mb-6 leading-relaxed relative z-10">
                  A complete overhaul of your digital presence. I build high-authority, conversion-optimized websites from the ground up, designed specifically to drive overall business and revenue growth.
                </p>
                <div className="mt-auto relative z-10">
                  <div className="h-px w-full bg-slate-800 mb-8"></div>
                  <ul className="space-y-4 mb-10">
                    {[
                      "Custom Premium Design & Dev", 
                      "Conversion-Focused Copywriting", 
                      "Mobile & Speed Optimization",
                      "Full Launch & Post-Launch Support"
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 font-medium text-slate-300 text-sm">
                        <CheckCircle2 size={18} className="text-blue-400 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => scrollToSection('strategy-call')} className="w-full py-4 rounded-full font-bold transition-all duration-300 bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20">
                    Start a Project
                  </button>
                </div>
              </div>
            </FadeIn>

            {/* Service 2 */}
            <FadeIn delay={0.2}>
              <div className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 h-full flex flex-col group hover:scale-[1.02] hover:border-blue-300 hover:shadow-blue-100 transition-all duration-500">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <MonitorSmartphone size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">E-Commerce Design</h3>
                <p className="text-slate-600 text-base mb-6 leading-relaxed">
                  High-converting online stores that maximize average order value and reduce cart abandonment. Built for seamless shopping experiences across all devices.
                </p>
                <div className="mt-auto">
                  <div className="h-px w-full bg-slate-100 mb-8"></div>
                  <ul className="space-y-4 mb-10">
                    {[
                      "Optimized Product Pages", 
                      "Frictionless Checkout Flow", 
                      "Inventory & Payment Integration",
                      "Upsell & Cross-sell Strategy"
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 font-medium text-slate-700 text-sm">
                        <CheckCircle2 size={18} className="text-blue-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => scrollToSection('strategy-call')} className="w-full py-4 rounded-full font-bold transition-all duration-300 bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200">
                    Boost Your Sales
                  </button>
                </div>
              </div>
            </FadeIn>

            {/* Service 3 */}
            <FadeIn delay={0.3}>
              <div className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 h-full flex flex-col group hover:scale-[1.02] hover:border-blue-300 hover:shadow-blue-100 transition-all duration-500">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <PenTool size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Landing Pages & Funnels</h3>
                <p className="text-slate-600 text-base mb-6 leading-relaxed">
                  Laser-focused, high-converting landing pages designed for specific ad campaigns, product launches, or lead generation to maximize your ad spend ROI.
                </p>
                <div className="mt-auto">
                  <div className="h-px w-full bg-slate-100 mb-8"></div>
                  <ul className="space-y-4 mb-10">
                    {[
                      "Direct Response Copywriting", 
                      "A/B Testing Ready", 
                      "CRM & Email Integration",
                      "Analytics & Tracking Setup"
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 font-medium text-slate-700 text-sm">
                        <CheckCircle2 size={18} className="text-blue-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => scrollToSection('strategy-call')} className="w-full py-4 rounded-full font-bold transition-all duration-300 bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200">
                    Capture More Leads
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3.5 PORTFOLIO SECTION */}
      <section className="py-24 bg-slate-900 text-white relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.15)_0%,transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Recent Growth Projects
              </h2>
              <p className="text-lg text-slate-400">
                A look at some of the high-converting websites I've designed and built for ambitious founders.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {caseStudies.map((project, i) => (
              <FadeIn key={i} delay={0.2 + (i * 0.15)} className={i % 2 === 1 ? "md:mt-24" : ""}>
                <Link to={`/case-studies/${project.id}`} className="group relative block rounded-2xl overflow-hidden bg-slate-800 border border-slate-700/50 aspect-[4/3] shadow-2xl shadow-black/50 hover:shadow-blue-500/20 hover:border-blue-500/50 transition-all duration-500">
                  {/* Subtle background pattern */}
                  <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] mix-blend-overlay"></div>
                  
                  <motion.img 
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + (i * 0.15), ease: "easeOut" }}
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out relative z-10"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center backdrop-blur-sm z-20">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center">
                      <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                      <div className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow-lg shadow-blue-600/30">
                        See Case Study <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn delay={0.4}>
            <div className="mt-16 text-center">
              <Link to="/case-studies" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold transition-colors border border-white/10">
                View All Case Studies <ArrowRight size={18} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. POSITIONING SECTION (IMPROVED) */}
      <section className="py-32 bg-white relative z-10 overflow-hidden border-y border-slate-100">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] -z-10 opacity-60"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <div className="absolute -left-4 -top-4 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                
                <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-[1.1] text-slate-900 relative z-10">
                  Not An Agency.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Your Dedicated Growth Partner.</span>
                </h2>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed relative z-10">
                  I'm CK Jha. Unlike traditional agencies where you get passed down to junior designers, you work directly with me—an expert dedicated to your business growth. 
                </p>
                <p className="text-lg text-slate-500 mb-10 leading-relaxed relative z-10">
                  A website should function as your best 24/7 sales asset, not just a digital brochure. Every layout decision, every line of copy, and every interaction is driven by conversion strategy, user psychology, and long-term revenue growth. I treat your business like my own.
                </p>
                
                {/* Added detailed content with icons and animations */}
                <div className="grid sm:grid-cols-2 gap-6 mb-10 relative z-10">
                  <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                      <TrendingUp size={24} />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">Revenue-First Approach</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">I don't just build sites that look good; I build systems designed to capture leads and drive sales.</p>
                  </motion.div>
                  <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                      <Zap size={24} />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">Rapid Execution</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">No bloated agency timelines. We move fast with 2-3 week dedicated sprints to get you live quicker.</p>
                  </motion.div>
                </div>

                <div className="flex flex-wrap items-center gap-6 relative z-10">
                  <div className="flex -space-x-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                        <img src={`https://picsum.photos/seed/client${i}/100/100`} alt="Client" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm font-medium text-slate-600">
                    Trusted by <span className="font-bold text-slate-900">50+</span> founders
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-slate-900 rounded-[2.5rem] p-6 md:p-10 border border-slate-800 shadow-2xl shadow-slate-900/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <h3 className="text-white font-bold text-xl">The Agency Model is Broken</h3>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold border border-red-500/20 w-fit">
                      <X size={12} /> High Overhead
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-slate-800/50 p-5 md:p-6 rounded-2xl border border-slate-700">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 shrink-0"><Users size={18} /></div>
                        <h4 className="text-white font-semibold">The Agency Problem</h4>
                      </div>
                      <p className="text-slate-400 text-sm md:ml-14">You pay premium prices but get handed off to junior designers. Communication is filtered through account managers, causing delays and misaligned goals.</p>
                    </div>
                    
                    <div className="bg-slate-800/50 p-5 md:p-6 rounded-2xl border border-slate-700">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 shrink-0"><Activity size={18} /></div>
                        <h4 className="text-white font-semibold">Slow Execution</h4>
                      </div>
                      <p className="text-slate-400 text-sm md:ml-14">Projects drag on for 3-6 months due to bloated processes, endless revisions, and lack of clear strategic direction.</p>
                    </div>
                    
                    <div className="bg-blue-600/20 p-5 md:p-6 rounded-2xl border border-blue-500/30 relative overflow-hidden">
                      <div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
                      <div className="flex items-center gap-4 mb-3 relative z-10">
                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0"><Rocket size={18} /></div>
                        <h4 className="text-blue-100 font-bold">The Solo Partner Advantage</h4>
                      </div>
                      <p className="text-blue-200/80 text-sm md:ml-14 relative z-10">Direct communication with the expert. Rapid 2-3 week sprints. A singular, obsessive focus on increasing your conversions and revenue.</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4.5 WHY CHOOSE ME (COMPARISON) */}
      <section className="py-24 bg-white border-y border-slate-100 relative z-10 overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] -z-10 opacity-50"></div>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Why Choose Me Over Others
              </h2>
              <p className="text-lg text-slate-600">
                The difference between a traditional web design service and a strategic growth partner.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            {/* Mobile View (Cards) */}
            <div className="block md:hidden space-y-6">
              {[
                { feature: "Primary Focus", agency: "Aesthetics & Awards", freelancer: "Just getting it done", ck: "Revenue, Conversions & ROI" },
                { feature: "Communication", agency: "Through Account Managers", freelancer: "Spotty & Unreliable", ck: "Direct to Expert (Slack/Zoom)" },
                { feature: "Speed", agency: "3-6 Months", freelancer: "Unpredictable", ck: "2-3 Weeks (Dedicated sprints)" },
                { feature: "End Goal", agency: "Website Launch", freelancer: "Getting Paid", ck: "Business Growth & Scalability" },
                { feature: "Post-Launch", agency: "Expensive Retainers", freelancer: "Disappears", ck: "Ongoing Optimization & Support" },
                { feature: "Pricing", agency: "$20k+ with hidden fees", freelancer: "Cheap upfront, costly later", ck: "Transparent, value-based pricing" },
                { feature: "Strategy", agency: "Cookie-cutter templates", freelancer: "None (just execution)", ck: "Custom tailored to your audience" }
              ].map((row, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-4 text-lg border-b border-slate-100 pb-2">{row.feature}</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Traditional Agency</div>
                      <div className="flex items-start gap-2 text-slate-600">
                        <X size={16} className="text-slate-300 mt-0.5 shrink-0" />
                        <span className="text-sm">{row.agency}</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Cheap Freelancer</div>
                      <div className="flex items-start gap-2 text-slate-600">
                        <X size={16} className="text-slate-300 mt-0.5 shrink-0" />
                        <span className="text-sm">{row.freelancer}</span>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50/50 p-3 rounded-xl border border-blue-100">
                      <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">CK Jha (Growth Partner)</div>
                      <div className="flex items-start gap-2 text-blue-900 font-medium">
                        <Check size={16} className="text-blue-600 mt-0.5 shrink-0" />
                        <span className="text-sm">{row.ck}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop View (Table) */}
            <div className="hidden md:block bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr>
                      <th className="p-6 border-b border-slate-200 text-slate-400 font-semibold w-1/4 uppercase tracking-wider text-sm">Feature</th>
                      <th className="p-6 border-b border-slate-200 text-slate-500 font-semibold w-1/4">Traditional Agency</th>
                      <th className="p-6 border-b border-slate-200 text-slate-500 font-semibold w-1/4">Cheap Freelancer</th>
                      <th className="p-6 border-b-2 border-blue-600 text-slate-900 font-bold w-1/4 bg-blue-50/50 relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
                        CK Jha (Growth Partner)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { feature: "Primary Focus", agency: "Aesthetics & Awards", freelancer: "Just getting it done", ck: "Revenue, Conversions & ROI" },
                      { feature: "Communication", agency: "Through Account Managers", freelancer: "Spotty & Unreliable", ck: "Direct to Expert (Slack/Zoom)" },
                      { feature: "Speed", agency: "3-6 Months", freelancer: "Unpredictable", ck: "2-3 Weeks (Dedicated sprints)" },
                      { feature: "End Goal", agency: "Website Launch", freelancer: "Getting Paid", ck: "Business Growth & Scalability" },
                      { feature: "Post-Launch", agency: "Expensive Retainers", freelancer: "Disappears", ck: "Ongoing Optimization & Support" },
                      { feature: "Pricing", agency: "$20k+ with hidden fees", freelancer: "Cheap upfront, costly later", ck: "Transparent, value-based pricing" },
                      { feature: "Strategy", agency: "Cookie-cutter templates", freelancer: "None (just execution)", ck: "Custom tailored to your audience" }
                    ].map((row, i) => (
                      <tr key={i} className="group hover:bg-slate-50 transition-colors">
                        <td className="p-6 font-semibold text-slate-700">{row.feature}</td>
                        <td className="p-6 text-slate-500"><div className="flex items-center gap-2"><X size={16} className="text-slate-300 shrink-0" /> <span>{row.agency}</span></div></td>
                        <td className="p-6 text-slate-500"><div className="flex items-center gap-2"><X size={16} className="text-slate-300 shrink-0" /> <span>{row.freelancer}</span></div></td>
                        <td className="p-6 font-bold text-blue-700 bg-blue-50/50 group-hover:bg-blue-50 transition-colors">
                          <div className="flex items-center gap-2">
                            <Check size={18} className="text-blue-600 shrink-0" />
                            <span>{row.ck}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. WHAT HAPPENS ON THE STRATEGY CALL (MOVED TO BOTTOM) */}

      {/* 6. SERVICES PACKAGE SECTION (WORKING WITH ME) */}
      <section className="py-24 bg-white border-y border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Working With Me
              </h2>
              <p className="text-lg text-slate-600">
                An investment into scalable growth, not just a fresh coat of paint.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-indigo-600"></div>
              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-5 gap-12 items-center">
                  <div className="md:col-span-3">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <Briefcase className="text-blue-600" /> The Growth Package
                    </h3>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                      Every project includes a comprehensive suite of services designed to ensure your new website actually performs and drives revenue.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6">
                      {[
                        { title: "Conversion Strategy", desc: "Deep dive into your audience and offers.", icon: <Target size={20} /> },
                        { title: "Custom Premium Design", desc: "High-authority visuals that build trust.", icon: <LayoutTemplate size={20} /> },
                        { title: "Mobile Optimization", desc: "Flawless experience on all devices.", icon: <MonitorSmartphone size={20} /> },
                        { title: "Speed Optimization", desc: "Lightning fast load times for better SEO.", icon: <Zap size={20} /> },
                        { title: "Lead Capture Setup", desc: "Strategic forms and CTA placements.", icon: <Users size={20} /> },
                        { title: "Analytics Integration", desc: "Track exactly what users are doing.", icon: <BarChart3 size={20} /> },
                        { title: "SEO Foundations", desc: "Technical setup for search visibility.", icon: <Search size={20} /> },
                        { title: "Post-Launch Support", desc: "30 days of bug fixes and tweaks.", icon: <ShieldCheck size={20} /> }
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-100 hover:bg-blue-50/50 transition-colors">
                          <div className="text-blue-600 bg-white shadow-sm border border-slate-100 p-2.5 rounded-xl shrink-0">{item.icon}</div>
                          <div>
                            <h4 className="text-slate-900 font-bold text-sm mb-1">{item.title}</h4>
                            <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-2 flex flex-col justify-center bg-gradient-to-br from-slate-50 to-blue-50/50 p-8 md:p-10 rounded-2xl border border-blue-100 text-center h-full">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-600/30">
                      <Rocket size={28} />
                    </div>
                    <div className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-4">Custom Investment</div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-4">Tailored to Your Revenue Goals</h4>
                    <p className="text-slate-600 mb-8 text-sm leading-relaxed">
                      Pricing is custom quoted based on the scope, business size, and complexity of the growth system required to hit your targets.
                    </p>
                    <button 
                      onClick={() => scrollToSection('strategy-call')}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white px-6 py-4 rounded-full text-base font-bold transition-colors shadow-lg shadow-slate-900/20"
                    >
                      Book a Strategy Call
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. PROCESS SECTION */}
      <section className="py-32 bg-slate-900 text-white relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1)_0%,transparent_70%)]"></div>
        <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
          <FadeIn>
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">A Clear Path to Growth</h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">My proven 6-step framework to turn your website into your best salesperson.</p>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Central Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-indigo-500 to-emerald-500 -translate-x-1/2 rounded-full opacity-50 shadow-[0_0_15px_rgba(59,130,246,0.5)] animate-pulse"></div>
            
            <div className="space-y-12 md:space-y-24">
              {[
                { step: "01", title: "Strategy Call", desc: "We discuss your business goals, current bottlenecks, and determine if we're a good fit.", icon: <MessageSquare size={24} /> },
                { step: "02", title: "Growth Mapping", desc: "I conduct a deep-dive audit and map out a custom conversion strategy tailored to your audience.", icon: <Search size={24} /> },
                { step: "03", title: "Figma Prototype", desc: "You get a high-fidelity, interactive prototype to review the design and user flow before any code is written.", icon: <Figma size={24} /> },
                { step: "04", title: "Development", desc: "I build the site using modern tech (React/Next.js) ensuring lightning-fast load times and flawless mobile responsiveness.", icon: <Code2 size={24} /> },
                { step: "05", title: "Launch & Optimize", desc: "We deploy the site, integrate analytics, and ensure everything is tracking correctly for maximum ROI.", icon: <Rocket size={24} /> },
                { step: "06", title: "Ongoing Growth", desc: "Continuous A/B testing, performance monitoring, and iterative improvements to scale your results.", icon: <TrendingUp size={24} /> }
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                    
                    {/* Connecting Line (Desktop) */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-16 h-px bg-gradient-to-r ${i % 2 === 0 ? 'from-blue-500/50 to-transparent left-1/2' : 'from-transparent to-blue-500/50 right-1/2'} z-0`}></div>

                    {/* Timeline Node */}
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="absolute left-8 md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-slate-900 border-4 border-slate-800 flex items-center justify-center z-10 group-hover:border-blue-500 transition-all duration-500 shadow-[0_0_30px_rgba(59,130,246,0)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                    >
                      <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                        {item.icon}
                      </div>
                    </motion.div>

                    {/* Content Card */}
                    <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${i % 2 === 0 ? 'md:text-left md:pl-16' : 'md:text-right md:pr-16'}`}>
                      <motion.div 
                        whileHover={{ y: -8 }}
                        className={`bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/20 relative overflow-hidden`}
                      >
                        <div className="absolute top-0 right-0 text-8xl font-black text-white/5 -mt-6 -mr-4 pointer-events-none group-hover:text-blue-500/10 transition-colors duration-500">{item.step}</div>
                        <div className={`text-blue-400 font-mono text-sm font-bold mb-3 ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>PHASE {item.step}</div>
                        <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                      </motion.div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section className="py-24 bg-slate-50 relative z-10 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Client Success Stories
              </h2>
              <p className="text-lg text-slate-600">
                Don't just take my word for it. Here's what founders and executives have to say about the impact of our work.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "CK completely transformed our digital presence. Within 30 days of launching the new site, our inbound lead volume increased by 140%. He doesn't just design; he engineers revenue.",
                author: "CEO",
                role: "B2B Tech Startup",
                image: "https://i.pravatar.cc/150?img=47"
              },
              {
                quote: "We were struggling to communicate our complex SaaS product. The new positioning and frictionless UX that CK implemented helped us close two enterprise deals in the first quarter.",
                author: "Founder",
                role: "Data Analytics Platform",
                image: "https://i.pravatar.cc/150?img=11"
              },
              {
                quote: "The attention to detail and focus on conversion psychology is unmatched. Our new landing pages are converting at 4.5%, up from 1.2%. The ROI on this project was immediate.",
                author: "VP of Marketing",
                role: "Healthcare Tech Company",
                image: "https://i.pravatar.cc/150?img=32"
              }
            ].map((testimonial, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 h-full flex flex-col relative">
                  <div className="text-blue-500 mb-6">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 21L16.41 14.592C16.634 13.92 16.75 13.208 16.75 12.5C16.75 10.015 14.735 8 12.25 8C11.698 8 11.168 8.098 10.67 8.278L12.017 4H15.017L14.017 21ZM5.01697 21L7.40997 14.592C7.63397 13.92 7.74997 13.208 7.74997 12.5C7.74997 10.015 5.73497 8 3.24997 8C2.69797 8 2.16797 8.098 1.66997 8.278L3.01697 4H6.01697L5.01697 21Z" />
                    </svg>
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed mb-8 flex-grow">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-bold text-slate-900">{testimonial.author}</h4>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 text-center">
              Frequently Asked Questions
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-200 transition-colors shadow-sm">
                  <button 
                    className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-bold text-slate-900 pr-8 text-lg">{faq.question}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openFaq === i ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                      {openFaq === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </button>
                  <div 
                    className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaq === i ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 8.5 WHAT HAPPENS ON THE STRATEGY CALL */}
      <section id="strategy-call" className="py-24 bg-[#fafafa] relative z-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Schedule Your Strategy Session
              </h2>
              <p className="text-lg text-slate-600">
                Select a time that works for you. We'll spend 30 minutes analyzing your current setup and identifying immediate areas for revenue growth.
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="w-full px-0">
          <div className="flex flex-col gap-12 items-center">
            <FadeIn className="w-full">
              <div className="bg-white border-y border-slate-200 shadow-2xl shadow-slate-200/50 min-h-[700px] flex flex-col relative overflow-hidden w-full">
                <iframe 
                  src="https://cal.com/ckjha/scopecall" 
                  frameBorder="0" 
                  className="w-full h-full min-h-[700px]"
                  title="Schedule a Strategy Call"
                ></iframe>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="w-full max-w-5xl px-6 md:px-12">
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-xl shadow-slate-200/40">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-8 text-center">
                  What You'll Get From the Strategy Call
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  {[
                    "Website performance assessment",
                    "Conversion gap identification",
                    "Growth opportunity mapping",
                    "Clear improvement roadmap",
                    "Honest feedback — no sales pressure"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="mt-1 bg-blue-100 text-blue-600 rounded-full p-1.5 shrink-0">
                        <CheckCircle2 size={20} />
                      </div>
                      <span className="text-slate-700 font-medium leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                  <p className="text-sm md:text-base text-slate-500 italic">
                    "CK completely transformed how we view our website. The strategy call alone gave us more clarity than months of working with our previous agency."
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 8.5 ABOUT ME SECTION */}
      <section id="about" className="py-24 bg-white relative z-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] md:aspect-square shadow-2xl shadow-slate-200/50 group bg-gradient-to-br from-blue-50 to-indigo-100">
                <img 
                  src="https://i.ibb.co/Y7cmdpnc/freepik-an-illustration-cheerful-young-man-with-dark-curly-26003.png" 
                  alt="CK Jha - Web Strategist" 
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out pt-8 relative z-10"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-3xl z-20 border border-white/50 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">5+ Years Experience</h4>
                      <p className="text-sm text-slate-600">Driving revenue through design</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100 mb-6">
                    <User size={16} className="text-blue-600" />
                    <span>About Me</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
                    I build websites that act as your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">best salesperson.</span>
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Hi, I'm CK Jha. My journey started with a simple realization: most businesses have beautiful websites that completely fail to convert visitors into customers. I bridge the gap between stunning aesthetics and high-converting psychology.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    My philosophy is simple—your website is an investment, not an expense. Every pixel, every word, and every interaction is strategically placed to build trust, reduce friction, and guide your ideal client toward a buying decision.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-slate-100">
                  {[
                    { skill: "Web Strategy & Architecture", icon: <Layout size={20} /> },
                    { skill: "Conversion Rate Optimization", icon: <TrendingUp size={20} /> },
                    { skill: "Premium UI/UX Design", icon: <PenTool size={20} /> },
                    { skill: "Full-Stack Development", icon: <Code2 size={20} /> }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="text-blue-600">{item.icon}</div>
                      <span className="font-semibold text-slate-800 text-sm">{item.skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section className="py-32 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-indigo-900/80 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]"></div>
        
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <FadeIn>
            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-8 border border-white/20">
              <Rocket className="text-white" size={32} />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight text-white">
              Ready to Unlock Your Website's <span className="text-blue-400">Growth Potential?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's identify what's limiting your conversions and build a plan that drives measurable revenue.
            </p>
            <button 
              onClick={() => scrollToSection('strategy-call')}
              className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 px-10 py-5 rounded-full text-lg font-bold transition-all shadow-2xl shadow-blue-900/50 mb-6 flex items-center gap-3 mx-auto"
            >
              Book a Strategy Call <ArrowUpRight size={20} />
            </button>
            <p className="text-blue-200 text-sm font-medium flex items-center justify-center gap-2">
              <Activity size={16} /> Limited strategy sessions available each month.
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
