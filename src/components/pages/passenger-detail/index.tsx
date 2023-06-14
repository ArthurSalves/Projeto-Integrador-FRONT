import Layout from '@/components/layout'
import DeviceDetect from '@/utils/deviceDetect'
import { FunctionComponent, useEffect } from 'react'
import { TextStyledBlue, TextStyledDarkBlue, TitleStyled } from './styles'
import { useRouter } from 'next/router'
import { PassengerService } from '@/service/api/passenger'

const PassegerDetailScreen: FunctionComponent = () => {
    const isMobile = DeviceDetect().isMobile

    const { query } = useRouter()

    useEffect(() => {
        const fetchData = async () => {
            const passenger = await PassengerService.getPassenger(
                query.codigoFuncionario.toString()
            )
        }
        fetchData()
    }, [])

    return (
        <Layout isMobile={isMobile}>
            <TitleStyled>Detalhe do Passageiro</TitleStyled>
            {/* <TextStyledBlue>Nome: {item.nome}</TextStyledBlue> */}
            {/* <TextStyledDarkBlue>Endereço: {item.endereco}</TextStyledDarkBlue> */}
            {/* <TextStyledBlue>Empresa: {item.empresa}</TextStyledBlue> */}
        </Layout>
    )
}
export default PassegerDetailScreen
