import React, { FC, ReactNode } from 'react';
import { css } from '@emotion/react';


/**
 * 外在的な中央揃え
 * 内部の幅に沿って中央揃え
 * 内在的な中央揃え
 * 内部のコンテンツの中央揃え
 */

type Props = {
  max?: string;
  andText: boolean;
  children?: ReactNode;
};

const Center: FC<Props> = (props) => {
  return <div css={centerStyle}>{props.children}</div>
};

const centerStyle = (props:Props) => css`
  /*　ビューポートの幅との間に余白をつけるために適用 */
  /* paddingを幅の計算から除外 */
  box-sizing: content-box;

`

export default Center;
