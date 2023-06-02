import { GetServerSideProps, NextPage } from 'next'

const RegisterPassenger: NextPage = () => {
    
    return <div>Olá</div>
}

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
    console.log(req.cookies);
    
    if (!req.cookies.auth) {
        return {
          redirect: {
            permanent: false,
            destination: '/check-in'
          }
        }
      }
    return {
        props: {
            isMobile: false
        }
      }
}
export default RegisterPassenger
