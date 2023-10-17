import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Brands from "../components/Brands/Brands";
import Review from "../components/Review/Review";

const Home = () => {

    const products = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Brands products={products}></Brands>
            <Review></Review>
        </div>
    );
};

export default Home;