import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function SpeedometerMaxIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M19 19l-1.5-1.5M19 5l-1.5 1.5M5 19l1.5-1.5M5 5l1.5 1.5M2 12h2M20 12h2M12 4V2"
      />
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M10.121 14.364a3 3 0 014.243-4.243c.445.446.757 1.37.971 2.346.321 1.459.482 2.188-.1 2.769-.58.58-1.31.42-2.768.1-.975-.215-1.9-.527-2.346-.972z"
      />
    </SvgIcon>
  );
}

export default SpeedometerMaxIcon;
