import { render } from 'preact';
import { App } from './app.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RegisterPage from './Pages/RegisterPAge.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import { DashboardPage } from './Pages/DashboardPage.jsx';
import { Toaster } from 'react-hot-toast';
import { UserProvider } from './hooks/useUser.jsx';





const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/register",
                element: <RegisterPage />
            },
            {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "/dashboard",
                element: <DashboardPage />
            },
        ]
    }
])

const RootApp = () => (
    <>
    <UserProvider>
      <Toaster />
      <RouterProvider router={router} />
      </UserProvider>
    </>
  );

render(<RootApp />, document.getElementById('app'))
