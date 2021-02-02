import React from 'react'
import styled from 'styled-components'

const Button = styled.a`
  
  background-color: ${props => props.dark ? "#181818" : "#656E80"};
  color: #FFFFFF;
  border-radius: 5px;
  
  
  display: inline-flex;
  justify-content: center;
  align-items: center;
  
  
  height: 40px;
  max-height: 40px;
  
  font-size: 16px;
  font-weight: 200;

  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  
  
  
  
  
  &:hover {
    background-color: ${props => props.dark ? "#181818" : "#575f6f"};
  }
  
  &:active, &.active, &:focus {

    border: none;
    outline:none;
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