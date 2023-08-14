import { connect } from "react-redux";
import { getProducts } from "../redux/actions/productsActions";
import ProductItem from "./ProductItem";
import Loader from "./Loader";
import { useEffect } from "react";

const ProductsList = (props) => {
    useEffect(() => {
        props.getProducts();
    }, []);
    return (
        <>
            {props.isLoading ? (
                <Loader />
            ) : (
                <ul className='row products-list'>
                    {props.filteredProducts.slice(0, 8).map((product) => (
                        <ProductItem key={product.id} {...product} />
                    ))}
                </ul>
            )}
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        filteredProducts: state.products.filteredProducts,
        isLoading: state.products.isLoading,
    };
};

export default connect(mapStateToProps, { getProducts })(ProductsList);
