/**@jsx jsx */
import { css, jsx } from '@emotion/react';

import React, { FC, ReactNode } from 'react';

/**
 * 外在的な中央揃え
 * 内部の幅に沿って中央揃え
 * 内在的な中央揃え
 * 内部のコンテンツの中央揃え
 */
type Props = {
  children: ReactNode;
} & StyleProps;

type StyleProps = {
  // コンテンツの最大幅
  maxWidth?: string;
  // テキストを中央揃えにするか
  isTextCenter?: boolean;
  // コンテンツの両端の余白
  isGutters?: boolean;
  // 子要素をコンテンツ幅に基づいて中央揃えにさせるか
  isIntrinsic?: boolean;
};

// デフォルト引数を設定し、呼び出す側の負担を減らす
const Center: FC<Props> = (props) => {
  // 1. propsを分解し、それぞれのプロパティにデフォルト引数を設定
  // ↑ centerStyleにpropsを渡す際に、データの整形が必要になるので面倒
  // 2. propsを元に新たなオブジェクトを作成し、デフォルト値を設定
  // その他代案求む
  // 2.がいいかも
  // Centerのスタイルが適用されないので調査(emotionのjsx)
  const {
    maxWidth = '60ch',
    isTextCenter = true,
    isGutters = true,
    isIntrinsic = true,
  } = props;

  const centerStyleProps = {
    maxWidth,
    isTextCenter,
    isGutters,
    isIntrinsic,
  }

  return <div css={centerStyle(centerStyleProps)}>{props.children}</div>;
};

const centerStyle = (props: StyleProps) => css`
  /*　ビューポートの幅との間に余白をつけるために適用 */
  /* paddingを幅の計算から除外 */
  box-sizing: content-box;
  max-width: ${props.maxWidth};
  /* 水平方向のマージンのみに作用 */
  margin-left: auto;
  margin-right: auto;
  /* 水平方向に最小限のスペースを適用 */
  ${props.isGutters ? 'padding-left: var(--s1); padding-right: var(--s1);' : ''}
  /* 内在的な中央揃え */
  ${
    props.isIntrinsic
      ? `display: flex;
    flex-direction: column;
    align-item: center;`
      : ''
  }
  /* テキストの中央揃え */
  ${props.isTextCenter ? 'text-align: center;' : ''}
`;

export default Center;
