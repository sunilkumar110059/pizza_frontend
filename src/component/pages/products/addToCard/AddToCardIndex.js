import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../../../layout/Layout';
import AddToCartList from './AddToCartList';


function AddToCardIndex() {
    const cartItems = useSelector((state) => state.pizzalist.cartitems)
    const [noData, setNoData] = useState(false)

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
                </div>
            </div>
        </Layout>

    )
}

export default AddToCardIndex;

