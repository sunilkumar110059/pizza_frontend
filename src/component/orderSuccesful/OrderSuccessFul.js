import React from 'react'
import Layout from '../../layout/Layout';
import { useNavigate } from 'react-router-dom';

function OrderSuccessFul() {
    const navigage = useNavigate()
    return (
        <Layout>
            <div className='cover d-flex flex-grow-1 h-100 bg6_1 justify-content-center align-items-center'>
                <div className='container d-flex justify-content-center align-items-center'>
                    <div className="cover text-center">
                        <div className='ovr'><img src={process.env.PUBLIC_URL + '/assets/images/successful.jpg'} alt="successful" /></div>
                        <div className='d-inline-block py-2 px-4 bg5_1 cursor-pointer color1'
                            onClick={() => navigage('/products')}>
                            Continue Shoping
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default OrderSuccessFul