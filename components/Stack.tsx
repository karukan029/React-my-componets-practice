// Stackは、垂直方向のマージンのみが関心ごと
/**@jsx jsx */
import { css, jsx } from '@emotion/react';

import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Stack: FC = (props) => {
  return <div css={stackStyle}>{props.children}</div>;
};

// &で指定しているクラスを指定
const stackStyle = css`
& > * + * {
    margin-top: 1.5rem;
  }
`;

export default Stack;
