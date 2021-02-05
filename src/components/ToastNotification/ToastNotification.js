import React from "react";
import styled, {keyframes, css} from 'styled-components';

import {ERRORCOLOR, SUCCESSCOLOR, TEXTCOLOR, WARNINGCOLOR} from "../Colors";
import { IconContext } from "react-icons";
import {BiErrorCircle} from "react-icons/bi"
import {MdCancel} from 'react-icons/md'
import {AiFillWarning} from "react-icons/ai"
import {BsCheck} from 'react-icons/bs'
import Toast from "../ToastNotification/Toast"



const In = keyframes`
  
  
  
  100% {
    transform: translateY(120px);
  
}
`

const Out = keyframes`
  
  0% {
    transform: translateY(120px);
  }
  
  50% {
    transform: translateY(0);
  }
  
  100% {
    transform: translateY(-120px);
  
}
`

const AnimationIn = css`
  animation: ${In} 0.3s forwards;
`

const AnimationOut = css`
  animation: ${Out} 0.3s forwards;
`

const ToastDiv = styled.div`
  top: -100px;
  width: 95vw;
  background-color: ${props => props.color};
  border-radius: 18px;
  height: 70px;
  display: flex;
  position: absolute;
  
  color: ${props => props.textColor};
  
  ${props => props.show ? AnimationIn : null};
  ${props => props.hide ? AnimationOut : null};
  
  @media(min-width: 350px){
    width: 350px;
  }

  @media(max-width: 290px){
    height: 80px;
  }
`

const IconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 25px;
  padding-left: 25px;
`

const IconCancelDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 25px;
  padding-left: 25px;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.1)
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.2)
  }
  
`

const BodyDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
`

const BodyMessageDiv = styled.div`
  padding-top: 5px;
  font-weight: 400;
  font-size: 16px;
  text-align: start;
`

const BodyTitleDiv = styled.div`
  padding-top: 10px;
  font-weight: 600;
  font-size: 19px;
`

const ToastNotification = (props) => {

    let icon = null;
    let bgColor = null;
    let textColor = null;

    if (props.type === "error"){
        icon=<BiErrorCircle  />
        bgColor = ERRORCOLOR
        textColor = TEXTCOLOR
    }else if (props.type === "warning"){
        icon=<AiFillWarning />
        bgColor = WARNINGCOLOR
        textColor = TEXTCOLOR
    }else if (props.type === "success"){
        icon=<BsCheck/>
        bgColor = SUCCESSCOLOR
        textColor = TEXTCOLOR
    }



    return (
        <ToastDiv color={bgColor} textColor={textColor} show={props.show} hide={props.hide} stay={props.stay}>
            <IconDiv>
                <IconContext.Provider value={{size: "28px"}}>
                    {icon}
                </IconContext.Provider>

            </IconDiv>
            <BodyDiv>
                <BodyTitleDiv >Error</BodyTitleDiv>
                <BodyMessageDiv>{props.message}</BodyMessageDiv>
            </BodyDiv>
            <IconCancelDiv onClick={() => Toast.close()}>
                <IconContext.Provider value={{size: "28px"}}>
                    <MdCancel/>
                </IconContext.Provider>
            </IconCancelDiv>
        </ToastDiv>
    )
}

export default ToastNotification