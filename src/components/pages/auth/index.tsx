import Layout from '@/components/layout'
import CheckInContainer from '@/components/login-container'
import DeviceDetect from '@/utils/deviceDetect'
import {
    AuthScreenStyled,
    BackgroundLayerStyled,
    LogoStyled,
    NavBarStyled
} from './styles'
import { FunctionComponent } from 'react'

interface Props {
    setIsChecked: (e: boolean) => void
}

const AuthScreen: FunctionComponent<Props> = ({setIsChecked}) => {
    const isMobile = DeviceDetect().isMobile
    return (
        <Layout isMobile={isMobile}>
            <AuthScreenStyled src="/images/hero.jpg">
                <BackgroundLayerStyled>
                    <CheckInContainer setIsChecked = {setIsChecked}/>
                </BackgroundLayerStyled>
            </AuthScreenStyled>
        </Layout>
    )
}
export default AuthScreen
