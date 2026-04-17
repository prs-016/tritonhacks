import React from "react";

const asset = (path: string) => `/assets/${path}`;

const Decoration = ({ src, className = "", style = {} }: { src: string; className?: string; style?: React.CSSProperties }) => (
  <img src={src} className={`absolute pointer-events-none drop-shadow-md object-contain ${className}`} style={style} alt="decor" draggable={false} />
);

const RansomLetter = ({ char, shapeSrc, letterSrc, className = "", style = {}, textClass = "text-black" }: { char?: string, shapeSrc?: string, letterSrc?: string, className?: string, style?: React.CSSProperties, textClass?: string }) => {
  return (
    <div className={`relative flex-shrink-0 transition-all duration-300 hover:scale-[1.3] hover:-rotate-6 cursor-pointer select-none ${className}`} style={style}>
      {letterSrc ? (
        <img src={letterSrc} className="w-full h-full object-contain filter drop-shadow hover:drop-shadow-lg" alt={char} draggable={false} />
      ) : (
        <>
          {shapeSrc && <img src={shapeSrc} className="absolute inset-0 w-full h-full object-contain filter drop-shadow hover:drop-shadow-lg" alt="bg" draggable={false} />}
          <span className={`relative z-10 flex items-center justify-center w-full h-full font-black text-center ${textClass}`} style={{ fontSize: "75%", lineHeight: 1 }}>
            {char}
          </span>
        </>
      )}
    </div>
  );
};

export const Website = (): JSX.Element => {
  return (
    <div
      className="relative w-full min-h-screen overflow-x-hidden flex justify-center bg-[#e4d5ca]"
      style={{
        backgroundImage: `url('${asset("Rectangle.png")}')`,
        backgroundSize: "600px auto",
        backgroundRepeat: "repeat",
        fontFamily: "'Shantell Sans', Helvetica, sans-serif",
      }}
    >
      <div className="relative w-full max-w-[700px] h-[2600px]">
        {/* =========================================
            HEADER & HERO SECTION
        ========================================= */}
        <div className="absolute top-0 w-full h-[600px] pointer-events-none">
          {/* Top decorations */}
          <Decoration src={asset("TritonHacks 2026_img-5/Rectangle-14.png")} className="-top-12 -right-20 w-[400px] opacity-70" style={{ transform: 'rotate(15deg)' }} />
          <Decoration src={asset("TritonHacks 2026_img-2/Rectangle-17.png")} className="-top-32 -left-20 w-[350px] opacity-90" style={{ transform: 'rotate(-10deg)' }} />
          <Decoration src={asset("TritonHacks 2026_img-3/Rectangle-4.png")} className="top-[90px] left-[180px] w-12" style={{ transform: 'rotate(10deg)' }} />
          
          <div className="absolute top-[80px] left-1/2 -ml-[230px] pointer-events-auto">
            {/* TRITONHACKS Letters */}
            <div className="flex items-center justify-center gap-1">
              <RansomLetter letterSrc={asset("TritonHacks 2026_img-2/Rectangle-15.png")} className="w-[45px] h-[55px] -rotate-3" />
              <RansomLetter letterSrc={asset("TritonHacks 2026_img-4/Rectangle-4.png")} className="w-[40px] h-[50px] rotate-6" />
              <RansomLetter shapeSrc={asset("TritonHacks 2026_img-2/Rectangle-3.png")} char="i" className="w-[30px] h-[45px] -rotate-2" textClass="text-black" />
              <RansomLetter letterSrc={asset("TritonHacks 2026_img-2/Rectangle-10.png")} className="w-[35px] h-[50px] rotate-3" />
              <RansomLetter shapeSrc={asset("TritonHacks 2026_img-2/Rectangle-6.png")} char="o" className="w-[40px] h-[45px] -rotate-6" textClass="text-orange-500" />
              <RansomLetter shapeSrc={asset("TritonHacks 2026_img-2/Rectangle-11.png")} char="n" className="w-[35px] h-[45px] rotate-1" textClass="text-rose-600" />
              <RansomLetter shapeSrc={asset("TritonHacks 2026_img-2/Rectangle-14.png")} char="H" className="w-[45px] h-[55px] -rotate-2" textClass="text-pink-600 text-xl" />
              <RansomLetter shapeSrc={asset("TritonHacks 2026_img-2/Rectangle-13.png")} char="a" className="w-[35px] h-[45px] rotate-6" textClass="text-black" />
              <RansomLetter letterSrc={asset("TritonHacks 2026_img-2/Rectangle-12.png")} className="w-[38px] h-[50px] -rotate-3" />
              <RansomLetter shapeSrc={asset("TritonHacks 2026_img-2/Rectangle-16.png")} char="k" className="w-[35px] h-[45px] rotate-2" textClass="text-black" />
              <RansomLetter shapeSrc={asset("TritonHacks 2026_img-5/Rectangle-5.png")} char="s" className="w-[45px] h-[45px] -rotate-6" textClass="text-black" />
            </div>
            
            {/* 2026 Letters */}
            <div className="flex items-center justify-center gap-0 mt-2 ml-16">
              <RansomLetter letterSrc={asset("TritonHacks 2026_img-2/Rectangle-5.png")} className="w-[50px] h-[65px] -rotate-6" />
              <RansomLetter letterSrc={asset("TritonHacks 2026_img-2/Rectangle-4.png")} className="w-[55px] h-[65px] rotate-2" />
              <RansomLetter shapeSrc={asset("TritonHacks 2026_img-2/Rectangle-11.png")} char="2" className="w-[45px] h-[60px] -rotate-3" textClass="text-purple-600 text-3xl" />
              <RansomLetter letterSrc={asset("TritonHacks 2026_img-2/Rectangle-2.png")} className="w-[45px] h-[65px] rotate-6" />
            </div>
          </div>
        </div>

        {/* =========================================
            ABOUT SECTION
        ========================================= */}
        <div className="absolute top-[400px] left-1/2 -ml-[250px] w-[500px]">
          <div className="relative transform rotate-3 hover:rotate-1 transition-transform duration-500">
            <img src={asset("TritonHacks 2026_img-3/Rectangle-6.png")} className="w-[500px] h-[250px] object-cover drop-shadow-xl" alt="Pink Paper Scrap" style={{ filter: 'drop-shadow(4px 10px 8px rgba(0,0,0,0.2))' }} />
            
            {/* White Flower decoration */}
            <Decoration src={asset("TritonHacks 2026_img-3/Rectangle-1.png")} className="w-16 h-16 absolute -bottom-6 left-12 transform -rotate-12 hover:scale-110 transition-transform" />
            <Decoration src={asset("TritonHacks 2026_img-3/Rectangle-4.png")} className="w-8 h-8 absolute bottom-6 left-2 transform hover:rotate-45 transition-transform duration-300" />
            {/* Pushpin */}
            <Decoration src={asset("TritonHacks 2026_img-3/Rectangle-2.png")} className="w-10 h-10 absolute top-4 right-20" style={{ transform: 'rotate(15deg)' }} />

            <div className="absolute inset-0 flex items-center justify-center px-12 py-8 pointer-events-none">
              <p className="text-[#333] text-lg text-center leading-[1.6] font-medium" style={{ fontFamily: 'monospace, sans-serif' }}>
                TritonHacks is a weekend-long highschool hackathon, aimed at providing equitable opportunities for students to learn CS by creating a project in teams of up to 4.
              </p>
            </div>
          </div>
        </div>

        {/* =========================================
            SPONSORS SECTION
        ========================================= */}
        <div className="absolute top-[750px] left-1/2 -ml-[300px] w-[600px] flex flex-col items-center">
          
          <div className="relative w-[340px] h-[55px] mb-8 z-20 pointer-events-auto flex items-center justify-center gap-[2px]">
            <RansomLetter shapeSrc={asset("TritonHacks 2026_img-2/Rectangle-6.png")} char="S" className="w-[45px] h-[55px] rotate-6" textClass="text-green-800 text-3xl" />
            <RansomLetter shapeSrc={asset("TritonHacks 2026_img-2/Rectangle-11.png")} char="P" className="w-[42px] h-[50px] -rotate-3" textClass="text-amber-500 text-3xl" />
            <RansomLetter shapeSrc={asset("TritonHacks 2026_img-2/Rectangle-13.png")} char="o" className="w-[38px] h-[48px] rotate-1" textClass="text-orange-700 text-3xl" />
            <RansomLetter shapeSrc={asset("TritonHacks 2026_img-2/Rectangle-14.png")} char="n" className="w-[40px] h-[55px] -rotate-6" textClass="text-blue-700 text-3xl" />
            <RansomLetter shapeSrc={asset("TritonHacks 2026_img-2/Rectangle-3.png")} char="S" className="w-[40px] h-[55px] rotate-2" textClass="text-pink-500 text-3xl" />
            <RansomLetter shapeSrc={asset("TritonHacks 2026_img-2/Rectangle-16.png")} char="O" className="w-[45px] h-[55px] -rotate-2" textClass="text-fuchsia-600 text-3xl" />
            <RansomLetter letterSrc={asset("TritonHacks 2026_img-4/Rectangle-4.png")} className="w-[42px] h-[58px] rotate-3" />
            <RansomLetter shapeSrc={asset("TritonHacks 2026_img-5/Rectangle-1.png")} char="s" className="w-[48px] h-[48px] -rotate-6" textClass="text-purple-700 text-3xl" />
          </div>

          <div className="relative w-full drop-shadow-2xl hover:-translate-y-1 transition-transform duration-500">
            {/* Lined paper base */}
            <img src={asset("TritonHacks 2026_img/Rectangle-10.png")} className="w-full h-auto object-contain" alt="White Lined Paper Scrap" />
            <Decoration src={asset("TritonHacks 2026_img/Rectangle-2.png")} className="w-8 h-8 absolute top-8 right-16 rotate-12" />

            <div className="absolute inset-0 pt-16 flex flex-col items-center pointer-events-auto">
              <div className="px-16 grid grid-cols-2 gap-x-12 gap-y-10 w-[500px]">
                <a href="#" className="flex justify-center items-center hover:scale-110 transition-transform"><img src={asset("cs foreach logo 1 [Vectorized] 1.svg")} className="max-w-[120px]" /></a>
                <a href="#" className="flex justify-center items-center hover:scale-110 transition-transform"><img src={asset("source_CSE-Icon.png")} className="max-w-[100px]" /></a>
                <a href="#" className="flex justify-center items-center hover:scale-110 transition-transform"><img src={asset("source_UCSanDiegoLogo-CREATE-1024x631-2.png")} className="max-w-[140px]" /></a>
                <a href="#" className="flex justify-center items-center hover:scale-110 transition-transform"><img src={asset("source_LOGO_stacked_w_registration_black.png")} className="max-w-[130px]" /></a>
              </div>
            </div>

            {/* Thanks Note */}
            <div className="absolute bottom-8 -right-16 w-[280px] transform rotate-6 hover:rotate-3 transition-transform duration-300">
              <img src={asset("TritonHacks 2026_img/Rectangle-7.png")} className="w-full drop-shadow-lg" alt="Tan Paper Note" />
              <Decoration src={asset("TritonHacks 2026_img/Rectangle-2.png")} className="w-6 h-6 absolute top-2 left-1/2 rotate-45" />
              <div className="absolute inset-0 p-8 flex items-center justify-center">
                <p className="text-black text-lg text-center leading-[1.3]" style={{ fontFamily: 'monospace' }}>
                  Thanks to our<br/>sponsors for making<br/>this event possible!
                </p>
              </div>
              
              {/* Butterfly sticker */}
              <img src={asset("TritonHacks 2026_img/Rectangle-5.png")} className="absolute -bottom-16 -left-6 w-32 drop-shadow-lg transform -rotate-12 hover:scale-[1.1] hover:animate-pulse transition-all cursor-pointer pointer-events-auto" alt="Butterfly" />
            </div>

            <Decoration src={asset("TritonHacks 2026_img/Rectangle-1.png")} className="absolute top-1/2 -left-12 w-20 transform -rotate-12" />
          </div>
        </div>

        {/* =========================================
            SIGN UP SECTION
        ========================================= */}
        <div className="absolute top-[1480px] left-1/2 -ml-[300px] w-[600px] flex flex-col items-center">
          
          <div className="relative w-[340px] h-[65px] mb-2 z-20 pointer-events-auto flex items-center justify-center gap-[1px]">
            <RansomLetter shapeSrc={asset("TritonHacks 2026_img-2/Rectangle-11.png")} char="s" className="w-[45px] h-[55px] rotate-3" textClass="text-blue-200 bg-blue-900 rounded-lg px-2 text-3xl" />
            <RansomLetter shapeSrc={asset("TritonHacks 2026_img-2/Rectangle-3.png")} char="i" className="w-[30px] h-[50px] -rotate-6" textClass="text-lime-500 text-3xl" />
            <RansomLetter shapeSrc={asset("TritonHacks 2026_img-2/Rectangle-14.png")} char="g" className="w-[38px] h-[48px] rotate-1" textClass="text-white text-3xl bg-purple-600 rounded px-1" />
            <RansomLetter shapeSrc={asset("TritonHacks 2026_img-2/Rectangle-13.png")} char="n" className="w-[40px] h-[55px] -rotate-6" textClass="text-rose-400 text-3xl" />
            <div className="w-[10px]" /> {/* space */}
            <RansomLetter shapeSrc={asset("TritonHacks 2026_img-2/Rectangle-16.png")} char="u" className="w-[40px] h-[55px] rotate-2" textClass="text-amber-500 text-3xl" />
            <RansomLetter shapeSrc={asset("TritonHacks 2026_img-2/Rectangle-6.png")} char="p" className="w-[45px] h-[55px] -rotate-2" textClass="text-fuchsia-600 text-3xl" />
            <RansomLetter letterSrc={asset("TritonHacks 2026_img-5/Rectangle-1.png")} className="w-[30px] h-[58px] rotate-3 -mt-2 ml-1" />
          </div>

          {/* Graph paper + deadline */}
          <div className="relative w-[500px] h-[400px] mt-8 group pointer-events-auto">
            {/* Graph Paper */}
            <div className="absolute top-10 left-0 w-[400px] transform -rotate-6 group-hover:-rotate-3 transition-transform duration-500">
              <img src={asset("TritonHacks 2026_img-5/Rectangle-12.png")} className="w-full drop-shadow-xl" alt="Graph Paper Scrap" />
              <Decoration src={asset("TritonHacks 2026_img-5/Rectangle-3.png")} className="w-8 h-8 absolute top-8 left-16 rotate-[15deg]" />
              
              {/* Text Link */}
              <div className="absolute inset-0 flex items-center justify-center pb-8 pt-4">
                <a href="#" className="relative text-black text-[38px] cursor-pointer" style={{ fontFamily: 'Shantell Sans' }}>
                  Sign up here!
                  <span className="absolute left-0 bottom-[4px] w-full h-[3px] bg-black transform -rotate-1 origin-left"></span>
                </a>
              </div>
            </div>

            {/* Green Starburst */}
            <div className="absolute -bottom-10 -right-16 w-[320px] transform rotate-12 hover:scale-105 transition-transform duration-300">
              <img src={asset("TritonHacks 2026_img-5/Rectangle-2.png")} className="w-full drop-shadow-xl" alt="Green Starburst" />
              <div className="absolute inset-0 flex items-center justify-center p-8 mt-4 ml-4">
                <p className="text-white text-[16px] text-center leading-snug font-medium">
                  Sign up<br/>deadline:<br/>April 18th<br/>11:59pm
                </p>
              </div>
            </div>

            {/* Red Star Stickers */}
            <Decoration src={asset("TritonHacks 2026_img-5/Rectangle-6.png")} className="w-24 absolute -top-4 right-10 rotate-12" />
          </div>
        </div>

        {/* Global decor placed at bottoms */}
        <Decoration src={asset("TritonHacks 2026_img-5/Rectangle-9.png")} className="bottom-[850px] right-[20%] w-[180px] -rotate-[10deg] opacity-70" />

      </div>
    </div>
  );
};