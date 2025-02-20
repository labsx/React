export type User = {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    updated_at?: string;
    created_at?: string;
}

export type UserCreate = {
    name: string;
    email: string;
    password: string;
}

export type Pagination = {
    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
}
