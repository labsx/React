import axios from "axios";
import { News, NewsCreate } from "../types/news";
import { Pagination } from "../types/meta";

export const newsService = {
    list: async (search = {}) => {
        const response = await axios.get<{ data: News[]; meta: Pagination }>('http://localhost:8000/api/news', {
            params: search
        })

        return response.data
    },
    create: async (payload: NewsCreate) => {
        const response = await axios.post<{ data: News }>('http://localhost:8000/api/news', payload)

        return response.data.data
    },
    update: async (payload: News) => {
        const response = await axios.put<{ data: News }>(`http://localhost:8000/api/news/${payload.id}`, payload)

        return response.data.data
    },
    deleteById: async (id: number) => {
        return await axios.delete(`http://localhost:8000/api/news/${id}`)
    }
}

