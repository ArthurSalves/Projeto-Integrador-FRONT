import CheckScreen from '@/components/pages/check'
import RegisterRouteScreen from '@/components/pages/register-route'
import { NextPage } from 'next'
import { useState } from 'react'

const RegisterRoute: NextPage = () => {
    const [isRegistered, setIsRegistered] = useState(false)

    return isRegistered ? (
        <CheckScreen text="Passageiro(s) Cadastrado!" />
    ) : (
        <RegisterRouteScreen setIsChecked={setIsRegistered} />
    )
}

export default RegisterRoute
