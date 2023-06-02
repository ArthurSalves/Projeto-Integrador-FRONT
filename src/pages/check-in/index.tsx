import { GetServerSideProps, NextPage } from 'next'
import AuthScreen from '@/components/pages/auth'
import { useState } from 'react'
import CheckScreen from '@/components/pages/check'



const Auth: NextPage = () => {

  const [isChecked, setIsChecked] = useState(false)

  return isChecked ? <CheckScreen text='Check-In Concluído!'/> : <AuthScreen setIsChecked = {setIsChecked}/> 
     
}

export default Auth
