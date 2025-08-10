import React from 'react';

const TechBackground = () => {
    return (
        <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none bg-black">
            {/* Matrix-style digital rain */}
            <div className="absolute inset-0 opacity-20">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={`rain-${i}`}
                        className="absolute top-0 text-green-400 text-xs font-mono animate-pulse"
                        style={{
                            left: `${(i * 5)}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${4 + Math.random() * 2}s`,
                            transform: `translateY(-20px)`,
                            animation: `matrixRain ${4 + Math.random() * 2}s linear infinite`,
                        }}
                    >
                        {['1', '0', '{', '}', '<', '>', '/', '*', '+', '-', '='].map((char, idx) => (
                            <div key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
                                {char}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Floating code brackets and symbols */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-16 text-6xl text-blue-500 font-mono animate-bounce" 
                     style={{ animationDuration: '8s', animationDelay: '0s' }}>
                    {'{}'}
                </div>
                
                <div className="absolute top-40 right-20 text-4xl text-cyan-400 font-mono animate-bounce" 
                     style={{ animationDuration: '6s', animationDelay: '2s' }}>
                    {'</>'}
                </div>
                
                <div className="absolute bottom-32 left-32 text-5xl text-purple-500 font-mono animate-bounce" 
                     style={{ animationDuration: '10s', animationDelay: '1s' }}>
                    {'[]'}
                </div>
                
                <div className="absolute bottom-20 right-40 text-3xl text-green-400 font-mono animate-bounce" 
                     style={{ animationDuration: '7s', animationDelay: '3s' }}>
                    {'()'}
                </div>
            </div>

            {/* Glowing tech orbs with gradient borders */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full border-2 border-cyan-500 animate-pulse"
                     style={{ 
                         background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1), transparent)',
                         boxShadow: '0 0 60px rgba(6, 182, 212, 0.3)',
                         animationDuration: '4s'
                     }} />
                
                <div className="absolute top-1/2 right-1/4 w-60 h-60 rounded-full border-2 border-purple-500 animate-pulse"
                     style={{ 
                         background: 'radial-gradient(circle, rgba(147, 51, 234, 0.1), transparent)',
                         boxShadow: '0 0 50px rgba(147, 51, 234, 0.3)',
                         animationDuration: '6s',
                         animationDelay: '2s'
                     }} />
                
                <div className="absolute bottom-1/4 left-1/2 w-72 h-72 rounded-full border-2 border-green-500 animate-pulse"
                     style={{ 
                         background: 'radial-gradient(circle, rgba(34, 197, 94, 0.1), transparent)',
                         boxShadow: '0 0 55px rgba(34, 197, 94, 0.3)',
                         animationDuration: '8s',
                         animationDelay: '4s'
                     }} />
            </div>

            {/* Circuit board patterns */}
            <div className="absolute inset-0 opacity-15">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
                            <g stroke="#22d3ee" strokeWidth="1" fill="none">
                                <path d="M0 20 L20 20 L20 40 L40 40 L40 60 L60 60 L60 80 L80 80"/>
                                <path d="M20 0 L20 20 M40 20 L40 40 M60 40 L60 60 M80 60 L80 80"/>
                                <circle cx="20" cy="20" r="2" fill="#22d3ee"/>
                                <circle cx="40" cy="40" r="2" fill="#22d3ee"/>
                                <circle cx="60" cy="60" r="2" fill="#22d3ee"/>
                                <circle cx="80" cy="80" r="2" fill="#22d3ee"/>
                            </g>
                        </pattern>
                        <pattern id="circuit2" width="80" height="80" patternUnits="userSpaceOnUse">
                            <g stroke="#8b5cf6" strokeWidth="1" fill="none">
                                <path d="M0 0 L80 80 M80 0 L0 80"/>
                                <circle cx="40" cy="40" r="3" fill="#8b5cf6"/>
                            </g>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuit)" className="animate-pulse" 
                          style={{ animationDuration: '3s' }}/>
                    <rect width="100%" height="100%" fill="url(#circuit2)" className="animate-pulse" 
                          style={{ animationDuration: '5s', animationDelay: '1s' }}/>
                </svg>
            </div>

            {/* Hexagonal tech elements */}
            <div className="absolute inset-0 opacity-25">
                <div className="absolute top-32 left-20 w-24 h-24 border-2 border-blue-400 rotate-45 animate-spin"
                     style={{ 
                         clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                         animationDuration: '15s'
                     }} />
                
                <div className="absolute bottom-40 right-16 w-32 h-32 border-2 border-green-400 rotate-12 animate-spin"
                     style={{ 
                         clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                         animationDuration: '20s',
                         animationDirection: 'reverse'
                     }} />
                
                <div className="absolute top-1/2 left-1/3 w-20 h-20 border-2 border-purple-400 rotate-90 animate-spin"
                     style={{ 
                         clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                         animationDuration: '12s'
                     }} />
            </div>

            {/* Binary code streams */}
            <div className="absolute inset-0 opacity-20">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={`binary-${i}`}
                        className="absolute text-xs font-mono text-cyan-300 animate-pulse"
                        style={{
                            top: `${10 + (i * 12)}%`,
                            right: `${5 + (i * 8)}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: `${2 + Math.random() * 2}s`,
                        }}
                    >
                        {'10110100101'.split('').map((bit, idx) => (
                            <span key={idx} className="block leading-tight">
                                {Math.random() > 0.5 ? '1' : '0'}
                            </span>
                        ))}
                    </div>
                ))}
            </div>

            {/* Glowing network nodes */}
            <div className="absolute inset-0 opacity-30">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>
                    
                    {/* Network connections */}
                    <g stroke="#22d3ee" strokeWidth="1" fill="none" className="animate-pulse">
                        <line x1="20%" y1="30%" x2="80%" y2="20%" />
                        <line x1="80%" y1="20%" x2="60%" y2="70%" />
                        <line x1="60%" y1="70%" x2="15%" y2="80%" />
                        <line x1="15%" y1="80%" x2="40%" y2="50%" />
                        <line x1="40%" y1="50%" x2="20%" y2="30%" />
                    </g>
                    
                    {/* Nodes */}
                    <g fill="#22d3ee" filter="url(#glow)">
                        <circle cx="20%" cy="30%" r="4" className="animate-ping" style={{ animationDuration: '2s' }}/>
                        <circle cx="80%" cy="20%" r="4" className="animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }}/>
                        <circle cx="60%" cy="70%" r="4" className="animate-ping" style={{ animationDuration: '2.5s', animationDelay: '1s' }}/>
                        <circle cx="15%" cy="80%" r="4" className="animate-ping" style={{ animationDuration: '4s', animationDelay: '1.5s' }}/>
                        <circle cx="40%" cy="50%" r="4" className="animate-ping" style={{ animationDuration: '3.5s', animationDelay: '2s' }}/>
                    </g>
                </svg>
            </div>

            {/* Tech terminal windows */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-16 right-32 w-40 h-24 bg-gray-900 border border-green-500 rounded text-xs font-mono p-2">
                    <div className="text-green-400 animate-pulse">
                        <div>$ npm install</div>
                        <div>$ git commit -m</div>
                        <div>$ docker build</div>
                    </div>
                </div>
                
                <div className="absolute bottom-24 left-16 w-36 h-20 bg-gray-900 border border-blue-500 rounded text-xs font-mono p-2">
                    <div className="text-blue-400 animate-pulse">
                        <div>const app = ()</div>
                        <div>{'=> {'}</div>
                        <div>return jsx</div>
                    </div>
                </div>
            </div>

            {/* Flowing data particles */}
            <div className="absolute inset-0 opacity-40">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={`particle-${i}`}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 4}s`,
                            animationDuration: `${2 + Math.random() * 3}s`,
                            boxShadow: '0 0 4px rgba(34, 211, 238, 0.8)',
                        }}
                    />
                ))}
            </div>

            {/* Gradient overlays for depth */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/10 to-black/40" />
            
            {/* Subtle noise for texture */}
            <div className="absolute inset-0 opacity-[0.02]" 
                 style={{
                     backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' fill='white'/%3E%3C/svg%3E")`,
                 }} />

            {/* Custom animations */}
            
        </div>
    );
};

export default TechBackground;