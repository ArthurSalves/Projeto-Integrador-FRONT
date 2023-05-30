import { Api } from '../axios-config'

interface IAuth {
    accessToken: string
}

const auth = async (
    email: string,
    password: string
): Promise<IAuth | Error> => {
    try {
        const data = await Api.post('/login', { email, password, })
    
        if (data.data) {
            return data.data
        }

        return new Error('Erro no login.')
    } catch (error) {
        return new Error(
            (error as { message: string }).message || 'Erro no login.'
        )
    }
}

const getAcount = async (
    email: string,
    password: string
): Promise<IAuth | Error> => {
    try {
        const data = await Api.post('/login', { email, password, })
    
        if (data.data) {
            return data.data
        }

        return new Error('Erro no login.')
    } catch (error) {
        return new Error(
            (error as { message: string }).message || 'Erro no login.'
        )
    }
}


export const AuthService = {
    auth
}
