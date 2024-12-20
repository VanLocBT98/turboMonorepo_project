import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function CaseRoundMinimalisticIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M2 14c0-3.771 0-5.657 1.172-6.828C4.343 6 6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172C22 8.343 22 10.229 22 14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14z"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M21.662 8.72c-3.01 1.956-4.515 2.934-6.101 3.427a12 12 0 01-7.121 0c-1.587-.493-3.092-1.47-6.102-3.427M8 11v2M16 11v2M9.17 4a3.001 3.001 0 015.66 0"
      />
    </SvgIcon>
  );
}

export default CaseRoundMinimalisticIcon;
