import React, { Fragment } from 'react';
import { useDispatch } from "react-redux";
import { SuccessButton } from '../../../shared/SharedComponentPath';
import { useNavigate } from 'react-router-dom';

import { cartIncActionFn, cartDecActionFn } from '../../../redux/Product_rdx/ProductSlice';


function CartDetail({ cartDetail }) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const cartIncrement = (incCard) => {
        dispatch(cartIncActionFn(incCard))
    }

    const cartDecrement = (decCard) => {
        dispatch(cartDecActionFn(decCard))
    }

    const addToCard = (prod) => {
        dispatch(cartIncActionFn(prod))
        navigate('/products')
    }


    return (
        <Fragment>
            {
                (cartDetail && cartDetail.qty) ?
                    <>
                        <div className='col-3 d-flex py-3'>
                            <div className="row">
                                <div className="col-auto">
                                    <SuccessButton
                                        onClickHandle={() => cartDecrement(cartDetail)}
                                        ButtonText='-' />
                                </div>
                                <div className="col d-flex justify-content-center align-items-center fw-bold">
                                    {cartDetail && cartDetail.qty}
                                </div>
                                
                                <div className="col-auto">
                                    <SuccessButton
                                        onClickHandle={() => cartIncrement(cartDetail)}
                                        ButtonText='+' />
                                </div>
                            </div>
                        </div>
                        <div className='col-auto d-flex align-items-center'>
                            <SuccessButton
                                onClickHandle={() => navigate('/products')}
                                ButtonText='Continue Shoping ...'
                            /> </div>
                    </> :

                    <div className='col-auto'>
                        <SuccessButton
                            onClickHandle={() => addToCard(cartDetail)}
                            ButtonText='Add to Cart'
                        />
                    </div>
            }
        </Fragment>
    )
}

export default CartDetail