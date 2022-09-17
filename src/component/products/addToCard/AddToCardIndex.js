import React, { useEffect, useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Layout from '../../../layout/Layout';
import AddToCartList from './AddToCartList';

import { SuccessButton } from '../../../shared/SharedComponentPath';
import { cardResetActionFn } from '../../../redux/Product_rdx/ProductSlice';
import { ORDER_SUCCESSFUL } from '../../../constant/routePath/RoutePath';


function AddToCardIndex() {
    const dispatch = useDispatch();
    const navigage = useNavigate();

    const cartItems = useSelector((state) => state.pizzalist.cartitems)
    const [noData, setNoData] = useState(false)

    const OrderHandle = () => {
        dispatch(cardResetActionFn())
        localStorage.removeItem('CART_ITEMS');
        navigage(ORDER_SUCCESSFUL)
    }

    useEffect(() => {
        localStorage.setItem('CART_ITEMS', JSON.stringify(cartItems))
        if (cartItems.length >= 1) {
            setNoData(true)
        }
        else {
            setNoData(false)
        }
    }, [cartItems])

    return (
        <Layout>
            <div className="wrapper bg2_5 py-2 bordercolor2_4 border_bottom1">
                <div className="container"> <div className="cover fs-4 fw-bold">Add to Cart</div></div>
            </div>

            <div className='wrapper py-5'>
                <div className="container">
                    <div className='cover'>
                        <table className='d-table-collapse w-100 border1 bordercolor2_5'>
                            <thead className='bg2_2 color1'>
                                <tr>
                                    <td className='py-1 px-3' style={{ width: "80px" }}>Product</td>
                                    <td className='py-1 px-3'>Name</td>
                                    <td className='py-1 px-3'>Price</td>
                                    <td className='py-1 px-3' style={{ width: "150px" }}>Qty</td>
                                    <td className='py-1 px-3 text-end' style={{ width: "150px" }}>Total Price</td>
                                    <td className='py-1 px-3 text-end' style={{ width: "150px" }}>Action</td>
                                </tr>
                            </thead>
                            {noData && <AddToCartList />}

                        </table>
                        {!noData && <h1 className='p-5 text-center'>NO DATA</h1>}
                    </div>

                    <SuccessButton
                        onClickHandle={() => { OrderHandle() }}
                        ButtonText='Order' />


                </div>
            </div>
        </Layout >

    )
}

export default AddToCardIndex;

