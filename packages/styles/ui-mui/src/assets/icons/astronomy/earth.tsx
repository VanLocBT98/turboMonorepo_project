import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function EarthIcon({ linearColor = "#1C274C", ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <circle cx="12" cy="12" r="10" stroke={linearColor} strokeWidth="1.5" />
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M6 4.71c.78.711 2.388 2.653 2.575 4.737C8.75 11.396 10.035 12.98 12 13c.755.008 1.518-.537 1.516-1.292 0-.233-.039-.472-.099-.692A1.414 1.414 0 0113.5 10c.61-1.257 1.81-1.595 2.76-2.278.421-.303.806-.623.975-.88.469-.71.937-2.131.703-2.842M22 13c-.33.931-.563 3.375-4.282 3.414 0 0-3.293 0-4.281 1.862-.791 1.49-.33 3.103 0 3.724"
      />
    </SvgIcon>
  );
}

export default EarthIcon;
