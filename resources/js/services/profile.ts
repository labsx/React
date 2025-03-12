import axios from "axios";
import {Profile, UserCreate } from "../types/profile";
import { Pagination } from "../types/meta";

export const profileService = {
    list: async (search = {}) => {
        const response = await axios.get<{ data: Profile[]; meta: Pagination }>('http://localhost:8000/api/profile', {
            params: search
        })

        return response.data
    },
    // create: async (payload: UserCreate) => {
    //     const response = await axios.post<{ data: User }>('http://localhost:8000/api/users', payload)

    //     return response.data.data
    // },
    // update: async (payload: User) => {
    //     const response = await axios.put<{ data: User }>(`http://localhost:8000/api/users/${payload.id}`, payload)

    //     return response.data.data
    // },
    // deleteById: async (id: number) => {
    //     return await axios.delete(`http://localhost:8000/api/users/${id}`)
    // }
}

