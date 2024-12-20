import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function SpeakerMinimalisticIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M4 10c0-3.771 0-5.657 1.172-6.828C6.343 2 8.229 2 12 2c3.771 0 5.657 0 6.828 1.172C20 4.343 20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828C17.657 22 15.771 22 12 22c-3.771 0-5.657 0-6.828-1.172C4 19.657 4 17.771 4 14v-4z"
      />
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M16 14a4 4 0 11-8 0 4 4 0 018 0z"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M10 6h4"
      />
    </SvgIcon>
  );
}

export default SpeakerMinimalisticIcon;
