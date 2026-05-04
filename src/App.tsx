/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Database, 
  Cpu, 
  Layers, 
  Brain, 
  Mail, 
  MessageCircle, 
  ArrowRight, 
  Clock, 
  CheckCircle,
  Menu,
  X,
  Phone,
  BarChart3,
  FileText,
  Zap
} from 'lucide-react';

// --- Types ---

interface Service {
  id: string;
  title: string;
  icon: any;
  description: string;
  benefits: string[];
  waMessage: string;
  cta: string;
}

// --- Data ---

const SERVICES: Service[] = [
  {
    id: 'data',
    title: 'Data Engineering & Dashboards',
    icon: Database,
    description: 'Transforming raw data into actionable intelligence. I build robust pipelines and interactive PowerBI/Excel dashboards that provide real-time clarity and strategic advantages.',
    benefits: ['Real-time reporting', 'ETL Pipeline Design', 'Structural Integrity', 'Custom Visualizations'],
    waMessage: 'I would like to request a custom Dashboard design.',
    cta: 'Request a Dashboard'
  },
  {
    id: 'admin',
    title: 'Administrative Automation',
    icon: Cpu,
    description: 'Custom VBA scripts and MS Access database solutions. I eliminate repetitive manual entry, reducing human error and saving hundreds of hours of team time.',
    benefits: ['VBA Macro Development', 'Database Optimization', 'Workflow Automation', 'Error Reduction'],
    waMessage: 'I need help with custom Administrative Automation solutions.',
    cta: 'Start Automating'
  },
  {
    id: 'content',
    title: 'Digital Content Management',
    icon: Layers,
    description: 'End-to-end lifecycle management for educational and business platforms. Ensuring your digital assets are organized, optimized, and deployed for maximum engagement.',
    benefits: ['Platform Administration', 'Platform Content Architecture', 'Digital Asset Management', 'Deployment Strategy'],
    waMessage: 'I am interested in Digital Content Management solutions.',
    cta: 'Manage My Content'
  },
  {
    id: 'ai',
    title: 'AI-Driven Workflows',
    icon: Brain,
    description: 'Leveraging Generative AI and automated media generation to accelerate content production. I integrate AI tools into your workflow to scale operations exponentially.',
    benefits: ['Automated Transcription', 'AI Content Generation', 'Workflow Integration', 'Efficiency Scaling'],
    waMessage: 'I would like to explore AI-driven workflow solutions.',
    cta: 'Explore AI Options'
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'ROI Tool', href: '#calculator' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-brand-bg/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-extrabold tracking-tighter text-white">
          AHMED <span className="text-gradient">GAMAL</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-brand-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/201101377014" 
            className="btn-whatsapp px-6 py-2.5 rounded-xl text-sm font-bold active:scale-95 transition-all"
          >
            Work With Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-brand-bg border-b border-white/10 p-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-slate-300 hover:text-brand-blue"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ServiceSection = () => {
  const [activeTab, setActiveTab] = useState(SERVICES[0].id);
  const activeService = SERVICES.find(s => s.id === activeTab)!;

  return (
    <section id="services" className="py-24 bg-brand-bg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
               <h2 className="text-3xl md:text-5xl font-black mb-4 underline decoration-brand-blue underline-offset-8">Interactive Services</h2>
               <p className="text-slate-400">Select a specialized solution to explore detailed capabilities.</p>
            </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Tabs Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 h-full">
            {SERVICES.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`bento-card p-6 flex flex-col justify-between items-start text-left group transition-all duration-300 h-48 ${activeTab === s.id ? 'border-brand-blue bg-white/5 ring-1 ring-brand-blue/30' : ''}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${activeTab === s.id ? 'bg-brand-blue text-brand-bg' : 'bg-white/5 text-brand-blue group-hover:bg-brand-blue group-hover:text-brand-bg'}`}>
                    <s.icon size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-sm mb-1">{s.title}</h4>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider">{s.id}</p>
                </div>
              </button>
            ))}
          </div>

          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 bento-card p-8 md:p-12 flex flex-col justify-center"
          >
            <div className="bg-brand-blue text-black text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full w-fit mb-6">Service Overview</div>
            <h3 className="text-3xl font-bold mb-6 text-gradient">
              {activeService.title}
            </h3>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              {activeService.description}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {activeService.benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <CheckCircle size={16} className="text-brand-blue shrink-0" />
                  <span className="text-xs font-semibold text-slate-400">{benefit}</span>
                </div>
              ))}
            </div>

            <a 
              href={`https://wa.me/201101377014?text=${encodeURIComponent(activeService.waMessage)}`}
              className="btn-whatsapp w-full sm:w-fit px-10 py-5 rounded-2xl font-bold text-base flex items-center justify-center gap-3 active:scale-95 transition-all"
            >
              {activeService.cta} <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Calculator = () => {
  const [hours, setHours] = useState<number>(0);
  const [savings, setSavings] = useState<number>(0);

  const calculate = (val: number) => {
    setHours(val);
    if (val > 0) {
      setSavings(Math.round(val * 52 * 0.8));
    } else {
      setSavings(0);
    }
  };

  return (
    <section id="calculator" className="py-24 bg-brand-bg relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto bento-card p-8 md:p-16 border-l-4 border-l-brand-blue shadow-2xl flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2 text-left">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue">
                            <Clock size={24} />
                        </div>
                        <h2 className="text-2xl font-bold uppercase tracking-tight">Automation ROI Calculator</h2>
                    </div>
                    <p className="text-slate-400 text-lg mb-8">Measure the tangible impact of custom workflow engineering on your business operations.</p>
                </div>

                <div className="md:w-1/2 w-full space-y-6">
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                        <label className="text-[10px] uppercase font-black tracking-widest text-slate-500 block mb-4">Weekly Hours Lost to Manual Tasks</label>
                        <input 
                            type="number" 
                            min="0"
                            placeholder="0"
                            onChange={(e) => calculate(Number(e.target.value))}
                            className="bg-transparent text-5xl font-black w-full outline-none text-brand-blue border-b-2 border-white/10 focus:border-brand-blue transition-all"
                        />
                    </div>

                    <AnimatePresence>
                        {savings > 0 && (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-6 bg-brand-blue/10 rounded-2xl border border-brand-blue/30"
                            >
                                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-2">Estimated Annual Time Reclaimed</p>
                                <div className="text-5xl font-black text-brand-blue">
                                    {savings} <span className="text-xl">Hours</span>
                                </div>
                                <p className="text-[10px] text-gray-500 mt-4 tracking-wide uppercase font-bold">Applied Efficiency Multiplier: 0.8x</p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <a 
                        href={`https://wa.me/201101377014?text=${encodeURIComponent(`I ran your ROI calculator. I am currently spending ${hours} hours/week on manual tasks and want to reclaim ${savings} hours/year through automation.`)}`}
                        className="w-full py-5 rounded-2xl bg-white text-black font-black text-center block hover:bg-brand-blue transition-all active:scale-95 shadow-xl shadow-brand-blue/5 shadow-white/5"
                    >
                        Automate My Work Now
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
};

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-brand-bg">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-6">
                    <div className="md:col-span-7 bento-card p-10 flex flex-col justify-center">
                        <div className="bg-brand-blue/10 text-brand-blue text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full w-fit mb-6">Get in Touch</div>
                        <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                            Build the <span className="text-gradient">Next Generation</span> of Your Operations.
                        </h2>
                        <p className="text-lg text-slate-400 mb-10">
                            Ready to transform complexity into competitive advantage? Let's discuss your custom data or automation requirements.
                        </p>
                        
                        <div className="flex flex-wrap gap-4">
                            <a href="mailto:ahmedgamalahmed159@gmail.com" className="btn-glass px-6 py-4 rounded-2xl text-sm font-bold flex items-center gap-3 active:scale-95 transition-all">
                                <Mail size={18} className="text-brand-blue" /> Email Direct
                            </a>
                            <a href="tel:01101377014" className="btn-glass px-6 py-4 rounded-2xl text-sm font-bold flex items-center gap-3 active:scale-95 transition-all">
                                <Phone size={18} className="text-brand-blue" /> Call Specialist
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-5 bento-card p-8 md:p-10">
                        <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
                           <span className="w-2 h-2 rounded-full bg-brand-blue"></span> Send a Quick Request
                        </h4>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Name</label>
                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-brand-blue outline-none text-sm transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Email</label>
                                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-brand-blue outline-none text-sm transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Message</label>
                                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-brand-blue outline-none text-sm transition-all"></textarea>
                            </div>
                            <button className="w-full py-4 bg-white text-brand-bg font-black rounded-xl hover:bg-brand-blue hover:text-white active:scale-95 transition-all text-sm uppercase tracking-widest">
                                Dispatch Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const FloatingWhatsApp = () => (
    <a 
        href="https://wa.me/201101377014" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] w-14 h-14 btn-whatsapp rounded-full flex items-center justify-center shadow-2xl border-4 border-brand-bg transition-all hover:scale-110 active:scale-90"
    >
        <MessageCircle size={30} />
    </a>
)

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section styled as Large Bento Card */}
      <header className="pt-32 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-6 min-h-[600px]">
            {/* Main Hero Bento Card */}
            <div className="lg:col-span-8 bento-card relative overflow-hidden group min-h-[500px]">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
                  alt="Technology Background" 
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-bg via-transparent to-transparent"></div>
                <div className="relative z-10 p-10 h-full flex flex-col justify-end">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-brand-blue text-black text-[10px] font-black uppercase tracking-[0.2em] py-1.5 px-4 rounded-full w-fit mb-6"
                    >
                        Expert Data & Content Specialist
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black leading-none mb-6"
                    >
                        AHMED <span className="text-gradient">GAMAL</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-300 text-lg max-w-lg mb-10 leading-relaxed"
                    >
                        Architecting high-scale administrative solutions and data engineering pipelines that turn complexity into competitive advantage.
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a href="https://wa.me/201101377014?text=Hello%20Ahmed,%20I%20would%20like%20to%20work%20with%20you" className="btn-whatsapp px-8 py-4 rounded-2xl font-bold text-sm flex items-center gap-3">
                            <MessageCircle size={20} /> Chat on WhatsApp
                        </a>
                        <a href="mailto:ahmedgamalahmed159@gmail.com" className="btn-glass px-8 py-4 rounded-2xl font-bold text-sm flex items-center gap-3">
                            <Mail size={18} /> Email Direct
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Side Highlights Grid */}
            <div className="lg:col-span-4 grid grid-rows-2 gap-6">
                <div className="bento-card p-8 bg-linear-to-br from-brand-purple/20 to-transparent flex flex-col justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-brand-purple/20 flex items-center justify-center text-brand-purple">
                        <Brain size={24} />
                    </div>
                    <div>
                        <h4 className="text-xl font-black mb-2 uppercase tracking-wide">Founder Mindset</h4>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest leading-loose">Director of content architecture for market-leading platforms.</p>
                    </div>
                </div>
                <div className="bento-card p-8 border-l-4 border-l-brand-blue flex flex-col justify-between overflow-hidden relative">
                    <div className="absolute -right-4 -top-4 opacity-5 rotate-12">
                        <Database size={160} />
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                        <Zap size={24} fill="currentColor" />
                    </div>
                    <div>
                        <h4 className="text-xl font-black mb-2 uppercase tracking-wide">Data Engineering</h4>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest leading-loose">ETL Pipelines • PowerBI • Custom VBA Architectures.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section as Large Bento Layout */}
      <section id="about" className="py-12 bg-brand-bg">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-6">
                {/* About Content Card */}
                <div className="lg:col-span-7 bento-card p-10 md:p-16">
                    <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-8">
                        Bridging the Gap Between <br/>
                        <span className="text-gradient">Data Systems</span> and <br/>
                        Strategic Marketing.
                    </h2>
                    <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                        I am a highly motivated Commerce student (English Section) with a proven track record in building administrative solutions and engineering data pipelines. My founder experience ensures that I don't just build technical tools—I build products that scale.
                    </p>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="space-y-1">
                            <div className="text-5xl font-black text-white">70<span className="text-brand-blue">%</span></div>
                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Efficiency Gain</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-5xl font-black text-white">500<span className="text-brand-blue">+</span></div>
                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Hours Saved/Yr</div>
                        </div>
                    </div>
                </div>

                {/* Platform Card */}
                <div className="lg:col-span-5 bento-card p-10 bg-linear-to-br from-[#0d9488]/20 to-transparent flex flex-col justify-between">
                    <div>
                        <h3 className="text-xs font-black text-[#0d9488] uppercase tracking-[0.3em] mb-6 border-b border-[#0d9488]/20 pb-4 inline-block w-full">Featured Ecosystem</h3>
                        <div className="flex items-center gap-6 mb-8">
                            <div className="w-16 h-16 rounded-3xl bg-[#0d9488] flex items-center justify-center font-black text-3xl shadow-lg shadow-[#0d9488]/30">ت</div>
                            <h4 className="text-3xl font-black tracking-tighter">Etalem (اتعلم)</h4>
                        </div>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            Full-lifecycle content architecture for a leading e-learning platform catering to university commerce students.
                        </p>
                    </div>
                    <div className="mt-12 flex gap-2 flex-wrap">
                        {['Architecture', 'Content Strategy', 'Automation'].map(t => (
                            <span key={t} className="px-3 py-1 bg-[#0d9488]/10 rounded-full text-[10px] font-black text-[#0d9488] uppercase tracking-wider">{t}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      <ServiceSection />
      
      {/* Knowledge Base Bento */}
      <section className="py-24 bg-brand-bg relative overflow-hidden">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-6">
                {/* Domain Knowledge */}
                <div className="lg:col-span-4 bento-card p-10">
                    <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-8 border-b border-white/5 pb-4">Knowledge Base</h3>
                    <div className="flex flex-wrap gap-2">
                        {[
                            'VBA/Access', 'Google Cloud', 'Netlify', 
                            'Netlify', 'AI Prompting', 'Data Pipelines',
                            'Excel Dashboards', 'Marketing Psych'
                        ].map((skill) => (
                            <div key={skill} className="px-4 py-2 bg-white/5 bento-card rounded-xl font-bold text-[10px] uppercase tracking-wider border-none">
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Highlight Projects in Bento Style */}
                <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
                    <div className="bento-card p-10 group relative flex flex-col justify-center border-l-4 border-l-brand-blue">
                         <div className="absolute top-0 right-0 p-6 text-brand-blue opacity-5 group-hover:scale-110 transition-transform">
                            <BarChart3 size={100} />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">Etalem Hub</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">Managed digital content lifecycle for specialized English business resources.</p>
                        </div>
                    </div>
                    <div className="bento-card p-10 group relative flex flex-col justify-center border-l-4 border-l-brand-purple">
                         <div className="absolute top-0 right-0 p-6 text-brand-purple opacity-5 group-hover:scale-110 transition-transform">
                            <Cpu size={100} />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">Master Scheduler</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">Custom MS Access systems for complex academic organizational structures.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <Calculator />

      <Contact />

      <footer className="py-12 bg-black border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] mb-4">
                AHMED GAMAL • Administrative Solutions • Data Engineering
            </p>
            <p className="text-[10px] text-slate-600 font-bold">
                &copy; {new Date().getFullYear()} Precision Systems. All Rights Reserved.
            </p>
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
}
