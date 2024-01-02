import { FaAd, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-red-300 dark:text-black">
                <ul className="menu p-4">

                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart">
                            <FaShoppingCart></FaShoppingCart>
                            My Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/add">
                            <FaAd></FaAd>
                            Add Product</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/users">
                            <FaUsers></FaUsers>
                            Users</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;