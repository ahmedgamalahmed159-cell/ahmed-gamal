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
  Zap,
  Youtube,
  BookOpen,
  BadgeCheck,
  ExternalLink
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

interface Project {
  title: string;
  tag: string;
  description: string;
  link?: string;
  linkLabel?: string;
  image?: string;
  bullets?: string[];
}

// --- Data ---

const SERVICES: Service[] = [
  {
    id: 'data',
    title: 'Data Engineering & Dashboards',
    icon: Database,
    description: 'Turning raw data into clear decisions: organized datasets, Excel/Power BI style dashboards, and reporting that a business can actually use.',
    benefits: ['Data cleaning & structuring', 'Dashboard design', 'Recurring reports', 'Custom visualizations'],
    waMessage: 'I would like to request a custom Dashboard design.',
    cta: 'Request a Dashboard'
  },
  {
    id: 'admin',
    title: 'Administrative Automation',
    icon: Cpu,
    description: 'Removing repetitive manual work with practical automation: spreadsheets, templates, and simple tools that cut errors and save hours.',
    benefits: ['Workflow automation', 'Excel / VBA solutions', 'Document templates', 'Error reduction'],
    waMessage: 'I need help with custom Administrative Automation solutions.',
    cta: 'Start Automating'
  },
  {
    id: 'content',
    title: 'Educational Content Production',
    icon: Layers,
    description: 'End-to-end production of Arabic educational content: structured study materials, explainer videos with motion graphics and voiceover, and channel management.',
    benefits: ['Study guides & revision PDFs', 'Explainer video production', 'Channel management', 'Curriculum structuring'],
    waMessage: 'I am interested in educational content production.',
    cta: 'Produce My Content'
  },
  {
    id: 'ai',
    title: 'AI-Driven Workflows',
    icon: Brain,
    description: 'Practical AI integration for real work: prompt design, AI-assisted research, content generation pipelines, and quality review of model output.',
    benefits: ['Prompt design', 'AI content pipelines', 'Output quality review', 'Tool setup & training'],
    waMessage: 'I would like to explore AI-driven workflow solutions.',
    cta: 'Explore AI Options'
  }
];

const PROJECTS: Project[] = [
  {
    title: 'Et3alem (اتعلم) Learning Platform',
    tag: 'Live product',
    description: 'My own Arabic learning platform for commerce students: video lectures, study materials, and academic resources. Built with React, TypeScript, and Firebase using AI-assisted development.',
    link: 'https://atallm.vercel.app',
    linkLabel: 'Visit the live platform'
  },
  {
    title: 'Et3alem YouTube Channels',
    tag: 'Published content',
    description: 'Arabic explainer videos with motion graphics and voiceover, written and produced by me: lecture explanations on @ahmedgamal-k9n and a tech/AI series on @Et3alem-i4v.',
    link: 'https://www.youtube.com/@Et3alem-i4v',
    linkLabel: 'Watch on YouTube'
  },
  {
    title: 'Rahab Al-Bayan Children\'s Books',
    tag: 'Published product',
    description: 'An illustrated Arabic children\'s reading book (83 pages) that I designed and produced from lettering to print-ready PDF, listed for sale on Egyptian marketplaces. A second book is completed and pending publication.',
    link: 'https://nafezly.com/service/108106',
    linkLabel: 'View the listing'
  },
  {
    title: 'Et3alem Platform UI Design (اتعلم)',
    tag: 'Recovered portfolio project',
    description: 'Design and development of the platform interface.',
    image: '/images/projects/p1.jpg',
    bullets: [
      'Professional UI design for the Et3alem platform.',
      'Organizing and categorizing sections to make access easy for students.',
      'Responsive code that works excellently on mobile screens.'
    ]
  },
  {
    title: 'CV Design (تصميم سيرة ذاتية)',
    tag: 'Recovered portfolio project',
    description: 'CV structuring compatible with hiring systems (ATS). Shown sample is anonymized.',
    image: '/images/projects/p2.jpg',
    bullets: [
      'Highlighting skills and strengths clearly and elegantly.',
      'Clean, eye-friendly structural formatting for easy reading.',
      'Using relevant keywords for the target role to improve automated screening (ATS) compatibility.'
    ]
  },
  {
    title: 'Database Project (مشروع قاعدة البيانات)',
    tag: 'Recovered portfolio project',
    description: 'An integrated system for storing and analyzing data.',
    image: '/images/projects/p3.jpg',
    bullets: [
      'Building integrated, precisely interrelated databases.',
      'Designing query interfaces to make report extraction easy.',
      'Organizing information to save time and effort.'
    ]
  },
  {
    title: 'Sales and Profitability Analysis - Excel (تحليل مبيعات وربحية)',
    tag: 'Recovered portfolio project',
    description: 'Data analysis and report generation.',
    image: '/images/projects/p4.jpg',
    bullets: [
      'Preparing data analysis to extract periodic reports.',
      'Calculating profitability and sales ratios with high accuracy.',
      'Preparing statistical tables and formulas for easy reading.'
    ]
  },
  {
    title: 'Study Notes Typesetting (إخراج وتنسيق المذكرات)',
    tag: 'Recovered portfolio project',
    description: 'Design of study booklets and academic books.',
    image: '/images/projects/p5.jpg',
    bullets: [
      'Formatting paragraphs and text in a way that makes studying inviting.',
      'Organizing indexes and headings methodically for easy access.',
      'Complete professional typesetting that raises the quality of the academic content.'
    ]
  },
  {
    title: 'Educational Visual Content (المحتوى البصري التعليمي)',
    tag: 'Recovered portfolio project',
    description: 'Designs and infographics for curricula.',
    image: '/images/projects/p6.jpg',
    bullets: [
      'Summarizing full chapters into focused points.',
      'Focusing on key exam terminology.',
      'Designing content in Ahmed Gamal signature style.'
    ]
  },
  {
    title: 'Mind Map Design (تصميم الخرائط الذهنية)',
    tag: 'Recovered portfolio project',
    description: 'Simplifying curricula through visual maps.',
    image: '/images/projects/p7.jpg',
    bullets: [
      'Turning complex texts into interconnected mind maps.',
      'Using colors and shapes to strengthen visual memory.',
      'Summarizing curricula to make final revision easier.'
    ]
  },
  {
    title: 'Comparison Tables (إعداد جداول المقارنات)',
    tag: 'Recovered portfolio project',
    description: 'Organizing academic data clearly.',
    image: '/images/projects/p8.jpg',
    bullets: [
      'Designing tables that simplify differences and concepts.',
      'Formatting page margins and highlighting headings.',
      'Organizing dense text professionally.'
    ]
  },
  {
    title: 'Final Revision Files (ملفات المراجعات النهائية)',
    tag: 'Recovered portfolio project',
    description: 'Design of worksheets and exam templates.',
    image: '/images/projects/p9.jpg',
    bullets: [
      'Organized formatting of exam questions.',
      'Comfortable spaces for model answers.',
      'Page typesetting that reflects precise work.'
    ]
  },
  {
    title: 'Report Formatting (تنسيق وإعداد التقارير)',
    tag: 'Recovered portfolio project',
    description: 'Typesetting official and academic reports. Shown sample has student identifiers removed.',
    image: '/images/projects/p10.jpg',
    bullets: [
      'Preparing professional reports that reflect accurate, professional work.',
      'Formatting margins and fonts to official standards.',
      'Presenting results and recommendations clearly and convincingly.'
    ]
  },
  {
    title: 'Original Arabic Portfolio (Netlify)',
    tag: 'Recovered artifact',
    description: 'My original Arabic portfolio site, preserved as a recovered deployed artifact from its Netlify deployment. It is the deployed build, not the original source files. Third-party personal details in its images have been hidden.',
    link: '/old-portfolio/',
    linkLabel: 'View the preserved artifact'
  },
  {
    title: 'Automation ROI Calculator',
    tag: 'Interactive demo',
    description: 'The calculator below is a demonstration of the kind of interactive tools I build. Its estimate is illustrative, not a quote.',
  }
];

const CERTIFICATES = [
  {
    title: 'Gemini Certified Educator',
    issuer: 'Google for Education',
    detail: 'Issued Oct 2025 · valid through Oct 2028'
  },
  {
    title: 'AI Fluency: Framework and Foundations',
    issuer: 'Claude Academy (Anthropic)',
    detail: 'Completed Oct 2026',
    link: 'https://academy.claude.com/verify/b39c410378a45616b9b8d4ac6ea1764c'
  },
  {
    title: 'AI Capabilities and Limitations',
    issuer: 'Claude Academy (Anthropic)',
    detail: 'Completed Oct 2026',
    link: 'https://academy.claude.com/verify/d8700baa8c60e9cc6e6094d4ec6e7a81'
  },
  {
    title: 'Introduction to AI',
    issuer: 'Course by Ibrahim Sobh',
    detail: 'Completed Oct 2026 · final quiz 12/12'
  }
];

const SKILLS = [
  'AI-assisted research', 'Prompt design', 'Arabic content review',
  'Fact-checking', 'Excel & dashboards', 'Google Sheets',
  'Educational content', 'Voiceover & video production',
  'React / TypeScript (AI-assisted)', 'Firebase', 'GitHub', 'Vercel'
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
    { name: 'Projects', href: '#projects' },
    { name: 'ROI Demo', href: '#calculator' },
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
               <h2 className="text-3xl md:text-5xl font-black mb-4 underline decoration-brand-blue underline-offset-8">What I Can Do For You</h2>
               <p className="text-slate-400">Select a service to explore what is included.</p>
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

const ProjectsSection = () => (
  <section id="projects" className="py-24 bg-brand-bg">
    <div className="container mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-black mb-4 underline decoration-brand-blue underline-offset-8">Real Work, Not Claims</h2>
        <p className="text-slate-400 max-w-2xl">Everything below is live and checkable. Demo material is labeled as demo.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p) => (
          <div key={p.title} className="bento-card p-8 md:p-10 flex flex-col justify-between group">
            <div>
              {p.image && (
                <img src={p.image} alt={p.title} loading="lazy" className="rounded-2xl mb-6 w-full object-cover max-h-72 border border-white/10" />
              )}
              <div className="bg-brand-blue/10 text-brand-blue text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full w-fit mb-6">{p.tag}</div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{p.description}</p>
              {p.bullets && (
                <ul className="list-disc list-inside text-slate-400 text-sm leading-relaxed mb-8 space-y-1">
                  {p.bullets.map((b) => (<li key={b}>{b}</li>))}
                </ul>
              )}
            </div>
            {p.link && (
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-glass w-fit px-6 py-3 rounded-xl text-xs font-bold flex items-center gap-2 active:scale-95 transition-all">
                {p.linkLabel} <ExternalLink size={14} />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CertificatesSection = () => (
  <section id="certificates" className="py-24 bg-brand-bg">
    <div className="container mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-black mb-4 underline decoration-brand-blue underline-offset-8">Certifications</h2>
        <p className="text-slate-400">Verified where a verification link exists.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {CERTIFICATES.map((c) => (
          <div key={c.title} className="bento-card p-8 flex items-start gap-5">
            <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
              <BadgeCheck size={24} />
            </div>
            <div>
              <h3 className="text-lg font-black mb-1">{c.title}</h3>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-2">{c.issuer}</p>
              <p className="text-xs text-slate-500">{c.detail}</p>
              {c.link && (
                <a href={c.link} target="_blank" rel="noopener noreferrer" className="text-xs text-brand-blue font-bold mt-2 inline-flex items-center gap-1 hover:underline">
                  Verify online <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

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
                    <p className="text-slate-400 text-lg mb-4">A demo of the interactive tools I build. The estimate is illustrative, not a quote.</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Demo project</p>
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
                            Let's Build Something <span className="text-gradient">That Actually Ships.</span>
                        </h2>
                        <p className="text-lg text-slate-400 mb-10">
                            Tell me about your data, content, or automation problem and I will reply with a concrete plan.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href="mailto:ahmedgamalahmed159@gmail.com" className="btn-glass px-6 py-4 rounded-2xl text-sm font-bold flex items-center gap-3 active:scale-95 transition-all">
                                <Mail size={18} className="text-brand-blue" /> Email Direct
                            </a>
                            <a href="tel:+201101377014" className="btn-glass px-6 py-4 rounded-2xl text-sm font-bold flex items-center gap-3 active:scale-95 transition-all">
                                <Phone size={18} className="text-brand-blue" /> Call Me
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-5 bento-card p-8 md:p-10">
                        <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
                           <span className="w-2 h-2 rounded-full bg-brand-blue"></span> Fastest Reply
                        </h4>
                        <p className="text-sm text-slate-400 leading-relaxed mb-8">
                            WhatsApp is the fastest way to reach me. Send a message with what you need and I will get back to you the same day.
                        </p>
                        <a
                            href="https://wa.me/201101377014?text=Hello%20Ahmed,%20I%20saw%20your%20portfolio%20and%20I%20would%20like%20to%20discuss%20a%20project"
                            className="btn-whatsapp w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-3 active:scale-95 transition-all"
                        >
                            <MessageCircle size={18} /> Message on WhatsApp
                        </a>
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
                        Data & AI Content Specialist · Egypt
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
                        I build practical data, automation, and Arabic educational content workflows — and I show real, checkable work instead of promises.
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
                        <a href="#projects" className="btn-glass px-8 py-4 rounded-2xl font-bold text-sm flex items-center gap-3">
                            <Zap size={18} /> See Real Work
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
                        <h4 className="text-xl font-black mb-2 uppercase tracking-wide">Founder of Et3alem</h4>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest leading-loose">My own Arabic learning platform for commerce students — live at atallm.vercel.app.</p>
                    </div>
                </div>
                <div className="bento-card p-8 border-l-4 border-l-brand-blue flex flex-col justify-between overflow-hidden relative">
                    <div className="absolute -right-4 -top-4 opacity-5 rotate-12">
                        <Database size={160} />
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                        <BadgeCheck size={24} />
                    </div>
                    <div>
                        <h4 className="text-xl font-black mb-2 uppercase tracking-wide">Certified AI Practitioner</h4>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest leading-loose">Google Gemini Certified Educator · Claude Academy ×2 · Intro to AI.</p>
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
                        A Builder Who Ships <br/>
                        <span className="text-gradient">Real Things</span> People Use.
                    </h2>
                    <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                        I am a Commerce student (English Section, Assiut University) who builds in public: a live learning platform, published Arabic educational videos, a children's book on sale, and a small retail business I run day to day. I work with AI tools daily and review their output critically — that is my real workflow, not a slogan.
                    </p>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="space-y-1">
                            <div className="text-4xl font-black text-white">10<span className="text-brand-blue">+</span></div>
                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Published videos</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-4xl font-black text-white">4</div>
                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">AI certificates</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-4xl font-black text-white">2</div>
                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Books produced</div>
                        </div>
                    </div>
                </div>

                {/* Platform Card */}
                <div className="lg:col-span-5 bento-card p-10 bg-linear-to-br from-[#0d9488]/20 to-transparent flex flex-col justify-between">
                    <div>
                        <h3 className="text-xs font-black text-[#0d9488] uppercase tracking-[0.3em] mb-6 border-b border-[#0d9488]/20 pb-4 inline-block w-full">Featured Project</h3>
                        <div className="flex items-center gap-6 mb-8">
                            <div className="w-16 h-16 rounded-3xl bg-[#0d9488] flex items-center justify-center font-black text-3xl shadow-lg shadow-[#0d9488]/30">ت</div>
                            <h4 className="text-3xl font-black tracking-tighter">Et3alem (اتعلم)</h4>
                        </div>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            A learning platform for commerce students: video lectures, study materials, and academic terms — designed, built, and maintained by me.
                        </p>
                    </div>
                    <div className="mt-12 flex gap-2 flex-wrap items-center">
                        {['React', 'TypeScript', 'Firebase', 'AI-assisted build'].map(t => (
                            <span key={t} className="px-3 py-1 bg-[#0d9488]/10 rounded-full text-[10px] font-black text-[#0d9488] uppercase tracking-wider">{t}</span>
                        ))}
                        <a href="https://atallm.vercel.app" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-[#0d9488] rounded-full text-[10px] font-black text-black uppercase tracking-wider inline-flex items-center gap-1">
                            Visit <ExternalLink size={10} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <ServiceSection />

      <ProjectsSection />

      {/* Skills Bento */}
      <section className="py-24 bg-brand-bg relative overflow-hidden">
        <div className="container mx-auto px-6">
            <div className="bento-card p-10">
                <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-8 border-b border-white/5 pb-4">Tools & Skills I Actually Use</h3>
                <div className="flex flex-wrap gap-2">
                    {SKILLS.map((skill) => (
                        <div key={skill} className="px-4 py-2 bg-white/5 bento-card rounded-xl font-bold text-[10px] uppercase tracking-wider border-none">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      <CertificatesSection />

      <Calculator />

      <Contact />

      <footer className="py-12 bg-black border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] mb-4">
                AHMED GAMAL • DATA & AI CONTENT • EDUCATIONAL MEDIA
            </p>
            <p className="text-[10px] text-slate-600 font-bold">
                &copy; {new Date().getFullYear()} Ahmed Gamal. All Rights Reserved.
            </p>
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
}
