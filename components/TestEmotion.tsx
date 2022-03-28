/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import { FC } from 'react';

const TestEmotion: FC = () => (
  <div css={hoge}>
    <p>hoge</p>
  </div>
);

const hoge = css`
  background-color: darkgreen;
  font-size: 24px;
  margin: 200px auto 0;
`;

export default TestEmotion;
