import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(
    Array.from(new Uint8Array(anecdotes.length))
  );

  console.log(points);

  const voteClick = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  };

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  const mostVotes = () => {
    let maxIndex = 0;
    for (let i = 1; i < points.length; i++) {
      if (points[i] > points[maxIndex]) {
        maxIndex = i;
      }
    }
    return maxIndex
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <div>
        <Button
          click={() => setSelected(getRandomInt(0, anecdotes.length))}
          text="next anecdote"
        />
        <Button click={voteClick} text="vote" />
      </div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVotes()]}</p>
    </div>
  );
};

const Button = (props) => <button onClick={props.click}>{props.text}</button>;

export default App;
