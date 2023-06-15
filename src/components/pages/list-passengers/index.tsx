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
import { NameButton } from '@/components/name-button'
import { ButtonCheckIn } from '@/components/button'

const ListPassengersScreen: FunctionComponent = () => {
    const isMobile = DeviceDetect().isMobile
    const [passengers, setPassengers] = useState(null)
    const [deletedPassenger, setDeletedPassenger] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const passengers = await PassengerService.getPassenger('')

            setPassengers(passengers)
        }
        fetchData()
    }, [])

    const buildDeletePassenger = (passengers: Array<any>) => {
        return passengers.map((passenger) => passenger.id)

    }


    const handleDeletePassenger = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        PassengerService.deletePassenger(buildDeletePassenger(deletedPassenger))

    }

    const handleSetDeletePassenger = (id: string) => {
        var passengers
        if(deletedPassenger.includes(id)){
            passengers = deletedPassenger.filter((passenger) => {
                passenger !== id
            })
        }else {
            setDeletedPassenger([...deletedPassenger, id])
        }
        

    }


    return (
        <Layout isMobile={isMobile}>
            <BodyContainerStyled isMobile={isMobile}>
                <ContainerStyled isMobile={isMobile}>
                    <ContentStyled isMobile={isMobile}>
                        <TitleStyled>
                            Lista de <br /> Passageiros
                        </TitleStyled>
                        <ListBox itens={passengers} hasCheckBox={true} listType='passenger' setCheckBox={() => handleSetDeletePassenger()}/>
                        <ButtonCheckIn isMobile={true} onClick={(e) => handleDeletePassenger(e)}>Remover Passageiros</ButtonCheckIn>
                    </ContentStyled>
                </ContainerStyled>
            </BodyContainerStyled>
        </Layout>
    )
}
export default ListPassengersScreen
