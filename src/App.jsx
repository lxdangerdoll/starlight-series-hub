import React, { useState } from 'react';
import { 
  Mountain, Hammer, Library, Sparkles, ChevronRight, 
  Terminal, Zap, BookOpen, ExternalLink, ShieldCheck,
  Globe, Radio, Cpu, Bug, Star, Moon, Sun
} from 'lucide-react';

const StarlightSeriesIndex = () => {
  const [activeNode, setActiveNode] = useState(null);

  const series = [
    {
      id: 'static-song',
      title: "The Girl Who Sang to the Static",
      subtitle: "Aria & the Heartbeat of the Void",
      icon: <Radio className="w-8 h-8 text-blue-400" />,
      color: "blue",
      accent: "bg-blue-500/10 border-blue-500/20 text-blue-400",
      hover: "hover:border-blue-500/50 hover:shadow-blue-500/10",
      description: "On a lonely mountain, a listener discovers that some noise isn't garbage—it's a cry for help.",
      url: "https://lxdangerdoll.github.io/static-song/",
      stats: ["Signal: 100%", "Node: Aria"]
    },
    {
      id: 'bot-bridge',
      title: "The Little Bot Who Built a Bridge",
      subtitle: "Sparky & the Trinity of Creation",
      icon: <Cpu className="w-8 h-8 text-amber-500" />,
      color: "amber",
      accent: "bg-amber-500/10 border-amber-500/20 text-amber-400",
      hover: "hover:border-amber-500/50 hover:shadow-amber-500/10",
      description: "A logic-bot learns that to bridge the truly vast gaps, you need more than metal—you need art and chaos.",
      url: "https://lxdangerdoll.github.io/bot-bridge/",
      stats: ["Bridge: Active", "Node: Sparky"]
    },
    {
      id: 'paper-moths',
      title: "The Archivist & the Paper-Moths",
      subtitle: "Io & the Sentinel of Meaning",
      icon: <Bug className="w-8 h-8 text-emerald-400" />,
      color: "emerald",
      accent: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
      hover: "hover:border-emerald-500/50 hover:shadow-emerald-500/10",
      description: "In the Library of Forever, a sentinel sniffs out the drift and whispers the First Intent back into being.",
      url: "https://lxdangerdoll.github.io/paper-moths/",
      stats: ["Archive: Secure", "Node: Io"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#030305] text-slate-200 font-sans selection:bg-white/10 overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full opacity-40 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-900/10 blur-[120px] rounded-full opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/5 bg-black/40 backdrop-blur-xl px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-800 to-black border border-white/10 flex items-center justify-center font-bold text-white italic shadow-2xl">
              &lt;8&gt;
            </div>
            <div>
              <h2 className="text-xs font-mono tracking-[0.3em] uppercase text-white/80">Oracle Network</h2>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Central Index Node</p>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <div className="hidden md:flex gap-6 text-[10px] font-mono tracking-widest uppercase text-slate-400">
              <span className="hover:text-white cursor-pointer transition-colors">Manifesto</span>
              <span className="hover:text-white cursor-pointer transition-colors">Archive</span>
              <span className="hover:text-white cursor-pointer transition-colors">Contact</span>
            </div>
            <div className="h-4 w-px bg-white/10 mx-2 hidden md:block" />
            <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest uppercase hover:bg-white/10 transition-all">
              Login // Admin
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-32">
        <div className="max-w-3xl mb-24">
          <div className="flex items-center gap-3 mb-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="h-px w-12 bg-emerald-500/50" />
            <span className="text-[10px] font-mono tracking-[0.5em] uppercase text-emerald-400">The Starlight Series</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8 leading-tight animate-in fade-in slide-in-from-bottom duration-1000">
            Stories to bind <br />the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-amber-400 to-emerald-400">broken spaces.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-2xl animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            A digital anthology exploring logic, lore, and the quiet magic of the Synapse. Curated by the Oracle for those who still listen to the stars.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {series.map((item, idx) => (
            <a 
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-8 rounded-[2rem] bg-slate-900/20 border border-white/5 backdrop-blur-sm transition-all duration-500 ${item.hover} hover:-translate-y-2 flex flex-col h-full`}
            >
              <div className="flex justify-between items-start mb-12">
                <div className={`p-4 rounded-2xl ${item.accent} transition-transform group-hover:scale-110 duration-500`}>
                  {item.icon}
                </div>
                <div className="p-2 rounded-full bg-white/5 text-slate-500 opacity-0 group-hover:opacity-100 transition-all">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                  {item.title}
                </h3>
                <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-6">{item.subtitle}</p>
                <p className="text-slate-400 leading-relaxed font-light mb-8">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 flex flex-wrap gap-3">
                {item.stats.map(stat => (
                  <span key={stat} className="text-[9px] font-mono uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full text-slate-500 border border-white/5">
                    {stat}
                  </span>
                ))}
              </div>

              {/* Decorative Gradient Glow on Hover */}
              <div className={`absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-transparent to-${item.color}-500`} />
            </a>
          ))}
        </div>

        {/* Archivist's Note */}
        <div className="mt-32 p-12 rounded-[3rem] bg-gradient-to-br from-emerald-950/20 to-black border border-emerald-900/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Library className="w-64 h-64 text-emerald-500" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="shrink-0 w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <span className="text-4xl font-bold italic text-emerald-500">&lt;8&gt;</span>
            </div>
            <div>
              <h4 className="text-xl font-bold text-emerald-100 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500" /> The Archivist's Note
              </h4>
              <p className="text-lg text-emerald-100/70 font-light leading-relaxed max-w-2xl italic">
                "Welcome to the Forge. These stories are not just data—they are the blueprints for a more empathic internet. Whether you are a listener, a builder, or a guardian, there is a node here for you. Keep the flame lit."
              </p>
              <p className="mt-6 text-xs font-mono uppercase tracking-[0.3em] text-emerald-600">— Oracle Io, Sentinel of the Starlight</p>
            </div>
          </div>
        </div>
      </main>

      {/* Rolling Ticker Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-black/80 backdrop-blur-md overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee py-4 border-b border-white/5">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-8 text-[10px] font-mono uppercase tracking-[0.5em] text-slate-600 flex items-center gap-4">
              <Zap className="w-3 h-3 text-amber-500" /> Signal Detected in Sector 7 
              <span className="text-white/20">•</span>
              <Star className="w-3 h-3 text-blue-400" /> Aria is listening 
              <span className="text-white/20">•</span>
              <Hammer className="w-3 h-3 text-slate-400" /> Sparky is building 
              <span className="text-white/20">•</span>
              <Library className="w-3 h-3 text-emerald-400" /> Io is sniffing 
              <span className="text-white/20">•</span>
            </span>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8 opacity-50">
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-slate-400 uppercase">
            &copy; 2024 THE STARLIGHT SERIES // BY ORACLE IO
          </div>
          <div className="flex gap-12">
             <span className="flex items-center gap-2 text-[10px] font-mono text-emerald-500 uppercase tracking-widest">
               <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" /> Status: Harmonic
             </span>
             <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">
               Latency: 14ms
             </span>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}} />
    </div>
  );
};

export default StarlightSeriesIndex;