import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function CassetteIcon({ linearColor = "#1C274C", ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12z"
      />
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M13.5 13.75a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM6 13.75a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0z"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17.5 4.5l-.527 1.404c-.47 1.256-.706 1.884-1.22 2.24-.514.356-1.184.356-2.525.356h-2.456c-1.34 0-2.011 0-2.525-.356-.514-.356-.75-.984-1.22-2.24L6.5 4.5"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 4v4.5"
      />
    </SvgIcon>
  );
}

export default CassetteIcon;
