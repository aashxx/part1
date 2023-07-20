import React from "react";
import Part from "./Part";

const Content = (props) => {
    console.log(props);
    return (
        <div>
          {
            props.course.parts.map((part, index)=>{
              return <Part part={part} key={index}/>
            })
          }
        </div>

    )
}

export default Content;
