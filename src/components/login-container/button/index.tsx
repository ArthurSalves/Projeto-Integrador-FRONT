import React, { FunctionComponent, useState } from 'react'
import { ButtonCheckInStyled } from './styles'

export interface Props {
    isMobile: boolean
    children: any
    onClick: (e: React.MouseEvent) => void
}

export const ButtonCheckIn: FunctionComponent<Props> = ({
    isMobile,
    onClick,
    ...props
}) => {
    return (
        <ButtonCheckInStyled isMobile={isMobile} onClick={onClick}>
            {props.children}
        </ButtonCheckInStyled>
    )
}
