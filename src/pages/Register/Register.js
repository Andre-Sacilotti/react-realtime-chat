import React from 'react'
import styled from "styled-components"

import RegisterBox from "../../components/RegisterBox/RegisterBox";

const RegisterDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`


const Register = () => {

    return (
        <RegisterDiv>
            <RegisterBox>
            </RegisterBox>
        </RegisterDiv>
    )
}

export default Register