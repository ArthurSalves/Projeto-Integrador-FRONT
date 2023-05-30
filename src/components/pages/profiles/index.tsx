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
import NavBar from '@/components/nav-bar'

const ProfilesScreen: FunctionComponent = () => {
    const isMobile = DeviceDetect().isMobile
    return (
        <Layout isMobile={true}>
            <NavBar/>
        </Layout>
        
    )
}
export default ProfilesScreen
