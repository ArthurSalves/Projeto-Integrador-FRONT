import DeviceDetect from '@/utils/deviceDetect'
import {
    BodyContainerStyled,
    ContainerRegisterPassengerStyled,
    ContentRegisterPassengerStyled,
    SubTitleRegisterPassengerStyled,
    TitleRegisterPassengerStyled
} from './styles'
import { DefaultInput } from '../input'
import { ButtonCheckIn } from '../button'
import { useAuthContext } from '@/contexts/auth'
import React, { useState } from 'react'

interface Props {
    setIsChecked: (boolean: boolean) => void
}

const RegisterPassengerContainer: React.FC<Props> = ({ setIsChecked }) => {
    const isMobile = DeviceDetect().isMobile
    const { login } = useAuthContext()
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')

    const handleLogin = async (e: React.MouseEvent) => {
        e.preventDefault()
        setIsChecked(true)
    }

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleChangeCpf = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setCpf(e.target.value)
    }

    return (
        <BodyContainerStyled isMobile={isMobile}>
            <ContainerRegisterPassengerStyled isMobile={isMobile}>
                <ContentRegisterPassengerStyled isMobile={isMobile}>
                    <TitleRegisterPassengerStyled>
                        Casdastrar Passageiro(s)
                    </TitleRegisterPassengerStyled>
                    <SubTitleRegisterPassengerStyled>
                        Preencha os Dados do Passageiro
                    </SubTitleRegisterPassengerStyled>
                    <DefaultInput
                        isMobile={isMobile}
                        label="Nome"
                        value={name}
                        id="inputName"
                        type="text"
                        onChangeInput={e => handleChangeName(e)}
                    />
                    <DefaultInput
                        isMobile={isMobile}
                        label="CPF"
                        value={cpf}
                        id="inputCpf"
                        type="text"
                        onChangeInput={e => handleChangeCpf(e)}
                    />
                    <ButtonCheckIn
                        isMobile={isMobile}
                        onClick={e => handleLogin(e)}
                    >
                        Check-In
                    </ButtonCheckIn>
                    <ButtonCheckIn
                        isMobile={isMobile}
                        onClick={e => handleLogin(e)}
                    >
                        Importar CSV
                    </ButtonCheckIn>
                </ContentRegisterPassengerStyled>
            </ContainerRegisterPassengerStyled>
        </BodyContainerStyled>
    )
}
export default RegisterPassengerContainer
