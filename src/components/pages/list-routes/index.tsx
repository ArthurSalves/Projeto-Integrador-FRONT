import Layout from '@/components/layout'
import DeviceDetect from '@/utils/deviceDetect'
import {
    BodyContainerStyled,
    ContainerStyled,
    ContentStyled,
    TitleStyled
} from './styles'
import { FunctionComponent, useEffect, useState } from 'react'
import { ListBox } from '@/components/list-box'
import { PassengerService } from '@/service/api/passenger'
import { RouteService } from '@/service/api/route'

const ListRoutesScreen: FunctionComponent = () => {
    const isMobile = DeviceDetect().isMobile
    const [routes, setRoutes] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const passengers = await RouteService.getRoutes()

            setRoutes(passengers)
        }
        fetchData()
    }, [])

    return (
        <Layout isMobile={isMobile}>
            <BodyContainerStyled isMobile={isMobile}>
                <ContainerStyled isMobile={isMobile}>
                    <ContentStyled isMobile={isMobile}>
                        <TitleStyled>
                            Lista de Rotas
                        </TitleStyled>
                        <ListBox itens={routes} hasCheckBox={false} listType='route' />
                    </ContentStyled>
                </ContainerStyled>
            </BodyContainerStyled>
        </Layout>
    )
}
export default ListRoutesScreen
