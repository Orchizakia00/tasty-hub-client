import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import AddProduct from "../Pages/AddProduct";
import Cart from "../Pages/Cart";
import Login from "../Pages/Login";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path:'/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/product')
        },
        {
            path:'/add',
            element: <AddProduct></AddProduct>
        },
        {
            path:'/cart',
            element: <Cart></Cart>
        },
        {
            path:'/login',
            element: <Login></Login>
        }
      ]
    },
  ]);

export default router;