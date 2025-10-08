import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayouts/MainLayout";
import DefaultErrorPage from "../Pages/DefaultErrorPage";
import Banner from '../Components/Banner/Banner'
import Home from "../Pages/Home";
import AppList from "../Pages/AppList";
import AppDetails from "../Pages/AppDetails";
import Installation from "../Pages/Installation";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        hydrateFallbackElement: <p>Loading..</p>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
                loader: () => fetch('/play-data.json')
            },
            {
                path: '/apps',
                element:<AppList></AppList>,
                loader: () => fetch('/play-data.json')
            },
            {
                path: '/app/:id',
                element: <AppDetails />,
                loader: async ({ params }) => {
                    const res = await fetch('/play-data.json');
                    const data = await res.json();
                    const app = data.find(app => app.id === parseInt(params.id));
                    return app;
                }
            },
            {
                path: '/installation',
                element: <Installation />,
                loader: () => fetch('/play-data.json')
            }
        ],
    },
    {
        path: '*',
        element: <DefaultErrorPage></DefaultErrorPage>
    }
])

export default router;