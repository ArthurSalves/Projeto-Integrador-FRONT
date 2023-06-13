import styled from 'styled-components'

interface Props {
    isMobile: boolean
}

export const ContentStyled = styled.form<Props>`
    border-radius: 4px;
    box-sizing: border-box;
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-width: 450px;
    padding: 60px 30px 40px;
`

export const ContainerStyled = styled.div<Props>`
    min-height: 515px;
    height: 100%;
    max-width: 450px;
    margin: auto;
`

export const BodyContainerStyled = styled.div<Props>`
    width: 100%;
`

export const TitleStyled = styled.h1`
    color: #738290;
    font-size: 32px;
    font-weight: 500;
    position: absolute;
    top: 60px;
    font-weight: 600;
`

export const BackgroundLayerStyled = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    direction: ltr;
`
