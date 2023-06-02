import styled from 'styled-components'

interface Props {
    isMobile: boolean
}

export const ButtonCheckInStyled = styled.button<Props>`
    background: #C2D8B9;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    margin: 24px 0 12px;
    min-height: 37px;
    padding: 16px;
    border: none;
    color: #fff;
`
