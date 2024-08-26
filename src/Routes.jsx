import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import App from "./App";
import { Home, About, Contact, Services, Reviews, Gallery } from "./pages";

const MyRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'reviews',
        element: <Reviews />
      },
      {
        path: 'gallery',
        element: <Gallery />
      },
      {
        path: '*',
        element: <Navigate to="/" replace />
      }
    ]
  }
]);

export default MyRoutes;