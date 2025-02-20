import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { User, UserCreate } from '../types/user'
import { userCreateMutation, userDeleteMutation, usersQueryOptions, userUpdateMutation } from '../queries/user-queries'
import { useQuery } from '@tanstack/react-query'

export const Route = createFileRoute('/users')({
    component: RouteComponent,
})

function UserForm() {
    const form = useForm();
    const userMutation = userCreateMutation()

    const onSubmit = async (data: UserCreate) => {
        await userMutation.mutateAsync(data)
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <div>
                <label>Name</label>
                <input {...form.register('name')} />
            </div>

            <div>
                <label>Email</label>
                <input {...form.register('email')} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" {...form.register('password')} />
            </div>

            <button type="submit">Save</button>
        </form>
    )
}

function UserList({ user }: { user: User }) {
    const deleteMutation = userDeleteMutation()
    const userMutation = userUpdateMutation()
    const form = useForm({
        defaultValues: {
            id: user.id,
            name: user.name,
            email: user.email,
            password: '',
        }
    });

    const onSubmit = async (data: User) => {
        await userMutation.mutateAsync(data)
    }

    return <li>
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <h1>{user.name} - {user.email}</h1>

            <div>
                <label>Name</label>
                <input  {...form.register('name')} />
            </div>

            <div>
                <label>Email</label>
                <input  {...form.register('email')} />
            </div>

            <div>
                <label>Password</label>
                <input  {...form.register('password')} />
            </div>

            <button type="submit">Save</button>
        </form>

        <button
            style={{ color: 'red' }}
            onClick={async () => {
                await deleteMutation.mutateAsync(user.id)
            }}> Delete
        </button>
    </li >
}

function RouteComponent() {
    const search = Route.useSearch()
    const navigate = useNavigate()
    const userQuery = useQuery(usersQueryOptions({
        ...search
    }))
    const users = userQuery.data


    return (
        <div>
            <UserForm />

            <h3>Search</h3>
            <input type="text" onKeyDown={(v) => {

                navigate({
                    to: '/users',
                    search: {
                        q: v.currentTarget.value
                    }
                })
            }} />
            <div>
                {userQuery.isLoading ? <h2>Loading</h2> : <ul>
                    {users?.data.map(user => <UserList key={user.id} user={user} />)}
                </ul>}
            </div>
        </div>
    )
}
