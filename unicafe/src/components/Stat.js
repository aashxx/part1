import React from "react";

const Stat = ({text, val}) => {
    if (text === "positive") {
      return (
        <tr><td>{text} {val} %</td></tr>
      )
    }
  
    return (
      <tr><td>{text} {val}</td></tr>
    )
}

export default Stat;