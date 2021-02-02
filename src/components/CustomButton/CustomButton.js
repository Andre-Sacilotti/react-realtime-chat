import React from 'react'
import styled from 'styled-components'

import {BGCOLOR, TEXTCOLOR, AUXILARCOLOR} from "../Colors"

const Button = styled.a`
  
  color: #FFFFFF;
  border: 1px solid ${TEXTCOLOR};
  border-radius: 4px;


  display: inline-flex;
  justify-content: center;
  align-items: center;


  height: 40px;
  max-height: 40px;

  font-size: 16px;
  font-weight: 500;

  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;


  &:hover, &:active {
    background-color: rgba(255, 255, 255, 0.1);
  }



`

const ButtonText = styled.span`
  margin-right: 20px;
  margin-left: 20px;
`

const CustomButton = (props) => {

    return (
            <Button dark={props.dark} onClick={props.onClick}>
                <ButtonText>
                    {props.children}
                </ButtonText>
            </Button>
    )
}

export default CustomButton