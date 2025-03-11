import z from "zod";
// export type News = {
//     id: number;
//     title: z.string.required();
//     content: string;
//     author: string;
//     published_at: string;
//     updated_at?: string;
//     created_at?: string;
// }
export const NewsSchema = z.object({
    id: z.number(),
    title: z.string().min(1, "Title is required"),
    content: z.string().min(1, "Content is required"),
    author: z.string(),
    published_at: z.string(), 
    updated_at: z.string().optional(),
    created_at: z.string().optional(),
});

// export type NewsCreateSchema = {
//     title: string;
//     content: string;
//     author: string;
//     published_at: string;
// }
export const NewsCreateSchema = z.object({
    title: z.string().min(1, "Title is required"),
    content: z.string().min(1, "Content is required"),
    author: z.string().min(1, "Author is required"),
    published_at: z.string().optional(), 
});

// export type Pagination = {
//     current_page: number;
//     from: number;
//     last_page: number;
//     per_page: number;
//     to: number;
//     total: number;
// }

export type News = z.infer<typeof NewsSchema>;
export type NewsCreate = z.infer<typeof NewsCreateSchema>;
