import './App.css';
import { BaseButton } from './ui-components/BaseButton/BaseButton';
import { IconButton } from './ui-components/IconButton/IconButton';
import { TextButton } from './ui-components/TextButton/TextButton';
import { plus } from './icons/plus.js'

function App() {
  return (
    <div className="App">
      <BaseButton title="increase"/>
      <IconButton icon={plus}/>
      <TextButton title="increase"/>
    </div>
  );
}

export default App;
