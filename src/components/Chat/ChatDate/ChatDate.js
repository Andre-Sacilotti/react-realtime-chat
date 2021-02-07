import React from 'react'
import styled from "styled-components"

const ChatDateDiv = styled.div`
  background-color: #000000;
  font-size: 13px;
  font-weight: 400;
  height: 22px;
  display: inline-block;
  margin: 5px 0;
  border-radius: 26px;
  min-width: 50px;
  vertical-align: middle;

  padding: 0 20px;
`

const ContentDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`

const Text = styled.span`
 margin: auto;
`

const ChatDate = (props) => {

    return (
        <ChatDateDiv>
            <ContentDiv>
                <Text>
                    {props.children}
                </Text>
            </ContentDiv>

        </ChatDateDiv>
    )
}

export default ChatDate
