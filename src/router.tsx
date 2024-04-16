import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "./layout/PublicLayout";
import Home from "./pages/public/Home";
import Login from "./pages/public/Login";
import PrivateLayout from "./layout/PrivateLayout";
import Dashboard from "./pages/private/Dashboard";
import NotFound from "./pages/errors/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            // Rutas privadas //
            {   
                path: '/admin',
                element: <PrivateLayout />,
                children: [
                    {
                        index: true,
                        element: <Dashboard />
                    }
                ]
            }
        ]
    }
])