import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <h1>statistic</h1>
      <Statistic good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

const Statistic = (props) => {
  const totalFeedback = props.good + props.neutral + props.bad;
  const avg = props.good * 1 + props.bad * -1;
  const percent = (props.good / totalFeedback) * 100 + "%";

  if (props.good != 0 || props.neutral != 0 || props.neutral != 0) {
    return (
      <table>
        <thead>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={totalFeedback} />
          <StatisticLine text="positive" value={percent} />
        </thead>
      </table>
    );
  } else return <p>No feedback given</p>;
};

const StatisticLine = (props) => (
  <tr>
    <td>
      {props.text} {props.value}
    </td>
  </tr>
);

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

export default App;
