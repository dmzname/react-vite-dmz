import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import './app/styles/main.scss';
import './shared/config/i18next/i18next';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Suspense>
            <App />
        </Suspense>
    </React.StrictMode>,
);

//TODO: Подключить мультилэнг
//TODO: Реализовать главный экран
//TODO: Подключить Jest
//TODO: Подключить Storybook
