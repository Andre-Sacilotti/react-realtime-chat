import React from 'react';
import styled from 'styled-components';

import {FaUserAlt} from "react-icons/fa"

const Input = styled.input`
  border: 1px solid #A0A0A0;
  height: 28px;
  border-radius: 3px;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
  padding-left: 4px;
  padding-right: 4px;
  
  
`


const InputDiv = styled.div`
  display: inline-flex;
  height: 100%;

  padding-top: 10px;
  padding-bottom: 10px;
  
`

const InputIconDiv = styled.div`

  background-color: #FFFFFF;
  
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
  border: 1px solid #A0A0A0;
  border-right: 0px;
  
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  
  padding-left: 5px;
  padding-right: 5px;
`

const CustomInput = (props) => {

    return (
        <div>
            <InputDiv>
                <InputIconDiv>
                    {props.icon}
                </InputIconDiv>

                <Input placeholder={props.children}/>
            </InputDiv>

        </div>
    )
}

export default CustomInput