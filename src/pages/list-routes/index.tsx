import CheckScreen from '@/components/pages/check'
import ListRoutesScreen from '@/components/pages/list-routes'
import { NextPage } from 'next'
import { useState } from 'react'

const ListRoutes: NextPage = () => {
    const [isRegistered, setIsRegistered] = useState(false)

    return isRegistered ? (
        <CheckScreen text="Rota Cadastrada!" />
    ) : (
        <ListRoutesScreen/>
    )
}

export default ListRoutes
