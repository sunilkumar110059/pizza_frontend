import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ROUTE_CLIENT } from '../../../constant/routePath/RoutePath';

import { SuccessButton, DangerButton } from '../../../shared/SharedComponentPath'
import { cartIncActionFn } from '../../../redux/Product_rdx/ProductSlice';

const ProductList = ({ product }) => {
  const dispatch = useDispatch()
  
  const { _id, pizzaname, pizzaprice, description } = product;
  const [isAddState, setIsAddFn] = useState(false)

  const cartIncrement = (getproduct) => {
    dispatch(cartIncActionFn(getproduct))
    setIsAddFn(true)
    setTimeout(() => {
      setIsAddFn(false)
    }, 1000);
  }

  
  return (
    <div className="col-3 my-3">
      <div className='pizza_items ovr shadow1 bg1  h-100 p-3'>
        <div className='cover'>
          <div className="row flex-column">
            <div className='col d-flex justify-content-center py-1'> <img src={process.env.PUBLIC_URL + '/assets/images/pizza_1.png'} alt="Pizza" /></div>
            <div className='col d-flex justify-content-center fw-bold py-1'>
              <div className='text-truncate'>{pizzaname} </div>
            </div>
            <div className='col d-flex justify-content-center  fw-bold py-1'>INR {pizzaprice} </div>
            <div className='col d-flex justify-content-center py-1'>
              {description.length > 100 ? description.slice(0, 100) + "..." : description}
            </div>
          </div>
        </div>
        <div className='cover pt-4'>
          <div className="row">

            <div className='col-auto'>
              <Link to={`${ROUTE_CLIENT.PRODUCT_DETAIL_PATH}/${_id}`}>
                <SuccessButton
                  ButtonText='Views'
                />
              </Link>
            </div>

            <div className='col d-flex justify-content-end'>

              {isAddState ? (
                <DangerButton
                  ButtonText='Added to Cart'
                />
              ) : (
                <SuccessButton
                  onClickHandle={() => cartIncrement(product)}
                  ButtonText='Add to Cart'
                />
              )}



            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
export default ProductList;