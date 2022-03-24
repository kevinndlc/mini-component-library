/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size]

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={styles}
    >
      <OuterBar>
        <InnerBar value={value} />
      </OuterBar>
    </Wrapper>
  );
};

const SIZES = {
  small: {
    '--height': 8 + 'px'
  },
  medium: {
    '--height': 12 + 'px'
  },
  large: {
    '--height': 24 + 'px',
    '--padding': 4 + 'px',
    '--border-radius': 8 + 'px'
  },
};

const Wrapper = styled.div`
  width: 370px;
  height: var(--height);
  padding: var(--padding, 0);
  border-radius: var(--border-radius, 4px);
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const OuterBar = styled.div`
  height: 100%;
  overflow: hidden;
  border-radius: 4px;
`

const InnerBar = styled.div`
  width: ${props => props.value}%;
  height: 100%;
  background: ${COLORS.primary};
  transition: 0.4s ease-in;
`

export default ProgressBar;
