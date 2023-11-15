import React from 'react';
import styled from "styled-components";
import LoginComponent from "./LoginComponent";
import {useSelector} from "react-redux";


const LoginDiv = styled.div`
  width: 320px;
  background-color: hsl(204, 15%, 94%);
  margin: 0 auto;
  border-radius: 8px;
  height: 300px;
  border: 1.5px solid #d3dcec;
`;
const LoginTag = styled.div`
  font-family: "Roboto",serif;
`;

function Login(props) {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    return (
        <div className=" text-center ">
            <p className="mb-[50px] text-4xl pt-[150px] font-bold color-gray">SIGN IN TO SITE</p>
            <LoginComponent></LoginComponent>
        </div>
    );
}

export default Login;
