import { queryOptions,useMutation, useQueryClient } from "@tanstack/react-query";
import { newsService } from "../services/news";
import { queryClient } from "./base-query";

export const newsQueryOptions = (
    search?: Record<string, string>
) => {
    return queryOptions({
        queryKey: ["news", search],
        queryFn: () => newsService.list(search),
    });
};

export const newsCreateMutation = () => {
    return useMutation({
        mutationFn: newsService.create,

        onSuccess: async () => {
            queryClient.invalidateQueries({
                queryKey: ['news']
            })
        },
    })
}

export const newsUpdateMutation = () => {
    return useMutation({
        mutationFn: newsService.update,
        onSuccess: async () => {
            queryClient.invalidateQueries({
                queryKey: ['news']
            })
        },
    })
}

export const newsDeleteMutation = () => {
    return useMutation({
        mutationFn: newsService.deleteById,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["users"],
            });
        },
    });
};
