import React, { useState, useEffect, useRef, memo } from "react";
import { ComposableMap, Geographies, Geography, Sphere } from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";
import Flag from "react-world-flags";
import { ArrowRight, Search } from "lucide-react";
import { geoCentroid } from "d3-geo";

const geoUrl = "https://raw.githubusercontent.com/lotusms/world-map-data/master/world.json";

const REGION_DATA = {
  Canada: { code: "CA", onramps: 16, payments: 6, providers: ["Alchemy Pay", "Coinify", "Unlimit"], coords: [-106, 56] },
  India: { code: "IN", onramps: 22, payments: 15, providers: ["UPI", "Onramp Money", "CoinDCX"], coords: [78, 20] },
  "United States": { code: "US", onramps: 28, payments: 12, providers: ["Stripe", "Coinbase", "Plaid"], coords: [-95, 37] },
  "United Kingdom": { code: "GB", onramps: 14, payments: 8, providers: ["Revolut", "Monzo"], coords: [-2, 54] }
};

// PERFORMANCE: Memoize the map to prevent unnecessary re-renders of heavy SVG paths
const WorldMap = memo(({ globeScale, rotation, selectedCountry, onCountryClick, isDragging }) => (
  <ComposableMap
    projection="geoOrthographic"
    projectionConfig={{ scale: globeScale, rotate: rotation }}
    // PERFORMANCE: Use transform-gpu for hardware acceleration
    className={`w-full h-full max-w-[850px] max-h-[850px] overflow-visible will-change-transform transform-gpu ${
      isDragging ? "transition-none" : "transition-all duration-[1000ms] ease-out"
    }`}
  >
    <defs>
      <radialGradient id="globeGrad" cx="50%" cy="50%" r="50%">
        <stop offset="60%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </radialGradient>
    </defs>
    <Sphere fill="url(#globeGrad)" stroke="rgba(255,255,255,0.15)" strokeWidth={0.5} />
    <Geographies geography={geoUrl}>
      {({ geographies }) =>
        geographies.map((geo) => {
          const countryName = geo.properties.name;
          const isSelected = selectedCountry === countryName;
          const hasData = REGION_DATA.hasOwnProperty(countryName);

          return (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              onClick={(e) => onCountryClick(e, geo, countryName)}
              style={{
                default: {
                  fill: isSelected ? "#FFFFFF" : (hasData ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.1)"),
                  stroke: "rgba(255,255,255,0.15)",
                  strokeWidth: 0.5,
                  outline: "none",
                },
                hover: { fill: "#FFFFFF", outline: "none", cursor: "pointer" },
                pressed: { outline: "none" }
              }}
            />
          );
        })
      }
    </Geographies>
  </ComposableMap>
));

export default function TalentExpertMap() {
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [searchQuery, setSearchQuery] = useState("");
  const [rotation, setRotation] = useState([-78, -20, 0]);
  const [isDragging, setIsDragging] = useState(false);
  const [allCountries, setAllCountries] = useState([]); 
  const [globeScale, setGlobeScale] = useState(320);
  
  const dragStartPos = useRef({ x: 0, y: 0 });
  const requestRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setGlobeScale(180); 
      else if (width < 1024) setGlobeScale(250); 
      else setGlobeScale(320); 
    };

    window.addEventListener("resize", handleResize, { passive: true });
    handleResize();

    fetch(geoUrl)
      .then(res => res.json())
      .then(data => {
        if (data && data.features) {
          const countriesList = data.features.map(f => ({
            name: f.properties.name,
            centroid: geoCentroid(f)
          })).sort((a, b) => a.name.localeCompare(b.name));
          setAllCountries(countriesList);
        }
      })
      .catch(err => console.error("Error loading map data:", err));

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = REGION_DATA[selectedCountry] || { 
    code: "UN", onramps: 0, payments: 0, providers: ["Market Discovery in Progress"] 
  };

  useEffect(() => {
    if (REGION_DATA[selectedCountry] && !isDragging) {
      const [lon, lat] = REGION_DATA[selectedCountry].coords;
      setRotation([-lon, -lat, 0]);
    }
  }, [selectedCountry, isDragging]);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    if (requestRef.current) cancelAnimationFrame(requestRef.current);
    requestRef.current = requestAnimationFrame(() => {
      // PERFORMANCE: Reduced sensitivity slightly for smoother mobile tracking
      const sensitivity = 0.4;
      setRotation(prev => [
        prev[0] + e.movementX * sensitivity,
        prev[1] - e.movementY * sensitivity,
        prev[2]
      ]);
    });
  };

  const handleSelectSearch = (country) => {
    setSelectedCountry(country.name);
    setRotation([-country.centroid[0], -country.centroid[1], 0]);
    setSearchQuery("");
  };

  const onCountryClick = (e, geo, countryName) => {
    const dist = Math.sqrt(Math.pow(e.clientX - dragStartPos.current.x, 2));
    if (dist < 5) {
      setSelectedCountry(countryName);
      const centroid = geoCentroid(geo);
      setRotation([-centroid[0], -centroid[1], 0]);
    }
  };

  return (
    <section 
      className="relative min-h-screen bg-[#FDFDFF] flex items-center justify-center py-10 lg:py-20 overflow-hidden font-sans select-none touch-none outline-none"
      onMouseMove={handleMouseMove}
      onMouseDown={(e) => {
        setIsDragging(true);
        dragStartPos.current = { x: e.clientX, y: e.clientY };
      }}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        svg { outline: none !important; user-select: none !important; -webkit-tap-highlight-color: transparent !important; pointer-events: auto; }
        path { outline: none !important; transition: fill 0.3s ease; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}} />
      
      <div className="absolute top-0 right-0 w-full lg:w-[800px] h-[400px] lg:h-[800px] bg-blue-100/30 blur-[80px] lg:blur-[140px] rounded-full -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full lg:w-[600px] h-[300px] lg:h-[600px] bg-indigo-50/50 blur-[60px] lg:blur-[120px] rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-[1550px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-center relative px-6 sm:px-10 gap-8 lg:gap-12">
        
        <div className="lg:col-span-5 z-40 space-y-6 order-2 lg:order-1">
          <div className="relative w-full max-w-lg group mx-auto lg:mx-0">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search 240+ global markets..."
              className="w-full bg-white border border-slate-200/60 rounded-3xl py-4 lg:py-5 pl-14 pr-6 text-sm font-bold text-slate-900 shadow-sm outline-none focus:border-blue-600 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            
            {searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-3 bg-white/90 backdrop-blur-xl border border-slate-100 rounded-3xl shadow-2xl z-50 max-h-60 overflow-y-auto p-2 no-scrollbar">
                {allCountries?.length > 0 ? (
                  allCountries
                    .filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map(country => (
                      <button 
                        key={country.name}
                        onClick={() => handleSelectSearch(country)}
                        className="w-full text-left px-5 py-3 rounded-2xl hover:bg-blue-600 hover:text-white text-[13px] font-black text-slate-700 transition-all flex items-center justify-between"
                      >
                        {country.name}
                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100" />
                      </button>
                    ))
                ) : (
                  <div className="px-5 py-4 text-xs font-bold text-slate-400">Syncing...</div>
                )}
              </div>
            )}
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedCountry}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/80 backdrop-blur-2xl rounded-[2.5rem] lg:rounded-[3rem] p-8 lg:p-12 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.06)] border border-white max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-4 lg:gap-5 mb-8 lg:mb-10">
                <Flag code={data?.code} className="w-10 lg:w-12 h-6 lg:h-8 rounded-md shadow-sm object-cover" />
                <h3 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight leading-none">{selectedCountry}</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-3 mb-10 lg:mb-12">
                {data?.providers?.slice(0, 3).map(p => (
                  <div key={p} className="flex items-center gap-3 px-5 py-3 lg:py-4 bg-white/50 border border-slate-100 rounded-2xl">
                    <div className={`w-2 h-2 rounded-full ${REGION_DATA[selectedCountry] ? 'bg-blue-500' : 'bg-slate-300'}`} />
                    <span className="text-[11px] lg:text-[12px] font-black text-slate-600 uppercase tracking-widest truncate">{p}</span>
                  </div>
                ))}
              </div>
              <button className="w-full lg:w-auto text-[11px] font-black text-slate-900 uppercase tracking-[0.3em] flex items-center justify-center lg:justify-start gap-2 hover:text-blue-600 transition-all group">
                Deep Analysis <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="lg:col-span-7 h-[400px] sm:h-[600px] lg:h-[800px] flex items-center justify-center relative lg:translate-x-10 order-1 lg:order-2">
          <div className="absolute w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-blue-500/10 blur-[60px] lg:blur-[100px] rounded-full pointer-events-none" />

          <div className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing overflow-visible">
            <WorldMap 
              globeScale={globeScale} 
              rotation={rotation} 
              selectedCountry={selectedCountry} 
              onCountryClick={onCountryClick}
              isDragging={isDragging}
            />

            <AnimatePresence>
              {selectedCountry && !isDragging && (
                <motion.div 
                  key={selectedCountry}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  className="absolute top-[35%] lg:top-[38%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
                >
                  <div className="bg-[#1E293B]/80 backdrop-blur-xl px-4 lg:px-6 py-2 lg:py-3 rounded-full border border-white/10 shadow-2xl flex items-center gap-2 lg:gap-3">
                     <Flag code={data?.code} className="w-4 lg:w-5 h-2.5 lg:h-3.5 rounded-sm object-cover" />
                     <span className="text-[10px] lg:text-[12px] font-black text-white uppercase tracking-tight whitespace-nowrap">{selectedCountry}</span>
                  </div>
                  <div className="w-px h-6 lg:h-8 bg-gradient-to-t from-white/10 to-transparent mx-auto -mt-0.5" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}