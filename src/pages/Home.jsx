import ProductsFilter from "../components/ProductsFilter";
import ProductsList from "../components/ProductsList";
import useScrollTop from "../hooks/useScrollTop";

const Home = () => {
    useScrollTop();
    return (
        <div className='container'>
            <div className='my-3'>
                <ProductsFilter />
            </div>

            <ProductsList />
        </div>
    );
};

export default Home;
