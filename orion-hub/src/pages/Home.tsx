import React, { useState, useEffect } from 'react';
import { Shield, Activity, Bell, ChevronRight, Terminal, Home as HomeIcon, Zap, Cpu, Settings, Loader2 } from 'lucide-react';
import { useGetBoardMessages } from '@workspace/api-client-react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const PROFILES = [
  {
    id: 'jj',
    botName: 'Orion Prime',
    emoji: '🧠',
    username: 'JJ',
    persona: 'Master Admin / Technical Ops',
    wrapperClass: 'from-zinc-400/20 to-transparent group-hover:shadow-[0_0_40px_-10px_rgba(161,161,170,0.25)]',
    borderClass: 'border-zinc-500/20 group-hover:border-zinc-400/50',
    bgHoverClass: 'from-zinc-400/10 to-transparent',
    dotClass: 'bg-zinc-300 shadow-[0_0_10px_rgba(212,212,216,0.8)]',
    blurClass: 'bg-zinc-400/30',
    icon: <Terminal className="w-4 h-4" />
  },
  {
    id: 'mom',
    botName: 'Orion Casa',
    emoji: '🏖️',
    username: 'Mom',
    persona: 'Family Centred / Home Base',
    wrapperClass: 'from-rose-400/20 to-transparent group-hover:shadow-[0_0_40px_-10px_rgba(251,113,133,0.25)]',
    borderClass: 'border-rose-500/20 group-hover:border-rose-400/50',
    bgHoverClass: 'from-rose-400/10 to-transparent',
    dotClass: 'bg-rose-400 shadow-[0_0_10px_rgba(251,113,133,0.8)]',
    blurClass: 'bg-rose-400/30',
    icon: <HomeIcon className="w-4 h-4" />
  },
  {
    id: 'chris',
    botName: 'Orion AIS',
    emoji: '🍻',
    username: 'Chris',
    persona: 'Security Ops / AIS Business',
    wrapperClass: 'from-red-600/30 to-transparent group-hover:shadow-[0_0_40px_-10px_rgba(220,38,38,0.3)]',
    borderClass: 'border-red-600/30 group-hover:border-red-500/50',
    bgHoverClass: 'from-red-600/10 to-transparent',
    dotClass: 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]',
    blurClass: 'bg-red-600/30',
    icon: <Shield className="w-4 h-4" />
  },
  {
    id: 'ticara',
    botName: 'Orion Striker',
    emoji: '⚽',
    username: 'Ticara',
    persona: 'Energy / Plumbing & Soccer',
    wrapperClass: 'from-teal-400/20 to-transparent group-hover:shadow-[0_0_40px_-10px_rgba(45,212,191,0.25)]',
    borderClass: 'border-teal-500/20 group-hover:border-teal-400/50',
    bgHoverClass: 'from-teal-400/10 to-transparent',
    dotClass: 'bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.8)]',
    blurClass: 'bg-teal-400/30',
    icon: <Zap className="w-4 h-4" />
  }
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { data: messages, isLoading: isMessagesLoading } = useGetBoardMessages();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-[100dvh] bg-[#050505] text-white font-sans overflow-hidden selection:bg-white/20">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/attached_assets/generated_images/orion_bg.jpg" 
          alt="Deep space command deck"
          className="w-full h-full object-cover opacity-[0.15] mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-transparent to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0)_60%)]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-[100dvh]">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-5 md:px-10 md:py-8 border-b border-white/5 bg-black/10 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-white/[0.03] flex items-center justify-center border border-white/10 shadow-inner">
              <Cpu className="w-5 h-5 text-white/70" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg md:text-2xl tracking-[0.2em] font-bold text-white uppercase leading-none mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Orion System
              </h1>
              <span className="text-[9px] md:text-[10px] font-mono tracking-[0.3em] text-white/40 uppercase">
                Family Fleet Command
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 md:gap-6">
            <Drawer>
              <DrawerTrigger asChild>
                <button className="group flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/[0.03] border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="relative flex items-center justify-center">
                    <Bell className="w-3.5 h-3.5 md:w-4 md:h-4 text-white/60 group-hover:text-white transition-colors" />
                    <div className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <span className="hidden md:inline-block text-[10px] md:text-xs font-mono tracking-widest text-white/60 group-hover:text-white transition-colors mt-[1px]">
                    BOARD
                  </span>
                </button>
              </DrawerTrigger>
              <DrawerContent className="bg-[#0a0a0a] border-t border-white/10 text-white max-h-[85vh]">
                <div className="mx-auto w-full max-w-lg">
                  <DrawerHeader className="border-b border-white/5 pb-4 mb-4">
                    <DrawerTitle className="font-mono uppercase tracking-widest text-sm text-white/80">Family Noticeboard</DrawerTitle>
                    <DrawerDescription className="text-white/40 font-mono text-xs">
                      Latest transmissions and updates
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 overflow-y-auto max-h-[50vh] flex flex-col gap-4">
                    {isMessagesLoading ? (
                      <div className="flex items-center justify-center py-8">
                        <Loader2 className="w-6 h-6 animate-spin text-white/40" />
                      </div>
                    ) : messages && messages.length > 0 ? (
                      messages.map(msg => (
                        <div key={msg.id} className="bg-white/5 rounded-lg p-4 border border-white/5">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-mono text-xs font-bold text-white/70">{msg.author}</span>
                            <span className="font-mono text-[10px] text-white/30">
                              {new Date(msg.timestamp).toLocaleString(undefined, {
                                month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                              })}
                            </span>
                          </div>
                          <p className="text-sm text-white/80 leading-relaxed">
                            {msg.message}
                          </p>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8 text-white/40 font-mono text-xs uppercase tracking-widest">
                        No board posts yet
                      </div>
                    )}
                  </div>
                  <div className="p-4 border-t border-white/5 mt-auto">
                    <DrawerClose asChild>
                      <button className="w-full py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono uppercase tracking-widest text-white/60 transition-colors">
                        Close Board
                      </button>
                    </DrawerClose>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
            <button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Settings className="w-3.5 h-3.5 md:w-4 md:h-4 text-white/60" />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
              {PROFILES.map((profile, index) => (
                <Tooltip key={profile.id} delayDuration={300}>
                  <TooltipTrigger asChild>
                    <a 
                      href="#"
                      className={`
                        group relative flex flex-col h-[380px] rounded-2xl bg-gradient-to-b p-[1px] overflow-hidden 
                        transition-all duration-700 ease-out hover:-translate-y-2
                        ${profile.wrapperClass}
                        ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
                      `}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <div className={`relative flex flex-col h-full rounded-[15px] bg-[#0a0a0a]/90 backdrop-blur-xl border transition-colors duration-500 p-6 overflow-hidden ${profile.borderClass}`}>
                        
                        {/* Hover Glow Background */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr ${profile.bgHoverClass} pointer-events-none`} />

                        {/* Top Row */}
                        <div className="flex items-center justify-between mb-8 relative z-10">
                          <div className="flex items-center gap-2 text-[10px] md:text-xs font-mono tracking-widest text-white/40 group-hover:text-white/80 transition-colors">
                            <div className="text-white/50 group-hover:text-white/80 transition-colors">
                              {profile.icon}
                            </div>
                            <span className="uppercase">{profile.botName}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[8px] md:text-[9px] font-mono tracking-[0.2em] text-white/30 uppercase mt-[1px]">Online</span>
                            <div className={`w-1.5 h-1.5 rounded-full ${profile.dotClass} animate-pulse`} />
                          </div>
                        </div>

                        {/* Middle Row (Avatar & Identity) */}
                        <div className="flex flex-col items-center justify-center flex-1 py-4 relative z-10">
                          <div className="relative w-20 h-20 md:w-24 md:h-24 mb-6 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-2">
                            {/* Glow under avatar */}
                            <div className={`absolute inset-0 rounded-full blur-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-700 ${profile.blurClass}`} />
                            {/* Avatar Circle */}
                            <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-white/20 flex items-center justify-center text-3xl md:text-4xl bg-black/60 backdrop-blur-md transition-colors duration-500 shadow-inner">
                              {profile.emoji}
                            </div>
                          </div>
                          
                          <h2 className="text-xl md:text-2xl font-light tracking-wide text-white mb-3 transition-colors duration-500">
                            {profile.username}
                          </h2>
                          <div className="h-10 flex items-center justify-center px-2">
                            <p className="text-[10px] md:text-xs text-white/40 font-mono tracking-widest text-center uppercase leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                              {profile.persona}
                            </p>
                          </div>
                        </div>

                        {/* Bottom Row (Action) */}
                        <div className="mt-auto pt-5 md:pt-6 border-t border-white/5 relative z-10 flex items-center justify-between group-hover:border-white/10 transition-colors duration-500">
                          <span className="text-[10px] md:text-xs font-mono tracking-wider text-white/30 group-hover:text-white/60 transition-colors flex items-center gap-2">
                            <Activity className="w-3 h-3 md:w-3.5 md:h-3.5" /> Active Link
                          </span>
                          <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:border-white/30 bg-white/5 group-hover:bg-white/10 transition-all duration-500 transform group-hover:translate-x-1 pointer-events-none">
                            <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                          </button>
                        </div>

                      </div>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent sideOffset={10} className="bg-[#111] text-white border-white/10 font-mono text-xs">
                    <p>Launch your Orion AI</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-6 text-center border-t border-white/5 bg-black/10 backdrop-blur-md">
          <div className="flex items-center justify-center gap-2 opacity-30">
            <Shield className="w-3 h-3 text-white" />
            <span className="text-[9px] md:text-[10px] font-mono tracking-[0.4em] text-white uppercase mt-[1px]">
              End-to-End Encrypted Array
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
