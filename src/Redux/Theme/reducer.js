import { BsArrowDownLeftSquare } from "react-icons/bs";
import * as types from "./actionTypes";

const intialData = {
    dark: true,
    // isError: false,
    // filterdata: [],
    // isPaginationLoading: false,
    // isPaginationError: false,
    // productData: []
}


export const reducer = (state = intialData, action) => {

    const { type, payload } = action;

    switch (type) {
        case types.SWITCH_THEME: {
            return { ...state, dark: !intialData.dark};
        }
        default: {
            return state
        }
    }
};

