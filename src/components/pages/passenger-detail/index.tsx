import Layout from '@/components/layout'
import DeviceDetect from '@/utils/deviceDetect'
import { FunctionComponent } from 'react'
import { TitleStyled } from './styles'

interface Props {
    setIsChecked: (e: boolean) => void
}

const RegisterRouteScreen: FunctionComponent<Props> = ({ setIsChecked }) => {
    const isMobile = DeviceDetect().isMobile

    return (
        <Layout isMobile={isMobile}>
            <TitleStyled>Detalhe do Passageiro</TitleStyled>
        </Layout>
    )
}
export default RegisterRouteScreen
