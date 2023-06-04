import { FunctionComponent, useState } from 'react'
import {
    ContainerInputCheckInStyled,
    InputCheckInStyled,
    LabelInputCheckInStyled
} from './styles'

export interface Props {
    isMobile: boolean
    label: string
    id: string
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
    type: string
    value: string
}

export const DefaultInput: FunctionComponent<Props> = ({
    isMobile,
    label,
    onChangeInput,
    ...props
}) => {
    const handleChangeIput = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeInput(e)
    }

    return (
        <ContainerInputCheckInStyled>
            <InputCheckInStyled
                isMobile={isMobile}
                hasContent={!!props.value}
                onChange={e => handleChangeIput(e)}
                {...props}
            />
            <LabelInputCheckInStyled
                isMobile={isMobile}
                hasContent={!!props.value}
                htmlFor={props.id}
            >
                {label}
            </LabelInputCheckInStyled>
        </ContainerInputCheckInStyled>
    )
}
