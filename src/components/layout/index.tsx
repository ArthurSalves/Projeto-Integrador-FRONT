import { FunctionComponent, useState } from 'react'
import { GlobalStyle } from './styles'

interface Props {
    isMobile: boolean
    children: any
}

const Layout: FunctionComponent<Props> = ({ isMobile, ...props }) => {
    return (
        <>
            <GlobalStyle />
            {props.children}
        </>
    )
}

export default Layout
