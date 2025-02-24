// routes.ts

import { createBrowserRouter } from 'react-router-dom'


import App from './App';
import Home from './pages/Home'
import AllNotesView from "./pages/AllNotesView.tsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/all-notes',
                element: <AllNotesView />
            },
        ],
    },
]);

export default router

