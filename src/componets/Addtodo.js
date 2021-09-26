import React, {useState} from "react";

export default function Addtodo({addtodo}) {

    const [desc, setdesc] = useState("")
    const [time, settime] = useState("")

    function ChangeDesc(e)
    {
        setdesc(e.target.value)
    }

    function formsubmit()
    {
        if(desc==="")
        {
            alert("fill the description");
            return;
        }
        if(time==="")
        {
            alert("Give the time");
        }
        else
        {
            addtodo(desc,time)
            settime("")
            setdesc("")
        }
    }


  return (

    <div className="container">
      <div >
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Description</label>
          <input type="text" className="form-control" onChange={ChangeDesc} value={desc} id="desc" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">Time</label>
          <input type="time" className="form-control" onChange={(e) => {settime(e.target.value)}} value={time} id="time" />
        </div>
        <button type="submit" className="btn btn-primary" onClick={formsubmit}> Submit </button>
      </div>
    </div>
  );
}
