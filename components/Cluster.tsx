/**@jsx jsx */
import React, {FC} from 'react';
import { css, jsx } from '@emotion/react';

const Cluster: FC = (props) => <div css={clusterStyle}>{props.children}</div>;

const clusterStyle = `css
  display: grid;
  flex-wrap: wrap;
`

export default Cluster;
