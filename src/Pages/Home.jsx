import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Brands from "../components/Brands/Brands";
import Review from "../components/Review/Review";
// import DarkMode from "../components/DarkMode/DarkMode";

const Home = () => {

    const products = useLoaderData();

    return (
        <div>
            {/* <DarkMode></DarkMode> */}
            <Banner></Banner>
            <Brands products={products}></Brands>
            <Review></Review>
        </div>
    );
};

export default Home;