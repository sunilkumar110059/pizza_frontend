import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../../layout/Layout';

import { Input, TextArea, SuccessButton } from '../../shared/SharedComponentPath'

import { postProductActionFn } from '../../redux/Product_rdx/ProductAction';

function AddPizza() {
  const dispatch = useDispatch()
  const [PostState, SetPostFn] = useState({
    pizzaname: "",
    pizzaprice: Number(""),
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
  })

  const { pizzaname, pizzaprice, description } = PostState

  const onChangeHander = (event) => {
    event.preventDefault();
    const { name, value } = event.target
    SetPostFn({
      ...PostState,
      [name]: value
    })
  }

  const addPizza = () => {
    dispatch(
      postProductActionFn(PostState)
    )
  }

  return (
    <Layout>
      <div className="wrapper bg2_5 py-2 bordercolor2_4 border_bottom1">
        <div className="container"> <div className="cover fs-4 fw-bold">Add Pizza</div></div>
      </div>

      <div className="container">
        <div className="cover py-5">

          <div className='row'>
            <div className="col-6 mb-3">
              <Input
                LabelAddClass="d-block mb-1 fw-bold"
                LabelText="Pizza Name"
                FormAddClass="border1 bordercolor2_4"
                InputAddClass="p-2"
                InputType="text"
                InputName="pizzaname"
                InputValue={pizzaname}
                onChangeHandler={(e) => onChangeHander(e)}
              />
            </div>


            <div className="col-6 mb-3">
              <Input
                LabelAddClass="d-block mb-1 fw-bold"
                LabelText="Pizza Price (inr)"
                FormAddClass="border1 bordercolor2_4"
                InputAddClass="p-2"
                InputType="text"
                InputName="pizzaprice"
                InputValue={pizzaprice}
                onChangeHandler={(e) => onChangeHander(e)}
              />
            </div>

            <div className="col-12 mb-3">
              <TextArea
                LabelAddClass="d-block mb-1 fw-bold"
                LabelText="Description"
                FormAddClass="border1 bordercolor2_4"
                TeraAddClass="p-2"
                TeraName="description"
                TeraValue={description}
                onChangeHandler={(e) => onChangeHander(e)}
                TeraPlaceholder=" Text Area Placeholder"
                TeraAutoComplete="on"
              />
            </div>


            <div className="col-auto d-flex align-items-end">
              <SuccessButton
                onClickHandle={() => addPizza()}
                ButtonType='submit'
                ButtonText='Add Pizza'
              />

            </div>



          </div>

        </div>
      </div>
    </Layout>
  )
}

export default AddPizza;