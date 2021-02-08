import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {TONE90, ChatInput, TONE10, TEXTCOLOR} from "../../Colors";
import ChatMessage from "../ChatMessage/ChatMessage";
import ChatDate from "../ChatDate/ChatDate";
import {useEffect, useRef} from "react";

import {RiSendPlaneFill} from 'react-icons/ri'
import {IconContext} from "react-icons";

const HomeDiv = styled.div`
  width: 100%;
  height: 100%;
  color: white;

  z-index: 1;

`

const ChatDiv = styled.div`
  background-color: ${TONE90};
  width: 100vw;
  height: calc(90vh - 20px);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;

  padding-top: 20px;
`


const TitleDiv = styled.div`
  height: 10vh;
`

const MessagesDiv = styled.div`
  padding-top: 50px;
 height: calc(100% - 50px);
  overflow-y: auto;
  

`

const BottomBarDiv = styled.div`
  position: absolute;
  bottom: 0;
  height: 80px;
  display: flex;
  padding-bottom: 10px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.08);
  padding-top: 10px;

`

const InputDiv = styled.div`
  background-color: ${ChatInput};
  width: 75vw;
  margin-left: 10px;
  height: 80px;
  border-radius: 17px;
  margin-bottom: 5px;
  padding-right: 15px;
  
`

const UpperIconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  padding-left: 10px;
  
`

const InputIconDiv = styled.div`
  
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${TONE10};
  border-radius: 50%;

`

const MessageInput = styled.textarea`
  border: 0px;
  width: 100%;
  height: 100%;
  background: transparent;
  border-radius: 17px;
  border-inline: 0px;
  
  //color: ${TEXTCOLOR};
  
  padding-left: 10px;
  
  
  padding-top: 5px;

  overflow-y: auto;
  
  
  &:active, &:focus-within{
    border: 0px;
    outline: none;
    border-radius: 17px;
  }
    
`

const ChatBody = (props) => {

    useEffect(() => {
        var list = document.getElementById("MessageContainer_ChatBody");
        list.scrollTop = list.offsetHeight;
    });



    return (

            <HomeDiv>
                <TitleDiv>
                    Chat 1
                </TitleDiv>

                <ChatDiv>
                    <MessagesDiv id={'MessageContainer_ChatBody'}>
                        {props.children}
                    </MessagesDiv>
                    <BottomBarDiv>
                        <InputDiv>

                            <MessageInput>

                            </MessageInput>

                        </InputDiv>
                        <UpperIconDiv>
                            <InputIconDiv >
                                <IconContext.Provider value={{size: '24px'}}>
                                    <RiSendPlaneFill/>
                                </IconContext.Provider>
                            </InputIconDiv>
                        </UpperIconDiv>

                    </BottomBarDiv>
                </ChatDiv>

            </HomeDiv>



    )
}

export default ChatBody