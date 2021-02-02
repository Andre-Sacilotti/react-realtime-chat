import React from 'react'
import styled from "styled-components"

import CustomButton from "../CustomButton/CustomButton";
import CustomInput from "../CustomInput/CustomInput";


import {BGCOLOR, TEXTCOLOR, AUXILARCOLOR} from "../Colors"

const LoginBoxDiv = styled.div`
  border-radius: 25px;
  height: 100%;
  width: 100%;
  background-color: ${BGCOLOR};
  
  @media(min-width: 768px) {
    background-color: ${AUXILARCOLOR};
  }
  
`

const UpperLoginBoxDiv = styled.div`
  border-radius: 25px;
  height: 100%;
  width: 100%;
  background-color: ${BGCOLOR};
  
  color: ${TEXTCOLOR};

  @media(min-width: 768px) {
    background-color: ${AUXILARCOLOR};
    height: 666px;
    width: 414px;
  }
  
`

const ButtonDiv = styled.div`
  margin-top: 31px;
  margin-bottom: 31px;
`

const TextDiv = styled.div`
  margin-top: 16px;
`

const Text = styled.span`
  font-weight: 300;
`

const TextRegister = styled.span`
  font-weight: 500;
  font-size: 20px;
`

const FormsDiv = styled.div`
  padding-top: 100px;
`




const LoginBox = () => {

    return (
        <UpperLoginBoxDiv>
            <LoginBoxDiv>

                <ButtonDiv>
                    <CustomButton>Enter as Anonymous</CustomButton>
                </ButtonDiv>

                <TextDiv>
                    <Text>Or sign in</Text>
                </TextDiv>

                <FormsDiv>
                    <CustomInput>
                        Username
                    </CustomInput>

                    <CustomInput type={"password"}>
                        Password
                    </CustomInput>
                </FormsDiv>

                <ButtonDiv>
                    <CustomButton>Login</CustomButton>
                </ButtonDiv>

                <TextDiv>
                    <TextRegister>New here? Sign Up!</TextRegister>
                </TextDiv>








            </LoginBoxDiv>
        </UpperLoginBoxDiv>

    )
}

export default LoginBox