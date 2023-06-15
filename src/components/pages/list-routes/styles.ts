import styled from 'styled-components'

interface Props {
    isMobile: boolean
}

export const ContentStyled = styled.div<Props>`
    border-radius: 4px;
    box-sizing: border-box;
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
    font-weight: 600;
    margin-bottom: 50px;
`

export const BackgroundLayerStyled = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    direction: ltr;
`
