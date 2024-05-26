"use client";
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./heroSwiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCreative,
} from "swiper/modules";

const HeroSwiper = ({ imageSources }) => {
  const swiperRef = useRef(null);
  const [introVisible, setIntroVisible] = useState(true);

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    const handleSlideChange = () => {
      if (swiperInstance.activeIndex === 0) {
        if (swiperInstance.params.creativeEffect.next.translate[0] !== "100%") {
          swiperInstance.params.creativeEffect = {
            prev: {
              translate: [0, "-100%", 0],
            },
            next: {
              translate: [0, "100%", 0],
            },
          };
          swiperInstance.update();
        }
      } else {
        if (swiperInstance.params.creativeEffect.next.translate[0] !== "100%") {
          swiperInstance.params.creativeEffect = {
            prev: {
              shadow: true,
              translate: ["20%", 0, -1],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          };
          swiperInstance.update();
        }
      }
    };

    swiperInstance.on("slideChange", handleSlideChange);

    return () => {
      swiperInstance.off("slideChange", handleSlideChange);
    };
  }, []);

  const introMotion = {
    initial: {
      y: -300,
    },
    inPreview: {
      y: 0,
      transition: {
        duration: 1,
      },
    },
    out: {
      x: "100%",
      transition: {
        duration: 1,
      },
    },
  };

  const swiperMotion = {
    initial: {
      opacity: 0,
    },
    inPreview: {
      opacity: 1,
      transition: {
        delay: 1.2,
        duration: 1,
      },
    },
  };

  return (
    <div className="relative w-full h-full z-0">
      <AnimatePresence>
        {introVisible && (
          <motion.div
            className="absolute inset-0 bg-[#1d1d1d] flex items-center justify-center"
            variants={introMotion}
            initial="initial"
            animate="inPreview"
            exit="out"
            onAnimationComplete={() => setIntroVisible(false)}
          >
            <div className="text-white text-center flex justify-center">
                <img src="https://i.ibb.co/bNRfgjF/logo-white.png" alt="Logo" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className="w-full h-full"
        variants={swiperMotion}
        initial="initial"
        animate="inPreview"
      >
        <Swiper
          ref={swiperRef}
          spaceBetween={50}
          slidesPerView={1}
          speed={1000}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay, Navigation, Pagination, EffectCreative]}
          loop
          effect="creative"
          direction="horizontal"
          fadeEffect={{ crossFade: true }}
          navigation={false}
          grabCursor={false}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["20%", 0, -1],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
        >
          {imageSources.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default HeroSwiper;
