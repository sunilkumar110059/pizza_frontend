import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigage = useNavigate()
    return (
        <div className='notfoundpage'>
            <div className='cover text-center'>
                <div className='ovr'>
                    <img src={process.env.PUBLIC_URL + '/assets/images/notfound.jpg'} alt="Not Found" />
                </div>
                <div className='d-inline-block py-2 px-4 bg5_1 cursor-pointer color1 fs-5'
                    onClick={() => navigage(-1)}>Go Back</div>
            </div>
        </div>
    )
}

export default NotFound;