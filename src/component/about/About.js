import React, { Fragment, useState } from 'react'
import Layout from '../../layout/Layout';
import { Input, SuccessButton } from '../../shared/SharedComponentPath';


function AboutIndex() {

    let pasangerName = [...Array(3)].map(() => ({ firstname: "", lastname: "", fncheck: null, lncheck: null }))
    const [users, SetUsers] = useState(pasangerName)
    const onChangeHander = (e, obj) => {
        const { name, value } = e.target
        const newUser = [...users];
        newUser[users.indexOf(obj)][name] = value
        SetUsers(newUser);
    }

    const submitHandle = (event) => {
        event.preventDefault();

        let checkFilled = users.map((obj) => {
            return {
                ...obj,
                fncheck: obj.firstname !== "" ? true : false,
                lncheck: obj.lastname !== "" ? true : false,
            }
        })
        SetUsers(checkFilled)

        let getBoleanValue = users.every((obj) => {
            if (obj.firstname !== "" && obj.lastname !== "") {
                return true
            }
            else {
                return false
            }
        })

        console.log(getBoleanValue)
        if (getBoleanValue) {
            console.log(users)
        }
    }

    return (
        <Layout>
            <div className="wrapper bg2_5 py-2 bordercolor2_4 border_bottom1">
                <div className="container"> <div className="cover fs-4 fw-bold">About Us</div></div>
            </div>
            <div className='container pt-4'>
                <div className='cover'>
                    <form onSubmit={(event) => { submitHandle(event) }}>

                        <div className="row">

                            {users.map((obj, index) => {
                                return (

                                    <Fragment key={index}>
                                        <div className="col-6 mb-3">
                                            <Input
                                                LabelAddClass="d-block mb-1 fw-bold"
                                                LabelText="First Name"
                                                FormAddClass="border1 bordercolor2_4"
                                                InputAddClass="p-2"
                                                InputType="text"
                                                InputName="firstname"
                                                InputValue={obj.firstname}
                                                onChangeHandler={(e) => onChangeHander(e, obj)}
                                            />
                                            {obj.fncheck === false && !obj.firstname && <p> first Name required </p>}
                                        </div>


                                        <div className="col-6 mb-3">
                                            <Input
                                                LabelAddClass="d-block mb-1 fw-bold"
                                                LabelText="Last Name"
                                                FormAddClass="border1 bordercolor2_4"
                                                InputAddClass="p-2"
                                                InputType="text"
                                                InputName="lastname"
                                                InputValue={obj.lastname}
                                                onChangeHandler={(e) => onChangeHander(e, obj)}
                                            />
                                            {obj.lncheck === false && !obj.lastname && <p> Last Name required </p>}
                                        </div>
                                    </Fragment>
                                )
                            })}
                            <div className="col-6">
                                <SuccessButton
                                    ButtonType='submit'
                                    ButtonText='Submit'
                                />
                            </div>

                        </div>

                    </form>
                </div>

            </div>

        </Layout>
    )
}

export default AboutIndex