import { connect } from "react-redux";
import { updateState } from "../redux/actions/productsActions";
import Button from "./Button";
import { useForm } from "../hooks/useForm";
import { useEffect } from "react";

const initialState = {
    search: "",
};

const ProductsFilter = (props) => {
    const [value, handleChange] = useForm(initialState);

    const handleClick = (_category) => {
        if (_category) {
            props.updateState({
                filteredProducts: props.products.filter(
                    (product) => product.category === _category
                ),
            });
        } else {
            props.updateState({
                filteredProducts: props.products,
            });
        }
    };

    useEffect(() => {
        const SEARCH_QUERY = new RegExp(value.search, "gi");
        props.updateState({
            filteredProducts: props.products.filter((product) =>
                product.title.match(SEARCH_QUERY)
            ),
        });
    }, [value]);
    return (
        <form>
            <div className='d-md-flex justify-content-between align-items-center d-block'>
                <input
                    className='form-control me-2 mb-3 mb-md-0'
                    type='search'
                    name='search'
                    value={value.search}
                    onChange={handleChange}
                    placeholder='🔍 Search a product...'
                />

                <div className='d-block d-md-flex'>
                    <Button
                        color='outline-success filter-btn mb-3 mb-md-0'
                        className='me-2'
                        text='All'
                        type='button'
                        onClick={() => handleClick("")}
                    />
                    <Button
                        color='outline-dark filter-btn mb-3 mb-md-0'
                        className='me-2'
                        text="Men's clothing"
                        type='button'
                        onClick={() => handleClick("men's clothing")}
                    />
                    <Button
                        color='outline-danger filter-btn mb-3 mb-md-0'
                        className='me-2'
                        text="Women's clothing"
                        type='button'
                        onClick={() => handleClick("women's clothing")}
                    />
                    <Button
                        color='outline-warning filter-btn mb-3 mb-md-0'
                        className='me-2'
                        text='Jewelery'
                        type='button'
                        onClick={() => handleClick("jewelery")}
                    />
                    <Button
                        color='outline-primary filter-btn mb-3 mb-md-0'
                        className='me-2'
                        text='Electronics'
                        type='button'
                        onClick={() => handleClick("electronics")}
                    />
                </div>
            </div>
        </form>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
    };
};

export default connect(mapStateToProps, { updateState })(ProductsFilter);
