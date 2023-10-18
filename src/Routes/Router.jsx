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


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/product')
            },
            {
                path: '/add',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/cart',
                element: <Cart></Cart>,
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
                path: '/brandProducts/:brandName',
                element: <BrandProducts></BrandProducts>,
                loader: () => fetch('http://localhost:5000/product')
            },
            {
                path: '/updateProduct/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: '/productDetails/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
            },
        ]
    },
]);

export default router;