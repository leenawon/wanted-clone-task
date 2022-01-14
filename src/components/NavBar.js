import React from 'react';
import '../css/NavBar.css';

const NavBar = () => {
  return (
    <div className='gnb-container'>
      <div className='gnb-wrapper'>
        {/* Global Navigation Bar */}
        <nav className='global-nav-bar'>
          {/* Menu & Logo */}
          <div className='menu-and-logo'>
            <button type="button" className='menu-button'>
              <img src='https://static.wanted.co.kr/images/icon-menu.png' alt="메뉴" className='menu-image'></img>
            </button>
            <h1 className='logo'>wanted</h1>
          </div>
          {/* Menu List */}
          <ul className='menu-list'>
            <li className='hide-menu visible-home'>홈</li>
            <li>채용</li>
            <li>이벤트</li>
            <li className='small-hide'>직군별 연봉</li>
            <li className='small-hide'>이력서</li>
            <li className='small-hide'>
              커뮤니티
              <span className='community-badge'>New</span>
            </li>
            <li className='small-hide'>프리랜서</li>
            <li className='small-hide'>
              AI 합격예측
              <span className='ai-predict-badge'>Beta</span>
            </li>
          </ul>
          {/* Button List */}
          <ul className='button-list'>
            <li>
              <button type="button">
                <i className="fas fa-search"></i>
              </button>
            </li>
            <li>
              <button type="button" className='notice-button'>
                <i className="far fa-bell"></i>
                <span className='new-badge notice-badge'>N</span>
              </button>
            </li>
            <li className='hide-menu visible-menu'>
              <button type="button">
                <i className="fas fa-ellipsis-h"></i>
              </button>
            </li>
            <li className='medium-hide'>
              <button type="button" className='profile-image-button'>
                <img src="https://static.wanted.co.kr/images/profile_default.png" alt="프로필 이미지"></img>
                <span className='new-badge profile-badge'>N</span>
              </button>
            </li>
            <li className='medium-hide'>
              <button type="button" className='business-button'>
                기업 서비스
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default NavBar;
