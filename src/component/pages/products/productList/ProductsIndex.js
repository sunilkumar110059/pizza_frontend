import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../../../layout/Layout';
import ProductListing from './ProductList';
import { getProductActionFn } from '../../../../redux/Product_rdx/ProductAction';
import Slider from './Slider';

function ProductsIndex() {
    const dipatch = useDispatch()
    const { pizzadata, cartitems, status } = useSelector((state) => state.pizzalist)

    useEffect(() => {
        localStorage.setItem('CART_ITEMS', JSON.stringify(cartitems))
    }, [cartitems])

    useEffect(() => {
        dipatch(getProductActionFn())
    }, [dipatch])

    return (
        <Layout>
            <div className='wrapper'>
            <Slider />
                <div className="container">
                  

                    {status === "SUCCESS" &&
                        <div className="row">
                            {pizzadata && pizzadata.map((product) => (
                                <ProductListing
                                    key={product._id}
                                    product={product}
                                />
                            ))}
                        </div>
                    }
                </div>

                {status === "LOAD" && <h1>Data is Loading</h1>}
                {status === "FAILED" && <h1>Please Wait Some Technical Issue</h1>}
            </div>

        </Layout>
    )
}

export default ProductsIndex