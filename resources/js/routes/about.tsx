import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useForm } from "react-hook-form";
import { newsCreateMutation, newsQueryOptions, newsUpdateMutation, newsDeleteMutation } from '../queries/news-queries'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaGlobe, FaLinkedin, FaGithub, FaAward } from 'react-icons/fa';
import { NewsCreateSchema, News, NewsCreate } from '../types/news'
import { useQuery } from '@tanstack/react-query'
import { zodResolver } from "@hookform/resolvers/zod";
import { FaEllipsisV } from 'react-icons/fa';
import { Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import ContactInformation from '../components/contactinformation';

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
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const search = Route.useSearch()
    const navigate = useNavigate()
    const userQuery = useQuery(newsQueryOptions({
        ...search
    }))
    const news = userQuery.data
    console.log(news);

    return (
        <div>
             <div className="absolute top-4 right-4">
                <FaEllipsisV 
                    className="text-white cursor-pointer" 
                    onClick={handleClick} 
                />
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Add</MenuItem>
                    <MenuItem onClick={handleClose}>Edit</MenuItem>
                </Menu>
            </div>
         <div className="bg-gradient-to-r from-indigo-800 to-purple-800 p-10 rounded-3xl shadow-2xl max-w-4xl mx-auto text-white">
            {/* Profile Section */}
            <div className="flex items-center gap-6 border-b border-white pb-6 mb-6">
                <img 
                    src="https://randomuser.me/api/portraits/men/2.jpg" 
                    alt="Profile" 
                    className="rounded-full w-32 h-32 border-4 border-white shadow-lg"
                />
                <div>
                    <h1 className="text-5xl font-extrabold">Alexander James Martinez</h1>
                    <p className="text-xl text-purple-300">Full Stack Developer</p>
                </div>
            </div>

            <div>
                <ContactInformation />
            </div>

            {/* Skills Section */}
            <div className="mt-8">
                <h2 className="text-3xl font-bold mb-4">Skills</h2>
                <div className="bg-purple-700 p-4 rounded-lg shadow-lg space-y-2">
                    <div className="flex items-center gap-3">
                        <span className="font-bold">JavaScript:</span> <div className="w-full h-2 bg-purple-300 rounded-full overflow-hidden"><div className="h-full bg-purple-500 w-9/12"></div></div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="font-bold">React:</span> <div className="w-full h-2 bg-purple-300 rounded-full overflow-hidden"><div className="h-full bg-purple-500 w-8/12"></div></div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="font-bold">Node.js:</span> <div className="w-full h-2 bg-purple-300 rounded-full overflow-hidden"><div className="h-full bg-purple-500 w-7/12"></div></div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="font-bold">PHP:</span> <div className="w-full h-2 bg-purple-300 rounded-full overflow-hidden"><div className="h-full bg-purple-500 w-6/12"></div></div>
                    </div>
                </div>
            </div>

            {/* Experience Section */}
            <div className="mt-8">
                <h2 className="text-3xl font-bold mb-4">Experience</h2>
                <div className="bg-purple-700 p-4 rounded-lg shadow-lg">
                    <p className="flex items-center gap-2">
                        <FaBriefcase className="text-purple-200" />
                        <span className="font-bold">Senior Developer - InnovateTech</span>
                    </p>
                    <p className="text-purple-300">March 2021 - Present</p>
                    <p>Built scalable applications, improved system architecture, and mentored junior developers.</p>
                </div>
                <div className="bg-purple-700 p-4 rounded-lg shadow-lg mt-4">
                    <p className="flex items-center gap-2">
                        <FaBriefcase className="text-purple-200" />
                        <span className="font-bold">Junior Developer - WebSolutions Inc.</span>
                    </p>
                    <p className="text-purple-300">July 2018 - February 2021</p>
                    <p>Developed web applications, contributed to UI/UX improvements, and collaborated with cross-functional teams.</p>
                </div>
            </div>

            {/* Education Section */}
            <div className="mt-8">
                <h2 className="text-3xl font-bold mb-4">Education</h2>
                <div className="bg-purple-700 p-4 rounded-lg shadow-lg">
                    <p className="flex items-center gap-2">
                        <FaGraduationCap className="text-purple-200" />
                        <span className="font-bold">Bachelor of Science in Computer Science</span>
                    </p>
                    <p className="text-purple-300">Stanford University - 2018</p>
                </div>
            </div>

            {/* Certifications Section */}
            <div className="mt-8">
                <h2 className="text-3xl font-bold mb-4">Certifications</h2>
                <div className="bg-purple-700 p-4 rounded-lg shadow-lg">
                    <p className="flex items-center gap-2">
                        <FaAward className="text-purple-200" />
                        <span className="font-bold">AWS Certified Solutions Architect</span>
                    </p>
                    <p className="text-purple-300">Issued May 2022 - AWS</p>
                </div>
            </div>
        </div>


            <h2 className="p-2" style={{ textAlign: 'center' }}>Sample</h2>
            {/* <div style={{ textAlign: 'right' }} >
                <input placeholder='Search' type="text" onKeyDown={(v) => {
                    navigate({
                        to: '/about',
                        search: {
                            q: v.currentTarget.value
                        }
                    })
                }} />
            </div> */}

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

