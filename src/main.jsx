import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Applied from './components/Applied/Applied';
import Blog from './components/Blog/Blog';
import JobDetails from './components/JobDetails/JobDetails';
import jobApplicationLoader from './loaders/jobApplicationLoader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: 'jobDetails/:jobId',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path:'/applied-Jobs',
        element: <Applied></Applied>,
        loader: jobApplicationLoader
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
