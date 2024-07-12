import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function ElectricRefuelingIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M16 22V8c0-2.828 0-4.243-.879-5.121C14.243 2 12.828 2 10 2H9c-2.828 0-4.243 0-5.121.879C3 3.757 3 5.172 3 8v14"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.5 10L8 12.5h3L9.5 15"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M17 22H2M19.5 4l1.233.986c.138.11.207.166.27.222a3 3 0 01.992 2.066c.005.084.005.172.005.348V18.5a1.5 1.5 0 01-3 0v-.071c0-.79-.64-1.429-1.429-1.429H16"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M22 8h-1.5A1.5 1.5 0 0019 9.5v2.419a1.5 1.5 0 001.026 1.423L22 14"
      />
    </SvgIcon>
  );
}

export default ElectricRefuelingIcon;
