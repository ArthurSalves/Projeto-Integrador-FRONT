import DeviceDetect from '@/utils/deviceDetect'
import {
    BodyContainerStyled,
    ContainerCheckInStyled,
    ContentCheckInStyled,
    SubTitleCheckInStyled,
    TitleCheckInStyled
} from './styles'
import { DefaultInput } from '../input'
import { ButtonCheckIn } from '../button'
import { useAuthContext } from '@/contexts/auth'
import React, { useState } from 'react'

interface Props {
    setIsChecked: (boolean: boolean) => void
}

const CheckInContainer: React.FC<Props> = ({ setIsChecked }) => {
    const isMobile = DeviceDetect().isMobile
    const { login } = useAuthContext()
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')

    const handleLogin = async (e: React.MouseEvent) => {
        e.preventDefault()
        setIsChecked(true)
    }

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setCpf(e.target.value)
    }

    return (
        <BodyContainerStyled isMobile={isMobile}>
            <ContainerCheckInStyled isMobile={isMobile}>
                <ContentCheckInStyled isMobile={isMobile}>
                    <TitleCheckInStyled>Seja Bem-Vindo!</TitleCheckInStyled>
                    <SubTitleCheckInStyled>
                        Complete Seus Dados Para Fazer Check-In
                    </SubTitleCheckInStyled>
                    <DefaultInput
                        isMobile={isMobile}
                        label="Nome"
                        value={name}
                        id="inputName"
                        type="text"
                        onChangeInput={e => handleChangeEmail(e)}
                    />
                    <DefaultInput
                        isMobile={isMobile}
                        label="CPF"
                        value={cpf}
                        id="inputCpf"
                        type="text"
                        onChangeInput={e => handleChangePassword(e)}
                    />
                    <ButtonCheckIn
                        isMobile={isMobile}
                        onClick={e => handleLogin(e)}
                    >
                        Check-In
                    </ButtonCheckIn>
                </ContentCheckInStyled>
            </ContainerCheckInStyled>
        </BodyContainerStyled>
    )
}
export default CheckInContainer
