import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <select value={value} onChange={onChange} style={{width: displayedValue.length + 6 + 'ch'}}>
        {children}
      </select>
      <Icon id="chevron-down" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${COLORS.transparentGray15};
  border-radius: 8px;
  width: max-content;
  position: relative;
  color: ${COLORS.gray700};
  font-weight: 400;

  select {
    background: transparent;
    border: none;
    padding: 0.75rem 1rem;
    appearance: none;
    color: inherit;
    font: inherit;
    user-select: none;
    outline-color: ${COLORS.primary}
  }

  svg {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  &:hover {
    color: ${COLORS.black}
  }
`;

export default Select;
