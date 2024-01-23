import { createBrowserRouter } from 'react-router-dom';
import App from '../../App.tsx';
import { ErrorPage } from '../../../pages/ErrorPage';
import { AppLayout } from '../../layouts/AppLayout.tsx';

export const router = createBrowserRouter([
    {
        path: '/',
        loader: () => window.location,
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <App />,
            },
            {
                path: '/:lang/',
                element: <App />,
            },
        ],
    },
]);
