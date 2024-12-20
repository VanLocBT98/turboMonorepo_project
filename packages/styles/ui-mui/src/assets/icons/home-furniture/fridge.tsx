import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function FridgeIcon({ linearColor = "#1C274C", ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M4 10c0-3.771 0-5.657 1.172-6.828C6.343 2 8.229 2 12 2c3.771 0 5.657 0 6.828 1.172C20 4.343 20 6.229 20 10v3c0 3.771 0 5.657-1.172 6.828C17.657 21 15.771 21 12 21c-3.771 0-5.657 0-6.828-1.172C4 18.657 4 16.771 4 13v-3z"
      />
      <path
        stroke={linearColor}
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17 21v1h-1v-1m-8 0v1H7v-1"
      />
      <path stroke={linearColor} strokeWidth="1.5" d="M20 11.5H4" />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M17 7v2M17 14v2"
      />
    </SvgIcon>
  );
}

export default FridgeIcon;
