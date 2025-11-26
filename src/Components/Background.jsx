import React from 'react';

const Background = () => {
    return (
        <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
            {/* Base gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black" />
            
            {/* Subtle radial gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-radial from-blue-950/20 via-transparent to-transparent" 
                 style={{
                     backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.08), transparent 50%), radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.06), transparent 50%)'
                 }} />
            
            {/* Static grid pattern - no animation */}
            <div className="absolute inset-0 opacity-[0.15]">
                <div className="w-full h-full" 
                     style={{
                         backgroundImage: `
                             linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)
                         `,
                         backgroundSize: '80px 80px',
                     }} />
            </div>
            
            {/* Minimal accent lines - static positioning */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
                <div className="absolute top-2/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
                <div className="absolute left-1/4 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
            </div>
            
            {/* Minimal floating elements with single, slow animation */}
            <div className="absolute top-20 right-20 w-2 h-2 bg-cyan-400/60 rounded-full animate-pulse" 
                 style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-32 left-32 w-2 h-2 bg-purple-400/60 rounded-full animate-pulse" 
                 style={{ animationDuration: '5s', animationDelay: '1s' }} />
            <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-400/60 rounded-full animate-pulse" 
                 style={{ animationDuration: '6s', animationDelay: '2s' }} />
            
            {/* Subtle noise texture overlay for visual interest */}
            <div className="absolute inset-0 opacity-[0.03]" 
                 style={{
                     backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                 }} />
        </div>
    );
};

export default Background;