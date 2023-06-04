import DeviceDetect from '@/utils/deviceDetect'
import {
    BodyContainerStyled,
    ContainerRouteStyled,
    ContentRouteStyled,
    SubTitleRouteStyled,
    TitleRouteStyled
} from './styles'
import { DefaultInput } from '../input'
import { ButtonCheckIn } from '../button'
import { useAuthContext } from '@/contexts/auth'
import React, { useState } from 'react'
import { DropBox } from '../drop-box'

interface Props {
    setIsChecked: (boolean: boolean) => void
}

const RegisterRouteContainer: React.FC<Props> = ({ setIsChecked }) => {
    const [cpf, setCpf] = useState('')
    const [name, setName] = useState('')
    const { login } = useAuthContext()
    const isMobile = DeviceDetect().isMobile

    const handleLogin = async (e: React.MouseEvent) => {
        e.preventDefault()
        setIsChecked(true)
    }

    const handleChangeRouteName = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleChangeEmpresa = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        setCpf(e.target.value)
    }
    const teste = [{ value: 'teste', label: 'teste' }]

    return (
        <BodyContainerStyled isMobile={isMobile}>
            <ContainerRouteStyled isMobile={isMobile}>
                <ContentRouteStyled isMobile={isMobile}>
                    <TitleRouteStyled>Casdastrar Rota</TitleRouteStyled>
                    <SubTitleRouteStyled>
                        Preencha os Dados da Rota
                    </SubTitleRouteStyled>
                    <DefaultInput
                        isMobile={isMobile}
                        label="Nome da Rota"
                        value={name}
                        id="inputNameRoute"
                        type="text"
                        onChangeInput={e => handleChangeRouteName(e)}
                    />
                    <DropBox
                        isMobile={isMobile}
                        label="Empresa"
                        value={cpf}
                        id="inputEmpresa"
                        options={teste}
                        onChangeInput={e => handleChangeEmpresa(e)}
                    />
                    <ButtonCheckIn
                        isMobile={isMobile}
                        onClick={e => handleLogin(e)}
                    >
                        Check-In
                    </ButtonCheckIn>
                </ContentRouteStyled>
            </ContainerRouteStyled>
        </BodyContainerStyled>
    )
}
export default RegisterRouteContainer
