import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const handleNext = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const getMaxVotesIndex = () => {
    let maxIndex = 0;
    for (let i = 1; i < votes.length; i++) {
      if (votes[i] > votes[maxIndex]) {
        maxIndex = i;
      }
    }
    return maxIndex;
  };

  const Button = (props) => {
    return (
      <button onClick={props.handleClick}>{props.text}</button>
    )
  }

  const maxVotesIndex = getMaxVotesIndex();


  return (
     <div>
      <div>
        <h2>Anecdote of the day</h2>
        {anecdotes[selected]}
        <br />
        has {votes[selected]} vote{votes[selected] !== 1 && 's'}
        <br />
        <Button handleClick={handleVote} text="Vote" />
        <Button handleClick={handleNext} text="Next Anecdote" />
      </div>
      <div>
        <h2>Anecdote with the most votes</h2>
        {anecdotes[maxVotesIndex]}
        <br />
        has {votes[maxVotesIndex]} vote{votes[maxVotesIndex] !== 1 && 's'}
      </div>
    </div>
  )
}

export default App