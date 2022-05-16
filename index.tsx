/**@jsx jsx */
import { css, jsx, Global } from '@emotion/react';

import React, { FC, useState } from 'react';
import { render } from 'react-dom';

/** components */
import Hello from './Hello';
import Stack from './components/Stack';
import Box from './components/Box';
import HeaderBox from './components/HeaderBox';
import Center from './components/Center';
import Cluster from './components/Cluster';

/** extarnal */
import TestEmotion from './components/TestEmotion';

/**
 * モジュラースケールをユーティリティクラスとして定義
 * 課題：WAI-AREAのrole属性を柔軟に定義できるようなコンポーネント定義
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
  const themeTypes = {
    light: 'invert(0%)',
    dark: 'invert(100%)',
  } as const;

  const [themeType, setThemeType] = useState<string>(themeTypes.light);

  const changeThemeType = () =>
    themeType === themeTypes.light
      ? setThemeType(themeTypes.dark)
      : setThemeType(themeTypes.light);
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
          /* Provider上にテーマのパラメータを持たせて切り替えすればいい */
          filter: ${themeType};
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

      <button onClick={changeThemeType}>Change Theme</button>
      <Box>In the box</Box>
      <HeaderBox headerText="header" headerBackgroundColor="red">
        Contents
      </HeaderBox>

      <p
        css={css`
        font-size: var(--s1)
      `}
      >
        item
      </p>

      <Center isTextCenter={true}>
        <p>In the Center</p>
      </Center>
      <Stack>
        <p css={item}>test1</p>
        <p css={item}>test2</p>
        <p css={item}>test3</p>
      </Stack>
      <Cluster>
        <p css={item}>test1</p>
        <p css={item}>test2</p>
        <p css={item}>test3</p>
      </Cluster>
      <TestEmotion />
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
};

render(<App />, document.getElementById('root'));
