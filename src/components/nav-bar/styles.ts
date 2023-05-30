import styled from "styled-components";


export const NavBarContainerStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 68px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;
    -webkit-font-smoothing: antialiased;
    background-image: linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent);
    color: white;
    z-index: 2;
`

export const NavBarContentStyled = styled.div`

`

export const LogoStyled = styled.img`
    height: 46%;
    margin-right: 30px;
`

export const NavBarItemStyled = styled.div`
    text-align: center;
    margin-right: 20px;
    cursor: pointer;
    transition: color .4s;
    font-size: 14px;
    :hover{
        color: #b3b3b3;
    }
`