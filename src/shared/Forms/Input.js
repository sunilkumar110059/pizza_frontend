import React, { Fragment } from 'react';

function Input(props) {
    const {
        LabelAddClass, LabelText,
        FormAddClass, InputAddClass,
        AutoComplete, InputType, InputName, InputValue, InputReadOnly, InputPlaceholder, onChangeHandler, InputDisabled,
    } = props
    return (
        <Fragment>
            {LabelText !== "" && <label className={`ovr ${LabelAddClass}`} > {LabelText}</label>}


            <div className={`forms ${FormAddClass ? FormAddClass : "border1 bordercolor2_4"}`}>
                <input
                    className={`inputs ${InputAddClass}`}
                    autoComplete={AutoComplete}
                    type={InputType}
                    name={InputName}
                    value={InputValue}
                    readOnly={InputReadOnly}
                    placeholder={InputPlaceholder}
                    onChange={onChangeHandler}
                    disabled={InputDisabled}
                />
            </div>
        </Fragment>
    )

};




Input.defaultProps = {
    AutoComplete: "off",
}

// <Input
// LabelAddClass = "d-block mb-1 fw-bold"
// LabelText = "First Name"
// FormAddClass = "border1 bordercolor2_4"
// InputAddClass = "p-2"
// InputType = "text"
// InputName = "firstname"
// readOnly = "readonly"
// disabled = "disabled"
// placeholder = "Placeholder Text"
// InputValue = { pizzaprice }
// onChangeHandler = {(e) => onChangeHander(e)}
// />  

export default Input;


