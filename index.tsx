import React,{ FC , useState, Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Stack from './Components/Stack';
import './style.css';

// interface AppProps { }
/**
 * 
interface AppState {
  name: string;
}
type AppState = {
  name: string
}
*/

const App:FC = () => {
  const [name, setName] = useState('React');

  return (
    <div>
    <Hello name={name} />
    <Stack />
    <p>
      Start editing to see some magic happen :)
    </p>
  </div>
  )
}

render(<App />, document.getElementById('root'));
