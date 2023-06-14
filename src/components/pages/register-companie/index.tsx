import Layout from '@/components/layout'
import DeviceDetect from '@/utils/deviceDetect'
import { BackgroundLayerStyled } from './styles'
import { FunctionComponent } from 'react'
import RegisterCompanieContainer from '@/components/register-companie-container'

interface Props {
    setIsChecked: (e: boolean) => void
}

const RegisterCompanieScreen: FunctionComponent<Props> = ({ setIsChecked }) => {
    const isMobile = DeviceDetect().isMobile

    return (
        <Layout isMobile={isMobile}>
            <BackgroundLayerStyled>
                <RegisterCompanieContainer setIsChecked={setIsChecked} />
            </BackgroundLayerStyled>
        </Layout>
    )
}
export default RegisterCompanieScreen
