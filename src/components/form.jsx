import React, { Component, useState } from "react"
import { useHistory } from "react-router-dom";

const Form = (props) => {
    const history = useHistory();
    const [id, setId] = useState("1");
    const [category, setCategory] = useState("planets");

    const submitHandle = (e) => {
        e.preventDefault();
        history.push("/"+category+"/"+id);
    }
    return (
        <div>
            <form onSubmit={submitHandle} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', padding: 10 }}>
                    <label htmlFor="selectOptions"> Search For: </label>
                    <select value={category} onChange={e => setCategory(e.target.value)}>
                        <option value="planets">Planet</option>
                        <option value="people">People</option>
                    </select>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', padding: 10 }}>
                    <label htmlFor="id">ID:</label>
                    <input value={id} onChange={e => setId(e.target.value)}type="number" name="id" id="id" />
                </div>
                <button type="submit" style={{ height: 30 }}>Search</button>
            </form>
        </div>
    )
}

export default Form

