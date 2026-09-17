"use client";
import Image from "next/image";
import { useEffect, useState, useRef, useMemo } from "react";
import RoseHeroTemp from "@/app/components/RoseHeroTemp";
import CoupleMessage from "@/app/components/CoupleMessage";
import IntroVideo from "@/app/components/IntroVideo";
// import MarriageCountdown from "@/app/components/MarriageCountdown";

const FloatingLamp = ({ className, style, reverse = false }: { className: string; style?: React.CSSProperties; reverse?: boolean }) => {
  // Memoize random values to prevent recalculation on re-renders
  const lampValues = useMemo(() => {
    // const duration = 60 + Math.random() * 40; // 60–100s (very slow flow)
    // const duration = 40 + Math.random() * 10; // 40–50s
    const duration = 60 + Math.random() * 10; // 60–70s
    const delay = Math.random() * 15;

    // depth feel - dramatic size variety
    const scale = Math.random() < 0.5
      ? 0.3 + Math.random() * 0.4  // 0.3–0.7 (small lamps)
      : 1.2 + Math.random() * 0.8; // 1.2–2.0 (large lamps)
    const blur = scale < 0.7 ? "blur(1.5px)" : "blur(0px)";

    return { duration, delay, scale, blur };
  }, []); // Empty dependency array means these values are calculated only once

  return (
    <img
      src="/flower_petals.webp"
      alt="petal"
      className={`floating-lamp ${className}`}
      style={{
        animationName: reverse ? 'lampFlowReverse' : 'lampFlow',
        animationDuration: `${lampValues.duration}s`,
        animationDelay: `${lampValues.delay}s`,
        transform: `scale(${lampValues.scale})`,
        filter: `drop-shadow(0 0 18px rgba(255,180,90,0.9)) ${lampValues.blur}`,
        '--scale': lampValues.scale,
        ...style,
      } as React.CSSProperties}
    />
  );
};

export default function Home() {
  const events = [
    // {
    //   title_ceremony: "Mehendi",
    //   image: "/assets/Mehendi.webp",
    //   venue_address: <>Wednesday, December 2nd 2026 <br /> Join Us at 11 am <br /> The Leela Palace, Udaipur</>,
    //   link: "https://maps.app.goo.gl/53z68ksx4cYgoNm59",
    // },

    // {
    //   title_ceremony: "Haldi",
    //   image: "/assets/Haldi.webp",
    //   venue_address: <>Saturday, April 18th 2026 <br /> Join Us at 11 am <br /> The Leela Palace, Udaipur</>,
    //   link: "https://maps.app.goo.gl/ywMPWwHjbXvqwiWc8",
    // },
    
    // {
    //   title_ceremony: "Cocktail",
    //   image: "/assets/Cocktail.webp",
    //   venue_address: <>Saturday, April 18th 2026 <br /> Join Us at 11 am <br /> The Leela Palace, Udaipur</>,
    //   link: "https://maps.app.goo.gl/f599YkTSEYKDEK5L7",
    // },

    // {
    //   title_ceremony: "Shagan + Sufi",
    //   image: "/assets/Engagement.webp",
    //   venue_address: <>Wednesday, December 2nd 2026 <br /> Join Us at 11 am <br /> The Leela Palace, Udaipur</>,
    //   link: "https://maps.app.goo.gl/53z68ksx4cYgoNm59",
    // },

    //  {
    //   title_ceremony: "Haldi",
    //   image: "/assets/Haldi.webp",
    //   venue_address: <>Saturday, April 18th 2026 <br /> Join Us at 11 am <br /> The Leela Palace, Udaipur</>,
    //   link: "https://maps.app.goo.gl/ywMPWwHjbXvqwiWc8",
    // },

    // {
    //   title_ceremony: "Anand Karaj",
    //   image: "/assets/Anand_karaj.webp",
    //   venue_address: <>Saturday, April 18th 2026 <br /> Join Us at 11 am <br /> The Leela Palace, Udaipur</>,
    //   link: "https://maps.app.goo.gl/mxcwCxWhH1TXBC8c9",
    // },

    // {
    //   title_ceremony: "Reception",
    //   image: "/assets/Reception.webp",
    //   venue_address: <>Saturday, April 18th 2026 <br /> Join Us at 11 am <br /> The Leela Palace, Udaipur</>,
    //   link: "https://maps.app.goo.gl/f599YkTSEYKDEK5L7",
    // },






  {
      Main_title_ceremony: "Mehendi",
      // title_ceremony: "Sagan/Cocktail",
      image: "/assets/Mehendi.webp",
      date: "Wednesday, 2nd December 2026",
      venue: "Oodles Hotel Chhattarpur",
      venue_address: <> Plot 759 762, Main Chhatarpur Rd, Block C,<br /> Chhatarpur Extension, Chhatarpur,<br /> New Delhi, Delhi 110074</>,
      time: "12 o'clock afternoon onwards",
      // theme: <><b>Theme:-</b> Glitz & Glam: <br/> Shimmer, sequins & Statement Fits</>,
      link: "https://share.google/9022apDOsGRfxYGGb",
       Main_title_ceremony2: "Sufi and Sagan",
      // title_ceremony2: "Mehandi",
      image2: "/assets/Mehendi.webp",
      time2: "7pm onwards",
    },
    {
      Main_title_ceremony: "Haldi",
      // title_ceremony: "Haldi",
      image: "/assets/Haldi.webp",
      date: "Thursday, 3rd December 2026",
      venue: "Oodles Hotel Chhattarpur",
      venue_address: <> Plot 759 762, Main Chhatarpur Rd, Block C,<br /> Chhatarpur Extension, Chhatarpur,<br /> New Delhi, Delhi 110074</>,
      time: "12 o'clock afternoon onwards",
      // theme: <><b>Theme:-</b> Pretty in Pink: <br/> Florals, Pastels & Pink Hues</>,
      link: "https://share.google/9022apDOsGRfxYGGb",
     
    },


    {
      Main_title_ceremony: "Anand Karaj",
      // title_ceremony: "Wedding",
      image: "/assets/Anand_karaj.webp",
      date: "Friday, 4th December 2026",
      venue: <>Hotel Queensland</>,
      venue_address: <>3, Queens Rd, near Golden Temple,<br />Crystal Chowk, INA Colony, <br />  Amritsar, Punjab 143001</>,
      time: "11am onwards",
      // theme: <><b>Theme:-</b> Timeless Royalty:<br/> Elegant Ethnic & Royal Silhouettes</>,
      link: "https://maps.app.goo.gl/KJk8NLpvYJ48SdqTA",
       Main_title_ceremony2: "Reception",
      // title_ceremony2: "Mehandi",
      image2: "/assets/Reception.webp",
      time2: "8pm onwards",
    },







  ];
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const startMusic = async () => {
    const audio = audioRef.current;
    if (!audio || started) return;

    try {
      audio.volume = 0.3;
      await audio.play();
      setStarted(true);
      setPlaying(true);
    } catch { }
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch { }
    }
  };

  // First user interaction (mobile + desktop)
  useEffect(() => {
    const handler = () => startMusic();

    window.addEventListener("click", handler);
    window.addEventListener("touchstart", handler);

    return () => {
      window.removeEventListener("click", handler);
      window.removeEventListener("touchstart", handler);
    };
  }, [started]);

  return (
    <>
      <button
        onClick={() => {
          started ? toggleMusic() : startMusic();
        }}
        className="fixed bottom-4 right-4 z-50 bg-[#FF35A1] text-white p-3 rounded-xl text-xl"
      >
        {playing ? "⏸" : "▶"}
      </button>
{/* <IntroVideo /> */}
      <audio ref={audioRef} src="/assets/background_song.mp3" loop preload="auto" playsInline />

      {/* hero section */}
      <div className=" bg-[url('/assets/respo_bg.webp')] md:bg-[url('/assets/background.webp')] 3xl:bg-[url('/assets/background.webp')]
                       bg-cover bg-top bg-no-repeat min-h-screen w-full relative overflow-hidden">
        
        <RoseHeroTemp />

        <div className="pt-15 md:pt-53 lg:pt-60 3xl:pt-80 relative z-10">
          <h2 className="text-[#69301B] text-center leading-tight text-[14px] md:text-5xl lg:text-6xl pb-120
                          md:pb-350 lg:pb-470 3xl:pb-550 flex flex-col items-center gap-y-0 lg:gap-y-5">

            <span className="parisienne-regular">Chamandeep</span>

            <span className="jacques-francois text-[8px] md:text-2xl lg:text-3xl tracking-widest">WEDS</span>

            <span className="parisienne-regular">Harmanjot</span>

          </h2>

          <div className="flex flex-col items-center text-center gap-6 mt-0 lg:pt-50 pt-0">
            
            <Image
              src="/assets/symbol.webp"
              alt="idol"  width={100} height={100}
              className="w-20 h-15 md:w-40 md:h-30 lg:w-59 lg:h-45 object-cover"/>



<h2 className="text-[#FFD74B] text-[12px] md:text-xl lg:text-xl md:pt-4 eb-garamond font-medium">
              ਲੱਖ ਖੁਸ਼ੀਆਂ ਪਾਤਸ਼ਾਹੀਆਂ, ਜੇ ਸਤਿਗੁਰ ਨਦਰ ਕਰੇ। <br/>
ਨਿਮਖ ਵੇਖ ਹਰਿ ਨਾਮ ਦੇ, ਮੇਰਾ ਮਨ ਤਨ ਸੀਤਲ ਹੋਏ।
            </h2>


            <h2 className="text-[#FFD74B] text-sm md:text-xl lg:text-3xl md:pt-8 eb-garamond font-medium">
              With the heavenly blessings of Our late grandparents, <br /> Late sd kalyan singh and sardarni surjeet kaur
            </h2>

            <hr className="w-16 lg:w-24 border-[#FFD74B] my-2 md:my-4" />
            <h2 className="text-[#FFD74B] text-xs md:text-lg lg:text-[26px] eb-garamond font-medium">
              The Kapoor Family
            </h2>
          </div>

          <div className="mt-8 text-center">
            <h2 className="text-[#FFD74B] eb-garamond font-medium text-3xl md:text-5xl lg:text-6xl leading-tight lg:tracking-wide tracking-wider">
              INVITES
            </h2>

            <p className="text-[#FFD74B] eb-garamond font-medium text-sm md:text-xl lg:text-3xl mt-6">
              you to join us in the wedding celebrations of
            </p>

            <h2 className="text-[#FFD74B] eb-garamond font-medium text-center mt-6 md:mt-14 text-4xl md:text-6xl lg:text-[100px] leading-tight">
              Chamandeep Kaur
            </h2>

            <p className="text-[#FFD74B] eb-garamond font-medium text-sm md:text-xl lg:text-3xl mt-4">
              D/O <br/>
              Sardar jasmeet singh and Sardarni tejinder kaur 
            </p>

            <h2 className="text-[#FFD74B] eb-garamond font-medium text-center mt-4 text-4xl md:text-6xl lg:text-[100px] leading-tight">
              <span className="text-[#FFD74B] eb-garamond font-medium text-center lg:mt-10 mt-0 text-4xl md:text-6xl lg:text-[100px] leading-tight">
                & </span>   <br /> Harmanjot
            </h2>

            <p className="text-[#FFD74B] eb-garamond font-medium text-sm md:text-xl lg:text-3xl mt-4">
              S/O <br/>Sardar Bhupinder singh and Sardarni manpreet kaur
            </p>

            <p className="text-[#FFD74B] eb-garamond font-medium text-sm md:text-xl lg:text-3xl mt-8">
              On the following events
            </p>
          </div>

          <div className="flex justify-center mt-20 lg:mt-40">
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 lg:gap-32 3xl:gap-50">
              {events.map((event, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <img
                    src={event.image}
                    className="w-75 md:w-76 lg:w-80 3xl:w-100 h-auto"/>

                  <h2 className="text-[#FFD74B] eb-garamond font-medium text-3xl md:text-2xl lg:text-[42px] mt-4">
                    {event.title_ceremony}
                  </h2>

                  <p className="text-[#FFD74B] eb-garamond font-medium text-sm md:text-base mt-2">
                    <span className="text-sm md:text-base lg:text-xl">{event.venue_address}</span> <br />
                  </p>

                  <a
                    href={event.link}
                    className="text-[#FFD74B] underline md:text-sm text-lg mt-2 eb-garamond font-medium"
                    target="_blank">
                    View Directions
                  </a>

                </div>
              ))}
            </div> */}

<div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 lg:gap-32 gap-16 ">
              {events.map((event, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <p className="text-[#FFD74B] font-Cormorant-upright text-[26px] lg:text-[30px] mb-6">
                    {event.date}
                   
                  </p>
                  <img
                    src={event.image}
                    alt={event.title_ceremony}
                    className="lg:w-80 w-60 sm:w-76  h-auto"
                  />

                  <h2 className="text-[#FFD74B] font-Cormorant-upright lg:text-[45px] md:text-2xl text-[35px] mt-4 font-bold">
                    {event.Main_title_ceremony}
                  </h2>
                   <h2 className="text-[#FFD74B] font-Cormorant-upright lg:text-[30px] md:text-2xl text-[25px] font-bold">
                    {event.title_ceremony}
                  </h2>
                  <p className="text-[#FFD74B] font-Cormorant-upright text-[14px] sm:text-base">
                    <span className="text-[22px]">  {event.time} </span>
                  </p>
                  {event.image2 && (<img
                    src={event.image2}
                    alt={event.venue}
                    className="lg:w-80 w-60 sm:w-76  h-auto mt-6"
                  />)}
                   <h2 className="text-[#FFD74B] font-Cormorant-upright lg:text-[45px] md:text-2xl text-[35px] font-bold">
                    {event.Main_title_ceremony2}
                  </h2>

                  {/* <h2 className="text-[#FFD74B] font-Cormorant-upright lg:text-[30px] md:text-2xl text-[25px] font-bold">
                    {event.title_ceremony2}
                  </h2> */}
                  <p className="text-[#FFD74B] font-Cormorant-upright text-[14px] sm:text-base ">
                    <span className="text-[22px]">  {event.time2} </span>
                  </p>
                  <p className="text-[#FFD74B] font-Cormorant-upright text-[14px] sm:text-base mt-2">
                   
                    <span className="text-[24px] uppercase"> {event.venue}</span> <br />
                    <span className="text-[20px]">{event.venue_address}</span>

                  </p>

                  <a
                    href={event.link}
                    className="text-[#FFD74B] underline md:text-sm text-[18px] mt-2 font-cormorant"
                    target="_blank"
                  >
                    See the route
                  </a>


                </div>
              ))}
            </div>


          </div>

          <div className="relative flex flex-col items-center pt-40 lg:pt-80 3xl:pt-90 3xl:gap-60">
            {/* Center Text */}
            <div className="absolute flex flex-col justify-center items-center text-center md:mb-0 top-28 md:top-31 lg:top-60 3xl:top-100">
              <p className="parisienne-regular text-3xl md:text-5xl lg:text-7xl lg:leading-22 text-[#FFD74B]">
                With <br /> Love From Us
              </p>

              <h2 className="text-xs md:text-xl lg:text-3xl text-center pt-2 md:pt-6 lg:leading-10 md:leading-7 leading-4">
                <span className="eb-garamond font-medium text-[#FFD74B]">
                  Thank you for being part our journey. <br />
                  Your presence makes this celebration truly <br />
                  meaningful, and we look forward to sharing <br />
                  these cherished moments with you.
                </span>
              </h2>
            </div>
            <Image
              src="/assets/couple_n.webp"
              alt="couple" width={900} height={1200}
              className="w-108 h-104 md:w-205 md:h-198 lg:w-381 lg:h-264 3xl:w-480 3xl:h-463 object-cover"/>
          </div>
          
        </div>
      </div>

      <CoupleMessage />

      <div className="bg-[url('/assets/respo_three.webp')] md:bg-[url('/assets/bg_three.webp')] bg-cover bg-no-repeat">
        <div className="h-253 md:h-179 lg:h-330 3xl:h-421 flex flex-col items-center relative">
          {/* <img src="/assets/Couple_Logo.webp" alt="logo" width={250} height={300} className="absolute top-50 w-30 h-30 md:top-41 md:w-41 md:h-40 lg:top-84 lg:w-72 lg:h-58 3xl:top-118" /> */}
        </div>
      </div>

      {/* <MarriageCountdown /> */}
    </>
  );
}




  