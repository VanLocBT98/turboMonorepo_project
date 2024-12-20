"use client";

import { styled } from "@mui/material";

export const BubbleTextItem = styled(
  "span",
  {},
)(({ theme }) => ({
  fontWeight: 300,
  fontSize: "46px",
  lineHeight: "54px",
  minWidth: "8px",
  transition: "0.35s font-weight, 0.35s color",
  cursor: "pointer",
  "&:hover": {
    fontWeight: 900,
    color: "rgb(238, 242, 255)",
  },
  "&:hover + &": {
    fontWeight: 700,
    color: "rgb(199, 210, 254)",
  },
  "&:hover + &:hover + &": {
    fontWeight: 300,
  },
  "&:has(+ &:hover)": {
    fontWeight: 700,
    color: "rgb(199, 210, 254)",
  },
  "&:has(+ & + &:hover)": {
    fontWeight: 300,
  },
  "@media screen and (max-width: 768px)": {
    fontSize: "40px",
    lineHeight: "44px",
    minWidth: "4px",
  },
}));
