/**@jsx jsx */
import React, { FC, ReactNode } from 'react';
import { css, jsx } from '@emotion/react';

type Props = {
  children: ReactNode;
} & StyleProps;

type StyleProps = {
  // 子要素をコンテンツ幅に基づいて中央揃えにさせるか
  gap?: string;
};

const Cluster: FC<Props> = (props) => (
  <div css={clusterStyle(props)}>{props.children}</div>
);

const clusterStyle = (props: StyleProps) => css`
  display: flex;
  flex-wrap: wrap;
  gap: ${props.gap ? props.gap : '1rem'};
`;

export default Cluster;
