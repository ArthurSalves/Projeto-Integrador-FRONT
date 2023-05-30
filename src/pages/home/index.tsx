import { GetServerSideProps, NextPage } from 'next'
import AuthScreen from '@/components/pages/auth'
import DeviceDetect, { detectContextMobile } from '@/utils/deviceDetect'
import { useAuthContext } from '@/contexts/auth'

const Home: NextPage = () => {
    
    return <div>Olá</div>
}

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
    console.log(req.cookies);
    
    if (!req.cookies.auth) {
        return {
          redirect: {
            permanent: false,
            destination: '/check-in'
          }
        }
      }
    return {
        props: {
            isMobile: false
        }
      }
}
export default Home
