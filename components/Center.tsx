import React, { FC, ReactNode } from 'react';
import { css } from '@emotion/react';


/**
 * 外在的な中央揃え
 * 内部の幅に沿って中央揃え
 * 内在的な中央揃え
 * 内部のコンテンツの中央揃え
 */
type Props = {
  // コンテンツの最大幅
  maxWidth?: string;
  // テキストを中央揃えにするか
  isTextCenter: boolean;
  // コンテンツの両端の余白
  isGutters: boolean;
  // 子要素をコンテンツ幅に基づいて中央揃えにさせるか
  isIntrinsic: boolean;
  children: ReactNode;
};

// デフォルト引数を設定し、呼び出す側の負担を減らす
const Center: FC<Props> = (props) => {
  return <div css={centerStyle(props)}>{props.children}</div>
};

const centerStyle = (props:Props) => css`
  /*　ビューポートの幅との間に余白をつけるために適用 */
  /* paddingを幅の計算から除外 */
  box-sizing: content-box;
  max-width: ${props.maxWidth ? props.maxWidth : '60ch'};
  /* 水平方向のマージンのみに作用 */
  margin-left: auto;
  margin-right: auto;
  /* 水平方向に最小限のスペースを適用 */
  ${props.isGutters ? 'padding-left: var(--s1); padding-right: var(--s1);' : ''}
  /* 内在的な中央揃え */
  ${props.isIntrinsic ? 
    `display: flex;
    flex-direction: column;
    align-item: center;` : ''}
  /* テキストの中央揃え */
  ${props.isTextCenter ? 'text-align: center;' : ''}
`

export default Center;
