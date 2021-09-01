import { lazy } from 'react';
import { env } from '../env';

// Configure all routes of the application that contain
const RoutesConfing = [
    {
        exact: true,
        private: false,
        path: `${env.PUBLIC_URL === '' ? '/' : env.PUBLIC_URL}`,
        component: lazy(() => import('../../pages/signup'))
    }
];


export default RoutesConfing;