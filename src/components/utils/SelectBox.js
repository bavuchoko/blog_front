import React, {useRef, useState} from 'react';
import Select from "react-select";
function SelectBox({categories, setSelectValue}) {

    const selectInputRef = useRef(null);

    return (
        <>
            <Select
                ref={selectInputRef}
                onChange={(e) => {
                    if (e) {
                        setSelectValue(e.value);
                    } else {
                        setSelectValue("");
                    }
                }}
                options={categories}
                placeholder="카테고리"
            />
        </>
    );
}

export default SelectBox;