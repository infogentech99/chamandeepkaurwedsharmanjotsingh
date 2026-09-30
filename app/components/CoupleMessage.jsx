"use client";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function CoupleMessage() {
  const TARGET_DATE = new Date("2026-12-4").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = TARGET_DATE - now;
      if (diff <= 0) {
        setTimeLeft({ days: 30, hours: 10, minutes: 30 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft({ days, hours, minutes });
    };

    updateCountdown(); // first run
    const interval = setInterval(updateCountdown, 60000); // every minute

    return () => clearInterval(interval);
  }, []);

  const testimonial = [
    {
      img: "/assets/star1.webp",
    },

    {
      img: "/assets/star2.webp",
    },

    {
      img: "/assets/star3.webp",
    },

    {
      img: "/assets/star4.webp",
    },

    {
      img: "/assets/star5.webp",
    },

    {
      img: "/assets/star6.jpg",
    },

    {
      img: "/assets/star4.webp",
    },
  ];

  return (
    <div className="bg-[url('/assets/respo_bg_two.webp')] md:bg-[url('/assets/bg_two.webp')] bg-cover bg-no-repeat">
      <div className="h-420 md:h-500 lg:h-700 3xl:h-780">
        <h1 className="eb-garamond font-medium text-base md:text-2xl lg:text-[38px] text-center text-[#FFD74B] lg:pt-40 pt-20">
          INTRODUCING
        </h1>
        <h2 className="parisienne-regular font-normal text-5xl md:text-6xl lg:text-[100px] text-center text-[#FFD74B] px-3 md:px-17 lg:px-51 3xl:px-103 mt-12 lg:mt-24 leading-5 md:leading-tight">
          The Couple
        </h2>

        <div className="md:mt-32 mt-26 lg:mt-44 flex justify-center items-center overflow-visible">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop
            centeredSlides={true}
            pagination={{ clickable: true }}
            className="w-full py-12 max-w-screen-3xl overflow-visible"
            breakpoints={{
              0: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1536: {
                slidesPerView: 3.5,
                spaceBetween: 50,
              },
            }}
          >
            {testimonial.map((item, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-120 md:h-90 lg:h-135 3xl:h-175 object-cover rounded-[60px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className=" h-100 lg:h-180  gap-0 items-center md:mt-40 lg:mt-45 3xl:mt-60 md:pr-5 lg:pr-10 3xl:pr-30 my-15">
          <h2 className="eb-garamond font-medium text-center text-[24px] md:text-3xl lg:text-[46px] text-[#FFD74B] pt-15 md:pt-25 lg:pt-40 3xl:pt-40 leading-5 md:leading-8 lg:leading-12">
            RSVP
          </h2>
          <br></br>

          <h2 className="eb-garamond font-semibold text-[18px] md:text-sm lg:text-[24px] text-[#FFD74B] text-center">
            Manmeet Singh, <br />
            Ravinder Singh, <br /> Gurwinder Singh Lamba,
            <br />
            Inderjeet Singh <br />
            Manjot Singh Khera <br />
            Rajkaran Singh, <br />
            Mayank Singh, <br />
             Sameer Singh <br />
            Harman Singh,
            <br /> 
            Gurjas Singh,
            <br /> Yuvraj Singh <br /> Ekambir Singh, <br />
            Ekchit Singh
            <br />
            Ibadat Kaur
          </h2>
        </div>

        <div className="flex flex-col h-50 md:h-89 lg:h-200 3xl:h-210 md:gap-3 lg:gap-8 3xl:gap-8 items-center text-center">
          <h2 className="parisienne-regular font-normal text-2xl md:text-4xl lg:text-6xl text-center text-[#FFD74B] pt-30 md:pt-60 lg:pt-40 3xl:pt-55">
            The Journey Begins
          </h2>
          <p className="eb-garamond font-medium text-xs md:text-xl lg:text-[28px] text-[#FFD74B] mt-4 text-center px-6 md:px-25 lg:px-65 3xl:px-120">
            Surrounded by family and friends, we can't wait to celebrate <br />{" "}
            this beautiful moment with you.
          </p>
          <hr className="w-42 md:w-66 lg:w-94 border lg:border-2 border-[#FFD74B] my-2 md:my-4 lg:my-4" />
          <h2 className="eb-garamond font-normal text-2xl md:text-5xl lg:text-[80px] text-center text-[#FFD74B]">
            {timeLeft.days}D - {timeLeft.hours}H - {timeLeft.minutes}M
          </h2>

          <div className="flex flex-col-1 gap-4 justify-center items-center mt-2 md:mt-0">
            <a href="https://www.instagram.com/theinvitearc/" target="_blank">
              <img
                src="/assets/instagram.webp"
                alt="icon"
                className="w-5 h-5 md:w-10 md:h-10 lg:w-12 lg:h-12"
              />
            </a>
          </div>
          <p className="eb-garamond font-normal text-xs md:text-sm lg:text-base text-[#FFD74B] mt-2 md:mt-0 text-center">
            ©{" "}
            <a href="https://invitearc.com/" target="_blank">
              InviteArc
            </a>{" "}
            2026{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
