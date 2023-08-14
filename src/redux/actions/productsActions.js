import { UPDATE_STATE } from "../types/productsTypes";
import { toast } from "react-toastify";
import { api } from "../../api";

export function updateState(data) {
    return {
        type: UPDATE_STATE,
        payload: data,
    };
}

export function getProducts() {
    return function (dispatch) {
        api.get()
            .then((response) => {
                dispatch(
                    updateState({
                        products: response.data,
                        filteredProducts: response.data,
                    })
                );
            })
            .catch((err) => {
                toast.error(err.message);
            })
            .finally(() => {
                dispatch(updateState({ isLoading: false }));
            });
    };
}

export function getProduct() {
    return function (dispatch, getState) {
        api.get(getState().products.selectedIndex)
            .then((response) => {
                dispatch(
                    updateState({ isLoading: true, product: response.data })
                );
            })
            .catch((err) => {
                toast.error(err.message);
            })
            .finally(() => {
                dispatch(updateState({ isLoading: false }));
            });
    };
}
