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

interface CompanieType {
    _id: string
    nome: string
}

interface Props {
    item: Passenger | CompanieType | null
    listType: string
}

const isPassenger = (type: string) => {
    return type === 'passenger'
}

const handleChangeButton = (
    item: Passenger | CompanieType,
    e: any,
    type: string
) => {
    e.preventDefault()

    if (isPassenger(type)) {
        Router.push({
            pathname: 'passenger-detail',
            query: { codigoFuncionario: item.codigoFuncionario }
        })
    } else {
        Router.push({
            pathname: 'route-detail',
            query: { id: item._id }
        })
    }
}

export const NameButton: FunctionComponent<Props> = ({
    item,
    listType,
    ...props
}) => {
    return (
        <NameButtonStyled onClick={e => handleChangeButton(item, e, listType)}>
            {item?.nome}
        </NameButtonStyled>
    )
}
