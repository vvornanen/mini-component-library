import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  let wrapperStyle = {
    "--width": `${width}px`,
  };
  let iconProps;

  if (size === "large") {
    wrapperStyle = {
      ...wrapperStyle,
      "--border-width": "2px",
      "--padding": "4px",
      "--gap": "12px",
      "--font-size": `${18 / 16}rem`,
    };

    iconProps = {
      size: 24,
      strokeWidth: 2,
    };
  } else {
    wrapperStyle = {
      ...wrapperStyle,
      "--border-width": "1px",
      "--padding": "3px",
      "--gap": "8px",
      "--font-size": `${14 / 16}rem`,
    };

    iconProps = {
      size: 16,
      strokeWidth: 1,
    };
  }

  return (
    <Wrapper style={wrapperStyle}>
      <Icon id={icon} {...iconProps} aria-hidden={true} />
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input placeholder={placeholder} />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  gap: var(--gap);
  width: var(--width);
  border-bottom-style: solid;
  border-bottom-width: var(--border-width);
  border-bottom-color: ${COLORS.black};
  padding-block: var(--padding);
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline-color: Highlight;
    outline-color: -webkit-focus-ring-color;
    outline-style: auto;
    outline-offset: 3px;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
  min-width: 0;
  font-size: var(--font-size);
  font-weight: 700;
  color: inherit;
  background-color: transparent;

  ::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
