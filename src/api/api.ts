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
       })
}

export const unfollowUser = (userId: number) => {
    return instance.delete(`follow/${userId}`)
        .then(response => response.data)
}

export const followUser = (userId: number) => {
    return instance.post(`https://follow/${userId}`, )
        .then(response => response.data)
}

export const getProfile = (userId: string) => {
    return instance.get(`profile/${userId}`)
    }


export  const authAPI = {
    me () {
        return instance.get(`auth/me`)}
}