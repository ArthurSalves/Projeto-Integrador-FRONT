import {
    LogoStyled,
    NavBarContainerStyled,
    NavBarContentStyled,
    NavBarItemStyled
} from './styles'
import React from 'react'

const NavBar: React.FC = () => {
    return (
        <NavBarContainerStyled>
            <LogoStyled src="/images/logo.png" />
            <NavBarContentStyled></NavBarContentStyled>
            <NavBarItemStyled>Home</NavBarItemStyled>
            <NavBarItemStyled>Séries</NavBarItemStyled>
            <NavBarItemStyled>Filmes</NavBarItemStyled>
            <NavBarItemStyled>Bombando</NavBarItemStyled>
            <NavBarItemStyled>Minha Lista</NavBarItemStyled>
            <NavBarItemStyled>Navegar por idiomas</NavBarItemStyled>
        </NavBarContainerStyled>
    )
}
export default NavBar
