import React from 'react';
import Feed from './Feed';
import { FiLoader, FiFrown } from 'react-icons/fi';

const Home = ({ posts, isLoading, fetchError }) => {
    return (
        <main className='Home'>
            {isLoading && (
                <>
                    <FiLoader className='image loader' />
                    <p className='msg load'>Loading...</p>
                </>
            )}
            {!isLoading && fetchError && (
                <>
                    <FiFrown className='image err' />
                    <p className='msg err'>{fetchError}</p>
                </>
            )}
            {!isLoading &&
                !fetchError &&
                (posts.length ? <Feed posts={posts} /> : <p>No Posts!</p>)}
        </main>
    );
};

export default Home;
