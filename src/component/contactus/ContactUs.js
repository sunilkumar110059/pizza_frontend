import React, { useEffect, useState } from 'react';
import Layout from '../../layout/Layout';
import { ProductService } from '../../services/ServicesModule';

function ContactUs() {
    const [userState, setUserFun] = useState([])
    
    const getData = () => {
        ProductService.getProduct().then((res) => {
            setUserFun(res)
        })
    }
    useEffect(() => {
        getData()
    }, [])
    
    return (
        <Layout>
            <div className="wrapper bg2_5 py-2 bordercolor2_4 border_bottom1">
                <div className="container"> <div className="cover fs-4 fw-bold">Contact Us</div></div>
            </div>
            <div className="container pt-3">
                <div className="row">
                    {userState && userState.map((val, ind) => {
                        return (
                            <div className="col-3 bordercolor2_4 border1 p-2" key={ind}>
                                {val.pizzaname}
                            </div>
                        )
                    })}

                </div>
            </div>
        </Layout>
    )
}

export default ContactUs