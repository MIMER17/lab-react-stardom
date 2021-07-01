import React from 'react'

export default function StarDom(props) {

    const style = {
        padding: "10px 15px",
        backgroundColor: "red",
        width: "20%",
        margin: "0 auto",
        cursor: "pointer"
    }

    return (
        <tr>
            <td><img src={props.url} alt={props.name} /></td>
            <td>{props.name}</td>
            <td>{props.popularity}</td>
            <td><div style={style} onClick={() => props.deleteStar(props.id)}>Delete</div></td>
        </tr>
    )
}