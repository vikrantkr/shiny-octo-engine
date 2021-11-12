import React, { useState } from "react";

const A= React.memo(props => {
    const[b,uB]=useState(0);
    const changeB=(e)=>{
        uB(e.target.value)
    }
    console.log("AAAAAA")
    return (
      <div>
        A<input type="text" value={b} onChange={(event)=>changeB(event)}></input>
      </div>
    );
  });

export default A;