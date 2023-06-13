import { Api } from '../axios-config'

interface IAuth {
    accessToken: string
}

const getCompanies = async (): Promise<any | Error> => {
    try {
        const data = await Api.get('/empresa')

        if (data.data) {
            return data.data
        }

        return new Error('Erro no login.')
    } catch (error) {
        return new Error(
            (error as { message: string }).message || 'Erro ao buscar empresas.'
        )
    }
}

export const RouteService = {
    getCompanies
}
