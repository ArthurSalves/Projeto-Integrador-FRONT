import { useState, useEffect } from 'react'

export const detectIsMobile = (userAgent: string) => {
    return Boolean(
        userAgent.match(
            /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop|App-IOS/i
        )
    )
}

export const detectContextMobile = (context: any) => {
    const userAgent = context.req.headers['user-agent']
    return detectIsMobile(userAgent)
}

const DeviceDetect = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [isTablet, setIsTablet] = useState(false)
    const [isDesktop, setIsDesktop] = useState(false)

    const handleResize = () => {
        const userAgent =
            typeof window.navigator === 'undefined' ? '' : navigator.userAgent

        const width = window.innerWidth
        const isMobile = detectIsMobile(userAgent)
        const isTablet = isMobile && width >= 768
        const isDesktop = !isMobile && width >= 1024

        setIsMobile(isMobile)
        setIsTablet(isTablet)
        setIsDesktop(isDesktop)
    }

    useEffect(() => {
        handleResize()

        return () => {
            setIsMobile(false)
            setIsTablet(false)
            setIsDesktop(false)
        }
    }, [])

    return { isMobile, isTablet, isDesktop }
}

export default DeviceDetect
