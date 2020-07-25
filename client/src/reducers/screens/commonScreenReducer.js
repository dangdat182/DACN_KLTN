import {
    ADD_TO_CART,
    DELETE_FILTER_QUERY,
    LOAD_HOME_PAGE,
    LOAD_SHOPPING_BAG_PRODUCTS,
    LOAD_FILTER_ATTRIBUTES,
    LOAD_FILTER_PRODUCTS,
    LOAD_TABS_DATA,
    REMOVE_FILTER_ATTRIBUTES,
    SAVE_QUERY_STATUS,
    SELECT_PRODUCT_DETAIL,
    CART_TOTAL,
    SAVE_SORT_LIST,
    SHIPPING_ADDRESS_CONFIRMED,
    PAYMENT_INFO_CONFIRMED,
    SHIPPING_OPTION_CONFIRMED
} from "../../actions/types";
import log from "loglevel";
import {INITIAL_QUERY_STATUS} from "../../constants/constants";

export const homePageDataReducer = (state = {isLoading: true}, action) => {
    log.trace(`[HOME_SCREEN_REDUCER]: action.type = ${action.type}`)
    switch (action.type) {
        case LOAD_HOME_PAGE:
            log.trace(`[HOME_SCREEN_REDUCER]: action.payload = ${JSON.stringify(action.payload)}`)
            return action.payload;
        default:
            return state;
    }
};

export const tabsDataReducer = (state = {isLoading: true}, action) => {
    switch (action.type) {
        case LOAD_TABS_DATA:
            return action.payload;
        default:
            return state;
    }
};

export const addToCartReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state, totalQuantity: action.payload.totalQuantity,
                productQty: action.payload.productQty
            };
        default:
            return state;
    }
};

export const filterProductsReducer = (state = {isLoading: true}, action) => {
    switch (action.type) {
        case LOAD_FILTER_PRODUCTS:
            return action.payload;
        default:
            return state;
    }
};

export const filterAttributesReducer = (state = null, action) => {
    switch (action.type) {
        case LOAD_FILTER_ATTRIBUTES:
            return action.payload;
        case REMOVE_FILTER_ATTRIBUTES:
            return null
        default:
            return state;
    }
};

export const selectProductDetailReducer = (state = {isLoading: true}, action) => {
    switch (action.type) {
        case SELECT_PRODUCT_DETAIL:
            return action.payload
        default:
            return state;
    }
};

export const shoppingBagProductReducer = (state = {isLoading: true}, action) => {
    switch (action.type) {
        case LOAD_SHOPPING_BAG_PRODUCTS:
            return action.payload
        default:
            return state;
    }
};

export const filterQueryReducer = (state = null, action) => {
    switch (action.type) {
        case SAVE_QUERY_STATUS:
            return action.payload
        default:
            return state;
    }
};

export const cartTotalReducer = (state = null, action) => {
    switch (action.type) {
        case CART_TOTAL:
            return action.payload
        default:
            return state;
    }
};

export const savedSortedListReducer = (state = null, action) => {
    switch (action.type) {
        case SAVE_SORT_LIST:
            if (action.payload.apparels) {
                return {...state, apparels: action.payload.apparels}
            } else if (action.payload.brands) {
                return {...state, brands: action.payload.brands}
            }
            break
        default:
            return state;
    }
};

export const shippingAddressReducer = (state
                                           = {values: null, submitted: false}, action) => {
    switch (action.type) {
        case SHIPPING_ADDRESS_CONFIRMED:
            return action.payload
        default:
            return state;
    }
};

export const paymentInfoReducer = (state
                                           = {values: null, submitted: false}, action) => {
    switch (action.type) {
        case PAYMENT_INFO_CONFIRMED:
            return action.payload
        default:
            return state;
    }
};

export const shippingOptionReducer = (state
                                           = {selectedOption: null, submitted: false}, action) => {
    switch (action.type) {
        case SHIPPING_OPTION_CONFIRMED:
            return action.payload
        default:
            return state;
    }
};