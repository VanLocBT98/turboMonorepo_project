"use client";

import { IconButton, styled } from "@mui/material";

export const HeaderWrap = styled(
  "div",
  {},
)(({}) => ({ zIndex: 999, position: "relative" }));

export const HeaderNav = styled(
  "nav",
  {},
)(({ theme }) => ({
  position: "fixed",
  ...theme.functions.adjustFlex(),
  width: "100vw",
  marginTop: "16px",
}));

export const HeaderNavIcon = styled(
  IconButton,
  {},
)(({ theme }) => ({
  zIndex: 999,
  position: "fixed",
  right: "16px",
  top: "16px",
  backgroundImage: `linear-gradient(to right, #fc5c7d, #6a82fb)`,
  transition: "linear 0.5s ease-out",
  "&:hover": {
    backgroundImage: `linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)`,
  },
}));

export const HeaderNavList = styled(
  "ul",
  {},
)(({ theme }) => ({
  listStyleType: "none",
  ...theme.functions.adjustFlex("flex", "column", "flex-start"),
  rowGap: "16px",
  width: "300px",
  height: "100%",
  columnGap: "4vw",
  padding: "24px 16px",
  backgroundImage: `linear-gradient(to bottom, #fc5c7d, #6a82fb)`,
  margin: 0,
}));

export const HeaderNavItem = styled(
  "li",
  {},
)(({ theme }) => ({
  button: { color: "#000", textDecoration: "none", fontWeight: "800" },
  backgroundImage: `linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)`,
  width: "100%",
  backgroundColor: theme.palette.grey?.[700],
  borderRadius: "20px",
  overflow: "hidden",
  "&:hover": {
    backgroundImage: `linear-gradient(to left, #c6ffdd, #fbd786, #f7797d)`,
    button: { color: "#6a82fb", textDecoration: "none" },
  },
}));
