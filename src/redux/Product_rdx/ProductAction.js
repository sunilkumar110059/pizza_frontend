import { createAsyncThunk } from '@reduxjs/toolkit';


const cache = {}
export const getProductActionFn = createAsyncThunk('PRODUCT/GET', async () => {
    let url = 'http://localhost:8000/product'
    if (cache.hasOwnProperty(url)) { 
        return cache[url]
    }
    else {
        const res = await fetch(url);
        const result = await res.json()
        cache[url] = result
        return result
    }
})

export const postProductActionFn = createAsyncThunk('PRODUCT/POST', async (prod) => {

    const res = await fetch("http://localhost:8000/product", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(prod)
    })
    const result = await res.json()

    return result
})






