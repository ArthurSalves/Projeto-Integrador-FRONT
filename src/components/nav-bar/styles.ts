import styled from "styled-components";


export const NavBarContainerStyled = styled.div`
    background: #636161;
    font-weight: bold;
    justify-content: center;
    text-align: center; 
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 38px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;
    -webkit-font-smoothing: antialiased;
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