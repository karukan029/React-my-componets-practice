/**@jsx jsx */
import { css, jsx, Global } from '@emotion/react';

import React, { FC, useState } from 'react';
import { render } from 'react-dom';

/** components */
import Hello from './Hello';
import Stack from './components/Stack';
import TestEmotion from './components/TestEmotion';

// モジューラースケールをglobalに定義する

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

const item = css`
  background-color: red;
`;

const App: FC = () => {
  const [name, setName] = useState('React');

  return (
    <div>
      <Global
        styles={css`
        * {
          font-family: sans-self;
        }
      `}
      />
      <Hello name={name} />
      <p>item</p>
      <Stack>
        <p css={item}>test1</p>
        <p css={item}>test2</p>
        <p css={item}>test3</p>
      </Stack>
      <TestEmotion />
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
};

render(<App />, document.getElementById('root'));
