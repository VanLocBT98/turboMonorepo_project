import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function FullScreenIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        d="M22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22"
        stroke={linearColor}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M10 22C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14"
        stroke={linearColor}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M10 2C6.22876 2 4.34315 2 3.17157 3.17157C2 4.34315 2 6.22876 2 10"
        stroke={linearColor}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M14 2C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10"
        stroke={linearColor}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </SvgIcon>
  );
}

export default FullScreenIcon;
