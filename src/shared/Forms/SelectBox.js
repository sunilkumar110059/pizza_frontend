import React, { Fragment } from 'react';

function SelectBox(props) {
    const {
        LabelAddClass, LabelText,
        SelectFaAddClass, SelectAddClassFaIcon,
        FormAddClass,
        SelectAddClass, SelectName, SelectValue, SelectPlaceholder, SelectOption, onChangeHandler, SelectDisabled,

    } = props

    return (
        <Fragment>
            {LabelText !== "" && <label className={`ovr ${LabelAddClass}`} > {LabelText}</label>}

            <div className={`forms ${FormAddClass ? FormAddClass : "border1 bordercolor2_4"}`}>
                {SelectAddClassFaIcon && <span className={SelectFaAddClass}> <i className={`fa ${SelectAddClassFaIcon}`}></i></span>}
                <select
                    className={`selects ${SelectAddClass}`}
                    name={SelectName}
                    onChange={onChangeHandler}
                    disabled={SelectDisabled}
                    value={SelectValue}
                >
                    <option value=""> {SelectPlaceholder} </option>
                    {SelectOption}
                </select>
            </div>
        </Fragment>
    )

};

SelectBox.defaultProps = {
    LabelAddClass: "",
    LabelText: "",
    FormAddClass: "",
    SelectAddClass: "",
    type: "text",
    name: "",
    value: "",
    placeholder: "",

}


    // <SelectBox
    // LabelAddClass="d-block mb-1 fw-bold"
    // LabelText="Category"
    // FormAddClass="border1 bordercolor2_4"
    // SelectFaAddClass={"fa_right bg1"}
    // SelectAddClassFaIcon={'color2-1 font-size2 fa-chevron-down'}
    // SelectAddClass="border1 bordercolor2-3"
    // SelectName="category"
    // SelectValue={category}
    // SelectPlaceholder="category"
    // SelectOption={["Lunch", "Dinner", "Breakfast", "Evening"].map((arr, ind) => (
    // <option value={arr} key={ind}> {arr} </option>
    // ))
    // }
    // SelectDisabled="disabled"
    // onChangeHandler={(e) => onChangeHandle(e)}
    // /> 


export default SelectBox;


