import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { ROUTE_CLIENT } from '../../constant/routePath/RoutePath';
import Layout from '../../layout/Layout'
import { Input, SuccessButton } from '../../shared/SharedComponentPath'

import { userAthenticateFn } from '../../redux/Auth/loginAuth/LoginAuthSlice';


function LoginIndex() {

    const { userToken } = useSelector((state) => state.userToken)
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const [isToken, isSetToken] = useState(userToken)


    const submitHandle = (event) => {
        event.preventDefault();

        let authToken = "tokenkey=24sad241adfasdf42sdaf5efsdafa2dsf7ad4f"
        localStorage.setItem('AUTH', authToken)
        isSetToken(authToken)

    }

    useEffect(() => {
        if (isToken) {
            Navigate('/')
            dispatch(userAthenticateFn(isToken))
        }
    }, [userToken, isToken, Navigate, dispatch])


    return (
        <Layout>
            <div className='container pt-4'>
                <div className='row justify-content-center'>
                    <div className="col-4 p-3">
                        <form onSubmit={(event) => { submitHandle(event) }}>
                            <div className='row'>
                                <div className="col-12 mb-4"> <h1>Login</h1></div>
                                <div className="col-12 mb-3">
                                    <Input
                                        LabelAddClass="d-block mb-1 fw-bold"
                                        LabelText="User Name"
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
                                        LabelText="Password"
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

                            </div>

                            <div className="col-12 mb-3">
                                <SuccessButton
                                    // onClickHandle={() => stepHandler()}
                                    ButtonType='submit'
                                    ButtonText='Next'
                                    ButtonAddClass="w-100"
                                />
                            </div>
                            <div className="col-12 mb-3 text-end">
                                <Link to={ROUTE_CLIENT.REGISTRATION_PATH}>Create an account</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default LoginIndex