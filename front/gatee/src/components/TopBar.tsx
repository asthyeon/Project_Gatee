import React, { useEffect, useState } from 'react';
import {useNavigate, NavLink, useLocation, Link} from "react-router-dom";
import { PiCaretLeft } from "react-icons/pi";
import { PiBell } from "react-icons/pi";
import { PiUserCircle } from "react-icons/pi";
import { PiSquaresFour } from "react-icons/pi";
import { PiGearSix } from "react-icons/pi";
// import NotificationBadge from "@components/NotificationBadge";
import { useMemberStore } from "@store/useMemberStore";
import { MemberInfoSample } from "@constants/index";

const TopBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name } = MemberInfoSample;

  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    setCurrentPage(location.pathname)
  }, [location])

  // 바로 이전 페이지로 이동
  const goBack = () => {
    navigate(-1);
  }

  return (
    <div className="top-bar">
      <div className="top-bar__left" onClick={goBack}>
        <PiCaretLeft size={24}/>
      </div>

      <div className="top-bar__right">
        {/*알림 설정 - 알림 페이지 */}
        {currentPage === '/notification' && (
          <PiGearSix size={24}/>
        )}

        {/*채팅 앨범 - 채팅 페이지 */}
        {currentPage === '/chat' && (
          <PiSquaresFour size={24}/>
        )}

        {/*알림*/}
        <NavLink to="/notification" className={({isActive}) =>
          isActive ? 'rightDiv--active' : ''
        }>
          <PiBell size={24}/>
          {/*<NotificationBadge />*/}
        </NavLink>

        {/*프로필*/}
        <NavLink
          to={`/profile/${name}`}
          className={({isActive}) =>
          isActive ? 'top-bar__right--active' : ''
        }>
          <PiUserCircle size={24}/>
        </NavLink>
      </div>
    </div>
  )
}

export default TopBar;
