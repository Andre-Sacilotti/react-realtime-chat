import React from 'react'
import styled from 'styled-components'
import {TONE20} from "../../Colors";

const ChatMessageDiv = styled.div`
  min-height: 71px;
  display: flex;
  padding-bottom: 11px;
  padding-top: 11px;
  justify-content: ${props => props.user_own ? "flex-end" : "flex-start"};
  padding-left: ${props => props.user_own ? "0px" : "19px"};
  padding-right: ${props => props.user_own ? "19px" : "0px"};

`

const MessageBodyDiv = styled.div`
  width: 70%;
  min-height: 71px;
  height: 100%;
  display: flex;
  
  background-color: ${TONE20};
  
  border-radius: 28px;
  border-top-left-radius: ${props => props.user_own ? "28px" : "0px"};
  border-top-right-radius: ${props => props.user_own ? "0px" : "28px"};
  
  align-items: start;
  justify-content: start;
  flex-direction: column;
  
  
  
`

const AuthorDiv = styled.div`
  padding-left: 20px;
  padding-top: 5px;
  font-size: 13px;
  font-weight: 500;
  

`

const MessageContentDiv = styled.div`
  
  padding-left: 20px;
  padding-right: 10px;
  word-break: break-word;
  display: flex;
  align-items: start;
  text-align: start;
  justify-content: flex-start;
  font-size: 12px;
  font-weight: 200;

`

const HourDiv = styled.div`
  font-size: 10px;
  font-weight: 100;
  padding-top: 5px;
  padding-bottom: 5px;
  width: calc(100% - 20px);
  
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;

`

const ChatMessage = (props) => {
    
    let username = props.user
    
    if (username.length > 15){
        username = username.substring(0, 15)+"..."
    }

    return (
        <ChatMessageDiv user_own={props.user_own}>
            <MessageBodyDiv user_own={props.user_own}>
                <AuthorDiv>
                    {username}
                </AuthorDiv>

                <MessageContentDiv>
                    {props.children}
                </MessageContentDiv>

                <HourDiv>
                    {props.hour}
                </HourDiv>
            </MessageBodyDiv>

        </ChatMessageDiv>
    )
}

export default ChatMessage