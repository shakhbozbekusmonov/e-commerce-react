import { UPDATE_STATE } from "../types/productsTypes";

const initialState = {
    products: [],
    filteredProducts: [],
    product: {},
    isLoading: true,
    selectedIndex: null,
};

export const productsReducer = (state = initialState, action) => {
    if (action.type === UPDATE_STATE) {
        return {
            ...state,
            ...action.payload,
        };
    }
    return state;
};
