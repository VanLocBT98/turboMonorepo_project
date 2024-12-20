import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function AirbudsCaseIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M3 11c0-3.75 0-5.625.955-6.939A5 5 0 015.06 2.955C6.375 2 8.251 2 12 2c3.75 0 5.625 0 6.939.955a5 5 0 011.106 1.106C21 5.375 21 7.251 21 11v2c0 3.75 0 5.625-.955 6.939a5 5 0 01-1.106 1.106C17.625 22 15.749 22 12 22c-3.75 0-5.625 0-6.939-.955a5 5 0 01-1.106-1.106C3 18.625 3 16.749 3 13v-2z"
      />
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M7 9a2 2 0 012-2h6a2 2 0 110 4H9a2 2 0 01-2-2zM21 9h-3.5M7 9H3"
      />
    </SvgIcon>
  );
}

export default AirbudsCaseIcon;
