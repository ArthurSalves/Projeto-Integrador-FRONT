import Layout from '@/components/layout'
import DeviceDetect from '@/utils/deviceDetect'
import { FunctionComponent, useEffect, useState } from 'react'
import {
    BodyContainerStyled,
    ContainerStyled,
    ContentStyled,
    TextStyled,
    TextStyledBlue,
    TextStyledDarkBlue,
    TitleStyled
} from './styles'
import { useRouter } from 'next/router'
import { RouteService } from '@/service/api/route'
import { ListBox } from '@/components/list-box'
import { ButtonCheckIn } from '@/components/button'

const RouteDetailScreen: FunctionComponent = () => {
    const isMobile = DeviceDetect().isMobile
    const [route, setRoute] = useState<any>(null)
    const [corrida, setCorrida] = useState<any>(null)
    const [isIniciada, setIsIniciada] = useState(false)

    const { query, isReady } = useRouter()

    useEffect(() => {
        if(isReady) {
            const fetchData = async () => {
                const route = await RouteService.getRouteById(query.id?.toString())
                const corrida = await RouteService.getCorrida(query.id)
                setRoute(route)
                setCorrida(corrida)
            }
            fetchData()
        }
    }, [query, isReady])

    async function handleClickButton() {
        if(isIniciada) {
            await RouteService.updateCorrida(query.id, isIniciada)
            setIsIniciada(false)
            return
        }

        await RouteService.postCorrida(query.id)
        setIsIniciada(true)
    }

    console.log(corrida, route)

    return (
        <Layout isMobile={isMobile}>
            <BodyContainerStyled>
                <ContainerStyled>
                    <ContentStyled>
                        <TitleStyled>Detalhe da Rota</TitleStyled>
                        <TextStyledBlue>Nome: {route?.nome}</TextStyledBlue>
                        <TextStyledDarkBlue>
                            Empresa: {route?.empresa?.nome}
                        </TextStyledDarkBlue>
                        <TextStyled>Passageiros a embarcar:</TextStyled>                       
                        <ListBox itens={corrida?.rota ? route?.passageiros.filter((passageiro: any) =>  !corrida?.passageirosValidados.map((pv: any) => pv.cpf).includes(passageiro.cpf)): route?.passageiros} listType='passenger' hasCheckBox={false} setCheckBox={null} />
                        <p>---------------------------------------------</p>
                        <TextStyled>Passageiros embarcados:</TextStyled>                       
                        <ListBox itens={corrida?.passageirosValidados} listType='passenger' hasCheckBox={false} setCheckBox={null}/>
 
                        <ButtonCheckIn
                            onClick={handleClickButton}
                            isMobile={isMobile}
                        >
                           {isIniciada ? 'Finalizar Corrida' : 'Iniciar corrida'}
                        </ButtonCheckIn>
                        
                    </ContentStyled>
                </ContainerStyled>
            </BodyContainerStyled>
        </Layout>
    )
}
export default RouteDetailScreen
