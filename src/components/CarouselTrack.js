import React from 'react';
import '../css/Carousel.css';

const CarouselTrack = ({image, title, text, index, current}) => {
  return (
    <div className='track-container' style={{width: window.innerWidth >= 1200 ? "1060px": window.innerWidth - 97 + "px"}}>
      <div style={{margin: window.innerWidth >= 1200 ? "" : "20px 10px"}}>
        <div className='track-wrapper'>
          <div className='track-image'>
            <img src={image} alt={title} style={{filter: index !== current ? "brightness(50%)" : ""}}></img>
          </div>
          <div className={index === current ? 'track-info' : 'hide-info'}>
            <h2>{title}</h2>
            <h3>{text}</h3>
            <hr/>
            <span>
              바로가기
              <span>
                <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarouselTrack;
