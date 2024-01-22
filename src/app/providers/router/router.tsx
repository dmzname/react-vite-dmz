import { createBrowserRouter } from 'react-router-dom';
import App from '../../App.tsx';
import { ErrorPage } from '../../../pages/ErrorPage';
import { AppLayout } from '../../layouts/AppLayout.tsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/:lang/',
                element: <App />,
            },
        ],
    },
]);
