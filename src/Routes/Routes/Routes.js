import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Main from "../../Layout/Main";

export const routes = createBrowserRouter([
    {
        path:'/', 
        element: <Main></Main>,
        children:[
            {

            },
            {
                path: '*', element: <ErrorPage />
            }
        ]
    }
])