import {
    NavBarContainerStyled,
    NavBarContentStyled,
    NavBarItemStyled
} from './styles'
import React from 'react'
import { useRouter } from 'next/router'

const NavBar: React.FC = () => {
    const router = useRouter()

    return (
        <NavBarContainerStyled>
            <NavBarItemStyled onClick={() => router.push('/list-routes')}>Listar Rotas</NavBarItemStyled>
            <NavBarItemStyled onClick={() => router.push('/register-passenger')}>Registrar Passageiro</NavBarItemStyled>
            <NavBarItemStyled onClick={() => router.push('/register-companie')}>Registrar Empresa</NavBarItemStyled>
            <NavBarItemStyled onClick={() => router.push('/register-route')}>Registrar Rota</NavBarItemStyled>
        </NavBarContainerStyled>
    )
}
export default NavBar
