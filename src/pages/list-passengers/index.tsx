import CheckScreen from '@/components/pages/check'
import ListPassengersScreen from '@/components/pages/list-passengers'
import RegisterRouteScreen from '@/components/pages/register-route'
import { NextPage } from 'next'
import { useState } from 'react'

const ListPassengers: NextPage = () => {
    const [isRegistered, setIsRegistered] = useState(false)

    return isRegistered ? (
        <CheckScreen text="Rota Cadastrada!" />
    ) : (
        <ListPassengersScreen />
    )
}

export default ListPassengers
