/**@jsx jsx */
import { css, jsx, Global } from '@emotion/react';

import React, { FC, useState } from 'react';
import { render } from 'react-dom';

/** components */
import Hello from './Hello';
import Stack from './components/Stack';
import TestEmotion from './components/TestEmotion';

/**
 * モジュラースケールをユーティリティクラスとして定義
 */

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
// 次 Globalにhslを使用したテーマカラーを実装する
  return (
    <div>
      <Global
        styles={css`
        * {
          font-family: sans-self;
          box-sizing: border-box;
          /* theme */
          /* hsl(色相, 彩度, 輝度) */
          --color-light: hsl(0, 0%, 95%);
          --color-dark: hsl(0, 0%, 20%);
          color: var(--color-dark);
          background-color: var(--color-light);
          /* invertで色彩を反転させる(簡易ダークテーマの実装) */
          /* CSS in JS のTheme上でをどう扱うか？ */
          /* filter: invert(100%); */
        }
        :root {
          --ratio: 1.5;
          --s-5: calc(var(--s-4) / var(--ratio));
          --s-4: calc(var(--s-3) / var(--ratio));
          --s-3: calc(var(--s-2) / var(--ratio));
          --s-2: calc(var(--s-1) / var(--ratio));
          --s-1: calc(var(--s-0) / var(--ratio));
          --s0: 1rem;
          --s1: calc(var(--s0) * var(--ratio));
          --s2: calc(var(--s1) * var(--ratio));
          --s3: calc(var(--s2) * var(--ratio));
          --s4: calc(var(--s3) * var(--ratio));
          --s5: calc(var(--s4) * var(--ratio));
        }
      `}
      />
      <Hello name={name} />
      <p css={css`
        font-size: var(--s1)
      `}>item</p>
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
