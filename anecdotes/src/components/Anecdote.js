import React from "react";

const Anecdote = (props) =>
  <div>
    <p>{props.text}</p>
    <p>has {props.votesCount} votes</p>
  </div>

export default Anecdote;