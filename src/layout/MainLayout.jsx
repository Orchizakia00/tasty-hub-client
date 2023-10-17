import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Navbar/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="w-[1400px] mx-auto">
                <Navbar></Navbar>
                <div className=" my-10">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;