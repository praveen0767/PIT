"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Map, Users, TrendingUp, Radio, Activity } from "lucide-react";

const LAYERS = [
  {
    id: "district",
    name: "District Analysis",
    icon: Map,
    description: "Macro-level demographic topography mapping across East and West Godavari constituencies.",
    theme: "pit-cyan"
  },
  {
    id: "booth",
    name: "Booth Intelligence",
    icon: Users,
    description: "Granular micro-node segmentation representing distinct polling booth clusters and historical turnout.",
    theme: "pit-blue"
  },
  {
    id: "sentiment",
    name: "Public Sentiment",
    icon: Activity,
    description: "Real-time thermal mapping of voter mood, identifying critical frustration vectors and localized approval spikes.",
    theme: "rose-500" // Custom thermal red for sentiment
  },
  {
    id: "ground",
    name: "Ground Operations",
    icon: Radio,
    description: "Live tracking of field cadre mobilization, structural deployment paths, and localized resource density.",
    theme: "emerald-400"
  },
  {
    id: "trends",
    name: "Political Trends",
    icon: TrendingUp,
    description: "Algorithmic forecasting of momentum shifts and swing-voter migration patterns across key districts.",
    theme: "amber-400"
  }
];

// Abstract representations of East/West Godavari districts
const MAP_NODES = [
  { id: "EG-1", x: 200, y: 100, label: "Kakinada" },
  { id: "EG-2", x: 250, y: 150, label: "Rajahmundry" },
  { id: "EG-3", x: 320, y: 120, label: "Amalapuram" },
  { id: "WG-1", x: 120, y: 220, label: "Eluru" },
  { id: "WG-2", x: 180, y: 280, label: "Bhimavaram" },
  { id: "WG-3", x: 80, y: 300, label: "Narsapuram" },
  { id: "C-1", x: 200, y: 200, label: "Central Delta" } // Connecting bridge node
];

const MAP_EDGES = [
  { source: "EG-1", target: "EG-2" },
  { source: "EG-2", target: "EG-3" },
  { source: "EG-1", target: "EG-3" },
  { source: "EG-2", target: "C-1" },
  { source: "C-1", target: "WG-1" },
  { source: "C-1", target: "WG-2" },
  { source: "WG-1", target: "WG-2" },
  { source: "WG-2", target: "WG-3" },
  { source: "WG-1", target: "WG-3" }
];

export function MapSection() {
  const [activeLayer, setActiveLayer] = useState(LAYERS[0].id);

  const getLayerTheme = () => {
    const layer = LAYERS.find(l => l.id === activeLayer);
    if (layer?.id === "sentiment") return "#f43f5e"; // rose-500
    if (layer?.id === "ground") return "#34d399"; // emerald-400
    if (layer?.id === "trends") return "#fbbf24"; // amber-400
    if (layer?.id === "booth") return "#0077B6"; // pit-blue
    return "#00A6C8"; // pit-cyan (district)
  };

  return (
    <section className="py-32 surface-1 relative border-y border-pit-dark overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pit opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-pit-white/5 border border-pit-white/10 rounded-full mb-6">
            <Radio className="w-3 h-3 text-pit-cyan animate-pulse" />
            <span className="text-[10px] font-bold text-pit-cyan uppercase tracking-widest">Network Topology</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-pit-white mb-6">
            Political Intelligence Network
          </h2>
          <p className="text-lg text-pit-offwhite opacity-70 font-light max-w-2xl">
            Our proprietary mapping of the East and West Godavari districts. We segment territories not just by geography, but by sentiment, deployment density, and live political momentum.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* LEFT PANEL: Tactical Controls */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {LAYERS.map((layer) => {
              const isActive = activeLayer === layer.id;
              const Icon = layer.icon;
              
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id)}
                  className={`text-left p-6 rounded-sm border transition-all duration-300 relative overflow-hidden group ${
                    isActive 
                      ? "surface-2 border-pit-cyan shadow-[0_0_20px_rgba(0,166,200,0.15)]" 
                      : "surface-1 border-pit-white/5 hover:border-pit-white/20 hover:surface-2"
                  }`}
                >
                  {/* Active Highlight Line */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        layoutId="activeLayerIndicator"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-pit-cyan glow-cyan"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </AnimatePresence>

                  <div className="flex items-center gap-4 mb-3">
                    <div className={`p-2 rounded-sm ${isActive ? "bg-pit-cyan/20 text-pit-cyan" : "bg-pit-white/5 text-pit-offwhite/50 group-hover:text-pit-offwhite"}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className={`font-bold tracking-wider uppercase text-xs ${isActive ? "text-pit-white" : "text-pit-offwhite/70 group-hover:text-pit-white"}`}>
                      {layer.name}
                    </h3>
                  </div>
                  
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="text-sm text-pit-offwhite opacity-70 leading-relaxed font-light pl-1"
                      >
                        {layer.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          {/* RIGHT PANEL: 3D Godavari Visualization */}
          <div className="lg:col-span-8 relative min-h-[500px] surface-4 border border-pit-white/10 rounded-sm shadow-pit-elevated overflow-hidden flex items-center justify-center bg-pit-black">
            
            {/* Dynamic ambient glow based on layer */}
            <motion.div 
              className="absolute inset-0 opacity-20 pointer-events-none"
              animate={{ background: `radial-gradient(circle at 50% 50%, ${getLayerTheme()}40 0%, transparent 70%)` }}
              transition={{ duration: 1 }}
            />

            {/* Isometric Wrapper */}
            <div 
              className="w-full h-full absolute inset-0 flex items-center justify-center perspective-[1000px]"
              style={{ perspectiveOrigin: "50% 50%" }}
            >
              <motion.div 
                className="w-[600px] h-[600px] relative"
                initial={{ rotateX: 60, rotateZ: -45, scale: 0.8 }}
                animate={{ 
                  rotateX: activeLayer === "district" ? 50 : 60,
                  rotateZ: activeLayer === "ground" ? -35 : -45,
                  scale: activeLayer === "booth" ? 0.9 : 0.8
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Ground grid for the 3D plane */}
                <div className="absolute inset-0 border border-pit-white/10 rounded-lg bg-pit-charcoal/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-sm"
                     style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                ></div>

                <svg width="600" height="600" viewBox="0 0 400 400" className="absolute inset-0 overflow-visible z-10">
                  {/* Map Edges */}
                  {MAP_EDGES.map((edge, i) => {
                    const source = MAP_NODES.find(n => n.id === edge.source)!;
                    const target = MAP_NODES.find(n => n.id === edge.target)!;
                    
                    return (
                      <g key={i}>
                        {/* Base structural line */}
                        <motion.line
                          x1={source.x} y1={source.y}
                          x2={target.x} y2={target.y}
                          stroke="rgba(255,255,255,0.1)"
                          strokeWidth={2}
                          strokeDasharray={activeLayer === "trends" ? "4 4" : "none"}
                        />
                        
                        {/* Active Data Flow Line */}
                        <motion.line
                          x1={source.x} y1={source.y}
                          x2={target.x} y2={target.y}
                          stroke={getLayerTheme()}
                          strokeWidth={activeLayer === "ground" ? 3 : 1}
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ 
                            pathLength: 1, 
                            opacity: activeLayer !== "district" ? 0.8 : 0.3,
                            strokeDashoffset: activeLayer === "ground" ? [0, -20] : 0
                          }}
                          transition={{ 
                            pathLength: { duration: 1.5, delay: i * 0.1 },
                            strokeDashoffset: { duration: 1, repeat: Infinity, ease: "linear" }
                          }}
                          strokeDasharray={activeLayer === "ground" ? "10 10" : "none"}
                          style={{ filter: `drop-shadow(0 0 4px ${getLayerTheme()})` }}
                        />
                      </g>
                    );
                  })}

                  {/* Map Nodes */}
                  {MAP_NODES.map((node, i) => {
                    const isEastGodavari = node.id.startsWith("EG");
                    const isWestGodavari = node.id.startsWith("WG");
                    
                    return (
                      <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
                        {/* Sentiment Thermal Glow */}
                        {activeLayer === "sentiment" && (
                          <motion.circle
                            r={30}
                            fill={isEastGodavari ? "#f43f5e" : "#00A6C8"}
                            className="blur-[15px]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            transition={{ duration: 1 }}
                          />
                        )}

                        {/* Node Base */}
                        <motion.circle
                          r={activeLayer === "booth" ? 4 : 8}
                          fill="#182430"
                          stroke={getLayerTheme()}
                          strokeWidth={2}
                          animate={{
                            fill: activeLayer === "sentiment" ? (isEastGodavari ? "#f43f5e" : "#00A6C8") : "#182430",
                            r: activeLayer === "booth" ? 4 : (activeLayer === "ground" ? 10 : 8)
                          }}
                          transition={{ duration: 0.5 }}
                        />

                        {/* Radar Pulse for District/Trends */}
                        {(activeLayer === "district" || activeLayer === "trends") && (
                          <motion.circle
                            r={8}
                            fill="transparent"
                            stroke={getLayerTheme()}
                            strokeWidth={1}
                            initial={{ r: 8, opacity: 1 }}
                            animate={{ r: 30, opacity: 0 }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                          />
                        )}

                        {/* Booth Sub-nodes */}
                        {activeLayer === "booth" && (
                          <g>
                            <motion.circle cx="-10" cy="-10" r="2" fill="#00A6C8" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.1 }} />
                            <motion.circle cx="10" cy="-5" r="2" fill="#00A6C8" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} />
                            <motion.circle cx="-5" cy="12" r="2" fill="#0077B6" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }} />
                            <motion.circle cx="12" cy="8" r="2" fill="#0077B6" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }} />
                          </g>
                        )}

                        {/* Territory Label (Kept flat against the isometric plane) */}
                        <motion.text
                          x={15} y={5}
                          fill="#FFFFFF"
                          fontSize="12"
                          fontFamily="monospace"
                          fontWeight="bold"
                          className="drop-shadow-md"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: activeLayer === "booth" ? 0 : 0.9 }}
                          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}
                        >
                          {node.label}
                        </motion.text>
                      </g>
                    );
                  })}
                </svg>
              </motion.div>
            </div>
            
            {/* Status Legend Overlay */}
            <div className="absolute bottom-6 left-6 p-4 surface-2 border border-pit-white/10 rounded-sm shadow-pit-subtle backdrop-blur-md">
              <span className="text-[10px] font-bold uppercase tracking-widest text-pit-offwhite opacity-50 block mb-2">Live Telemetry</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: getLayerTheme() }}></span>
                <span className="text-xs font-mono font-bold text-pit-white uppercase">
                  {LAYERS.find(l => l.id === activeLayer)?.name} Active
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
