/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  let barHeight = 8;
  let style = undefined;

  if (size === "medium") {
    barHeight = 12;
  } else if (size === "large") {
    barHeight = 16;
    style = {
      "--border-radius": "8px",
      "--inner-border-radius": "4px",
      "--padding": "4px",
    };
  }

  return (
    <Wrapper role="progressbar" aria-valuenow={value} style={style}>
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarContainer
        preserveAspectRatio="none"
        width="100%"
        height={barHeight}
        viewBox={`0 0 100 ${barHeight}`}
      >
        <Bar x={0} y={0} width={value} height={barHeight} fill="currentColor" />
      </BarContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --border-radius: 4px;
  --inner-border-radius: 0;
  --padding: 0;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--border-radius);
  padding: var(--padding);
  overflow: hidden;
`;

const BarContainer = styled.svg`
  border-radius: var(--inner-border-radius);
  display: block;
`;

const Bar = styled.rect`
  color: ${COLORS.primary};
`;

export default ProgressBar;
