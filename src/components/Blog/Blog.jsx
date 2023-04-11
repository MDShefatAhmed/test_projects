import React from 'react';

const Blog = () => {
    return (
        <div className='p-5 text-center'>
            <div className='bg-indigo-50 my-5 p-8'>
                <h1 className='text-3xl font-bold text-green-800'>1. When should you use context API?</h1>
                <p className='bg-blue-100 p-3 mt-3'>Ans: Context API simplifies sharing state between components in React without the need for prop drilling. Useful in complex component trees to reduce unnecessary props and provide a centralized state management system for data that needs to be accessed globally. Can also aid in implementing themes and internationalization.
                </p>
            </div>
            <div className='bg-indigo-50 my-5 p-8'>
                <h1 className='text-3xl font-bold text-green-800'>2. What is a custom hook?
                </h1>
                <p className='bg-blue-100 p-3 mt-3'>Ans: A custom hook is a reusable JavaScript function in React that encapsulates stateful logic using built-in hooks. They enable the abstraction of complex behavior from components, making them more reusable and easier to maintain. Custom hooks follow the "use" naming convention and can handle tasks like fetching data or managing form state.
                </p>
            </div>
            <div className='bg-indigo-50 my-5 p-8'>
                <h1 className='text-3xl font-bold text-green-800'>3. What is useRef?</h1>
                <p className='bg-blue-100 p-3 mt-3'>Ans: useRef is a React built-in hook that returns a mutable ref object, which can be attached to a React element and persist between renders. This hook allows for accessing and modifying the value of the ref object without triggering a re-render.
                </p>
            </div>
            <div className='bg-indigo-50 my-5 p-8'>
                <h1 className='text-3xl font-bold text-green-800'>4. What is useMemo?
                </h1>
                <p className='bg-blue-100 p-3 mt-3'>Ans: useMemo is a React built-in hook that allows for memoization of a function's computed value. It takes a function and an array of dependencies as arguments and only recomputes the value if the dependencies change. This can improve performance by avoiding unnecessary re-renders.
                </p>
            </div>
        </div>
    );
};

export default Blog;