"use client";

import { styled } from "@mui/material";
import dynamic from "next/dynamic";

const ThreeView = dynamic(
  () => import("@/components/organisms/Three-Wrapper"),
  {
    ssr: false,
    loading: null,
  },
);

export const WrapperWrap = styled("div", {})(({ theme }) => ({}));

export const WrapperContent = styled(
  "div",
  {},
)(({ theme }) => ({
  paddingTop: "60px",
}));

export const WrapperBgThreeJS = styled(
  ThreeView,
  {},
)(({ theme }) => ({
  position: "fixed",
  inset: 0,
  width: "100%",
  height: "100vh",
  zIndex: -1,
}));
