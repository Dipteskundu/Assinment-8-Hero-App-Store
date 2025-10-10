import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/MainLayouts/MainLayout";
import DefaultErrorPage from "@/Pages/DefaultErrorPage";
import Home from "@/Pages/Home";
import AppList from "@/Pages/AppList";
import AppDetails from "@/Pages/AppDetails";
import Installation from "@/Pages/Installation";
import ErrorAppNotFound from "@/Pages/ErrorAppNotFound";

// Common loader for fetching the apps dataset
const fetchPlayData = () => fetch('/play-data.json');

// Loader with validation for app details route
const appDetailsLoader = async ({ params }) => {
    const idNum = Number(params.id);
    if (!Number.isInteger(idNum) || idNum < 1) {
        throw new Response('Not Found', { status: 404 });
    }
    const res = await fetch('/play-data.json');
    const data = await res.json();
    const app = data.find(app => app.id === idNum);
    if (!app) {
        throw new Response('Not Found', { status: 404 });
    }
    return app;
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        hydrateFallbackElement: <p>Loading..</p>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: fetchPlayData,
            },
            {
                path: '/apps',
                element: <AppList></AppList>,
                loader: fetchPlayData,
            },
            {
                path: '/app/:id',
                element: <AppDetails />,
                errorElement: <ErrorAppNotFound />,
                loader: appDetailsLoader,
            },
            {
                path: '/installation',
                element: <Installation />,
                loader: fetchPlayData,
            }
        ],
    },
    {
        path: '*',
        element: <DefaultErrorPage></DefaultErrorPage>
    }
])

export default router;