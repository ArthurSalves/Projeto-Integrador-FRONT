import CheckScreen from '@/components/pages/check'
import RegisterCompanieScreen from '@/components/pages/register-companie'
import { NextPage } from 'next'
import { useState } from 'react'

const RegisterCompanie: NextPage = () => {
    const [isRegistered, setIsRegistered] = useState(false)

    return isRegistered ? (
        <CheckScreen text="Empresa Cadastrado!" />
    ) : (
        <RegisterCompanieScreen setIsChecked={setIsRegistered} />
    )
}

export default RegisterCompanie
