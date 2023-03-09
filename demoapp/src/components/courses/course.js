import React, { useState } from "react";
import courseimg_1 from "../../assests/images/about.jpg";
import courseimg_2 from "../../assests/images/blog-2.jpg";
import Course_show from "./course_grp";
function Course(){
    let [data,setData]=useState([
        {
            img:courseimg_1,
            head:"OPERATION ",
            P_grph:"Operations is the work of managing the inner workings of your business so it runs as efficiently as possible. ."
            
        },
       
        {
            img:courseimg_2,
            head:"TREATMENT",
            P_grph:"The word treatment can have different meanings depending on the context, but it usually involves some kind of action or response to a situation, person, or thing."
        },
        
    ])
    
    return(
        <div className="container mt-4">
            <div className="row">
                {
                    data.map((store,setStore)=>{
                        return(
                            <div className="col-sm-3">
                                <Course_show image={store.img} value={store.head} title={store.P_grph}/>
                                

                                </div>

                        )
                    })
                }
            </div>
        </div>
    )
}
export default Course;