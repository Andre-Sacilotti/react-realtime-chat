import React from 'react'
import styled from "styled-components"

import CustomButton from "../CustomButton/CustomButton";

const LoginBoxDiv = styled.div`
  border: 1px solid black;
  border-radius: 25px;
  height: 45%;
  width: 80%;
  background-color: #C4C4C4;
`

const AnonymBtnDiv = styled.div`
  padding-top: 32px;
  padding-bottom: 16px
`

const LoginBox = () => {

    return (
            <LoginBoxDiv>
                <AnonymBtnDiv>
                    <CustomButton dark={false}>Enter as Anonymus User</CustomButton>
                </AnonymBtnDiv>
                aaa
            </LoginBoxDiv>
    )
}

export default LoginBox