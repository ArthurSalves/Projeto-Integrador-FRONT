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

const ListPassengersScreen: FunctionComponent = () => {
    const isMobile = DeviceDetect().isMobile
    const [passengers, setPassengers] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const passengers = await PassengerService.getPassenger('Arthur')

            setPassengers(passengers)
        }
        fetchData()
    }, [])

    return (
        <Layout isMobile={isMobile}>
            <BodyContainerStyled isMobile={isMobile}>
                <ContainerStyled isMobile={isMobile}>
                    <ContentStyled isMobile={isMobile}>
                        <TitleStyled>
                            Lista de <br /> Passageiros
                        </TitleStyled>
                        <ListBox itens={passengers} />
                    </ContentStyled>
                </ContainerStyled>
            </BodyContainerStyled>
        </Layout>
    )
}
export default ListPassengersScreen
