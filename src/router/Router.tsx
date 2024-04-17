// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React,{ReactElement,useEffect} from 'react';
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';
import HomePage from '../pages/home/HomePage.tsx';

import {
    HomeOutlined,
} from '@mui/icons-material';
import PortfolioPage from "../pages/portfolio/PortfolioPage.tsx";
import ContactPage from "../pages/contact/ContactPage.tsx";

export interface AuthRoute {
    path: string,
    element: React.ReactElement,
    requiresAuthentication: boolean,
    param?: string,
    display?: {
        name: string,
        icon?: ReactElement,
        sort?: number,
        hideFromNavbar?: boolean
    }
}


export const routes: AuthRoute[] = [
    {
        path: '/home',
        element: <HomePage />,
        requiresAuthentication: false,
        display: {
            name: 'Home',
            icon: <HomeOutlined />,
            sort: 0,
        }
    },
    {
        path: '/portfolio',
        element: <PortfolioPage />,
        requiresAuthentication: false,
        display: {
            name: 'Portfolio',
            icon: <HomeOutlined />,
            sort: 1,
        }
    },
    {
        path: '/contact',
        element: <ContactPage />,
        requiresAuthentication: false,
        display: {
            name: 'Contact',
            icon: <HomeOutlined />,
            sort: 2,
        }
    },
];

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {
                    routes
                        .map(({ path, element, param }) => {
                            if (param) {
                                return (
                                    <Route key={path} path={path} element={element}>
                                        <Route path={`:${param}`} element={element} />
                                    </Route>
                                );
                            }
                            return <Route key={path} path={path} element={element}/>;
                        })
                }
                <Route path="*" element={<Navigate to={'/home'} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
