import { FunctionComponent } from 'react'
import { UlStyled, LiStyled } from './styles'
import { NameButton } from '../name-button'

interface PassengerType {
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

interface RouteType {
    _id: string
    nome: string
    passageiros: [PassengerType]
    empresa: [CompanieType]
}

interface Props {
    itens: [PassengerType | RouteType] | null
    hasCheckBox: boolean
    listType: string
    setCheckBox: any
}

export const ListBox: FunctionComponent<Props> = ({
    itens,
    hasCheckBox,
    listType,
    setCheckBox,
    ...props
}) => {
    return (
        <UlStyled>
            {itens?.map(item => {
                return (
                    <LiStyled key={item?._id}>
                        <NameButton item={item} listType={listType} />
                        {hasCheckBox && (
                            <div className="checkbox-wrapper-7">
                                <input
                                    className="tgl tgl-ios"
                                    id={item?._id.toString()}
                                    type="checkbox"
                                    onChange={() => setCheckBox(item?._id)}
                                />
                                <label
                                    className="tgl-btn"
                                    htmlFor={item?._id.toString()}
                                />
                            </div>
                        )}
                    </LiStyled>
                )
            })}
        </UlStyled>
    )
}
