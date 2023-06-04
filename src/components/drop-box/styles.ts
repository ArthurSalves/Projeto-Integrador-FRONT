import styled, { css } from 'styled-components'

interface PropsLabel {
    isMobile: boolean
    hasContent: boolean
}

export const SelectStyled = styled.select`
    border-radius: 3px;
    border-color: #e6e6e6;
    border-style: solid;
    color: #808080;
    height: 30px;
    line-height: 50px;
    padding: 16px 20px 0;
    font-size: 16px;
    :focus {
        color: #808080;
        outline: none;
    }
`

export const ContainerInputCheckInStyled = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 16px;
`
export const LabelInputCheckInStyled = styled.label<PropsLabel>`
    position: absolute;
    transition: font 0.1s ease, transform 0.1s ease;
    color: #808080;
    left: 20px;
    font-size: 16px;
    top: 7px;
    transform: translateY(50%);
    ${SelectStyled}:focus + & {
        transform: translateY(0);
        font-size: 11px;
        color: #e6e6e6;
        border-color: #e6e6e6;
    }
    ${props =>
        props.hasContent &&
        css`
            transform: translateY(0);
            font-size: 11px;
        `}
`
