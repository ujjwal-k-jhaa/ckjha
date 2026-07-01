import React from "react";

export function Gallery() {
  const row1 = [
    "https://i.ibb.co/cKPPjj65/1.png",
    "https://i.ibb.co/hvdvgMp/2.png",
    "https://i.ibb.co/0prWRFsk/Untitled-design-1.png",
    "https://i.ibb.co/HpXKwzfW/4.png",
    "https://i.ibb.co/Ld17JhY0/5.png",
  ];

  const row2 = [
    "https://i.ibb.co/d0XGJKh4/6.png",
    "https://i.ibb.co/fG1hmnxh/7.png",
    "https://i.ibb.co/FkxVTvjH/8.png",
    "https://i.ibb.co/5X0cQY2f/9.png",
    "https://i.ibb.co/zTQ8jh6T/Untitled-design.png",
  ];

  // Duplicate 6 times to ensure the container is wide enough for seamless looping on ultra-wide screens
  const multipliedRow1 = [...row1, ...row1, ...row1, ...row1, ...row1, ...row1];
  const multipliedRow2 = [...row2, ...row2, ...row2, ...row2, ...row2, ...row2];

  return (
    <section className="py-20 overflow-hidden w-full flex flex-col gap-0 relative z-10">
      {/* Row 1: Left to Right */}
      <div className="relative w-full flex overflow-hidden">
        <div className="flex w-max animate-marquee-reverse">
          {multipliedRow1.map((src, idx) => (
            <div key={idx} className="h-[200px] sm:h-[300px] w-auto flex-none flex items-center justify-center">
              <img
                src={src}
                alt="Website preview"
                className="h-full w-auto object-contain pointer-events-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Right to Left */}
      <div className="relative w-full flex overflow-hidden">
        <div className="flex w-max animate-marquee">
          {multipliedRow2.map((src, idx) => (
            <div key={idx} className="h-[200px] sm:h-[300px] w-auto flex-none flex items-center justify-center">
              <img
                src={src}
                alt="Website preview"
                className="h-full w-auto object-contain pointer-events-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
