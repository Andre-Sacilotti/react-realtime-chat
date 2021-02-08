import React, {useState} from 'react'
import styled from "styled-components"
import { useHistory } from "react-router-dom";
import Cookies from 'universal-cookie';



import CustomButton from "../CustomButton/CustomButton";
import CustomInput from "../CustomInput/CustomInput";
import API from "../../services/Axios";

import {handlerLogin, handlerLogout} from "../../store/actions/AuthAction"

import {BGCOLOR, TEXTCOLOR, AUXILARCOLOR} from "../Colors"
import {connect} from "react-redux";
import Store from "../../index";
import {useEffect} from "react";

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




const LoginBox = (props) => {


    const cookies = new Cookies();

    const history = useHistory();

    const [showUsername, setUsername] = useState("");
    const [showPassword, setPassword] = useState("");

    useEffect(() => {
        console.log("Auth token: ", localStorage.getItem("@react_realtime_asgit/auth_token"))

        const data = {auth_token: localStorage.getItem("@react_realtime_asgit/auth_token")}

        API.post("token", data).then(
            (response) => {
                console.log("UseEffect Respnse ", response)
                response.data['valid_auth'] ? sessionStorage.setItem("@react_realtime_asgit/loggedIn", 'true') : sessionStorage.setItem("@react_realtime_asgit/loggedIn", 'false')

                props.login()

                if (typeof props.location.state !== "undefined" ){
                    console.log("Login continue: ", props.location.state.from.pathname)
                    history.push(props.location.state.from.pathname)
                }else{
                    history.push("/home")
                }

            }
        ).catch(
            (error) => {
                console.log("UseEffect Error ", error)
            }
        )


    }, [])



    const handleCreateAccount = () => {
        history.push("/register")
    }
    
    const handlerUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlerPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handlerLoginSubmit = () => {

        const data = {
            username: showUsername.toLowerCase(),
            password: showPassword
        }

        console.log("LoginBox ", props)

        API.post("login", data).then(

            (response) => {
                localStorage.setItem("@react_realtime_asgit/auth_token", response.data)
                sessionStorage.setItem("@react_realtime_asgit/loggedIn", 'true')
                props.login()

                if (typeof props.location.state !== "undefined" ){
                    console.log("Login continue: ", props.location.state.from.pathname)
                    history.push(props.location.state.from.pathname)
                }else{
                    history.push("/home")
                }
            }
        ).catch(
            (error) => {
                console.log("Erro LB BUtao", error)
                history.push("/")
                localStorage.setItem("@react_realtime_asgit/auth_token", "")
                sessionStorage.setItem("@react_realtime_asgit/loggedIn", 'false')
                props.logout()
            }
        )
    }
        

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
                    <CustomInput register={false} onChange={handlerUsernameChange}>
                        Username
                    </CustomInput>

                    <CustomInput register={true} type={"password"} onChange={handlerPasswordChange}>
                        Password
                    </CustomInput>
                </FormsDiv>

                <ButtonDiv>
                    <CustomButton onClick={handlerLoginSubmit}>Login</CustomButton>
                </ButtonDiv>

                <TextDiv>
                    <TextRegister onClick={() => handleCreateAccount()}>New here? Sign Up!</TextRegister>
                </TextDiv>








            </LoginBoxDiv>
        </UpperLoginBoxDiv>

    )
}

const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch(handlerLogin()),
        logout: () => dispatch(handlerLogout()),
    }
}

export default connect(null, mapDispatchToProps)(LoginBox)