import { configureStore } from '@reduxjs/toolkit';
import { PizzaSliceReducer } from './Product_rdx/ProductSlice';
import { UserAuthSliceReducer } from './Auth/loginAuth/LoginAuthSlice'

const StoreRoot = configureStore({
    reducer: {
        pizzalist: PizzaSliceReducer,
        userToken: UserAuthSliceReducer,
        devTools: true,
    }

    // preloadedState: initialState
})

export default StoreRoot