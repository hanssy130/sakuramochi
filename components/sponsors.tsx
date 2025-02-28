import Image from "next/image";

const sponsors = [
    { src: "/logo-teadot.png", alt: "Teadot Logo", link:"https://www.teadotdrinks.com/" },
    { src: "/logo-xppen.png", alt: "XP Pen Logo", link:"https://www.xp-pen.com/" },
    { src: "/logo-huion.jpg", alt: "Huion Logo", link:"https://huion.com/" },
    
];

export function Sponsors() {
  return (
    <div className="max-w-[90rem] font-sans text-black text-lg px-4 mb-24 lg:mb-0 lg:px-8 mx-auto">
      <div className="flex flex-col items-center mb-14">
        <h2 className="text-5xl md:text-6xl uppercase font-display-en font-bold lg:text-7xl md:leading-tight">
          Sponsorships
        </h2>
        <p className="text-xl">
          A massive thank you to our sponsors for their support. Please check them out!
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 mt-6">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="border-grey border-2 relative p-4 overflow-hidden ease-in-out rounded-xl"
            >
              <a href={sponsor.link}><Image
                src={sponsor.src}
                alt={sponsor.alt}
                width={150}
                height={150}
                className="w-32 h-32 md:w-80 md:h-80 object-contain"
              />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}