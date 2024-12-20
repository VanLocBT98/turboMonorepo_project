import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function BedsideTable4Icon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M19 22v-1.5M5 22v-1.5M12 20V8M15 12v3M9 12v3"
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
        d="M2 8h20"
      />
    </SvgIcon>
  );
}

export default BedsideTable4Icon;
