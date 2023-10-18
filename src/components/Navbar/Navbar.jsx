import { Link, NavLink } from "react-router-dom";
import { FaUtensils } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogout = () => {
        logOut()
            .then(res => {
                console.log(res)
                toast.success('Logged Out Successfully!')
            })
            .catch(err => console.log(err))
    }

    const navLinks = <>
        <NavLink to={'/'}> <li><a className="font-semibold">Home</a></li> </NavLink>
        <NavLink to={'/add'}> <li><a className="font-semibold">Add Product</a></li> </NavLink>
        <NavLink to={'/cart'}> <li><a className="font-semibold">Cart</a></li> </NavLink>
        <NavLink to={'/users'}> <li><a className="font-semibold">Users</a></li> </NavLink>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>

                <FaUtensils></FaUtensils>
                <Link to={'/'}>
                    <a className="btn btn-ghost normal-case text-2xl">Tasty Hub</a>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>

            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <span className="mr-2">{user.displayName}</span>
                        <label tabIndex={0} className="avatar mr-2">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} alt={user.photoURL} className="" />
                            </div>
                        </label>

                        <button onClick={handleLogout} className="btn btn-ghost normal-case">Log Out</button>
                    </>

                        :
                        <Link to={'/login'}><button className="btn btn-ghost normal-case">Login</button></Link>
                }
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Navbar;