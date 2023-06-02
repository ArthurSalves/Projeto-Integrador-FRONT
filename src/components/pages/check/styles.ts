import styled from 'styled-components'

export const CheckStyled = styled.img`
    animation: transitionIn 0.6s;
    transition: ease 3s;
    height: 25%;

    @keyframes transitionIn {
        from {
            opacity: 0;
            scale: 0;
        }
        to{
            opacity: 1;
            scale: 1;
        }
    }
`

export const ContentCheckInStyled = styled.div`
    transition: ease 3s;
    border-radius: 4px;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    margin-bottom: 90px;
    padding: 60px 30px 40px;
`

export const TitleCheckStyled = styled.h3`
    color: #A1B5D8;
    font-weight: 500;
    margin-bottom: 50px;
    font-weight: 600;
`
