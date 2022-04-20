import React, {FC, ReactChild} from 'react';

/** components */
import Box from './Box';

type Props = {
  headerText: string;
  headerBackgroundColor: string;
  padding?: string;
  borderWidth?: string;
  backgroundColor?: string;
  children: ReactChild;
}

const HeaderBox:FC<Props> = (props) => (
  <Box padding="0" borderWidth="0">
    <Box padding={"var(--s0) var(--s1)"} borderWidth ={props.borderWidth} backgroundColor={props.headerBackgroundColor}>{props.headerText}</Box>
    <Box padding={props.padding} borderWidth={props.borderWidth} backgroundColor={props.backgroundColor}>{props.children}</Box>
  </Box>
)

export default HeaderBox;
