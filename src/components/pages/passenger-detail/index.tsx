import Layout from '@/components/layout'
import DeviceDetect from '@/utils/deviceDetect'
import { FunctionComponent, useEffect, useState } from 'react'
import {
    BodyContainerStyled,
    ContainerStyled,
    ContentStyled,
    TextStyledBlue,
    TextStyledDarkBlue,
    TitleStyled
} from './styles'
import { useRouter } from 'next/router'
import { PassengerService } from '@/service/api/passenger'

const PassegerDetailScreen: FunctionComponent = () => {
    const isMobile = DeviceDetect().isMobile
    const [passenger, setPassenger] = useState({})

    const { query } = useRouter()

    useEffect(() => {
        const fetchData = async () => {
            const passenger = await PassengerService.getPassenger(
                query?.codigoFuncionario?.toString()
            )
            setPassenger(passenger[0])
        }
        fetchData()
    }, [query])

    return (
        <Layout isMobile={isMobile}>
            <BodyContainerStyled>
                <ContainerStyled>
                    <ContentStyled>
                        <TitleStyled>Detalhe do Passageiro</TitleStyled>
                        <TextStyledBlue>Nome: {passenger?.nome}</TextStyledBlue>
                        <TextStyledDarkBlue>
                            Endereço: {passenger?.endereco}
                        </TextStyledDarkBlue>
                        <TextStyledBlue>
                            Empresa: {passenger?.empresa}
                        </TextStyledBlue>
                    </ContentStyled>
                </ContainerStyled>
            </BodyContainerStyled>
        </Layout>
    )
}
export default PassegerDetailScreen
