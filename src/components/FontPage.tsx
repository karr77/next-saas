'use client';
// import React, { useEffect, useState } from 'react';
// import BlurIn from "@/components/magicui/blur-in";

// const Frontpage = () => {
//     const [colorTransition, setColorTransition] = useState(false);
//     const [blurInTransition, setBlurInTransition] = useState(false);
//     const [visibleChars, setVisibleChars] = useState(0);
//     const title = "招财进宝";

//     useEffect(() => {
//         const colorTimer = setTimeout(() => setColorTransition(true), 2000);
//         const blurInTimer = setTimeout(() => setBlurInTransition(true), 4000);
//         const charInterval = setInterval(() => {
//             setVisibleChars(prev => (prev < title.length ? prev + 1 : prev));
//         }, 500);
//         return () => {
//             clearTimeout(colorTimer);
//             clearTimeout(blurInTimer);
//             clearInterval(charInterval);
//         };
//     }, []);

//     return (
//         <div className="min-h-screen flex flex-col items-center justify-center bg-black p-4">
//             <style jsx global>{`
//                 @keyframes gradientShift {
//                     0% { background-position: 0% 50%; }
//                     50% { background-position: 100% 50%; }
//                     100% { background-position: 0% 50%; }
//                 }
//                 .tech-gradient {
//                     background: linear-gradient(45deg, 
//                         rgb(27, 42, 159),
//                         rgb(112, 55, 159),
//                         rgb(18, 80, 123),
//                         rgb(73, 146, 70),
//                         rgb(212, 175, 67)
//                     );
//                     background-size: 400% 400%;
//                     -webkit-background-clip: text;
//                     background-clip: text;
//                     color: transparent;
//                     animation: gradientShift 10s ease infinite;
//                 }
//                 @keyframes popUp {
//                     0% { transform: translateY(50px); opacity: 0; }
//                     60% { transform: translateY(-20px); opacity: 1; }
//                     100% { transform: translateY(0); opacity: 1; }
//                 }
//                 .pop-up {
//                     display: inline-block;
//                     animation: popUp 0.8s ease forwards;
//                 }
//             `}</style>
//             <h1 className="text-8xl md:text-9xl lg:text-[10rem] font-bold mb-6 tracking-wider">
//                 {title.split('').map((char, index) => (
//                     <span
//                         key={index}
//                         className={`
//                             ${index < visibleChars ? 'pop-up' : 'opacity-0'}
//                             ${colorTransition && !blurInTransition ? 'tech-gradient' : ''}
//                             ${blurInTransition ? 'text-white' : 'text-[#6b7280]'}
//                         `}
//                         style={{
//                             animationDelay: `${index * 500}ms`
//                         }}
//                     >
//                         {char}
//                     </span>
//                 ))}
//             </h1>
//             {blurInTransition ? (
//                 <BlurIn
//                     word="Good Tech Good Money"
//                     className="text-4xl md:text-3xl lg:text-4xl font-semibold text-white"
//                 />
//             ) : (
//                 <p
//                     className={`text-4xl md:text-3xl lg:text-4xl font-semibold ${colorTransition ? 'tech-gradient' : 'text-[#6b7280]'}`}
//                     style={{
//                         animation: colorTransition ? 'popUp 1s ease forwards' : 'none',
//                         opacity: colorTransition ? 1 : 0,
//                         animationDelay: '2s'
//                     }}
//                 >
//                     Good Tech Good Money
//                 </p>
//             )}
//         </div>
//     );
// };

// export default Frontpage;
import React, { useState, useEffect } from 'react';
import WordPullUp from "@/components/magicui/word-pull-up";

const Frontpage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4 relative overflow-hidden">
      <img
        src="/images/1.png"
        alt="Mesh background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <style jsx global>{`
        @keyframes subtle-glow {
          0%, 100% {
            filter: drop-shadow(0 0 2px rgba(148, 97, 216, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 4px rgba(95, 117, 240, 0.4));
          }
        }
        .subtle-glow-effect {
          animation: subtle-glow 3s ease-in-out infinite;
        }
        .text-content {
          transition: opacity 2s ease;
        }
        .gradient-text {
          background-image: linear-gradient(45deg, #46dcf9, #46dcf9,#3a93fc,#a64dff,#fe5d3e, #ff6600,#fe363e);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: #9461d8; /* Fallback color */
        }
      `}</style>
      <div className={`text-content ${isVisible ? 'opacity-100' : 'opacity-0'} relative z-10`}>
        <WordPullUp
          className="text-8xl md:text-9xl lg:text-[10rem] font-bold mb-6 tracking-wider subtle-glow-effect gradient-text"
          words="招 财 进 宝"
        />
      </div>
      <div className={`text-content ${isVisible ? 'opacity-100' : 'opacity-0'} relative z-10`}>
        <WordPullUp
          className="text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 subtle-glow-effect gradient-text"
          words="Good Tech Good Money"
        />
      </div>
    </div>
  );
};

export default Frontpage;