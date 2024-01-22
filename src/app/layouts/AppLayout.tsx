import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
    return (
        <Suspense fallback={'...LOADER'}>
            <Outlet />
        </Suspense>
    );
};
