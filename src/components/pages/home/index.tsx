import Layout from '@/components/layout'
import DeviceDetect from '@/utils/deviceDetect'
import { FunctionComponent } from 'react'
import NavBar from '@/components/nav-bar'

const HomeScreen: FunctionComponent = () => {
    const isMobile = DeviceDetect().isMobile
    return (
        <Layout isMobile={true}>
            <NavBar/>
        </Layout>
    )
}
export default HomeScreen
