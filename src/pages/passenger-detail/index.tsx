import NavBar from '@/components/nav-bar'
import PassegerDetailScreen from '@/components/pages/passenger-detail'
import { NextPage } from 'next'

const PassengerDetail: NextPage = () => {
    return (
        <>
            <NavBar />
            <PassegerDetailScreen />
        </>
    )
}

export default PassengerDetail
