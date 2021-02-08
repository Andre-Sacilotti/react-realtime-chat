import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {TONE90} from "../../components/Colors";
import ChatMessage from "../../components/Chat/ChatMessage/ChatMessage";
import ChatDate from "../../components/Chat/ChatDate/ChatDate";
import ChatBody from "../../components/Chat/ChatBody/ChatBody";

const EndDiv = styled.div`
  height: 15vh;

`


const Home = (props) => {

    return (

        <ChatBody>
            <ChatMessage user_own={false} user={'Carlos Alberto Araujo Nome Grande'} hour={"15:54"}>Teste</ChatMessage>
            <ChatDate>05/12/2020</ChatDate>
            <ChatMessage user_own={true} user={'Carlos'} hour={"15:54"}>Teste</ChatMessage>
            <ChatDate>Today</ChatDate>
            <ChatMessage user_own={true} user={'Carlos'} hour={"15:54"}>Teste</ChatMessage>
            <ChatMessage user_own={true} user={'Carlos'} hour={"15:54"}>Teste</ChatMessage>
            <ChatMessage user_own={true} user={'Carlos'} hour={"15:54"}>Teste</ChatMessage>
            <ChatMessage user_own={true} user={'Carlos'} hour={"15:54"}>Teste</ChatMessage>
            <EndDiv></EndDiv>
        </ChatBody>

        // <HomeDiv>
        //     <TitleDiv>
        //         Chat 1
        //     </TitleDiv>
        //
        //     <ChatDiv>
        //         <MessagesDiv>
        //             <ChatMessage user_own={false} user={'Carlos Alberto Araujo Nome Grande'} hour={"15:54"}>Teste</ChatMessage>
        //             <ChatDate>05/12/2020</ChatDate>
        //             <ChatMessage user_own={true} user={'Carlos'} hour={"15:54"}>Teste</ChatMessage>
        //             <ChatDate>Today</ChatDate>
        //             <ChatMessage user_own={true} user={'Carlos'} hour={"15:54"}>Teste</ChatMessage>
        //             <ChatMessage user_own={true} user={'Carlos'} hour={"15:54"}>Teste</ChatMessage>
        //             <ChatMessage user_own={true} user={'Carlos'} hour={"15:54"}>Teste</ChatMessage>
        //             <ChatMessage user_own={true} user={'Carlos'} hour={"15:54"}>Teste</ChatMessage>
        //         </MessagesDiv>
        //         <BottomBarDiv>
        //             Send
        //         </BottomBarDiv>
        //     </ChatDiv>
        //
        // </HomeDiv>

    )
}

export default Home