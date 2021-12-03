import './App.css';
import { useState } from 'react';
import { BaseButton } from './ui-components/BaseButton/BaseButton';
import { IconButton } from './ui-components/IconButton/IconButton';
import { plusOne } from './icons/PlusOne.js'

function App() {
  const [count, setCount] = useState(0);

  // Add 1 to count
  const increase = () => setCount(count + 1);

  return (
    <div className="App flex-center flex-direction-column">
      <h1 className="title">Counter</h1>
      <span className="count">{count}</span>
      <section className="buttonContainer flex-vertical-center flex-space-between">
        <BaseButton title="+1" onClick={increase}/>
        <BaseButton title="+1" type="text" onClick={increase}/>
        <IconButton type="button" icon={plusOne} altText="icon button plus one" onClick={increase}/>
      </section>
    </div>
  );
}

export default App;
