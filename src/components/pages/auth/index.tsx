import Layout from '@/components/layout'
import LoginContainer from '@/components/login-container'
import DeviceDetect from '@/utils/deviceDetect'
import {
    AuthScreenStyled,
    BackgroundLayerStyled,
    LogoStyled,
    NavBarStyled
} from './styles'
import { FunctionComponent } from 'react'

const AuthScreen: FunctionComponent = () => {
    const isMobile = DeviceDetect().isMobile
    return (
        <Layout isMobile={isMobile}>
            <AuthScreenStyled src="/images/hero.jpg">
                <BackgroundLayerStyled>
                    <LoginContainer />
                </BackgroundLayerStyled>
            </AuthScreenStyled>
        </Layout>
    )
}
export default AuthScreen
