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
import React, { useEffect, useState } from 'react'
import { RouteService } from '@/service/api/route'
import { DropBox } from '../drop-box'

interface Props {
    setIsChecked: (boolean: boolean) => void
}

const RegisterPassengerContainer: React.FC<Props> = ({ setIsChecked }) => {
    const isMobile = DeviceDetect().isMobile
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [routes, setRoutes] = useState([])
    const [routesFiltered, setRoutesFiltered] = useState([])
    const [routeSelected, setRouteSelectedId] = useState('')
    const [endereco, setEndereco] = useState('')
    const [codigoFuncionario, setCodigoFuncionario] = useState('')

    const handleLogin = async (e: React.MouseEvent) => {
        e.preventDefault()
        RouteService.postPassengers(
            name,
            cpf,
            endereco,
            routeSelected,
            codigoFuncionario
        )
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

    const handleChangeCF = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setCodigoFuncionario(e.target.value)
    }

    const handleChangeEndereco = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setEndereco(e.target.value)
    }

    const handleChangeRoute= (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        setRouteSelectedId(e.target.value)
    }

    const buildOptions = (routes: any) => {
        return routes.map((route: any) => {
            return { value: route._id.toString(), label: route.nome }
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            const routes = await RouteService.getRoutes()
            setRoutesFiltered(buildOptions(routes))
            setRoutes(routes)
        }
        fetchData()
    }, [])

    return (
        <BodyContainerStyled isMobile={isMobile}>
            <ContainerRegisterPassengerStyled isMobile={isMobile}>
                <ContentRegisterPassengerStyled isMobile={isMobile}>
                    <TitleRegisterPassengerStyled>
                        Cadastrar Passageiro(s)
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
                        label="Cpf"
                        value={cpf}
                        id="inputCpf"
                        type="text"
                        onChangeInput={e => handleChangeCpf(e)}
                    />
                    <DefaultInput
                        isMobile={isMobile}
                        label="Codigo de Funcionário"
                        value={codigoFuncionario}
                        id="inputCF"
                        type="text"
                        onChangeInput={e => handleChangeCF(e)}
                    />
                    <DefaultInput
                        isMobile={isMobile}
                        label="Endereço"
                        value={endereco}
                        id="inputEndereco"
                        type="text"
                        onChangeInput={e => handleChangeEndereco(e)}
                    />
                    <DropBox
                        isMobile={isMobile}
                        label="Rota"
                        value={routeSelected}
                        id="inputRota"
                        options={routesFiltered}
                        onChangeInput={e => handleChangeRoute(e)}
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
export default RegisterPassengerContainer
