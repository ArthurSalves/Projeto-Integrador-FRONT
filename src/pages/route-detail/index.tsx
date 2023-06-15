import NavBar from '@/components/nav-bar'
import RouteDetailScreen from '@/components/pages/route-detail'
import { NextPage } from 'next'

const RouteDetail: NextPage = () => {
    return (
        <>
            <NavBar />
            <RouteDetailScreen />
        </>
    )
}

export default RouteDetail
