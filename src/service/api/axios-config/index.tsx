import axios from 'axios';

import { responseInterceptor, errorInterceptor } from './interceptors';

import getConfig from 'next/config'

interface INextConfig {
    serverRuntimeConfig: object
    publicRuntimeConfig: IRuntimeConfig
}

interface IRuntimeConfig {
    BACK_HOST: string
}

const runtimeEnvironment = () => {
    const publicRuntimeConfig: INextConfig = getConfig()
    return publicRuntimeConfig
}

const Api = axios.create({
  baseURL: runtimeEnvironment().publicRuntimeConfig.BACK_HOST,
  withCredentials: true
});



export { Api };