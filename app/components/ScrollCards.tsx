"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- MOCKUP COMPONENTS (Visuals) ---

// Placeholder/Generic Mockup
const GenericMockup = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <div className="text-gray-300 font-bold text-lg">Visual Mockup</div>
  </div>
);

const ProductMockup = () => (
  <div className="relative w-full h-full flex flex-col justify-end items-center overflow-hidden">
    {/* Phone-like interface mockup */}
    <div className="w-[80%] max-w-[300px] bg-white rounded-t-[3rem] shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.3)] p-6 pb-0 relative z-10 translate-y-4">
        <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-8"></div>
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-xl">🔥</div>
                <div className="text-right">
                    <div className="h-2 w-16 bg-gray-100 rounded mb-1 ml-auto"></div>
                    <div className="h-4 w-24 bg-gray-800 rounded ml-auto"></div>
                </div>
            </div>
            <div className="h-32 bg-gray-50 rounded-3xl border border-gray-100 p-4">
                <div className="flex gap-2 mb-3">
                     <div className="w-3 h-3 rounded-full bg-red-400"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded mb-2"></div>
                <div className="h-2 w-2/3 bg-gray-200 rounded"></div>
            </div>
        </div>
    </div>
    {/* Background Card */}
    <div className="absolute bottom-0 w-[90%] max-w-[340px] h-[60%] bg-gray-900 rounded-t-[3.5rem] opacity-40 scale-95 -z-0 translate-y-8"></div>
  </div>
);

const WebMockup = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="w-full max-w-[400px] bg-white rounded-xl overflow-hidden shadow-2xl border border-white/10">
        <div className="bg-[#f0f0f0] px-4 py-3 border-b border-gray-200 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="p-6 bg-slate-50 min-h-[240px]">
             <div className="flex justify-between items-end mb-8">
                <div className="font-black text-3xl text-slate-900">MEKA</div>
                <div className="flex gap-2">
                    <div className="w-8 h-1 bg-slate-900"></div>
                    <div className="w-8 h-1 bg-slate-900"></div>
                </div>
             </div>
             <div className="grid grid-cols-2 gap-4">
                <div className="h-32 bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="h-32 bg-gray-300 rounded-lg animate-pulse"></div>
             </div>
        </div>
    </div>
  </div>
);

const DeckMockup = () => (
  <div className="relative w-full h-full flex items-center justify-center">
     <div className="relative w-[320px] h-[220px]">
         <div className="absolute inset-0 bg-[#3D2818] rounded-lg transform rotate-[-6deg] opacity-60"></div>
         <div className="absolute inset-0 bg-[#5C3D26] rounded-lg transform rotate-[-3deg] opacity-80"></div>
         <div className="absolute inset-0 bg-white rounded-lg shadow-xl flex flex-col p-8 transform rotate-0">
            <div className="text-xs font-bold text-gray-400 tracking-widest mb-auto">INVESTOR DECK</div>
            <div>
                <div className="text-4xl font-black text-gray-900 mb-2">10x</div>
                <div className="text-lg text-gray-600 leading-tight">Year over year<br/>growth strategy.</div>
            </div>
            <div className="w-full h-1 bg-orange-500 mt-6"></div>
         </div>
     </div>
  </div>
);

// --- CUSTOM COMPONENTS FOR CARD 01 ---

const JawsGroupTestimonial = () => (
    <div className="mt-16 pt-12 border-t border-white/20 max-w-lg">
        <p className="text-sm opacity-90 leading-relaxed mb-4">
            Working with Brand Appart has been an absolute pleasure. 
        </p>
        <div className="flex items-center gap-3">
             {/* Placeholder for Jérémy Bendayan's avatar */}
             <div className="w-10 h-10 rounded-full bg-slate-500 flex-shrink-0 flex items-center justify-center text-xs font-bold text-white">JB</div> 
            <div>
                <div className="font-semibold text-sm">Jérémy Bendayan</div>
                <div className="text-xs opacity-70">Co-founder & COO @Jaws Group</div>
            </div>
        </div>
    </div>
);


const BrandingLogoStrip = () => (
    <>
        {/* The Logo Grid - spans the width of the card's bottom section */}
        <div className="absolute bottom-[80px] left-0 right-0 h-auto flex items-end justify-start z-30 px-8 lg:px-16">
            <div className="grid grid-cols-4 gap-4 w-full max-w-[900px] lg:max-w-none lg:w-3/4 ml-auto">
                 {/* INE Logo */}
                 <div className="aspect-square bg-[#C4F949] rounded-2xl flex items-center justify-center shadow-xl">
                    <div className="w-3/4 h-8 bg-black rounded-lg"></div> 
                 </div>
                 {/* Important House Logo */}
                 <div className="aspect-square bg-[#FFEDE0] rounded-2xl flex items-center justify-center text-[#5C3D26] text-xs md:text-sm font-serif p-2 text-center leading-tight shadow-xl">
                    <span className="font-bold text-sm lg:text-lg">IMPORTANT</span> <br/> <span className="font-bold text-sm lg:text-lg">HOUSE</span>
                 </div>
                 {/* Zio Logo */}
                 <div className="aspect-square bg-[#FFDF4D] rounded-2xl flex items-center justify-center shadow-xl">
                    <svg className="w-10 h-10 lg:w-12 lg:h-12" viewBox="0 0 48 48" fill="#3D2818" stroke="none"><path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zM18 18c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm12 0c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-6 10c-3.31 0-6 2.69-6 6h12c0-3.31-2.69-6-6-6z"/></svg>
                 </div>
                 {/* Fourth Logo (Orange/Red) */}
                 <div className="aspect-square bg-[#7F2A2A] rounded-2xl flex items-center justify-center shadow-xl">
                    <svg className="w-10 h-10 lg:w-12 lg:h-12 rotate-[-15deg]" viewBox="0 0 24 24" fill="#FF5722" stroke="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                 </div>
            </div>
        </div>
        
        {/* The call-to-action bar from the image - positioned further down, overlapping the bottom edge */}
        <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[90%] max-w-[1000px] h-20 bg-white rounded-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] p-4 flex items-center justify-between z-40">
            <span className="font-semibold text-gray-800 text-sm md:text-lg ml-4">Book a free discovery call</span>
            <button className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-black text-white rounded-lg font-bold text-sm md:text-base whitespace-nowrap">
                BOOK A CALL 
                <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-sm ml-1">📞</span>
            </button>
        </div>
    </>
);


// --- DATA ---

const cards = [
  {
    id: "01",
    title: "Branding that drives conversion & funding.",
    desc: "We clarify your positioning, define a distinctive tone of voice, and build a visual system that works across acquisition and product. Each sprint ships a robust logo, pragmatic brand guidelines, and a social kit so you can launch fast. The goal is simple: perceived value up.", // Updated with full text from the image
    bgClass: "bg-[#2D1B69]", // Deep Purple/Indigo
    textClass: "text-white",
    buttonClass: "bg-white text-[#2D1B69]",
    Mockup: GenericMockup, // Keeping Mockup for the data structure, but will override the render
  },
  {
    id: "02",
    title: "Product experiences users adopt & keep using.",
    desc: "We start from business goals, map the critical journeys, and prototype what actually moves the needle. Every sprint ships clear flows, a reusable UI library, and a dev-ready design.",
    bgClass: "bg-[#FF5500]", // Vibrant Orange
    textClass: "text-white",
    buttonClass: "bg-white text-[#FF5500]",
    Mockup: ProductMockup,
  },
  {
    id: "03",
    title: "Web Design for growing teams & business.",
    desc: "We align messaging, page architecture, and UI. You get clear structure, sections. The site loads fast, tells the right story, and pushes to action without dev firefighting.",
    bgClass: "bg-[#B91C1C]", // Deep Red
    textClass: "text-white",
    buttonClass: "bg-white text-[#B91C1C]",
    Mockup: WebMockup,
  },
  {
    id: "04",
    title: "Investor-proof decks that raise faster.",
    desc: "We craft the narrative that gets meetings and a precise ask. Design serves the story: readable numbers, rhythm across slides, and versions for teaser/one-pager.",
    bgClass: "bg-[#4A3728]", // Brown/Earth
    textClass: "text-white",
    buttonClass: "bg-white text-[#4A3728]",
    Mockup: DeckMockup,
  },
];

// --- MAIN COMPONENT ---

export default function WhatWeShip() {
  const componentRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  // Cursor Refs
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorLabelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- SETUP ---
      const cards = cardsRef.current.filter(Boolean);
      const totalCards = cards.length;
      
      // Pinning distance: Height of window * number of cards (gives enough scroll room)
      const scrollDistance = window.innerHeight * (totalCards + 0.5);

      // --- TIMELINE ---
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: "top top",
          end: `+=${scrollDistance}`,
          pin: true,
          scrub: 1, 
          anticipatePin: 1,
        }
      });

      // 1. Header Animation: Scales down and fades out as first card arrives
      tl.to(headerRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
      }, 0);

      // 2. Cards Stacking Animation
      cards.forEach((card, index) => {
        // Ensure cards start well below the fold (except potentially the first one if we wanted it visible earlier, but here we want them all to slide up)
        gsap.set(card, { 
             yPercent: 110, 
             rotateX: -5, // Slight tilt for 3D feel entry
             opacity: 1 
        });
        
        const position = index * 1; // Stagger the start times on the timeline

        // Slide Card Up
        tl.to(card, {
            yPercent: 0,
            rotateX: 0,
            duration: 1,
            ease: "power2.out"
        }, position);

        // If it's not the last card, scale it down when the NEXT card comes in
        if (index !== totalCards - 1) {
            tl.to(card, {
                scale: 0.95,
                filter: "brightness(0.6)", // Darken it to simulate shadow/depth
                yPercent: -5, // Move slightly up to enhance stacking effect
                duration: 1,
                ease: "power2.out"
            }, position + 1); // Start exactly when next card starts entering
        }
      });

      // --- CURSOR ANIMATION ---
      const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.15, ease: "power3" });
      const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.15, ease: "power3" });
      
      const handleMouseMove = (e: MouseEvent) => {
        xTo(e.clientX);
        yTo(e.clientY);
      };

      window.addEventListener("mousemove", handleMouseMove);
      
      return () => {
          window.removeEventListener("mousemove", handleMouseMove);
      };

    }, componentRef);

    return () => ctx.revert();
  }, []);

  // Cursor Hover Effects
  const onMouseEnterCard = () => {
    if(cursorLabelRef.current && cursorRef.current) {
        gsap.to(cursorRef.current, { scale: 1, opacity: 1, duration: 0.3 });
    }
  };

  const onMouseLeaveCard = () => {
    if(cursorLabelRef.current && cursorRef.current) {
        gsap.to(cursorRef.current, { scale: 0, opacity: 0, duration: 0.3 });
    }
  };

  return (
    <section className="relative bg-[#FDFCF6] text-slate-900 overflow-x-hidden">
      
      {/* --- CUSTOM CURSOR COMPONENT --- */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-auto h-auto z-[9999] pointer-events-none flex items-center justify-center -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0"
      >
        <div ref={cursorLabelRef} className="bg-white text-black px-5 py-3 rounded-full shadow-2xl border border-black/5 flex items-center gap-2 whitespace-nowrap">
           <span className="font-bold text-sm tracking-wide">See our case studies</span>
           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </div>
      </div>

      {/* --- PINNED SCROLL SECTION --- */}
      <div ref={componentRef} className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden perspective-[1000px]">
        
        {/* 1. BIG TITLE (Background) */}
      ""

        {/* 2. STACKING CARDS CONTAINER */}
        <div ref={sliderRef} className="relative w-full max-w-[1200px] h-[90vh] md:h-[80vh] px-4 md:px-6 z-10 mt-[10vh]">
            {cards.map((card, index) => (
                <div
                    key={card.id}
                    ref={(el) => { cardsRef.current[index] = el; }}
                    onMouseEnter={onMouseEnterCard}
                    onMouseLeave={onMouseLeaveCard}
                    className={`absolute top-0 left-0 w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl ${card.bgClass} ${card.textClass} origin-bottom`}
                    style={{ willChange: "transform" }}
                >
                     {/* Card Content Layout */}
                    <div className="w-full h-full flex flex-col lg:flex-row">
                        
                        {/* Left: Text Content (Full width on mobile, wider on desktop for card 01) */}
                        <div className={`w-full ${card.id === "01" ? 'lg:w-[65%]' : 'lg:w-1/2'} p-8 md:p-12 lg:p-16 flex flex-col justify-between relative z-20`}>
                             <div>
                                 <div className="flex justify-between items-center mb-6">
                                     <div className="inline-block opacity-50 text-lg font-mono">
                                         ({card.id})
                                     </div>
                                     {/* Case Study Button for card 01 (Desktop) */}
                                     {card.id === "01" && (
                                         <button 
                                            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm bg-white text-[#2D1B69] hover:opacity-90 transition-opacity whitespace-nowrap"
                                            style={{ 
                                                boxShadow: '0 4px 15px rgba(0,0,0,0.2)' 
                                            }}
                                         >
                                             SEE OUR CASE STUDIES <span className="text-xl">→</span>
                                         </button>
                                     )}
                                     {card.id !== "01" && (
                                         <button 
                                             className={`md:hidden flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm ${card.buttonClass}`}
                                         >
                                             CASE STUDY <span className="text-xl">→</span>
                                         </button>
                                     )}
                                 </div>
                                 
                                 <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-8 max-w-lg">
                                     {card.title}
                                 </h3>
                                 <p className="text-lg md:text-xl opacity-80 leading-relaxed max-w-lg">
                                     {card.desc}
                                 </p>
                                 
                                 {/* Testimonial for Card 01 */}
                                 {card.id === "01" && <JawsGroupTestimonial />}
                             </div>

                             {/* Mobile Case Study Button for card 01 at the bottom of the text block */}
                             {card.id === "01" && (
                                 <div className="mt-8 lg:hidden">
                                     <button className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm ${card.buttonClass}`}>
                                         SEE OUR CASE STUDIES <span className="text-xl">→</span>
                                     </button>
                                 </div>
                             )}
                        </div>

                        {/* Right: Visual Mockup / Empty Space */}
                        <div className={`w-full ${card.id === "01" ? 'lg:w-[35%]' : 'lg:w-1/2'} h-[40%] lg:h-full relative p-6 md:p-10 flex items-center justify-center`}>
                            {card.id !== "01" && <card.Mockup />}
                            {/* Card 01's right side is kept minimal/empty to align the logo strip visually */}
                        </div>
                    </div>

                    {/* Full-width Logo Strip & CTA for Card 01 */}
                    {card.id === "01" && <BrandingLogoStrip />}

                </div>
            ))}
        </div>
      </div>

      {/* --- NEXT SECTION (Trusted By) --- */}
      <div className="relative z-20 bg-[#FDFCF6] pt-32 pb-32 border-t border-stone-200">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-6">
                Ecosystem
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight">
                    Trusted by
                </h2>
                <div className="flex items-center gap-3 px-6 py-2 bg-orange-100/50 rounded-full border border-orange-100">
                    <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-orange-500 tracking-tight">+40</span>
                    <span className="text-xl md:text-3xl font-bold text-slate-900 mt-2">founders</span>
                </div>
            </div>
            
            {/* Decorative line connecting sections */}
            <div className="w-px h-24 bg-gradient-to-b from-stone-300 to-transparent mx-auto mt-16"></div>
         </div>
      </div>

    </section>
  );
}