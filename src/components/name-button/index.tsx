import { FunctionComponent } from 'react'
import { NameButtonStyled } from './styles'
import Router from 'next/router'

interface Passenger {
    _id: string
    nome: string
    cpf: string
    endereco: string
    codigoFuncionario: string
}

interface Props {
    item: Passenger | null
}

const handleChangeButton = (codigo: any, e: any) => {
    e.preventDefault()

    Router.push({
        pathname: 'passenger-detail',
        query: { codigoFuncionario: codigo }
    })
}

export const NameButton: FunctionComponent<Props> = ({ item, ...props }) => {
    return (
        <NameButtonStyled
            onClick={e => handleChangeButton(item?.codigoFuncionario, e)}
        >
            {item?.nome}
        </NameButtonStyled>
    )
}
