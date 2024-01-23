import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/main.scss';
import './shared/config/i18next/i18next';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/providers/router/router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Suspense fallback=''>
            <RouterProvider router={router} />
        </Suspense>
    </React.StrictMode>,
);

//TODO: Подключить мультилэнг
//TODO: Реализовать главный экран
//TODO: Подключить Jest
//TODO: Подключить Storybook
