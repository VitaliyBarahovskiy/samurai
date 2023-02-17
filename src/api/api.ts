import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "8fafdb26-5c99-4181-bb7c-189458423534"
    }

})

export const getUsers = (currentPage = 1, pageSize = 10) => {
   return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
       .then(response => {
           return response.data
       });
}