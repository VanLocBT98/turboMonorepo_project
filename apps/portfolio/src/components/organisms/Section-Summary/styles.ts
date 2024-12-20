"use client";

import { Button, styled } from "@mui/material";
import Link from "next/link";

export const SummaryWrap = styled(
  "div",
  {},
)(({ theme }) => ({
  ...theme.functions.adjustFlex(),
}));

export const SummaryTitle = styled(
  "p",
  {},
)(({ theme }) => ({
  fontSize: "24px",
  color: theme.palette.common?.white,
  margin: 0,
}));

export const SummaryContent = styled(
  "div",
  {},
)(({ theme }) => ({
  textIndent: "40px",
  fontSize: "16px",
  marginBottom: "20px",
  color: theme.palette.common?.white,
  p: {
    fontSize: "18px",
    lineHeight: "36px",
  },
}));

export const SummaryResume = styled(
  "div",
  {},
)(({ theme }) => ({
  ...theme.functions.adjustFlex("flex", "row", "center", "center"),
}));

export const SummarySocials = styled(
  "div",
  {},
)(({ theme }) => ({
  ...theme.functions.adjustFlex(),
  columnGap: "16px",
  marginTop: "16px",
}));

export const SummaryResumeLink = styled(
  Link,
  {},
)(({ theme }) => ({ textDecoration: "none" }));

export const SummaryResumeBtn = styled(
  Button,
  {},
)(({ theme }) => ({
  ...theme.functions.adjustFlex(),
  columnGap: "8px",
  svg: {
    path: {
      stroke: theme.palette.common?.["white"],
    },
  },
}));
