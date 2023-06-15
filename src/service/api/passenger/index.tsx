import { Api } from '../axios-config'

const getPassenger = async (
    infoPassenger: string | undefined
): Promise<any | Error> => {
    try {
        var data
        if(infoPassenger !== ''){
            data = await Api.get(`/passageiro/${infoPassenger}`)
        }else {
            data = await Api.get(`/passageiro`)
        }
        

        if (data.data) {
            return data.data
        }

        return new Error('Erro no login.')
    } catch (error) {
        return new Error(
            (error as { message: string }).message || 'Erro ao buscar passageiro.'
        )
    }
}

const deletePassenger = async (
    id: string | undefined
): Promise<any | Error> => {
    try {
        const data = await Api.delete(`/passageiro/${id}`)

        if (data.data) {
            return data.data
        }

        return new Error('Erro')
    } catch (error) {
        return new Error(
            (error as { message: string }).message || 'Erro ao deletar passageiro.'
        )
    }
}

export const PassengerService = {
    getPassenger,
    deletePassenger
}
