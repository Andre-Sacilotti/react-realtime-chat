import React from 'react'
import styled from "styled-components"

import LoginBox from "../../components/LoginBox/LoginBox";

const LoginDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`


const Login = () => {

    return (
        <LoginDiv>
            <LoginBox>
                aaa
            </LoginBox>
        </LoginDiv>
    )
}

export default Login