import { useEffect, useState } from 'react'

export default function Component() {
    const [showText, setShowText] = useState(false)
    const [colorTransition, setColorTransition] = useState(false)

    useEffect(() => {
        const textTimer = setTimeout(() => setShowText(true), 500)
        const colorTimer = setTimeout(() => setColorTransition(true), 2000)

        return () => {
            clearTimeout(textTimer)
            clearTimeout(colorTimer)
        }
    }, [])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black p-4">
            <style jsx global>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .tech-gradient {
          background: linear-gradient(45deg, #ff00ff, #00ffff, #00ff00);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradientShift 5s ease infinite;
          text-shadow: 0 0 10px rgba(255,255,255,0.5);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
            <h1
                className={`text-7xl md:text-8xl lg:text-9xl font-bold mb-6 transition-opacity duration-1000 ${showText ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                {[..."招财进宝"].map((char, index) => (
                    <span
                        key={index}
                        className={`inline-block transition-all duration-500 ${colorTransition ? 'tech-gradient' : 'text-[#6b7280]'
                            }`}
                        style={{
                            transitionDelay: colorTransition ? `${index * 100}ms` : '0ms'
                        }}
                    >
                        {char}
                    </span>
                ))}
            </h1>
            <p
                className={`text-2xl md:text-3xl lg:text-4xl font-semibold ${colorTransition ? 'tech-gradient' : 'text-[#6b7280]'
                    }`}
                style={{
                    animation: colorTransition ? 'fadeInUp 1s ease forwards' : 'none',
                    opacity: colorTransition ? 1 : 0
                }}
            >
                Good Tech Good Money
            </p>
        </div>
    )
}