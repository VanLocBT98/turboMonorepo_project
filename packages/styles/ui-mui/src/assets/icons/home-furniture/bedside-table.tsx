import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function BedsideTableIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M19 22v-1.5M5 22v-1.5"
      />
      <path
        fill={linearColor}
        d="M13 11a1 1 0 11-2 0 1 1 0 012 0zM13 5a1 1 0 11-2 0 1 1 0 012 0zM13 17a1 1 0 11-2 0 1 1 0 012 0z"
      />
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M2 10c0-3.771 0-5.657 1.172-6.828C4.343 2 6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12v-2z"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M2 14h20M2 8h20"
      />
    </SvgIcon>
  );
}

export default BedsideTableIcon;
