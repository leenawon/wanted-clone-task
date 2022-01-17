import React, { useEffect, useRef, useState } from 'react';
import { CarouselData } from '../CarouselData';
import '../css/Carousel.css';
import CarouselTrack from './CarouselTrack';

const Carousel = () => {
  const carouselList = [...CarouselData, ...CarouselData, ...CarouselData, CarouselData[0]];
  const trackLength = carouselList.length;
  const [current, setCurrent] = useState(((trackLength-1))/3);
  const track = useRef(null);

  // 왼쪽, 오른쪽 버튼 클릭 시 동작
  const nextCarousel = () => {
    setCurrent(current === trackLength - 1 ? ((trackLength-1))/3 : current + 1);
  };

  const prevCarousel = () => {
    setCurrent(current === 0 ? (trackLength-1)/3 : current - 1);
  };

  // 3초마다 current값 증가
  useEffect(() => {
    let slideTimer = setTimeout(() => {
      setCurrent((curr) => curr === trackLength - 1 ? (trackLength-1)/3 : curr + 1);
    }, 3000);
    
    return () => clearTimeout(slideTimer);
  }, [current, trackLength]);

  // 처음과 끝일 때 (슬라이드) 이동
  useEffect(() => {
    if(current === trackLength - 1) {
      setTimeout(() => {
        track.current.style.transition = "none";
        setCurrent((curr) => curr = (trackLength-1)/3);
      }, 500);
      setTimeout(() => {
        track.current.style.transition = "all 500ms ease 0s";
      }, 600);
      return () => clearTimeout();
    } else if(current === 0) {
      track.current.style.transform = "translateX(-203px)";
      setTimeout(() => {
        track.current.style.transition = "none";
        setCurrent((curr) => curr = (trackLength-1)/3);
      }, 500);
      setTimeout(() => {
        track.current.style.transition = "all 500ms ease 0s";
      }, 600);
      return clearTimeout();
    }
  }, [current, trackLength]);

  return (
    <div className='carousel-container'>
      <div className='carousel-wrapper'>
        <div className='carousel'>
          {/* Carousel Track (transform & width) */}
          <div className='carousel-track' ref={track} style={{transform : window.innerWidth >= 1200 ? `translateX(-${1084 * current -(window.innerWidth - 1060)/2 + 50}px)`: `translateX(-${(window.innerWidth - 97) * current}px)`, width: window.innerWidth >= 1200 ? `${trackLength * 1084}px` : `${(window.innerWidth - 97) * trackLength}px`}}>
            {/* Carousel Track component */}
            {carouselList.map((data, index) => (
              <CarouselTrack key={index} image={data.image} title={data.title} text={data.text} index={index} current={current}/>
            ))}
          </div>
        </div>
        {/* Carousel Arrow Button */}
        <button type='button' className='carousel-arrow carousel-right-arrow' onClick={nextCarousel}>
          <span>
            <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
          </span>
        </button>
        <button type='button' className='carousel-arrow carousel-left-arrow' onClick={prevCarousel}>
          <span>
            <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18"><path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path></svg>
          </span>
        </button>
      </div>
    </div>
  )
}

export default Carousel;
