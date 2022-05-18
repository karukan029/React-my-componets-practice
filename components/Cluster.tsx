/**@jsx jsx */
import React, { FC, ReactNode } from 'react';
import { css, jsx } from '@emotion/react';

type Props = {
  children: ReactNode;
} & StyleProps;

type StyleProps = {
  // 子要素をコンテンツ幅に基づいて中央揃えにさせるか
  gap?: string;
  justifyContent?: justifyContent;
  alignItems?: alignItems;
};

type justifyContent =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right';

type alignItems =
  | 'normal'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'safe center'
  | 'unsafe center'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset';

const Cluster: FC<Props> = (props) => (
  <div css={clusterStyle(props)}>{props.children}</div>
);

const clusterStyle = (props: StyleProps) => css`
  display: flex;
  flex-wrap: wrap;
  gap: ${props.gap ? props.gap : '1rem'};
  /* 水平軸 */
  justify-content: ${props.justifyContent ? props.justifyContent : 'center'}
  /* 垂直軸 */
  align-items: ${props.alignItems ? props.alignItems : 'center'}
`;

export default Cluster;
