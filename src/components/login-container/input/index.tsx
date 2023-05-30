import { FunctionComponent, useState } from 'react'
import {
    ContainerInputLoginStyled,
    InputLoginStyled,
    LabelInputLoginStyled
} from './styles'

export interface Props {
    isMobile: boolean
    label: string
    id: string
    onChangeInput: (e:React.ChangeEvent<HTMLInputElement>) => void
    type: string
    value: string
}


export const InputLogin: FunctionComponent<Props> = ({
    isMobile,
    label,
    onChangeInput,
    ...props
}) => {
    
    const handleChangeIput = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeInput(e)
    }

    return (
        <ContainerInputLoginStyled>
            <InputLoginStyled
                isMobile={isMobile}
                hasContent={!!props.value}
                onChange={(e) => handleChangeIput(e)}
                {...props}
            />
            <LabelInputLoginStyled
                isMobile={isMobile}
                hasContent={!!props.value}
                htmlFor={props.id}
            >
                {label}
            </LabelInputLoginStyled>
        </ContainerInputLoginStyled>
    )
}
