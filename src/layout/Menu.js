import React , {useEffect}  from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Right from "../assets/icons/right.png"
import userIcon from '../assets/icons/user.png'
import {logout} from "../store/slice/authSlice";

function MainMenu({closeMenu, open}) {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);

    function handleLogout() {

        // Redux store의 상태를 초기화한다
        localStorage.removeItem("accessToken");
        localStorage.removeItem("loginUser");
        dispatch(logout());
    }

    function ageCalc(birth) {
        const today = new Date();
        let year = '19';
        if(birth.substring(0,1)==='0'){
            year ='20';
        }
        year = year + birth.substring(0,2);
        let month = birth.substring(2,4);
        let day = birth.substring(4,6);
        const birthDate = new Date(year, month, day); // 2000년 8월 10일
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    return (
        <div className={`slideMenu ${open ? 'show' : ''}`}>

            <div className="user-panel">
                <button onClick={closeMenu}>
                    <span className="text-[1rem] mr-4 font-bold menu-close">close</span>
                </button>
                <div className="flex">
                    <div className="user-panel-info">
                        {isLoggedIn ?
                            <>
                                <p><button className="user-panel-subject">{user.name}</button></p>
                            </>
                            :
                            <>
                                <Link to="/login" onClick={closeMenu} className="user-panel-subject">로그인 하세요<img className="user-right inline w-[9px]" src={Right}/> </Link>
                                <p className="sep">매치생성 및 관리</p>
                                <p className="sep"> 경기 기록을 조회할 수 있습니다.</p>
                            </>
                        }
                    </div>
                    <div className="user-panel-image">
                        <img src={userIcon} />
                    </div>
                </div>
                {isLoggedIn ?
                    <div className="joinbtn">
                        <Link to="/" onClick={handleLogout}><button className="user-panel-logout">로그아웃<img className="join-right inline w-[9px]" src={Right}/></button></Link>
                    </div>
                    :
                    <Link to="/join">
                        <button className="goto-join">회원가입 하기<img className="join-right inline w-[9px]" src={Right}/>
                        </button>
                    </Link>
                }
            </div>

            <ul className="dropLi rem_1">
               <Link to="/" onClick={closeMenu}><li>홈으로</li></Link>
               <Link to="/warmup" onClick={closeMenu}><li>연습매치</li></Link>
                {isLoggedIn &&
                    <Link to="/user" onClick={closeMenu}><li>개인기록</li></Link>
                }
               <Link to="/" ><li>문의하기</li></Link>

            </ul>
        </div>
    );
}

export default MainMenu;
