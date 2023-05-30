import styled from 'styled-components'

interface Props {
    src: string
}

export const AuthScreenStyled = styled.div<Props>`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${props => `url(${props.src}) no-repeat top center`};
`

export const NavBarStyled = styled.nav`
    height: 90px;
    display: flex;
    align-items: center;
`

export const LogoStyled = styled.img`
    margin-left: 3%;
    height: 45px;
`
export const BackgroundLayerStyled = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    direction: ltr;
`
