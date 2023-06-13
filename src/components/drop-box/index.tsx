import { FunctionComponent } from 'react'
import {
    ContainerInputCheckInStyled,
    SelectStyled,
    LabelInputCheckInStyled
} from './styles'

interface PropsOption {
    value: string
    label: string
}

interface Props {
    isMobile: boolean
    label: string
    id: string
    options: PropsOption[]
    onChangeInput: (e: React.ChangeEvent<HTMLSelectElement>) => void
    value: string
}

export const DropBox: FunctionComponent<Props> = ({
    isMobile,
    label,
    onChangeInput,
    options,
    ...props
}) => {
    const handleChangeIput = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChangeInput(e)
    }

    return (
        <ContainerInputCheckInStyled>
            <SelectStyled onChange={e => handleChangeIput(e)} {...props}>
                {options?.length
                    ? options?.map((option, index) => {
                          return (
                              <option
                                  key={index}
                                  id={index.toString()}
                                  value={option.value}
                              >
                                  {option.label}
                              </option>
                          )
                      })
                    : null}
            </SelectStyled>
        </ContainerInputCheckInStyled>
    )
}
