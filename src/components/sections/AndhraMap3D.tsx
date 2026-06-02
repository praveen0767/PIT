"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Activity, Database, Radar, MapPin, Users, Crosshair, BarChart3, Radio } from "lucide-react";

type Mode = "district" | "booth" | "sentiment" | "operations" | "trends";

const MODES = [
  { id: "district", label: "District Analysis", icon: Database },
  { id: "booth", label: "Booth Intelligence", icon: Crosshair },
  { id: "sentiment", label: "Public Sentiment", icon: Activity },
  { id: "operations", label: "Ground Operations", icon: Users },
  { id: "trends", label: "Political Trends", icon: BarChart3 },
];

// 5 Abstract Regions mapped to AP Structure
const REGIONS = [
  { id: "north", name: "North Coastal", position: { top: "20%", left: "70%" }, districts: ["Srikakulam", "Vizianagaram", "Visakhapatnam"] },
  { id: "godavari", name: "Godavari Belt", position: { top: "35%", left: "60%" }, districts: ["East Godavari", "West Godavari"] },
  { id: "krishna_guntur", name: "Krishna-Guntur", position: { top: "50%", left: "50%" }, districts: ["Krishna", "Guntur"] },
  { id: "south_coastal", name: "South Coastal", position: { top: "70%", left: "45%" }, districts: ["Prakasam", "Nellore"] },
  { id: "rayalaseema", name: "Rayalaseema", position: { top: "85%", left: "30%" }, districts: ["Kurnool", "Anantapur", "Kadapa", "Chittoor"] },
];

export function AndhraMap3D() {
  const [activeMode, setActiveMode] = useState<Mode>("district");
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  // Dynamic configuration based on the active mode
  const getModeConfig = (mode: Mode) => {
    switch(mode) {
      case "district":
        return {
          camera: { rotateX: "45deg", rotateZ: "-15deg", scale: 1 },
          colorBase: "var(--color-pit-cyan)",
          nodeStyle: "hexagon",
          globalStats: { title: "Vulnerability Index", value: "Moderate", sub: "26 Districts Monitored" },
          getRegionData: (id: string) => ({ metric1: "Demographic Shift", val1: "+2.4%", metric2: "Swing Potential", val2: id === "godavari" ? "High" : "Low" })
        };
      case "booth":
        return {
          camera: { rotateX: "60deg", rotateZ: "0deg", scale: 1.2 },
          colorBase: "var(--color-pit-blue)",
          nodeStyle: "grid",
          globalStats: { title: "Active Telemetry", value: "45,892", sub: "Polled Booths" },
          getRegionData: (id: string) => ({ metric1: "Booth Committees", val1: "94% Active", metric2: "Voter Turnout Est.", val2: "76%" })
        };
      case "sentiment":
        return {
          camera: { rotateX: "30deg", rotateZ: "-25deg", scale: 1.1 },
          colorBase: "#C5A059", // Gold
          nodeStyle: "pulse",
          globalStats: { title: "Statewide Approval", value: "Volatile", sub: "Index updated 2m ago" },
          getRegionData: (id: string) => ({ metric1: "Narrative Resonance", val1: id === "rayalaseema" ? "Critical" : "Stable", metric2: "Trust Deficit", val2: "-14pts" })
        };
      case "operations":
        return {
          camera: { rotateX: "50deg", rotateZ: "10deg", scale: 1 },
          colorBase: "#e11d48", // Red/Crimson for ops
          nodeStyle: "radar",
          globalStats: { title: "Field Deployment", value: "Level 4", sub: "Active Ground Units" },
          getRegionData: (id: string) => ({ metric1: "Mobilization Units", val1: id === "krishna_guntur" ? "1,200 Active" : "850 Active", metric2: "Cadre Readiness", val2: "High" })
        };
      case "trends":
        return {
          camera: { rotateX: "40deg", rotateZ: "-5deg", scale: 1.05 },
          colorBase: "#10b981", // Emerald for trends
          nodeStyle: "bar",
          globalStats: { title: "Momentum Shift", value: "+3.2%", sub: "7-Day Trajectory" },
          getRegionData: (id: string) => ({ metric1: "Opponent Attrition", val1: "Accelerating", metric2: "Media Dominance", val2: "62% Share" })
        };
      default:
        return {
          camera: { rotateX: "45deg", rotateZ: "-15deg", scale: 1 },
          colorBase: "var(--color-pit-cyan)",
          nodeStyle: "hexagon",
          globalStats: { title: "System Status", value: "Online", sub: "Monitoring" },
          getRegionData: (id: string) => ({ metric1: "--", val1: "--", metric2: "--", val2: "--" })
        };
    }
  };

  const config = getModeConfig(activeMode);

  return (
    <section className="py-12 surface-1 relative overflow-hidden border-y border-white/5 bg-pit-black">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header & Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Radar className="w-5 h-5 text-pit-cyan animate-[spin_4s_linear_infinite]" />
              <span className="text-[10px] font-sans font-bold tracking-widest text-pit-cyan uppercase">
                Live State Telemetry
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-pit-white mb-2">
              Andhra Pradesh <br/> Intelligence Matrix
            </h2>
            <p className="text-white/60 text-sm max-w-xl">
              Real-time spatial visualization of the AP electoral battlefield. Select an intelligence layer to filter incoming data.
            </p>
          </div>

          {/* Mode Selector */}
          <div className="flex flex-wrap gap-2 p-2 surface-2 border border-white/5 shadow-pit-elevated">
            {MODES.map((mode) => {
              const Icon = mode.icon;
              const isActive = activeMode === mode.id;
              return (
                <button
                  key={mode.id}
                  onClick={() => setActiveMode(mode.id as Mode)}
                  className={`flex items-center gap-2 px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                    isActive 
                      ? "bg-pit-dark text-white border-b-2 border-pit-cyan" 
                      : "text-white/50 hover:text-white hover:bg-white/5 border-b-2 border-transparent"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-pit-cyan" : "opacity-50"}`} />
                  {mode.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dashboard Core */}
        <div className="grid lg:grid-cols-12 gap-8 h-[650px]">
          
          {/* Left Stats Panel */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMode + "-global"}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="surface-3 border-l-4 p-6 shadow-2xl relative overflow-hidden"
                style={{ borderLeftColor: config.colorBase }}
              >
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Activity className="w-24 h-24" style={{ color: config.colorBase }} />
                </div>
                <h4 className="text-[10px] uppercase tracking-widest text-white/50 mb-4">{config.globalStats.title}</h4>
                <p className="text-4xl font-serif font-bold text-white mb-2">{config.globalStats.value}</p>
                <p className="text-xs text-pit-cyan font-bold uppercase tracking-widest" style={{ color: config.colorBase }}>{config.globalStats.sub}</p>
              </motion.div>
            </AnimatePresence>

            {/* Active Region Panel */}
            <AnimatePresence mode="wait">
              {activeRegion ? (
                <motion.div
                  key={activeRegion + activeMode}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="surface-2 border border-white/5 p-6 flex-1 shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                    <Radio className="w-4 h-4 animate-pulse" style={{ color: config.colorBase }} />
                    <h3 className="font-serif font-bold text-xl text-white">
                      {REGIONS.find(r => r.id === activeRegion)?.name}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-white/40 mb-2">District Coverage</p>
                      <div className="flex flex-wrap gap-2">
                        {REGIONS.find(r => r.id === activeRegion)?.districts.map(d => (
                          <span key={d} className="text-[10px] px-2 py-1 bg-white/5 text-white/70 border border-white/5">{d}</span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-[9px] uppercase tracking-widest text-white/40 mb-1">{config.getRegionData(activeRegion).metric1}</p>
                        <p className="font-bold text-white text-sm">{config.getRegionData(activeRegion).val1}</p>
                      </div>
                      <div>
                        <p className="text-[9px] uppercase tracking-widest text-white/40 mb-1">{config.getRegionData(activeRegion).metric2}</p>
                        <p className="font-bold text-sm" style={{ color: config.colorBase }}>{config.getRegionData(activeRegion).val2}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="surface-2 border border-white/5 p-6 flex-1 flex flex-col items-center justify-center text-center opacity-50"
                >
                  <MapPin className="w-6 h-6 text-white/20 mb-4" />
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Select a regional node<br/>for isolated telemetry</p>
                </motion.div>
              )}
            </AnimatePresence>
            
          </div>

          {/* Map Visualization Stage */}
          <div className="lg:col-span-9 relative border border-white/5 surface-2 shadow-pit-elevated overflow-hidden bg-[#070b10]">
            
            {/* Holographic Scan Line */}
            <motion.div 
              animate={{ top: ["-10%", "110%"] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-1 bg-pit-cyan opacity-20 shadow-[0_0_20px_rgba(0,166,200,0.8)] z-0 pointer-events-none"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="w-full h-full relative" 
                animate={{ 
                  rotateX: config.camera.rotateX, 
                  rotateZ: config.camera.rotateZ,
                  scale: config.camera.scale 
                }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} // smooth spring-like ease
                style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
              >
                
                {/* 3D Grid Base */}
                <div className="absolute inset-0 border border-white/10 bg-[rgba(255,255,255,0.01)] shadow-[0_40px_100px_rgba(0,0,0,0.8)]"></div>
                <div 
                  className="absolute inset-0 transition-all duration-1000" 
                  style={{ 
                    backgroundImage: `linear-gradient(${config.colorBase} 1px, transparent 1px), linear-gradient(90deg, ${config.colorBase} 1px, transparent 1px)`, 
                    backgroundSize: "60px 60px",
                    opacity: 0.05
                  }}
                ></div>

                {/* Stylized Andhra Pradesh Geographic Silhouette */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ filter: `drop-shadow(0 0 20px ${config.colorBase})`, opacity: 0.2 }}>
                  <defs>
                    <pattern id="tech-grid" width="2" height="2" patternUnits="userSpaceOnUse">
                      <path d="M 2 0 L 0 0 0 2" fill="none" stroke={config.colorBase} strokeWidth="0.05" opacity="0.5"/>
                    </pattern>
                  </defs>
                  
                  {/* Main AP Polygon */}
                  <polygon 
                    points="70,10 80,25 75,40 60,55 50,75 40,90 25,95 15,85 25,70 35,60 45,50 50,30 60,15" 
                    fill="url(#tech-grid)" 
                    stroke={config.colorBase} 
                    strokeWidth="0.3" 
                  />
                  
                  {/* Subtle inner glow / border */}
                  <polygon 
                    points="70,10 80,25 75,40 60,55 50,75 40,90 25,95 15,85 25,70 35,60 45,50 50,30 60,15" 
                    fill="rgba(0,0,0,0.6)" 
                    stroke={config.colorBase} 
                    strokeWidth="0.1" 
                    opacity="0.5"
                  />
                  
                  {/* Animated Connecting Path Line */}
                  <motion.path 
                    d="M 70 20 Q 65 30 60 35 T 50 50 T 45 70 T 30 85" 
                    fill="transparent" 
                    stroke={config.colorBase} 
                    strokeWidth="0.5" 
                    strokeDasharray="2 4"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="opacity-50"
                  />
                </svg>

                {/* Regional Nodes */}
                {REGIONS.map((region) => {
                  const isHovered = activeRegion === region.id;
                  return (
                    <div
                      key={region.id}
                      className="absolute z-30"
                      style={{ top: region.position.top, left: region.position.left, transform: "translate(-50%, -50%)" }}
                    >
                      {/* Stable Hitbox to prevent jittering / jumping */}
                      <div 
                        className="absolute inset-0 w-32 h-32 -top-16 -left-16 pointer-events-auto cursor-crosshair z-50 rounded-full"
                        onMouseEnter={() => setActiveRegion(region.id)}
                        onMouseLeave={() => setActiveRegion(null)}
                      />
                      
                      {/* Animated 3D Content */}
                      <motion.div
                        className="relative pointer-events-none group"
                        animate={{ 
                          translateZ: isHovered ? 60 : 0,
                          scale: isHovered ? 1.2 : 1
                        }}
                        transition={{ duration: 0.4 }}
                      >
                      {/* Node Core */}
                      <div 
                        className="absolute inset-0 w-8 h-8 -ml-4 -mt-4 bg-pit-black border-2 flex items-center justify-center z-20 transition-all duration-500" 
                        style={{ 
                          borderColor: config.colorBase,
                          boxShadow: isHovered ? `0 0 30px ${config.colorBase}` : `0 0 10px rgba(0,0,0,1)`,
                          borderRadius: config.nodeStyle === 'hexagon' ? '20%' : config.nodeStyle === 'grid' ? '0%' : '50%'
                        }}
                      >
                        <div className="w-2 h-2 animate-pulse transition-all duration-500" style={{ 
                          backgroundColor: config.colorBase,
                          borderRadius: config.nodeStyle === 'grid' ? '0%' : '50%' 
                        }}></div>
                      </div>
                      
                      {/* Geometric Aura */}
                      <svg width="160" height="160" viewBox="0 0 160 160" className="absolute -top-[80px] -left-[80px] transition-all duration-700 z-10 pointer-events-none" style={{ fill: config.colorBase, opacity: isHovered ? 0.3 : 0.05 }}>
                        {config.nodeStyle === 'hexagon' && <polygon points="80,10 140,45 140,115 80,150 20,115 20,45" stroke={config.colorBase} strokeWidth="1" fillOpacity="0.1"/>}
                        {config.nodeStyle === 'grid' && <rect x="20" y="20" width="120" height="120" stroke={config.colorBase} strokeWidth="1" fillOpacity="0.1"/>}
                        {config.nodeStyle === 'pulse' && <circle cx="80" cy="80" r="60" stroke={config.colorBase} strokeWidth="1" fillOpacity="0.1"/>}
                        {config.nodeStyle === 'radar' && (
                          <>
                            <circle cx="80" cy="80" r="60" stroke={config.colorBase} strokeWidth="1" fillOpacity="0.1" strokeDasharray="4 4"/>
                            <circle cx="80" cy="80" r="30" stroke={config.colorBase} strokeWidth="1" fillOpacity="0"/>
                          </>
                        )}
                        {config.nodeStyle === 'bar' && (
                          <rect x="60" y="40" width="40" height="80" stroke={config.colorBase} strokeWidth="1" fillOpacity="0.2"/>
                        )}
                      </svg>
                      
                      {/* Label Hover */}
                      <div className={`absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap z-30 transition-all duration-300 ${isHovered ? 'opacity-100 -translate-y-2' : 'opacity-0'}`}>
                        <div className="bg-pit-black/90 border p-2 shadow-xl flex flex-col items-center" style={{ borderColor: config.colorBase }}>
                          <span className="text-[10px] uppercase tracking-widest font-bold text-white mb-1">
                            {region.name}
                          </span>
                          <span className="text-[8px] text-white/50">{region.districts.length} Districts</span>
                        </div>
                      </div>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Top Right Mini Legend */}
            <div className="absolute top-4 right-4 bg-pit-black/80 backdrop-blur-md border border-white/10 p-3 flex flex-col gap-2 z-40 pointer-events-none">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2" style={{ backgroundColor: config.colorBase }}></div>
                <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-white/70">Mode: {MODES.find(m => m.id === activeMode)?.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white/20"></div>
                <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-white/70">Status: Active Sync</span>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
