/**@jsx jsx */
import { css, jsx } from '@emotion/react';

import React, { FC } from 'react';

const Box: FC = (props) => {
  return <div css={boxStyle}>{props.children}</div>;
};

// &で指定しているクラスを指定
const boxStyle = css`
& > * + * {
    margin-top: 1.5rem;
  }
`;

export default Box;
