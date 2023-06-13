import { FunctionComponent } from 'react'
import { UlStyled, LiStyled } from './styles'
import { NameButton } from '../name-button'

interface Passenger {
    _id: string
    nome: string
    cpf: string
    endereco: string
    codigoFuncionario: string
}

interface Props {
    itens: [Passenger] | null
}

export const ListBox: FunctionComponent<Props> = ({ itens, ...props }) => {
    return (
        <UlStyled>
            {itens?.map(item => {
                return (
                    <LiStyled key={item._id}>
                        <NameButton item={item} />
                        <div className="checkbox-wrapper-7">
                            <input
                                className="tgl tgl-ios"
                                id={item._id.toString()}
                                type="checkbox"
                            />
                            <label
                                className="tgl-btn"
                                htmlFor={item._id.toString()}
                            />
                        </div>
                    </LiStyled>
                )
            })}
        </UlStyled>
    )
}
