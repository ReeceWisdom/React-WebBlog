import React from 'react';
import { useContext } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import DataContext from './context/DataContext';
import api from './api/posts';

const PostPage = () => {
    const { posts, setPosts } = useContext(DataContext);
    const navigate = useNavigate();

    const { id } = useParams();
    const post = posts.find((post) => post.id.toString() === id);

    const handleDelete = async (id) => {
        try {
            await api.delete(`/posts/${id}`);
            const postsList = posts.filter((post) => post.id !== id);
            setPosts(postsList);
            navigate('/');
        } catch (err) {
            console.log(`Error: ${err.response.status}:`);
            console.log(err.response.data.message);
        }
    };

    return (
        <main className='PostPage'>
            <article className='post'>
                {post && (
                    <>
                        <h2>{post.title}</h2>
                        <p className='postDate'>{post.datetime}</p>
                        <p className='postBody'>{post.body}</p>
                        <Link to={`/post/${post.id}/edit`}>
                            <button className='editButton'>Edit Post</button>
                        </Link>
                        <button
                            className='deleteButton'
                            onClick={() => handleDelete(post.id)}>
                            Delete Post
                        </button>
                    </>
                )}
                {!post && (
                    <>
                        <h2>Post Not Found!</h2>
                        <Link to='/'>Return to Homepage</Link>
                    </>
                )}
            </article>
        </main>
    );
};

export default PostPage;
