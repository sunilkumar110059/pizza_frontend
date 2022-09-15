import React from 'react';
function SuccessButton({ ButtonType, ButtonText, onClickHandle, ButtonAddClass }) {
    return (
        <button
            onClick={onClickHandle}
            className={`bg4_1 color1 py-2 px-3 cursor-pointer ${ButtonAddClass}`}
            type={ButtonType}>
            {ButtonText}
        </button>
    )
}

// <SuccessButton
// onClickHandle={() => stepHandler()}
// ButtonType='submit'
// ButtonText='Next'
// ButtonAddClass="classname"
// /> 
export default SuccessButton
