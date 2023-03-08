import axios from "axios";


export const instanse = axios.create({
    baseURL: 'https://api.alquran.cloud/v1/',
    timeout: 10000,
})


export const instanseImage = axios.create({
    baseURL: 'https://cdn.islamic.network/quran/images/',
    timeout: 10000,
})


export const timeData = axios.create({
    baseURL: 'https://islomapi.uz/api/present/',
    timeout: 10000,
})