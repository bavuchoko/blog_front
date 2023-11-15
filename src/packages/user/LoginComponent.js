import React, {useRef, useState} from 'react';
import styled from "styled-components";
import leftArrow from "../../assets/icons/left-arrow.png"
import forbidden from "../../assets/icons/forbidden.png"
import checked from "../../assets/icons/checked.png"
import { useNavigate } from 'react-router-dom';
import {JoinDiv} from '../../components/buttons/loginButtons'
import {useLogin} from "../../api/auth/AuthService";
import {useDispatch} from "react-redux";
import {login} from "../../store/slice/authSlice";

const InputBox = styled.input`
  width: 400px;
  border: 1px solid #ffe500;
  outline: #ffe500;
  border-radius: 4px;
  height: 60px;
  color: #767679;
  font-weight: bold;
  font-size: 1rem;
  text-indent: 15px;
  background-color: #fffce9;
  margin-bottom: 10px;

`;



function LoginComponent(props) {
    const navigate = useNavigate();
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");
    const [message, setMessage]=useState("아이디를 입력하세요");
    const [moreThanThree, setMoreThanThree]=useState(false);
    const [nameInputMode, setNameInputMode] =useState(true);

    const typeUsername = (e) => {
        const newUsername = e.target.value;
        setUsername(e.target.value)
        if(newUsername.length > 2){
            setMessage("")
            setMoreThanThree(true)
            setMessage("Enter 를 눌러 진행하세요")
        }else{
            setMoreThanThree(false)
            setMessage("아이디를 입력하세요")
        }
    }
    const typePassword = (e) => {
        setPassword(e.target.value)
    }
    const focusRef =useRef(null);
    const usernameEnter = (e) => {
        if(e.key=="Enter"){
            if(e.target.value.length > 2) {
                setMoreThanThree(true)
                setNameInputMode(false)
                setMessage("Enter 를 눌러 진행하세요")
            }else{
                setMoreThanThree(false)
                setMessage("아이디는 3글자 이상입니다")
            }
        }
    }
    const dispatch = useDispatch();
    const passwordEnter = async (e) => {
        if (e.key == "Enter") {
            const loginUser = {
                "username": username,
                "password": password
            }
            try {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const user = await useLogin(loginUser);
                dispatch(login(user));
                localStorage.setItem('user', JSON.stringify(user));
            } catch (error) {
                alert("아이디와 비밀번호를 확인하세요");
                setPassword("");
            }
        }
    }
    const backButtonHandler = () => {
        setPassword("");
        setNameInputMode(true);
    }
    const homeButtonHandler = () => {
        setUsername("");
        setPassword("");
        navigate('/');
    }

    return (
        <div>
                <div className="w-[400px] m-auto">
                {nameInputMode &&
                    <div>
                        <InputBox type="text" placeholder="username@email.com..."
                                    value={username}
                                    autoFocus
                                    onChange={typeUsername}
                                    onKeyPress={usernameEnter}
                        />
                        <button className="w-[90px] float-right " onClick={homeButtonHandler}>
                            {/*<img src={leftArrow} className="w-3 h-4 inline-block" />*/}
                            {/*<span className="text-[11px]">home</span>*/}
                        </button>
                    </div>
                }
                {!moreThanThree &&
                    <div>
                    <img className="w-4 h-4 in absolute ml-3" src={forbidden} alt={forbidden}/>
                    <span className="forbidden-loginmsg">{message}</span>
                    </div>
                }
                {moreThanThree && nameInputMode &&
                    <div>
                        <img className="w-4 h-4 in absolute ml-3" src={checked} alt={checked}/>
                        <span className="text-[13px]">{message}</span>
                    </div>
                    }
                {!nameInputMode &&
                    <div>
                        <InputBox type="password" placeholder="password..."
                                  value={password}
                                  ref={focusRef}
                                  autoFocus
                                  onChange={typePassword}
                                  onKeyPress={passwordEnter}
                        />
                        <button className="w-[90px] float-right " onClick={backButtonHandler}>
                            <img src={leftArrow} className="w-3 h-4 inline-block"  alt={leftArrow}/> <span className="text-[1.1rem]">back</span>
                        </button>
                    </div>
                }
                </div>
            {/*<JoinDiv>가입하기</JoinDiv>*/}
        </div>
    );
}

export default LoginComponent;