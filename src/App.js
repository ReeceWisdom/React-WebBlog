import Layout from './Layout';
import Home from './Home';
import About from './About';
import PostPage from './PostPage';
import NewPost from './NewPost';
import EditPost from './EditPost';
import Missing from './Missing';
import { Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

function App() {
    const title = 'React JS Blog';

    return (
        <DataProvider>
            <Routes>
                <Route path='/' element={<Layout title={title} />}>
                    <Route index element={<Home />} />
                    <Route path='post'>
                        <Route index element={<NewPost />} />
                        <Route path=':id' element={<PostPage />} />
                        <Route path=':id/edit' element={<EditPost />} />
                    </Route>
                    <Route path='about' element={<About />} />
                    <Route path='*' element={<Missing />} />
                </Route>
            </Routes>
        </DataProvider>
    );
}

export default App;
