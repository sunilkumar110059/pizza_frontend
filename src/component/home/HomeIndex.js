import React from 'react';
import Layout from '../../layout/Layout';

function HomeIndex() {
    return (
        <Layout>
            <div className='wrapper'>
                <img src={process.env.PUBLIC_URL + '/assets/images/banner_1.jpg'} alt="Italian Pizza" />
            </div>
        </Layout>
    )
}

export default HomeIndex