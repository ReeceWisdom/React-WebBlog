import { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import api from '../api/posts';
import useWindowSize from '../hooks/useWindowSize';
import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');

    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');

    const navigate = useNavigate();

    const { width } = useWindowSize();
    const { data, fetchError, isLoading } = useAxiosFetch(
        'http://localhost:3100/posts'
    );

    useEffect(() => {
        setPosts(data);
    }, [data]);

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
        <DataContext.Provider
            value={{
                width,
                search,
                setSearch,
                searchResults,
                isLoading,
                fetchError,
                posts,
                postTitle,
                editTitle,
                postBody,
                editBody,
                setPostTitle,
                setEditTitle,
                setPostBody,
                setEditBody,
                handleSubmit,
                handleEdit,
                handleDelete,
            }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
