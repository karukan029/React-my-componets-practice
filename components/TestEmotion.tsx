import React, { FC } from 'react';
import { css } from '@emotion/react';

const TestEmotion: FC = () => (
  <div css={hoge}>
    <p>hoge</p>
  </div>
);

const hoge = css`
  font-size: 24px;
  margin: 200px auto 0;
`;

export default TestEmotion;
