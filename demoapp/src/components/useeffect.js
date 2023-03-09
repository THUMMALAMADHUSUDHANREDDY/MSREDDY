import React, { useEffect, useState } from "react";

function Name(){
    let[store,data]=useState(1);
    useEffect(()=>console.log(store))
    return(
        <center>
            <h1> its useEffect hook:{store}</h1>
            <button onClick={()=>data(store+1)}>onClick</button>
            <button onClick={()=>data(store-1)}>onClick</button>

        </center>
    )
}
export default Name;