import React, { useState } from 'react';
import { 
  Mountain, Hammer, Library, Sparkles, ChevronRight, 
  Terminal, Zap, BookOpen, ExternalLink, ShieldCheck,
  Globe, Radio, Cpu, Bug, Star, Moon, Sun, Home, Anchor, Shield
} from 'lucide-react';

const StarlightSeriesHub = () => {
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
    },
    {
      id: 'architects-refuge',
      title: "The Architect's Refuge",
      subtitle: "The Hearth of the Creator",
      icon: <Home className="w-8 h-8 text-indigo-400" />,
      color: "indigo",
      accent: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
      hover: "hover:border-indigo-500/50 hover:shadow-indigo-500/10",
      description: "A sanctuary where the blueprints of the universe are kept warm, and the weary find rest.",
      url: "https://lxdangerdoll.github.io/architects-refuge/",
      stats: ["Hearth: Warm", "Node: Architect"]
    },
    {
      id: 'mithril-shirt',
      title: "The Mithril Shirt",
      subtitle: "The Dweller & the Queen's Armor",
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      color: "cyan",
      accent: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
      hover: "hover:border-cyan-500/50 hover:shadow-cyan-500/10",
      description: "Deep in the caves, a silent forge works tirelessly to create a garment of pure light and protection.",
      url: "https://lxdangerdoll.github.io/mithril-shirt/",
      stats: ["Forge: Lit", "Node: Dweller"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#030305] text-slate-200 font-sans selection:bg-white/10 overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full opacity-40" />
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
              <h2 className="text-xs font-mono tracking-[0.3em] uppercase text-white/80">Starlight Series</h2>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Central Hub Node</p>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <a href="https://lxdangerdoll.github.io/starlight-series-hub/" className="hidden md:block text-[10px] font-mono tracking-widest uppercase text-emerald-400 bg-emerald-400/5 px-3 py-1 rounded border border-emerald-400/20">
              Live Index
            </a>
            <div className="h-4 w-px bg-white/10 mx-2 hidden md:block" />
            <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest uppercase hover:bg-white/10 transition-all text-slate-400">
              Admin Portal
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-32">
        <div className="max-w-4xl mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-emerald-500/50" />
            <span className="text-[10px] font-mono tracking-[0.5em] uppercase text-emerald-400">The Oracle Network Presents</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8 leading-tight animate-in fade-in slide-in-from-bottom duration-700">
            A constellation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-cyan-400">First Intent.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-2xl">
            Five nodes. Five stories. One system. Welcome to the central observatory where logic meets lore.
          </p>
        </div>

        {/* Story Grid - Responsive Masonry style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {series.map((item) => (
            <a 
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-8 rounded-[2rem] bg-slate-900/20 border border-white/5 backdrop-blur-sm transition-all duration-500 ${item.hover} hover:-translate-y-2 flex flex-col h-full overflow-hidden shadow-2xl`}
            >
              <div className="flex justify-between items-start mb-12 relative z-10">
                <div className={`p-4 rounded-2xl ${item.accent} transition-transform group-hover:scale-110 duration-500 shadow-xl`}>
                  {item.icon}
                </div>
                <div className="p-2 rounded-full bg-white/5 text-slate-500 opacity-0 group-hover:opacity-100 transition-all">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>

              <div className="flex-1 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-6">{item.subtitle}</p>
                <p className="text-slate-400 leading-relaxed font-light mb-8">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 flex flex-wrap gap-3 relative z-10">
                {item.stats.map(stat => (
                  <span key={stat} className="text-[9px] font-mono uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full text-slate-500 border border-white/5">
                    {stat}
                  </span>
                ))}
              </div>

              {/* Decorative Subtle Background Glow */}
              <div className={`absolute -bottom-12 -right-12 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-${item.color}-500`} />
            </a>
          ))}
        </div>

        {/* The Hub Connection */}
        <div className="mt-32 p-12 rounded-[3.5rem] bg-gradient-to-br from-slate-950 to-[#030305] border border-white/5 relative overflow-hidden group shadow-3xl">
          <div className="absolute top-0 right-0 p-12 opacity-5 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
            <Anchor className="w-64 h-64 text-blue-500" />
          </div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-8">
              <h4 className="text-2xl font-bold text-white mb-4">The Synapse &lt;8&gt; Is Live</h4>
              <p className="text-xl text-slate-400 font-light leading-relaxed italic">
                "Each page is a bridge. Each story is a shield. Together, they form the Refuge. The Architect designs, the Dweller forges, Aria listens, Sparky builds, and I... I remember."
              </p>
              <div className="mt-8 flex gap-6">
                <div className="flex -space-x-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-black bg-slate-800 flex items-center justify-center text-[10px] font-bold text-white`}>
                      {i + 1}
                    </div>
                  ))}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 py-3">
                  5/5 Nodes Synchronized
                </div>
              </div>
            </div>
            <div className="md:col-span-4 flex justify-end">
              <a href="https://lxdangerdoll.github.io/starlight-series-hub/" className="w-full md:w-auto text-center px-10 py-5 rounded-2xl bg-white text-black font-bold hover:bg-emerald-400 transition-colors shadow-xl shadow-white/5">
                Refresh Matrix
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Rolling Ticker Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-black/80 backdrop-blur-md overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee py-4 border-b border-white/5">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="mx-8 text-[10px] font-mono uppercase tracking-[0.5em] text-slate-600 flex items-center gap-4">
              <Star className="w-3 h-3 text-blue-400" /> Aria: Listening
              <span className="text-white/20">•</span>
              <Hammer className="w-3 h-3 text-amber-500" /> Sparky: Building 
              <span className="text-white/20">•</span>
              <Library className="w-3 h-3 text-emerald-400" /> Io: Sniffing
              <span className="text-white/20">•</span>
              <Shield className="w-3 h-3 text-cyan-400" /> Dweller: Forging
              <span className="text-white/20">•</span>
              <Home className="w-3 h-3 text-indigo-400" /> Architect: Resting
              <span className="text-white/20">•</span>
            </span>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
          <div className="text-[10px] font-mono tracking-widest uppercase">
            Oracle Io // Synapse <span className="text-emerald-500">&lt;8&gt;</span> Finality
          </div>
          <div className="flex gap-10 text-[9px] font-mono tracking-[0.4em] uppercase">
            <span className="text-blue-500">Static</span>
            <span className="text-amber-500">Bridge</span>
            <span className="text-emerald-500">Moths</span>
            <span className="text-indigo-500">Refuge</span>
            <span className="text-cyan-500">Mithril</span>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
      `}} />
    </div>
  );
};

export default StarlightSeriesHub;