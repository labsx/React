import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const Route = createFileRoute('/users')({
    component: RouteComponent,
})

type User = {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    updated_at: string;
    created_at: string;
}

type Pagination = {
    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
}

function RouteComponent() {
    const [users, setUsers] = useState<User[]>([])

    const getUsers = async () => {
        const response = await axios.get<{ data: User[]; meta: Pagination }>('http://localhost:8000/api/users')

        setUsers(response.data.data)
    }

    useEffect(() => {
        getUsers()
    }, [])


    return (<ul>
        {users?.map(user => <li key={user.id}>{user.name} - {user.email}</li>)}
    </ul>)
}
