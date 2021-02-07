import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {TONE90} from "../../components/Colors";

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
                    Messages
                </MessagesDiv>
                <BottomBarDiv>
                    Send
                </BottomBarDiv>
            </ChatDiv>

        </HomeDiv>

    )
}

export default Home