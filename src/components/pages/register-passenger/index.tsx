import Layout from '@/components/layout'
import DeviceDetect from '@/utils/deviceDetect'
import { BackgroundLayerStyled } from './styles'
import { FunctionComponent } from 'react'
import RegisterPassengerContainer from '@/components/register-passenger-container'

interface Props {
    setIsChecked: (e: boolean) => void
}

const RegisterRouteScreen: FunctionComponent<Props> = ({ setIsChecked }) => {
    const isMobile = DeviceDetect().isMobile
    return (
        <Layout isMobile={isMobile}>
            <BackgroundLayerStyled>
                <RegisterPassengerContainer setIsChecked={setIsChecked} />
            </BackgroundLayerStyled>
        </Layout>
    )
}
export default RegisterRouteScreen
