import { Api } from '../axios-config'

const getPassenger = async (infoPassenger: string): Promise<any | Error> => {
    try {
        const data = await Api.get(`/passageiro/${infoPassenger}`)

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

export const PassengerService = {
    getPassenger
}
