import React from 'react';
import { Link } from "react-router-dom";
import { ROUTE_CLIENT } from '../../constant/routePath/RoutePath';
import Layout from '../../layout/Layout'
import { Input, SuccessButton } from '../../shared/SharedComponentPath'

function RegistrationIndex() {
    const submitHandle = (event) => {
        event.preventDefault();
        console.log("Registration Submit")

    }
    return (
        <Layout>
            <div className='container pt-4'>
                <div className='row justify-content-center'>

                    <div className="col-4 p-3">
                        <form onSubmit={(event) => { submitHandle(event) }}>
                            <div className='row'>
                                <div className="col-12 mb-4"> <h1>Registration</h1></div>
                                <div className="col-12 mb-3">
                                    <Input
                                        LabelAddClass="d-block mb-1 fw-bold"
                                        LabelText="Name"
                                        FormAddClass="border1 bordercolor2_4"
                                        InputAddClass="p-2"
                                        InputType="text"
                                        InputName="firstname"
                                        disabled="disabled"
                                        placeholder="Placeholder Text"
                                    // InputValue={pizzaprice}
                                    //   onChangeHandler={(e) => onChangeHander(e)}
                                    />

                                </div>
                                <div className="col-12 mb-3">
                                    <Input
                                        LabelAddClass="d-block mb-1 fw-bold"
                                        LabelText="Email"
                                        FormAddClass="border1 bordercolor2_4"
                                        InputAddClass="p-2"
                                        InputType="text"
                                        InputName="firstname"
                                        disabled="disabled"
                                        placeholder="Placeholder Text"
                                    // InputValue={pizzaprice}
                                    //   onChangeHandler={(e) => onChangeHander(e)}
                                    />
                                </div>
                                <div className="col-12 mb-3">
                                    <Input
                                        LabelAddClass="d-block mb-1 fw-bold"
                                        LabelText="Phone No."
                                        FormAddClass="border1 bordercolor2_4"
                                        InputAddClass="p-2"
                                        InputType="text"
                                        InputName="firstname"
                                        disabled="disabled"
                                        placeholder="Placeholder Text"
                                    // InputValue={pizzaprice}
                                    //   onChangeHandler={(e) => onChangeHander(e)}
                                    />
                                </div>

                                <div className="col-12 mb-3">
                                    <SuccessButton
                                        // onClickHandle={() => stepHandler()}
                                        ButtonType='submit'
                                        ButtonText='Submit'
                                        ButtonAddClass="w-100"
                                    />
                                </div>
                                <div className="col-12 mb-3 text-end">
                                    <Link to={ROUTE_CLIENT.LOGIN_PATH}>Login</Link>
                                </div>
                            </div>

                        </form>


                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default RegistrationIndex