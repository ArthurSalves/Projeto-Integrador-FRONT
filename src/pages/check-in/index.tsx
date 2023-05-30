import { GetServerSideProps, NextPage } from 'next'
import AuthScreen from '@/components/pages/auth'

const Auth: NextPage = () => {
    
    return <AuthScreen />
}

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
    
    if (req.cookies.auth) {
        return {
          redirect: {
            permanent: false,
            destination: '/profiles'
          }
        }
      }
    return {
        props: {
            isMobile: false
        }
      }
}
export default Auth
