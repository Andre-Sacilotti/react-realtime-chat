import React from 'react'
import styled from "styled-components"

import LoginBox from "../../components/LoginBox/LoginBox";

const LoginDiv = styled.div`
  height: calc(100vh - 37px);
  display: flex;
  justify-content: center;
  align-items: center;
`


const Login = (props) => {

    return (
        <LoginDiv>
            <LoginBox {...props}>
            </LoginBox>
        </LoginDiv>
    )
}

export default Login