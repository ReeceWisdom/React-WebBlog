import Layout from './Layout';
import Home from './Home';
import About from './About';
import PostPage from './PostPage';
import NewPost from './NewPost';
import Missing from './Missing';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

// useHistory() = useNavigate()
// history.push = navigate

function App() {
    //const API_URL = '';
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: 'My 1st Post',
            datetime: 'July 01, 2021 11:17:36 AM',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
            id: 2,
            title: 'My 2nd Post',
            datetime: 'July 01, 2021 11:17:36 AM',
            body: 'Quis consequatur expedita, assumenda similique non optio!',
        },
        {
            id: 3,
            title: 'My 3rd Post',
            datetime: 'July 01, 2021 11:17:36 AM',
            body: 'Modi nesciunt excepturi corrupti atque blanditiis quo nobis.',
        },
        {
            id: 4,
            title: 'My 4th Post',
            datetime: 'July 01, 2021 11:17:36 AM',
            body: 'Non optio quae possimus illum exercitationem ipsa!',
        },
    ]);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const filterResults = posts.filter(
            (post) =>
                post.title.toLowerCase().includes(search.toLowerCase()) ||
                post.body.toLowerCase().includes(search.toLowerCase())
        );
        setSearchResults(filterResults.reverse());
    }, [posts, search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const newPost = { id, title: postTitle, datetime, body: postBody };
        const postsList = [...posts, newPost];
        setPosts(postsList);
        setPostTitle('');
        setPostBody('');
        navigate('/');
    };

    const handleDelete = (id) => {
        const postsList = posts.filter((post) => post.id !== id);
        setPosts(postsList);
        navigate('/');
    };

    return (
        <Routes>
            <Route
                path='/'
                element={<Layout search={search} setSearch={setSearch} />}>
                <Route index element={<Home posts={searchResults} />} />
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
                </Route>
                <Route path='about' element={<About />} />
                <Route path='*' element={<Missing />} />
            </Route>
        </Routes>
    );
}

export default App;
