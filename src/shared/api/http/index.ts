import axios, {AxiosError, AxiosRequestConfig} from "axios";

const api = axios.create({
    responseType: "json",
});

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
    return config
})

export const createInstance = <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> => {
    return api({
        ...config,
        ...options
    }).then(r => r.data)
}

export type BodyType<Data> = Data;
export type ErrorType<Error> = AxiosError<Error>