// 'use client';
// import React from 'react';

// const Hero = () => {
//     return (
//         <div className="relative flex flex-col justify-center items-center text-center overflow-hidden">
//             {/* <video
//                 className="absolute top-0 left-0 w-full h-full object-cover"
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//             >
//                 <source src="/images/spline/interactive-color-blob.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video> */}
//             <div className="relative z-10">
//                 <h2 className="text-8xl font-bold text-white mb-10 ">
//                     招财进宝
//                 </h2>
//                 <p className="text-3xl text-white max-w-3xl mx-auto">
//                     AI驱动的全方位自媒体解决方案，让您的账号快速增长，内容创作效率倍增！
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Hero;
import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 1000); // 1秒后显示文字

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative flex flex-col justify-center items-center min-h-screen text-center overflow-hidden">
            <img
                src="/images/1.png"
                alt="Mesh background"
                className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className={`relative z-10 ${showContent ? 'animate-fadeIn' : ''}`}>
                <h2 className="text-[9rem] font-bold gradient-text mb-4">
                    招财进宝
                </h2>
                <p className="text-3xl text-white max-w-3xl mx-auto leading-relaxed">
                    AI驱动的全方位自媒体解决方案，让您的账号快速增长，内容创作效率倍增！
                </p>
            </div>
            <style jsx>{`
                .gradient-text {
                    background-image: linear-gradient(45deg, #46dcf9, #46dcf9,#3a93fc,#a64dff,#fe5d3e, #ff6600,#fe363e);
                    -webkit-background-clip: text;
                    background-clip: text;
                    letter-spacing: 0.03em;
                    color: transparent;
                    -webkit-text-fill-color: transparent;
                }
                .animate-fadeIn {
                    animation: fadeIn 2s ease-out forwards;
                }
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
};

export default Hero;
