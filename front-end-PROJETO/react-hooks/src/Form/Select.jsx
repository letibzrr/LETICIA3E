import React from "react";

const Select = () => {
    const [select, setSelect] = React.useState('')
    return(
        <form>
            <select value={select} onChange={({target}) => setSelect(target.value)}>
                <option disabled value="">Selecione</option>
                <option value="sesi">SESI</option>
                <option value="senai">SENAI</option>
                <option value="iel">IEL</option>
            </select>
            <p>{select}</p>
        </form>
    )
}
export default Select;