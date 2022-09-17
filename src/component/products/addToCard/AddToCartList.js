import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SuccessButton, DangerButton } from '../../../shared/SharedComponentPath'
import { cartIncActionFn, cartDecActionFn, cartRemoveActionFn } from '../../../redux/Product_rdx/ProductSlice';

const AddToCartList = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.pizzalist.cartitems)

  const cartIncrement = (incCard) => {
    dispatch(cartIncActionFn(incCard))
  }

  const cartDecrement = (decCard) => {
    dispatch(cartDecActionFn(decCard))
  }


  const cartRemove = (id) => {
    dispatch(cartRemoveActionFn(id))
  }

  let totalQty = 0
  let grandTotal = 0
  let discount = 0
  const getTotalPrice = (qty, price) => {
    let total = qty * price
    grandTotal += total
    totalQty += qty
    discount = grandTotal / 5
    return total
  }

  return (
    <>
      <tbody>
        {
          cartItems.map((product, index) => {
            const { _id, pizzaname, pizzaprice, qty } = product;
            return (
              <tr className='bordercolor2_5 border_bottom1' key={_id}>
                <td className='py-1 px-3'>
                  <img src={process.env.PUBLIC_URL + '/assets/images/pizza_1.png'} alt="Pizza" />
                </td>
                <td className='py-1 px-3 fw-bold'>{pizzaname}</td>
                <td className='py-1 px-3 fw-bold'>{pizzaprice}</td>
                <td className='py-1 px-3'>
                  <div className="row g-0">
                    <div className="col-auto">
                      <SuccessButton
                        onClickHandle={() => cartDecrement(product)}
                        ButtonText='-' />
                    </div>
                    <div className="col d-flex justify-content-center align-items-center fw-bold">{qty}</div>
                    <div className="col-auto">
                      <SuccessButton
                        onClickHandle={() => cartIncrement(product)}
                        ButtonText='+' />
                    </div>
                  </div>
                </td>
                <td className='py-1 px-3 text-end fw-bold'>{getTotalPrice(qty, pizzaprice)} </td>
                <td className='py-1 px-3 text-end'>
                  <DangerButton
                    onClickHandle={() => cartRemove(_id)}
                    ButtonText='Remove' />
                </td>
              </tr>
            )
          })
        }

      </tbody>
      <tfoot className='bg2_2 color1'>

        <tr>
          <td colSpan={3}></td>
          <td className='text-center'>{totalQty}</td>


          <td className='py-1' colSpan={2}>
            <table className='d-table-collapse w-100'>
              <thead>
                <tr>
                  <td className='py-1 px-3 text-end'>Discount 5%</td>
                  <td className='py-1 px-3' style={{ width: "20px" }}>:</td>

                  <td className='py-1 px-3 fw-bold text-end'>{discount}</td>
                </tr>

                <tr>
                  <td className='py-1 px-3 text-end'>Grand Total</td>
                  <td className='py-1 px-3' style={{ width: "20px" }}>:</td>

                  <td className='py-1 px-3 fw-bold text-end'>{grandTotal - discount}</td>
                </tr>
              </thead>
            </table>
          </td>
        </tr>
      </tfoot>
    </>
  )
}

export default AddToCartList