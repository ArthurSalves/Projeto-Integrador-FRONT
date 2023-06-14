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
import React, { useEffect, useState } from 'react'
import { DropBox } from '../drop-box'
import { RouteService } from '@/service/api/route'

interface Props {
    setIsChecked: (boolean: boolean) => void
}

const RegisterRouteContainer: React.FC<Props> = ({ setIsChecked }) => {
    const [companieSelected, setCompanieSelected] = useState('')
    const [companieSelectedId, setCompanieSelectedId] = useState(null)
    const [name, setName] = useState('')
    const [companiesFiltered, setCompaniesFiltered] = useState([])
    const [companies, setCompanies] = useState([])
    const isMobile = DeviceDetect().isMobile

    const handleLogin = async (e: React.MouseEvent) => {
        e.preventDefault()
        RouteService.postRoute(name, companieSelectedId)
    }

    const handleChangeRouteName = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleChangeEmpresa = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        setCompanieSelected(e.target.value)
        const idCompanie = companies.find( (companie) => {
            return companie.nome === e.target.value
        })
        setCompanieSelectedId(idCompanie)
        
    }

    const buildOptions = (companies: Array<any>) => {
        return companies.map(companie => {
            return { value: companie.nome, label: companie.nome }
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
                </ContentRouteStyled>
            </ContainerRouteStyled>
        </BodyContainerStyled>
    )
}
export default RegisterRouteContainer
