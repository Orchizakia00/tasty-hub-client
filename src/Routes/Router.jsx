import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import AddProduct from "../Pages/AddProduct";
import Cart from "../Pages/Cart";
import Login from "../Pages/Login";
import BrandProducts from "../components/BrandProducts/BrandProducts";
import UpdateProduct from "../components/UpdateProduct/UpdateProduct";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import Users from "../Pages/Users";
import Contact from "../Pages/Contact";
import Dashboard from "../layout/Dashboard";
import Faq from "../Pages/Faq";
import AllProducts from "../Pages/AllProducts";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://tasty-hub-server.vercel.app/product')
            },
            {
                path:'/contact',
                element: <Contact></Contact>
            },
            {
                path:'/faq',
                element: <Faq/>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/products',
                element: <AllProducts />,
                loader: () => fetch('https://tasty-hub-server.vercel.app/product')
            },
            {
                path: '/brandProducts/:brandName',
                element: <BrandProducts></BrandProducts>,
                loader: () => fetch('https://tasty-hub-server.vercel.app/product')
            },
            {
                path: '/updateProduct/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => fetch(`https://tasty-hub-server.vercel.app/product/${params.id}`)
            },
            {
                path: '/productDetails/:id',
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://tasty-hub-server.vercel.app/product/${params.id}`)
            },
        ]
    },

    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: 'add',
                element: <PrivateRoute><AddProduct/></PrivateRoute>
            },
            {
                path: 'users',
                element: <PrivateRoute><Users/></PrivateRoute>,
                loader: () => fetch('https://tasty-hub-server.vercel.app/user')
            },
            {
                path: 'cart',
                element: <PrivateRoute><Cart></Cart></PrivateRoute>,
                loader: () => fetch('https://tasty-hub-server.vercel.app/cart')
            },
        ]
    }

]);

export default router;