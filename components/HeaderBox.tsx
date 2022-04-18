import React, {FC, ReactChild} from 'react';

/** components */
import Box from './Box';

type Props = {
  headerText: string;
  padding: string;
  borderWidth: string;
  children: ReactChild;
}

const HeaderBox:FC<Props> = (props) => (
  <Box padding="0" borderWidth="0">
    <Box padding={props.padding} borderWidth ={props.borderWidth}>{props.headerText}</Box>
    <Box padding={props.padding} borderWidth={props.borderWidth}>{props.children}</Box>
  </Box>
)

export default HeaderBox;
