import Layout from './Layout';
import Home from './Home';
import About from './About';
import PostPage from './PostPage';
import NewPost from './NewPost';
import EditPost from './EditPost';
import Missing from './Missing';
import { FiLoader } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import api from './api/posts';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await api.get('/posts');
                setPosts(response.data);
            } catch (err) {
                handleError(err);
            } finally {
                setIsLoading(false);
            }
        };
        setTimeout(() => {
            fetchPosts();
        }, 1000);
    }, []);

    useEffect(() => {
        const filterResults = posts.filter(
            (post) =>
                post.title.toLowerCase().includes(search.toLowerCase()) ||
                post.body.toLowerCase().includes(search.toLowerCase())
        );
        setSearchResults(filterResults.reverse());
    }, [posts, search]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const newPost = { id, title: postTitle, datetime, body: postBody };
        try {
            const response = await api.post('/posts', newPost);
            const postsList = [...posts, response.data];
            setPosts(postsList);
            setPostTitle('');
            setPostBody('');
            navigate('/');
        } catch (err) {
            handleError(err);
        }
    };

    const handleEdit = async (id) => {
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const updatedPost = { id, title: editTitle, datetime, body: editBody };
        try {
            const response = await api.put(`/posts/${id}`, updatedPost);
            setPosts(
                posts.map((post) =>
                    post.id === id ? { ...response.data } : post
                )
            );
            setEditTitle('');
            setEditBody('');
            navigate('/');
        } catch (err) {
            handleError(err);
        }
    };

    const handleDelete = async (id) => {
        try {
            await api.delete(`/posts/${id}`);
            const postsList = posts.filter((post) => post.id !== id);
            setPosts(postsList);
            navigate('/');
        } catch (err) {
            handleError(err);
        }
    };

    const handleError = (err) => {
        if (err.response) {
            console.log(`Error: ${err.response.status}:`);
            console.log(err.response.data.message);
        } else {
            console.log(`Error: ${err.code}`);
            console.log(err.message);
        }
    };

    return (
        <Routes>
            <Route
                path='/'
                element={<Layout search={search} setSearch={setSearch} />}>
                {isLoading && (
                    <Route index element={<FiLoader className='loader' />} />
                )}
                {!isLoading && (
                    <Route index element={<Home posts={searchResults} />} />
                )}
                <Route path='post'>
                    <Route
                        index
                        element={
                            <NewPost
                                postTitle={postTitle}
                                setPostTitle={setPostTitle}
                                postBody={postBody}
                                setPostBody={setPostBody}
                                handleSubmit={handleSubmit}
                            />
                        }
                    />
                    <Route
                        path=':id'
                        element={
                            <PostPage
                                posts={posts}
                                handleDelete={handleDelete}
                            />
                        }
                    />
                    <Route
                        path=':id/edit'
                        element={
                            <EditPost
                                posts={posts}
                                editTitle={editTitle}
                                setEditTitle={setEditTitle}
                                editBody={editBody}
                                setEditBody={setEditBody}
                                handleEdit={handleEdit}
                            />
                        }
                    />
                </Route>
                <Route path='about' element={<About />} />
                <Route path='*' element={<Missing />} />
            </Route>
        </Routes>
    );
}

export default App;
