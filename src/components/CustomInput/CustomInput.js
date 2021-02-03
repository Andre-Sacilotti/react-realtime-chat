import React from 'react';
import styled from 'styled-components';


import {TEXTCOLOR} from "../Colors"

const Input = styled.input`
  background-color: #FFFFFF00;    
  border: 1px solid ${TEXTCOLOR};
  border-radius: 4px;
  
  height: 47px;
  width: 245px;

  font-size: 16px;
  
  padding-left: 5px;
  padding-right: 5px;

  font-weight: 500;
  color: ${TEXTCOLOR};
`


const InputDiv = styled.div`
  display: inline-flex;
  flex-direction: column;
  
  padding: 5px 0;
`

const InputTitle = styled.div`
  text-align: start;
  font-size: 14px;
  font-weight: 500;
  color: ${TEXTCOLOR};
`

const ForgotPassText = styled.span`
  color: ${TEXTCOLOR};
  text-align: start;
  font-size: 12px;
  font-weight: 300;
`

const CustomInput = (props) => {


    return (
        <div>
            <InputDiv>
                <InputTitle>{props.children}</InputTitle>
                <Input type={props.type ? props.type : "text"}/>
                {props.type === "password" && props.register === true ?
                    <ForgotPassText onClick={props.handlerForgotPass}>
                    Forgot my password
                    </ForgotPassText> : null}
            </InputDiv>

        </div>
    )
}

export default CustomInput