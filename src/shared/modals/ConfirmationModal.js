import React from 'react'


function ConfirmationModal({ message, confirmModal }) {
    return (
        <div className="position-fixed top-0 start-0 w-100 h-100 transbg_1">
            <div className="w-100 h-100 row justify-content-center align-content-center">

                <div className='col-auto bg1 px-4  py-2'>
                    {message !== "" && < div className='ovr fs-4 pb-4'> {message}</div>}


                    <div className="row justify-content-end">
                        <div className='col-auto'>
                            <div className="bg4_1 color1 py-1 px-3 cursor-pointer" onClick={() => confirmModal("continue")}>Yes</div>
                        </div>
                        <div className='col-auto'>
                            <div className="bg3_1 color1 py-1 px-3 cursor-pointer" onClick={() => confirmModal("cancel")}>No</div>
                        </div>

                    </div>

                </div>
            </div>
        </div >
    )
}
export default ConfirmationModal;