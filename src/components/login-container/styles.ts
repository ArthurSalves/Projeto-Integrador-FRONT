import styled from 'styled-components'

interface Props {
    isMobile: boolean
}

export const ContentLoginStyled = styled.form<Props>`
    border-radius: 4px;
    box-sizing: border-box;
    justify-content: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-width: 450px;
    margin-bottom: 90px;
    padding: 60px 30px 40px;
`

export const ContainerLoginStyled = styled.div<Props>`
    min-height: 515px;
    height: 100%;
    max-width: 450px;
    margin: auto;
`

export const BodyContainerStyled = styled.div<Props>`
    width: 100%;
`

export const TitleLoginStyled = styled.h1`
    color: #738290;
    font-size: 32px;
    font-weight: 500;
    position: absolute;
    top: 60px;
    font-weight: 600;
`

export const SubTitleLoginStyled = styled.h3`
    color: #A1B5D8;
    font-weight: 500;
    margin-bottom: 60px;
    font-weight: 600;
`
