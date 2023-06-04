import CheckScreen from '@/components/pages/check'
import RegisterPassengerScreen from '@/components/pages/register-passenger'
import { NextPage } from 'next'
import { useState } from 'react'

const RegisterPassenger: NextPage = () => {
    const [isRegistered, setIsRegistered] = useState(false)

    return isRegistered ? (
        <CheckScreen text="Passageiro(s) Cadastrado!" />
    ) : (
        <RegisterPassengerScreen setIsChecked={setIsRegistered} />
    )
}

export default RegisterPassenger