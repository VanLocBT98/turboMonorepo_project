import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function LogoutIcon({ linearColor = "#1C274C", ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 20a8 8 0 110-16"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10 12h10m0 0l-3-3m3 3l-3 3"
      />
    </SvgIcon>
  );
}

export default LogoutIcon;
