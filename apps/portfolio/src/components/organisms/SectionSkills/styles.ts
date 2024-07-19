"use client";

import { alpha, Button, keyframes, styled, Typography } from "@mui/material";

export const SectionSkillsWrap = styled("div", {})(({ theme }) => ({}));

export const SectionSkillsTitle = styled(Typography, {})(({ theme }) => ({}));

export const SectionSkillsTech = styled(
  "div",
  {},
)(({ theme }) => ({
  ...theme.functions.adjustFlex("flex", "column", "center", "center"),
  rowGap: "24px",
}));

export const SectionSkillsSubtitle = styled(
  "p",
  {},
)(({}) => ({
  margin: "0 0 16px 0",
  fontSize: "20px",
  lineHeight: 1,
  textAlign: "center",
}));

export const SectionSkillsList = styled(
  "div",
  {},
)(({ theme }) => ({
  ...theme.functions.adjustFlex("flex", "row", "center", "center"),
  gap: "8px",
  flexWrap: "wrap",
}));

const animatedGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Styled component với ::after
export const SectionSkillsItem = styled(Button)`
  background-color: ${({ theme }) =>
    alpha(theme.palette.primary?.["main"], 0.3)};
  color: ${({ theme }) => theme.palette.common?.["white"]};
  position: relative;
  border-radius: 3px;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    top: calc(-1 * 3px);
    left: calc(-1 * 3px);
    height: calc(100% + 3px * 2);
    width: calc(100% + 3px * 2);
    background: linear-gradient(
      60deg,
      #f79533,
      #f37055,
      #ef4e7b,
      #a166ab,
      #5073b8,
      #1098ad,
      #07b39b,
      #6fba82
    );
    border-radius: calc(2 * 3px);
    z-index: -1;
    animation: ${animatedGradient} 3s ease alternate infinite;
    background-size: 300% 300%;
  }
`;
