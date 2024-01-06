import { FaAd, FaBars, FaHome, FaShoppingCart, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <label htmlFor="my-drawer-2" className="btn btn-ghost w-fit drawer-button lg:hidden text-left"><FaBars size={20} /></label>
                <Outlet />

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-red-300 dark:text-black text-base-content">
                    {/* Sidebar content here */}

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
        </div>
    );
};

export default Dashboard;