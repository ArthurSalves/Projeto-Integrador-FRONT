import Layout from '@/components/layout'
import { FunctionComponent } from 'react'
import { CheckStyled, ContentCheckInStyled, TitleCheckStyled } from './styles'

export interface Props {
    text: string
}

const CheckScreen: FunctionComponent<Props> = ({text}) => {
    return (
        <Layout isMobile={true}>
            <ContentCheckInStyled>
                <TitleCheckStyled>
                    {text}
                </TitleCheckStyled>
                <CheckStyled src='/images/check.png'/>   
            </ContentCheckInStyled>
            
        </Layout>
    )
}
export default CheckScreen
