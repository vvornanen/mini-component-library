import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ id, label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <span aria-hidden={true}>{displayedValue}</span>
      <SelectIcon
        id="chevron-down"
        size={24}
        strokeWidth={2}
        aria-hidden={true}
      />
      <SelectInput id={id} aria-label={label} value={value} onChange={onChange}>
        {children}
      </SelectInput>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 18px;
  color: ${COLORS.gray700};
  width: fit-content;
  padding-block: 12px;
  padding-inline: 16px;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline-color: Highlight;
    outline-color: -webkit-focus-ring-color;
    outline-style: auto;
  }
`;

const SelectInput = styled.select`
  position: absolute;
  appearance: none;
  inset: 0;
  opacity: 0;
`;

const SelectIcon = styled(Icon)`
  margin-block: -2px;
  margin-inline-end: -6px;
`;

export default Select;
