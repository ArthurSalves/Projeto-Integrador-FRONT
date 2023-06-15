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

const getRouteById = async (id: any): Promise<any | Error> => {
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

const postRoute = async (
    routeName: string,
    companieId: string
): Promise<any | Error> => {
    try {
        const data = await Api.post('/rota', {
            nome: routeName,
            empresa: companieId
        })

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

const postCompanie = async (companieName: string): Promise<any | Error> => {
    try {
        const data = await Api.post('/empresa/criar', {
            nome: companieName
        })

        if (data.data) {
            return data.data
        }

        return new Error('Erro.')
    } catch (error) {
        return new Error(
            (error as { message: string }).message ||
                'Erro ao cadastrar empresa.'
        )
    }
}

const postCheckin = async (cpf: string): Promise<any | Error> => {
    try {
        const data = await Api.post(`/checkin/${cpf}`)

        if (data.data) {
            return data.data
        }

        return new Error('Erro.')
    } catch (error) {
        return new Error(
            (error as { message: string }).message ||
                'Erro ao cadastrar empresa.'
        )
    }
}

const postCorrida = async (route: any): Promise<any | Error> => {
    try {
        const data = await Api.post(`/corrida`, {
            rota: route
        })

        if (data.data) {
            return data.data
        }

        return new Error('Erro.')
    } catch (error) {
        return new Error(
            (error as { message: string }).message ||
                'Erro ao cadastrar empresa.'
        )
    }
}

const getCorrida = async (id: any): Promise<any | Error> => {
    try {
        const data = await Api.get(`/corrida/${id}`)

        if (data.data) {
            return data.data
        }

        return new Error('Erro.')
    } catch (error) {
        return new Error(
            (error as { message: string }).message ||
                'Erro ao cadastrar empresa.'
        )
    }
}

const updateCorrida = async (route: any, isIniciada: boolean): Promise<any | Error> => {
    try {
        const data = await Api.patch(`/corrida`, {
            rota: route,
            isIniciada: isIniciada
        })

        if (data.data) {
            return data.data
        }

        return new Error('Erro.')
    } catch (error) {
        return new Error(
            (error as { message: string }).message ||
                'Erro ao cadastrar empresa.'
        )
    }
}

const postPassengers = async (
    passengerName: string,
    passengerCpf: string,
    endereco: string,
    rota: string,
    codigoFuncionario: string
): Promise<any | Error> => {
    try {
        const data = await Api.post('/passageiro', {
            nome: passengerName,
            cpf: passengerCpf,
            codigoFuncionario,
            rota,
            endereco
        })

        if (data.data) {
            return data.data
        }

        return new Error('Erro.')
    } catch (error) {
        return new Error(
            (error as { message: string }).message ||
                'Erro ao cadastrar passageiros.'
        )
    }
}

export const RouteService = {
    getCompanies,
    getRouteById,
    getRoutes,
    getCorrida,
    updateCorrida,
    postCompanie,
    postPassengers,
    postRoute,
    postCheckin,
    postCorrida
}
