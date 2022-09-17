import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Layout from '../../../layout/Layout';
import { getProductActionFn } from '../../../redux/Product_rdx/ProductAction'
import CartDetail from './CartDetail';

function ProductDetailsIndex() {
    const dispatch = useDispatch()
    let { id } = useParams()
    const pizzadata = useSelector((state) => state.pizzalist.pizzadata)
    const cartItems = useSelector((state) => state.pizzalist.cartitems)
    const [cartDetail, setCartDetail] = useState('')

    useEffect(() => {
        let cartIndex = cartItems.findIndex((prod) => prod._id === id);
        if (cartIndex >= 0) {
            setCartDetail(cartItems[cartIndex]);
        } else {
            let fullProductDetail = pizzadata.find((prod) => prod._id === id);
            setCartDetail(fullProductDetail);
        }
    }, [id, cartItems, pizzadata])


    useEffect(() => {
        dispatch(getProductActionFn())
    }, [dispatch])

    return (
        <Layout>
            <div className="wrapper bg2_5 py-2 bordercolor2_4 border_bottom1">
                <div className="container">
                    <div className="cover fs-4 fw-bold"> Product Details  </div>
                </div>
            </div>
            <div className="container">
                <div className="cover py-5">
                    <div className="row">
                        <div className="col-3 shadow1 bg1 py-4">
                            <div className="ovr d-flex justify-content-center">
                                <img src={process.env.PUBLIC_URL + '/assets/images/pizza_1.png'} alt="Pizza" />
                            </div>
                            <div className='ovr d-flex justify-content-center fs-3 fw-bold py-1'>
                                INR {cartDetail && cartDetail.pizzaprice}
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="cover">
                                <div className="row">
                                    <div className='col-12 d-flex fs-2 fw-bold'>{cartDetail && cartDetail.pizzaname}</div>
                                    <div className='col-12 d-flex py-3'>{cartDetail && cartDetail.description}</div>
                                    <CartDetail
                                        cartDetail={cartDetail}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProductDetailsIndex