import React from 'react'
import styled from "styled-components"

import CustomButton from "../CustomButton/CustomButton";
import CustomInput from "../CustomInput/CustomInput";
import {FaUserAlt} from "react-icons/fa";
import {RiLockPasswordFill} from "react-icons/ri"

const LoginBoxDiv = styled.div`
  border: 1px solid black;
  border-radius: 25px;
  height: 45%;
  width: 80%;
  background-color: #C4C4C4;
`

const ForgetPassDiv = styled.div`
  font-weight: 100;
  font-size: 12px;
  margin-top: -8px;
`


const AnonymBtnDiv = styled.div`
  padding-top: 32px;
  padding-bottom: 16px
`

const LoginBtnDiv = styled.div`
  padding-top: 16px;
  padding-bottom: 16px
`

const FormsDiv = styled.div`
  padding-top: 32px;
  padding-bottom: 16px
`

const Logina = styled.a`
  text-decoration: none;

  &:active, &:visited {
    text-decoration: none;
    color: #323232;
  }

  &:hover {
    color: black;
  }

`

const LoginBox = () => {

    return (
            <LoginBoxDiv>
                <AnonymBtnDiv>
                    <CustomButton dark={false}>Enter as Anonymus User</CustomButton>
                </AnonymBtnDiv>

                <FormsDiv>
                    <CustomInput
                    icon={<FaUserAlt style={{verticalAlign: 'bottom'}} />}
                    >Username</CustomInput>

                    <CustomInput
                        icon={<RiLockPasswordFill style={{verticalAlign: 'bottom'}} />}
                    >Password</CustomInput>

                    <Logina href={""}>
                        <ForgetPassDiv>Forgot your password?</ForgetPassDiv>
                    </Logina>
                </FormsDiv>

                <LoginBtnDiv>

                    <CustomButton dark={false}>Login</CustomButton>
                </LoginBtnDiv>
                <Logina href={""}>
                    <ForgetPassDiv>Create new account.</ForgetPassDiv>
                </Logina>
            </LoginBoxDiv>
    )
}

export default LoginBox