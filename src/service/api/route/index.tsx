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

        return new Error('Erro.')
    } catch (error) {
        return new Error(
            (error as { message: string }).message || 'Erro ao buscar empresas.'
        )
    }
}

const getRoutes = async (): Promise<any | Error> => {
    try {
        const data = await Api.get('/rota')

        if (data.data) {
            return data.data
        }

        return new Error('Erro.')
    } catch (error) {
        return new Error(
            (error as { message: string }).message || 'Erro ao buscar rota.'
        )
    }
}

const getRouteById = async (id: string): Promise<any | Error> => {
    try {
        const data = await Api.get(`/rota/${id}`)

        if (data.data) {
            return data.data
        }

        return new Error('Erro.')
    } catch (error) {
        return new Error(
            (error as { message: string }).message || 'Erro ao buscar rota.'
        )
    }
}


const postRoute = async (routeName: string, companieName: string): Promise<any | Error> => {
    try {
        const data = await Api.post('/rota', {nome: routeName, infos: {empresa: {nome: companieName}}})

        if (data.data) {
            return data.data
        }

        return new Error('Erro.')
    } catch (error) {
        return new Error(
            (error as { message: string }).message || 'Erro ao cadastrar rota.'
        )
    }
}

export const RouteService = {
    getCompanies,
    getRoutes,
    getRouteById,
    postRoute
}
