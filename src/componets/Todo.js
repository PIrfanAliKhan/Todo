import React from 'react'

export default function Todo({result,onDelete}) {
    return (
        <div className="container">
            <h5>{result.sno} - {result.desc}</h5>
            <h6>{result.time}</h6>
            <button className="btn btn-sm btn-danger" onClick={() => onDelete(result)}>Delete</button>
            <br></br>
            <br/>
        </div>  
    )
}
