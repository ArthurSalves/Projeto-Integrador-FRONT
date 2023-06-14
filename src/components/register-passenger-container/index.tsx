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
    const [companies, setCompanies] = useState([])
    const [companiesFiltered, setCompaniesFiltered] = useState([])
    const [companieSelected, setCompanieSelectedId] = useState('')
    const [endereco, setEndereco] = useState('')
    const [codigoFuncionario, setCodigoFuncionario] = useState('')

    const handleLogin = async (e: React.MouseEvent) => {
        e.preventDefault()
        RouteService.postPassengers(
            name,
            cpf,
            endereco,
            companieSelected,
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

    const handleChangeEmpresa = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        setCompanieSelectedId(e.target.value)
    }

    const buildOptions = (companies: any) => {
        return companies.map((companie: any) => {
            return { value: companie._id.toString(), label: companie.nome }
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            const companies = await RouteService.getCompanies()
            setCompaniesFiltered(buildOptions(companies))
            setCompanies(companies)
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
                        label="Empresa"
                        value={companieSelected}
                        id="inputEmpresa"
                        options={companiesFiltered}
                        onChangeInput={e => handleChangeEmpresa(e)}
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
