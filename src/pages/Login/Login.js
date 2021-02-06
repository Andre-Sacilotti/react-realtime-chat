import React from 'react'
import styled from "styled-components"

import LoginBox from "../../components/LoginBox/LoginBox";

const LoginDiv = styled.div`
  height: calc(100vh - 37px);
  display: flex;
  justify-content: center;
  align-items: center;
`


const Login = () => {

    return (
        <LoginDiv>
            <LoginBox>
            </LoginBox>
        </LoginDiv>
    )
}

export default Login