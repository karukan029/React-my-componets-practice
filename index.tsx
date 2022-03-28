import React, { FC, useState } from 'react';
import { render } from 'react-dom';

/** components */
import Hello from './Hello';
import Stack from './components/Stack';
import TestEmotion from './components/TestEmotion';

/** css */
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

const App: FC = () => {
  const [name, setName] = useState('React');

  return (
    <div>
      <Hello name={name} />
      <Stack />
      <TestEmotion />
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
};

render(<App />, document.getElementById('root'));
