import React from 'react';
import styled from "styled-components";

import {HiMenu} from 'react-icons/hi'
import {IconContext} from "react-icons";

import {TEXTCOLOR, BGCOLOR, AUXILARCOLOR} from "../Colors";

const NavbarDiv = styled.div`
  height: 37px;
  display: flex;
  background-color: ${BGCOLOR};

  @media(min-width: 768px){
    background-color: #1b1d21;
    position: absolute;
  }
  
`

const MenuIcon = styled.div`
  display: flex;
  padding: 5px 5px;
`

const MobileNavbar = styled.div`
  
    @media(min-width: 768px){
      display: none;
    }
`

const NonMobileNavbar = styled.div`
  
    @media(max-width: 767px){
      display: none;
    }
`

const Navbar = () => {

    return (
        <NavbarDiv>
            <MobileNavbar>
                <MenuIcon>
                    <IconContext.Provider value={{size: "28px", color: TEXTCOLOR}}>
                        <HiMenu/>
                    </IconContext.Provider>
                </MenuIcon>
            </MobileNavbar>

            <NonMobileNavbar>

            </NonMobileNavbar>

        </NavbarDiv>
    )
}

export default Navbar;