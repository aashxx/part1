import React from 'react';

const Winner = (props) => {
    const maxVotes = Math.max(...props.allVotes);
    const winnerIndex = props.allVotes.indexOf(maxVotes);
    const winner = props.anecdotes[winnerIndex];
    if(maxVotes === 0) {
        return (<p>No Votes Yet</p>)
    }

    return (
        <div>
            <p>{winner}</p>
            <p>has {maxVotes} votes</p>
        </div>
    )
}

export default Winner;
