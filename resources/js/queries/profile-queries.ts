import { queryOptions,useMutation, useQueryClient } from "@tanstack/react-query";
import { profileService } from "../services/profile";
import { queryClient } from "./base-query";

export const profileQueryOptions = (
    search?: Record<string, string>
) => {
    return queryOptions({
        queryKey: ["profile", search],
        queryFn: () => profileService.list(search),
    });
};

// export const newsCreateMutation = () => {
//     return useMutation({
//         mutationFn: newsService.create,

//         onSuccess: async () => {
//             queryClient.invalidateQueries({
//                 queryKey: ['news']
//             })
//         },
//     })
// }

// export const newsUpdateMutation = () => {
//     return useMutation({
//         mutationFn: newsService.update,
//         onSuccess: async () => {
//             queryClient.invalidateQueries({
//                 queryKey: ['news']
//             })
//         },
//     })
// }

// export const newsDeleteMutation = () => {
//     return useMutation({
//         mutationFn: newsService.deleteById,
//         onSuccess: () => {
//             queryClient.invalidateQueries({
//                 queryKey: ["users"],
//             });
//         },
//     });
// };
