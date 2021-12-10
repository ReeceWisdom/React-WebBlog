import React from 'react';

const About = () => {
    return (
        <main className='About'>
            <h2>About</h2>
            <p style={{ marginTop: '1rem' }}>
                This personal blog app is a project I created to Learn React
                using the React Router Library & Axios API Requests. React
                Router is a standard library for routing in React. It enables
                navigation across different views of various components in a
                React Application, and changes the browser URL accordingly
                (maintaining synchronisation between the UI and URL).
                <br />
                <br />
                JSX (JavaScript XML) syntax is neither a string nor HTML, it’s a
                syntax extension to JavaScript. JSX is used in React to write
                HTML in JavaScript in the DOM to design the UI. Since JSX is
                closer to JavaScript than to HTML, React DOM uses camelCase
                property naming convention instead of HTML attribute names, e.g.
                class becomes className in JSX, and tabindex becomes tabIndex.
                <br />
                <br />
                React separates concerns with loosely coupled units called
                “components” that contain both markup (HTML) & logic
                (JavaScript). Babel compiles JSX down and produces React
                “elements” with React.createElement() calls. After compilation,
                JSX expressions become regular JavaScript function calls and
                evaluate to JavaScript objects.
                <br />
                <br />
                By default, React DOM escapes any values embedded in JSX before
                rendering them. Thus ensuring that you can never inject anything
                that’s not explicitly written in your application. Everything is
                converted to a string before being rendered. This helps prevent
                XSS (cross-site-scripting) attacks.
            </p>
        </main>
    );
};

export default About;
