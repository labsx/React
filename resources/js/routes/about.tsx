import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useForm } from "react-hook-form";
import { newsCreateMutation, newsQueryOptions, newsUpdateMutation, newsDeleteMutation } from '../queries/news-queries'
import { NewsCreateSchema, News, NewsCreate } from '../types/news'
import { useQuery } from '@tanstack/react-query'
import { zodResolver } from "@hookform/resolvers/zod";

export const Route = createFileRoute('/about')({
    component: About,
})

function NewsForm() {
    // const newsForm = useForm();
    const newsForm = useForm({
        resolver: zodResolver(NewsCreateSchema)
    });
    const useMutation = newsCreateMutation()

    const onSubmit = async (data: NewsCreate) => {
        console.log(data);
        await useMutation.mutateAsync(data)
    }

    return (
        <form onSubmit={newsForm.handleSubmit(onSubmit)}>
            <div>
                <label>Title</label>
                <input {...newsForm.register("title")} />
                <p style={{ color: 'red' }}>{newsForm.formState.errors.title?.message}</p>
            </div>

            <div>
                <label>Content</label>
                <input {...newsForm.register("content")} />
                <p style={{ color: 'red' }}>{newsForm.formState.errors.content?.message}</p>
            </div>

            <div>
                <label>Author</label>
                <input {...newsForm.register("author")} />
                <p style={{ color: 'red' }}>{newsForm.formState.errors.author?.message}</p>
            </div>

            <button type="submit"
                onClick={async () => {
                    const isValid = await newsForm.trigger();
                    if (!isValid) {
                        console.log("Form has errors:", newsForm.formState.errors);
                        return;
                    }
                    newsForm.handleSubmit(onSubmit)();
                }}
            >Add</button>

            { }
            {Object.keys(newsForm.formState.errors).length > 0 && (
                <div className="text-red-500 mt-2">
                    {Object.entries(newsForm.formState.errors).map(([field, error]) => (
                        <p key={field}>{error.message}</p>
                    ))}
                </div>
            )}
            {/* <button
            style={{ color: "red" }}
            onClick={async () => {
                await deleteMutation.mutateAsync(item.id);
            }}
        >
            Delete
        </button> */}
        </form>
    )
}

function NewsList({ item }: { item: News }) {
    const deleteMutation = newsDeleteMutation()
    const userMutation = newsUpdateMutation()
    const newsForm = useForm({
        defaultValues: {
            id: item.id,
            title: item.title,
            content: item.content,
            author: item.author,
            published_at: item.published_at,
        }
    });

    const onSubmit = async (data: News) => {
        await userMutation.mutateAsync(data)
    }

    return <>
        <form onSubmit={newsForm.handleSubmit(onSubmit)}>
            <div>
                <h3>{item.title}</h3>
            </div>
            <div>
                {item.content}
            </div>
            <div>
                {item.author}
            </div>
            <div>
                {item.published_at}
            </div>
            <div>
                <label>Tiltle</label>
                <input {...newsForm.register('title')} />
            </div>

            <div>
                <label>Content</label>
                <input {...newsForm.register('content')} />
            </div>
            <div>
                <label>Author</label>
                <input type="" {...newsForm.register('author')} />
            </div>
            {/* <div>
            <label>Published At</label>
                <input type="datetime-local" {...newsForm.register('published_at')} />
            </div> */}

            <button type="submit">Update</button>
            <button style={{ color: 'red' }} onClick={async () => {
                await deleteMutation.mutateAsync(item.id)
            }}>Delete</button>
        </form>

        {/* <button
            style={{ color: 'red' }}
            onClick={async () => {
                await deleteMutation.mutateAsync(user.id)
            }}> Delete
        </button> */}
    </ >
}

function About() {
    const search = Route.useSearch()
    const navigate = useNavigate()
    const userQuery = useQuery(newsQueryOptions({
        ...search
    }))
    const news = userQuery.data
    console.log(news);

    return (
        <div>
            <h2 className="p-2" style={{ textAlign: 'center' }}>Sample</h2>
            <div style={{ textAlign: 'right' }} >
                <input placeholder='Search' type="text" onKeyDown={(v) => {
                    navigate({
                        to: '/about',
                        search: {
                            q: v.currentTarget.value
                        }
                    })
                }} />
            </div>

            <div>
                <NewsForm />
            </div>
            {/* <div>
                {news?.data.map((item) => (
                    <div key={item.id} className="bg-gray-200 p-4">
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                    <p>{item.author}</p>
                    <p>{item.published_at}</p>
                    </div>
                ))}
                </div> */}
            {news?.data.map(item => <NewsList key={item.id} item={item} />)}
        </div>
    );

}

