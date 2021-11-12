import React, { useState } from "react";

const B = React.memo(props => {
    const[b,uB]=useState(0);
    const changeB=(e)=>{
        uB(e.target.value)
    }
    console.log("BBBB")
    return (
      <div>
        B<input type="text" value={b} onChange={(event)=>changeB(event)}></input>
      </div>
    );
  });

export default B;