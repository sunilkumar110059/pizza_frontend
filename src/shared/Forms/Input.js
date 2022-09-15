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

export default Input;


