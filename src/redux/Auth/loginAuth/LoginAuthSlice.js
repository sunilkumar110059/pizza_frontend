import { createSlice } from '@reduxjs/toolkit';


let UserAuthSlice = createSlice({
    name: "AUTH",
    initialState: {
       userToken: localStorage.getItem("AUTH") || ""
    },

    reducers: {
        userAthenticateFn: (state, action) => {
            return {
                ...state,
                userToken: action.payload
            }
        }
    }
})

const { actions, reducer } = UserAuthSlice
export const { userAthenticateFn  } = actions;
export const UserAuthSliceReducer = reducer