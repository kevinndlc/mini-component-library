import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES[size];

  return (
    <Wrapper style={styles} width={width}>
      <Icon id={icon} />
      <VisuallyHidden>
        <label for={label}>{label}</label>
      </VisuallyHidden>
      <input type="text" id={label} placeholder={placeholder} />
    </Wrapper>
  );
};

const SIZES = {
  small: {
    '--border-bottom': 1 + 'px solid ' + COLORS.black,
    '--font-size': 14 + 'px',
    '--padding': 0.25 + 'rem ' + 1.5 + 'rem ' + 0.125 + 'rem',
    '--icon-width': 18 + 'px',
  },
  large: {
    '--border-bottom': 2 + 'px solid ' + COLORS.black,
    '--font-size': 18 + 'px',
    '--padding': 0.5 + 'rem ' + 2.25 + 'rem ' + 0.25 + 'rem',
    '--icon-width': 24 + 'px',
  },
};

const Wrapper = styled.div`
  position: relative;
  color: ${COLORS.gray700};

  input {
    width: ${(p) => p.width}px;
    border: none;
    border-bottom: var(--border-bottom);
    color: inherit;
    font: inherit;
    font-size: var(--font-size);
    font-weight: 700;
    padding: var(--padding);
    padding-right: 0;

    &::placeholder {
      color: ${COLORS.gray500};
      font-weight: 400;
    }

    &:focus {
      outline-color: ${COLORS.primary};
      outline-offset: 2px;
    }
  }

  svg {
    position: absolute;
    width: var(--icon-width);
    aspect-ratio: 1/1;
    top: 50%;
    left: 3px;
    transform: translateY(-50%);
    pointer-events: none;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
