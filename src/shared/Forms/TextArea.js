import React, { Fragment } from 'react';

function TextArea(props) {

    const {
        LabelAddClass, LabelText,
        FormAddClass,
        TeraAddClass, TeraValue, TeraName, TeraPlaceholder, TeraDisabled, TeraAutoComplete, TeraReadOnly, onChangeHandler } = props
    return (
        <Fragment>
            {LabelText !== "" && <label className={`ovr ${LabelAddClass}`} > {LabelText}</label>}
            <div className={`forms ${FormAddClass ? FormAddClass : "border1 bordercolor2_4"}`}>
                <textarea
                    className={`tera ${TeraAddClass}`}
                    name={TeraName}
                    value={TeraValue}
                    placeholder={TeraPlaceholder}
                    autoComplete={TeraAutoComplete}
                    readOnly={TeraReadOnly}
                    disabled={TeraDisabled}
                    onChange={onChangeHandler}
                />
            </div>
        </Fragment>
    )
}

TextArea.defaultProps = {
    LabelAddClass: "",
    LabelText: "",
    FormAddClass: "",
    TeraAddClass: "",
    TeraValue: "",
    TeraName: "",
    TeraPlaceholder: "",
    TeraDisabled: "",
    TeraAutoComplete: "",
    TeraReadOnly: "",
}

// <TextArea
// LabelAddClass="d-block mb-1 fw-bold"
// LabelText="Description"
// FormAddClass="border1 bordercolor2_4"
// TeraAddClass="p-2"
// TeraName="description"
// TeraValue={description}
// onChangeHandler={(e) => onChangeHandle(e)}
// TeraPlaceholder=" Text Area Placeholder"
// TeraAutoComplete="on"
// TeraDisabled="disabled"
// TeraReadOnly="readonly"
// /> 

export default TextArea;