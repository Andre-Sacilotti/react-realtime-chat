import React from 'react'
import styled from "styled-components"

import CustomButton from "../CustomButton/CustomButton";
import CustomInput from "../CustomInput/CustomInput";


import {BGCOLOR, TEXTCOLOR, AUXILARCOLOR} from "../Colors"

const RegisterBoxDiv = styled.div`
  border-radius: 25px;
  height: 100%;
  width: 100%;
  background-color: ${BGCOLOR};

  @media(min-width: 768px) {
    background-color: ${AUXILARCOLOR};
  }
  
`

const UpperRegisterBoxDiv = styled.div`
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
  padding-top: 124px;
`

const Text = styled.span`
  font-weight: 500;
  font-size: 24px;
`

const FormsDiv = styled.div`
  padding-top: 100px;
`




const RegisterBox = () => {

    return (
        <UpperRegisterBoxDiv>
            <RegisterBoxDiv>

                    <TextDiv>
                        <Text>Sign Up</Text>
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
                        <CustomButton>Sign Up</CustomButton>
                    </ButtonDiv>

            </RegisterBoxDiv>
        </UpperRegisterBoxDiv>

    )
}

export default RegisterBox