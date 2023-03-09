import React, { useRef, useState } from "react";

function Name(){
    const [ store,setstore]=useState("");
    const refernce=useRef("");
    const method_calling=()=>{setstore("madhu")}
    return(
        <center>
            <h1>useRef hook:{store}</h1>
            <input ref={refernce} value={store} type="text" onChange={(e)=>setstore(e.target.value)}/>
            <button onClick={method_calling}>restart</button>
            </center>

            )
        }
        export default Name;
    