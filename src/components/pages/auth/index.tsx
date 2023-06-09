import Layout from '@/components/layout'
import CheckInContainer from '@/components/checkin-container'
import DeviceDetect from '@/utils/deviceDetect'
import { BackgroundLayerStyled } from './styles'
import { FunctionComponent } from 'react'

interface Props {
    setIsChecked: (e: boolean) => void
}

const AuthScreen: FunctionComponent<Props> = ({ setIsChecked }) => {
    const isMobile = DeviceDetect().isMobile
    return (
        <Layout isMobile={isMobile}>
            <BackgroundLayerStyled>
                <CheckInContainer setIsChecked={setIsChecked} />
            </BackgroundLayerStyled>
        </Layout>
    )
}
export default AuthScreen
