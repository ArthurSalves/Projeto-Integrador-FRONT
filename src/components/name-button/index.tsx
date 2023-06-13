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

const handleChangeButton = () => {
    Router.push('/passenger-detail')
}

export const NameButton: FunctionComponent<Props> = ({ item, ...props }) => {
    return (
        <NameButtonStyled onClick={handleChangeButton}>
            {item?.nome}
        </NameButtonStyled>
    )
}
