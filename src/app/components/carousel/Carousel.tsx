"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from "./Carousel.module.css";

const Carousel = ({ items, showArrows = true, showDots = true }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesContainerRef = useRef(null); // Reference to the slides container element

  const slideWidth = Math.round(100 / items.length) + "%";

  const handlePrevClick = () => {
    const newSlide = (currentSlide - 1 + items.length) % items.length;
    setCurrentSlide(newSlide);

    // Scroll to the new slide smoothly
    if (slidesContainerRef.current) {
      slidesContainerRef.current.scrollLeft -=
        slidesContainerRef.current.clientWidth;
    }
  };

  const handleNextClick = () => {
    const newSlide = (currentSlide + 1) % items.length;
    setCurrentSlide(newSlide);

    // Scroll to the new slide smoothly
    if (slidesContainerRef.current) {
      slidesContainerRef.current.scrollLeft +=
        slidesContainerRef.current.clientWidth;
    }
  };

  const renderSlide = (item, index) => (
    <div key={index} className={styles.slide} style={{ width: slideWidth }}>
      <Image
        src={item.imageLink}
        alt={item.altText}
        width={400}
        height={250}
        objectFit="cover"
        quality={100}
        priority
      />
    </div>
  );

  return (
    <div className={styles.carousel}>
      <div className={styles.slidesContainer} ref={slidesContainerRef}>
        {items.map(renderSlide)}
      </div>

      {showArrows && (
        <div className={styles.arrows}>
          <button onClick={handlePrevClick} className={styles.arrowPrev}>
            ←
          </button>
          <button onClick={handleNextClick} className={styles.arrowNext}>
            →
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
