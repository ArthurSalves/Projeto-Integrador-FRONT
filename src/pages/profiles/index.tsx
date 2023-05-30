import ProfilesScreen from '@/components/pages/profiles'
import { GetServerSideProps, NextPage } from 'next'

const Profiles: NextPage = () => {
    
    return <ProfilesScreen/>
}

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {

    return {
        props: {
            isMobile: false
        }
      }
}
export default Profiles
