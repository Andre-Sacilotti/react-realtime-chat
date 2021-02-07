import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";

const HomeDiv = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid pink;
  color: white;
`

const ChatDiv = styled.div`

  width: 100vw;
  height: 100vh;
  border: 1px solid pink;
`

const Home = (props) => {

    return (
        <HomeDiv>
            <ChatDiv>
                <Link to={"/teste"}> Mudar </Link>
                <h2>Teste</h2>
            </ChatDiv>

        </HomeDiv>

    )
}

export default Home