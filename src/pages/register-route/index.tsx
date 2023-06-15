import NavBar from '@/components/nav-bar'
import CheckScreen from '@/components/pages/check'
import RegisterRouteScreen from '@/components/pages/register-route'
import { NextPage } from 'next'
import { useState } from 'react'

const RegisterRoute: NextPage = () => {
    const [isRegistered, setIsRegistered] = useState(false)

    return (
        <>
            <NavBar />
            {isRegistered ? (
                <CheckScreen text="Rota Cadastrada!" />
            ) : (
                <RegisterRouteScreen setIsChecked={setIsRegistered} />
            )}
        </>
    )

}

export default RegisterRoute
