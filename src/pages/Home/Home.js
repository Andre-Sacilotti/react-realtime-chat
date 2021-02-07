import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {TONE90} from "../../components/Colors";
import ChatMessage from "../../components/Chat/ChatMessage/ChatMessage";
import ChatDate from "../../components/Chat/ChatDate/ChatDate";

const HomeDiv = styled.div`
  width: 100%;
  height: 100%;
  color: white;

`

const ChatDiv = styled.div`
  background-color: ${TONE90};
  width: 100vw;
  height: 90vh;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
`

const TitleDiv = styled.div`
  height: 10vh;
`

const MessagesDiv = styled.div`
  padding-top: 50px;
 height: calc(85% - 50px);
  overflow-y: auto;
`

const BottomBarDiv = styled.div`
  height: 15%;
`

const Home = (props) => {

    return (
        <HomeDiv>
            <TitleDiv>
                Chat 1
            </TitleDiv>

            <ChatDiv>
                <MessagesDiv>
                    <ChatMessage user_own={false} user={'Carlos'} hour={"15:54"}>Teste</ChatMessage>
                    <ChatDate>05/12/2020</ChatDate>
                    <ChatMessage user_own={true} user={'Carlos'} hour={"15:54"}>Teste</ChatMessage>
                    <ChatDate>Today</ChatDate>
                    <ChatMessage user_own={true} user={'Carlos'} hour={"15:54"}>Teste</ChatMessage>
                    <ChatMessage user_own={true} user={'Carlos'} hour={"15:54"}>Teste</ChatMessage>
                    <ChatMessage user_own={true} user={'Carlos'} hour={"15:54"}>Teste</ChatMessage>
                    <ChatMessage user_own={true} user={'Carlos'} hour={"15:54"}>Teste</ChatMessage>
                </MessagesDiv>
                <BottomBarDiv>
                    Send
                </BottomBarDiv>
            </ChatDiv>

        </HomeDiv>

    )
}

export default Home