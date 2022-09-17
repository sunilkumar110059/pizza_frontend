import { createSlice } from '@reduxjs/toolkit';
import { getProductActionFn, postProductActionFn } from './ProductAction';

let getCartItems = JSON.parse(localStorage.getItem("CART_ITEMS")) || []

let PizzaSlice = createSlice({
    name: "PRODUCT",
    initialState: {
        pizzadata: [],
        status: "",
        cartitems: getCartItems,
    },
    reducers: {
        cardResetActionFn: (state) => {
            return {
                ...state,
                cartitems: []
            }
        },

        cartIncActionFn: (state, action) => {
            let cartIndex = state.cartitems.findIndex((cart) => cart._id === action.payload._id)
            if (cartIndex >= 0) {
                state.cartitems[cartIndex].qty += 1
            }
            else {
                let temp = { ...action.payload, qty: 1 }
                return {
                    ...state,
                    cartitems: [...state.cartitems, temp],
                }
            }
        },

        cartDecActionFn: (state, action) => {
            let cartIndex = state.cartitems.findIndex((cart) => cart._id === action.payload._id)
            if (cartIndex >= 0 && state.cartitems[cartIndex].qty > 1) {
                state.cartitems[cartIndex].qty -= 1
            }
        },

        cartRemoveActionFn: (state, action) => {
            let removeCard = state.cartitems.filter((prod) => prod._id !== action.payload)
            return {
                ...state,
                cartitems: removeCard
            }
        }
    },

    extraReducers: {
        //========== Get Method start
        [getProductActionFn.fulfilled]: (state, action) => {
            return {
                ...state,
                pizzadata: action.payload,
                status: "SUCCESS",
            }
        },
        [getProductActionFn.pending]: (state, action) => {
            return { ...state, status: "LOAD" }
        },

        [getProductActionFn.rejected]: (state, action) => {
            return { ...state, status: "FAILED" }
        },
        //========== Get Method end


        //========== Post Method start
        [postProductActionFn.fulfilled]: (state, action) => {
            return {
                ...state,
                pizzadata: [...state.pizzadata, action.payload],
                status: "Success",
            }
        },
        [postProductActionFn.pending]: (state, action) => {
            return { ...state, status: "LOAD" }
        },

        [postProductActionFn.rejected]: (state, action) => {
            return { ...state, status: "FAILED" }
        },
        //========== Post Method end
    }
})

const { actions, reducer } = PizzaSlice
export const { cartIncActionFn, cartDecActionFn, cartRemoveActionFn, cardResetActionFn } = actions;
export const PizzaSliceReducer = reducer