import { connect } from "react-redux";
import { getProduct, updateState } from "../redux/actions/productsActions";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Card from "../components/Card";
import Loader from "../components/Loader";

const Product = (props) => {
    const { id } = useParams();

    useEffect(() => {
        props.updateState({ selectedIndex: id });
        props.getProduct();

        return () => props.updateState({ product: {} });
    }, []);
    return (
        <>
            {props.isLoading ? (
                <Loader />
            ) : (
                <div className='container-fluid'>
                    <div className='row'>
                        <Card {...props.product} />
                    </div>
                </div>
            )}
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        product: state.products.product,
        isLoading: state.products.isLoading,
    };
};

export default connect(mapStateToProps, { getProduct, updateState })(Product);
