/**@jsx jsx */
import { css, jsx } from '@emotion/react';

import React, { FC } from 'react';

/**
 * 次のタスク
 * propsにbackground-colorを追加
 * borderWidth用のCSSユーティリティクラスを作成
 */
type Props = {
  padding?: string;
  borderWidth?: string;
  backgroundColor?:  string;
  // invert: boolean;
};

const Box: FC<Props> = (props) => {
  return <div css={boxStyle}>{props.children}</div>;
};

// &で指定しているクラスを指定
const boxStyle = (props: Props) => css`
  padding: ${props.padding ? props.padding : 'var(--s1)'};
  border: ${props.borderWidth ? props.borderWidth : '1px solid'};
  background-color: ${props.backgroundColor ? props.backgroundColor : 'inherit'};

  & * {
    color: inherit;
  }
`;

export default Box;
