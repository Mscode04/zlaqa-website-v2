"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EXTERNAL_URLS } from "@/lib/constants";
import { TakeTestModal } from "@/components/TakeTestModal";

export function Hero() {

  const handleJoinCommunity = () => {
    window.open(EXTERNAL_URLS.community, '_blank');
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-40 md:pb-60">

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-50 via-white to-white" />

      {/* Animated Floating Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-200/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-Zlaqa-green/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

      <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">

        {/* Animated Badge */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 mb-8 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-Zlaqa-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-Zlaqa-green"></span>
          </span>
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Early Access Open</span>
        </motion.div> */}

        {/* Headlines */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-Zlaqa-black mb-6 mt-12 leading-[1.1]"
        >
          Zero-Barrier <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-l text-Zlaqa-black to-gray-400">Speech Intelligence Platform.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          AI-powered speech therapy that adapts to every voice.
          Real-time analysis, personalized insights, and continuous care.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <TakeTestModal>
            <Button size="lg" className="group">
              Take Free Speech Test
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </TakeTestModal>
          <Button variant="outline" size="lg" className="border-2" onClick={handleJoinCommunity}>
            Join Community
          </Button>
        </motion.div>



      </div>

      {/* Full Width Waveform Visualization (Responsive Single Line) */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 h-40 md:h-64 w-full flex items-end justify-between px-2 gap-[1px] md:gap-1"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 2%, black 98%, transparent)' }}
      >
        {/* Labels for Mobile/Desktop context */}
        <div className="absolute top-4 left-4 md:left-10 text-[10px] md:text-xs font-bold text-zinc-400 uppercase tracking-wider z-10">
          Before Zlaqa
        </div>
        <div className="absolute top-4 right-4 md:right-10 text-[10px] md:text-xs font-bold text-[#9DDB2C] uppercase tracking-wider z-10">
          After Zlaqa
        </div>

        {[...Array(160)].map((_, i) => {
          const totalBars = 160;
          const centerIndex = totalBars / 2;

          // Smart responsive hiding:
          // Hide every 2nd bar on small screens to prevent cramping
          const isHiddenOnMobile = i % 2 !== 0;

          // Slope Logic: Taper height towards the edges to create a "Hill" or "Slope" shape
          // Center is index 80. Edge is 0/160.
          const distFromCenter = Math.abs(i - centerIndex);
          const maxDist = centerIndex; // 80

          // Identify region
          const isLeft = i < centerIndex;

          // Calculate slope factor
          let heightFactor;
          if (isLeft) {
            // Left (Chaos): Standard linear slope (1.0 -> 0.3)
            heightFactor = Math.max(0.3, 1 - (distFromCenter / maxDist));
          } else {
            // Right (Clarity): Steeper slope for "After Zlaqa" (1.0 -> 0.05)
            // Squaring the normalized distance makes it drop off faster
            const normalizedDist = distFromCenter / maxDist;
            heightFactor = Math.max(0.1, Math.pow(1 - normalizedDist, 1.5));
          }

          return (
            <motion.div
              key={i}
              className={`flex-1 rounded-t-full min-w-[2px] md:min-w-[4px] max-w-[12px] bg-black/5 ${isHiddenOnMobile ? 'hidden md:block' : 'block'}`}
              initial={{ height: '10%' }}
              animate={{
                // Chaos: reduced fluctuation start point, modulated by slope
                height: isLeft
                  ? [
                    `${20 * heightFactor}%`,
                    `${60 * heightFactor}%`,
                    `${25 * heightFactor}%`,
                    `${70 * heightFactor}%`,
                    `${30 * heightFactor}%`,
                    `${50 * heightFactor}%`,
                    `${20 * heightFactor}%`
                  ]
                  : [
                    `${15 * heightFactor}%`,
                    `${45 * heightFactor}%`,
                    `${25 * heightFactor}%`,
                    `${60 * heightFactor}%`,
                    `${15 * heightFactor}%`
                  ],

                // Chaos: Gray/Dark/Messy Green vs Clarity: Pure Brand Green
                backgroundColor: isLeft
                  ? ["rgba(0,0,0,0.1)", "rgba(100,100,100,0.2)", "rgba(0,0,0,0.15)"]
                  : ["rgba(0,0,0,0.05)", "rgba(157, 219, 44, 0.4)", "#9DDB2C", "rgba(157, 219, 44, 0.4)", "rgba(0,0,0,0.05)"]
              }}
              transition={{
                // Chaos: Slower (1.5-2.5s) vs Clarity: Very Slow/Calm (3-4s)
                duration: isLeft ? Math.random() * 1.5 + 1.0 : 3.5,
                repeat: Infinity,
                repeatType: "mirror",
                // Chaos: Random delay vs Clarity: Linear wave from center
                delay: isLeft ? Math.random() * 2 : (i - centerIndex) * 0.15,
                ease: "easeInOut"
              }}
              style={{
                marginRight: 0
              }}
            />
          );
        })}

        {/* Floating Icon - Centered over waveform */}
        <TakeTestModal>
          <div className="absolute bottom-16 md:bottom-28 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-xl shadow-2xl rounded-full p-4 border border-white/20 ring-1 ring-black/5 z-20 cursor-pointer hover:scale-110 hover:bg-[#9DDB2C] transition-all duration-300 group">
            <Mic className="w-6 h-6 md:w-8 md:h-8 text-Zlaqa-green group-hover:text-black group-hover:animate-pulse drop-shadow-sm transition-colors duration-300" />
          </div>
        </TakeTestModal>
      </motion.div>
    </section>
  );
}
