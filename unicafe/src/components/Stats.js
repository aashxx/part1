import React from "react";
import Stat from "./Stat";

const Stats = ({clicks}) => {
    const total = clicks.good + clicks.neutral + clicks.bad
    const average = (clicks.good * 1 + clicks.bad * -1) / total
    const positive = clicks.good * (100/total)

    if (total === 0) {
      return (
        <div>
          No feedback given
        </div>
      )
    }

    return (
      <div>
        <table>
          <tbody>
            <Stat text="good" val={clicks.good} />
            <Stat text="neutral" val={clicks.neutral} />
            <Stat text="bad" val={clicks.bad} />
            <Stat text="all" val={total} />
            <Stat text="average" val={average} />
            <Stat text="positive" val={positive} />
          </tbody>
        </table>
      </div>
    )
}

export default Stats;