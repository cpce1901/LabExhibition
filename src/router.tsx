import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "./layout/PublicLayout";
import Home from "./pages/public/Home";
import Login from "./pages/public/Login";
import PrivateLayout from "./layout/PrivateLayout";
import Dashboard from "./pages/private/Dashboard";
import NotFound from "./pages/errors/NotFound";
import Projects from "./pages/public/Projects";
import Contact from "./pages/public/Contact";

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
            {
                path: '/proyectos',
                element: <Projects />
            },
            {
                path: '/contacto',
                element: <Contact />
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