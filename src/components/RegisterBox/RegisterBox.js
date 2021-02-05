import React, {useState} from 'react'
import styled from "styled-components"
import { useHistory } from "react-router-dom";

import CustomButton from "../CustomButton/CustomButton";
import CustomInput from "../CustomInput/CustomInput";
import API from "../../services/Axios";
import Toast from "../ToastNotification/Toast"


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

  @media(max-height: 666px) {
    background-color: ${AUXILARCOLOR};
    height: 100%;
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




const RegisterBox = (props) => {


    const [showUsername, setUsername] = useState(null)
    const [showPassword, setPassword] = useState(null)

    const history = useHistory();

    const [showUserExist, setUserExist] = useState(false)
    const handlerUsernameChange = (e) => {
        setUsername(e.target.value)
        setUserExist(false);
        Toast.close()
    }

    const handlerPasswordChange = (e) => {
        setPassword(e.target.value)
    }



    const handlerSubmitRegister = () => {

        const data = {
            username: showUsername,
            password: showPassword
        }

        API.post("register", data).then(
            (response) => {
                console.log("Foi")
                Toast.show("success", "User Registrated!", false)

                setTimeout(() => history.push("/"), 500)


            }
        ).catch(
            (error) => {
                if (error.response) {
                    if (error.response.status === 409){
                        console.log("Usuario Existe")
                        setUserExist(true)
                        Toast.show("error", "User Already Exists!", true)

                    }
                } else if (error.request) {
                    console.log("Temporariamente Indisponivel");
                }
            }
        )
    }

    return (
        <UpperRegisterBoxDiv>
            <RegisterBoxDiv>


                    <TextDiv>
                        <Text>Sign Up</Text>
                    </TextDiv>

                    <FormsDiv>
                        <CustomInput onChange={handlerUsernameChange} userNotExist={showUserExist}>
                            Username
                        </CustomInput>

                        <CustomInput onChange={handlerPasswordChange} type={"password"}>
                            Password
                        </CustomInput>
                    </FormsDiv>

                    <ButtonDiv>
                        <CustomButton onClick={handlerSubmitRegister}>Sign Up</CustomButton>
                    </ButtonDiv>

            </RegisterBoxDiv>
        </UpperRegisterBoxDiv>

    )
}



export default RegisterBox