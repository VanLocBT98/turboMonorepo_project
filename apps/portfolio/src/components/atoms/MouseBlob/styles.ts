"use client";

import { alpha, styled } from "@mui/material";

export const MouseBlobWrap = styled("div", {
  shouldForwardProp: (prop) => prop !== "radius" && prop !== "borderWidth",
})<{
  radius: number;
  borderWidth: number;
}>(({ theme, radius, borderWidth }) => ({
  position: "relative",
  overflow: "hidden",
  borderRadius: `${radius || 0}px`,
  padding: `${borderWidth || 0}px`,
  background: alpha(theme.palette.grey?.[600], 0.3),
  width: "100%",
  "@media screen and (max-width: 768px)": {
    padding: `${borderWidth / 2 || 0}px`,
  },
}));

export const MouseBlobContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "radius",
})<{
  radius: number;
}>(({ theme, radius }) => ({
  background: alpha(theme.palette.common?.["black"], 0.01),
  borderRadius: `${radius || 0}px`,
  transition: "background 150ms ease-in-out",
  cursor: "pointer",
  "&:hover": {
    background: alpha(theme.palette.common?.["black"], 0.05),
  },
}));

export const MouseBlobBlob = styled(
  "div",
  {},
)(({ theme }) => ({
  filter: "blur(40px)",
  position: "absolute",
  zIndex: -1,
  top: 0,
  left: 0,
  width: "250px",
  height: "250px",
  borderRadius: "50%",
  background: "rgb(255, 255, 255, 0.9)",
}));

export const MouseBlobFakeBlob = styled(
  "div",
  {},
)(({ theme }) => ({
  display: "hidden",
  position: "absolute",
  zIndex: -1,
  top: 0,
  left: 0,
  width: "200px",
  height: "200px",
  borderRadius: "50%",
}));
