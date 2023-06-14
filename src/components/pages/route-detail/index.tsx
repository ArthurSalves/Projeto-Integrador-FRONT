import Layout from '@/components/layout'
import DeviceDetect from '@/utils/deviceDetect'
import { FunctionComponent, useEffect, useState } from 'react'
import { BodyContainerStyled, ContainerStyled, ContentStyled, TextStyled, TextStyledBlue, TextStyledDarkBlue, TitleStyled } from './styles'
import { useRouter } from 'next/router'
import { RouteService } from '@/service/api/route'
import { ListBox } from '@/components/list-box'

const RouteDetailScreen: FunctionComponent = () => {
    const isMobile = DeviceDetect().isMobile
    const [route, setRoute] = useState(null)

    const { query } = useRouter()

    useEffect(() => {
        console.log(query);
        
        const fetchData = async () => {
            const route = await RouteService.getRouteById(
                query.id?.toString()
            )
            console.log(route)
            setRoute(route)
            
        }
        fetchData()
    }, [query])

    return (
        <Layout isMobile={isMobile}>
            <BodyContainerStyled>
                <ContainerStyled>
                    <ContentStyled>
                        <TitleStyled>Detalhe da Rota</TitleStyled>
                        <TextStyledBlue>Nome: {route?.nome}</TextStyledBlue>
                        <TextStyledDarkBlue>Empresa: {route?.empresa.nome}</TextStyledDarkBlue>
                        <TextStyled>Passageiros:</TextStyled>
                        <ListBox itens={route?.passageiros} listType='passenger' hasCheckBox={false}/>
                    </ContentStyled>
                </ContainerStyled>
            </BodyContainerStyled>
        </Layout>
    )
}
export default RouteDetailScreen
