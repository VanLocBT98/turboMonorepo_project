import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function GlobeIcon({ linearColor = "#1C274C", ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
        stroke={linearColor}
        strokeWidth={1.5}
      />
      <path
        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
        stroke={linearColor}
        strokeWidth={1.5}
      />
      <path
        d="M2 12L4 12"
        stroke={linearColor}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M20 12L22 12"
        stroke={linearColor}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M12 4V2"
        stroke={linearColor}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M12 22V20"
        stroke={linearColor}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </SvgIcon>
  );
}

export default GlobeIcon;
