import { queryOptions, useMutation, useQueryClient } from "@tanstack/react-query";
import { userService } from "../services/users";
import { queryClient } from "./base-query";

export const usersQueryOptions = (
    search?: Record<string, string>
) => {
    return queryOptions({
        queryKey: ["users", search],
        queryFn: () => userService.list(search),
    });
};

export const userCreateMutation = () => {
    return useMutation({
        mutationFn: userService.create,
        onSuccess: async () => {
            queryClient.invalidateQueries({
                queryKey: ['users']
            })
        },
    })
}

export const userUpdateMutation = () => {
    return useMutation({
        mutationFn: userService.update,
        onSuccess: async () => {
            queryClient.invalidateQueries({
                queryKey: ['users']
            })
        },
    })
}

export const userDeleteMutation = () => {
    return useMutation({
        mutationFn: userService.deleteById,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["users"],
            });
        },
    });
};
