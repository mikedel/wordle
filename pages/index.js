import { useState } from 'react';

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>
}

function WordPrompt() {
  return <input type="text" placeholder="Enter a word" />
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton", "Mike Del"]

  const [likes, setLikes] = useState(0)

  function handleClick() {
    setLikes(likes + 1)
  }

  const handleEnter = (event) => {
    console.log("Key pressed", event.key);
    if (event.key === 'Enter') {
      console.log("Enter was pressed")
    }
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
      <form onSubmit={handleEnter}>
        <WordPrompt onKeyDown={handleEnter}/>
      </form>
    </div>
  );
}
