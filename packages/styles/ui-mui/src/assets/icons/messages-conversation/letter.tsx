import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function LetterIcon({ linearColor = "#1C274C", ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12z"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M6 8l2.159 1.8c1.837 1.53 2.755 2.295 3.841 2.295 1.086 0 2.005-.765 3.841-2.296L18 8"
      />
    </SvgIcon>
  );
}

export default LetterIcon;
