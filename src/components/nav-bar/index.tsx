import DeviceDetect from '@/utils/deviceDetect'
import {
    LogoStyled,
    NavBarContainerStyled,
    NavBarContentStyled,
    NavBarItemStyled,
} from './styles'
import { useAuthContext } from '@/contexts/auth'
import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'

const NavBar: React.FC = () => {
    return (
       <NavBarContainerStyled>
            <LogoStyled src='/images/logo.png'/>
            <NavBarContentStyled>
                
            </NavBarContentStyled>
            <NavBarItemStyled>
                Home
            </NavBarItemStyled>
            <NavBarItemStyled>
                Séries
            </NavBarItemStyled>
            <NavBarItemStyled>
                Filmes
            </NavBarItemStyled>
            <NavBarItemStyled>
                Bombando
            </NavBarItemStyled>
            <NavBarItemStyled>
                Minha Lista
            </NavBarItemStyled>
            <NavBarItemStyled>
                Navegar por idiomas
            </NavBarItemStyled>
       </NavBarContainerStyled>
    )
}
export default NavBar