import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function Rewind5SecondsForwardIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        d="M10 4.5L12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 7.89936 19.5318 4.3752 16 2.83209"
        stroke={linearColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 8.5H11.3604C11.1452 8.5 10.9541 8.63772 10.886 8.84189L10.2194 10.8419C10.1114 11.1657 10.3524 11.5 10.6937 11.5H12C13.1046 11.5 14 12.3954 14 13.5C14 14.6046 13.1046 15.5 12 15.5H10"
        stroke={linearColor}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </SvgIcon>
  );
}

export default Rewind5SecondsForwardIcon;