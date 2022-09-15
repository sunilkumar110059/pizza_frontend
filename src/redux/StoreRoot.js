import { configureStore } from '@reduxjs/toolkit';
import { PizzaSliceReducer } from './Product_rdx/ProductSlice';

const StoreRoot = configureStore({
    reducer: {
        pizzalist: PizzaSliceReducer,      
        devTools: true,
    }

    // preloadedState: initialState
})

export default StoreRoot