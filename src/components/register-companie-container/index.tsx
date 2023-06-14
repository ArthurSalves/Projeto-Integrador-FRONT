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
import React, { useState } from 'react'
import { RouteService } from '@/service/api/route'

interface Props {
    setIsChecked: (boolean: boolean) => void
}

const RegisterCompanieContainer: React.FC<Props> = ({ setIsChecked }) => {
    const isMobile = DeviceDetect().isMobile
    const [name, setName] = useState('')

    const handleLogin = async (e: React.MouseEvent) => {
        e.preventDefault()
        RouteService.postCompanie(name)
        setIsChecked(true)
    }

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setName(e.target.value)
    }

    return (
        <BodyContainerStyled isMobile={isMobile}>
            <ContainerRegisterPassengerStyled isMobile={isMobile}>
                <ContentRegisterPassengerStyled isMobile={isMobile}>
                    <TitleRegisterPassengerStyled>
                        Cadastrar Empresa
                    </TitleRegisterPassengerStyled>
                    <SubTitleRegisterPassengerStyled>
                        Preencha os Dados do Empresa
                    </SubTitleRegisterPassengerStyled>
                    <DefaultInput
                        isMobile={isMobile}
                        label="Nome"
                        value={name}
                        id="inputName"
                        type="text"
                        onChangeInput={e => handleChangeName(e)}
                    />
                    <ButtonCheckIn
                        isMobile={isMobile}
                        onClick={e => handleLogin(e)}
                    >
                        Cadastrar
                    </ButtonCheckIn>
                </ContentRegisterPassengerStyled>
            </ContainerRegisterPassengerStyled>
        </BodyContainerStyled>
    )
}
export default RegisterCompanieContainer
