import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Brands from "../components/Brands/Brands";
import Review from "../components/Review/Review";
import Book from "../components/Book/Book";
import Offers from "../components/Offers/Offers";
import Policy from "../components/Policy/Policy";
import Community from "../components/Community/Community";
// import DarkMode from "../components/DarkMode/DarkMode";

const Home = () => {

    const products = useLoaderData();

    return (
        <div>
            {/* <DarkMode></DarkMode> */}
            <Banner></Banner>
            <Brands products={products}></Brands>
            <Book></Book>
            <Offers></Offers>
            <Policy></Policy>
            <Review></Review>
            <Community></Community>
        </div>
    );
};

export default Home;