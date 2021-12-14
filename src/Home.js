import React from 'react';
import Feed from './Feed';
import { FiLoader, FiFrown } from 'react-icons/fi';
import { useContext } from 'react';
import DataContext from './context/DataContext';

const Home = () => {
    const { searchResults, isLoading, fetchError } = useContext(DataContext);
    const loadingMsg = 'Loading...';

    return (
        <main className='Home'>
            {isLoading && (
                <>
                    <FiLoader className='image loader' />
                    <p className='msg load'>{loadingMsg}</p>
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
                (searchResults.length ? (
                    <Feed posts={searchResults} />
                ) : (
                    <p>No Posts!</p>
                ))}
        </main>
    );
};

export default Home;
