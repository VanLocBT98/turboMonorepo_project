import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function ServerMinimalisticIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M2 18c0-.932 0-1.398.152-1.765a2 2 0 011.083-1.083C3.602 15 4.068 15 5 15h14c.932 0 1.398 0 1.765.152a2 2 0 011.083 1.083C22 16.602 22 17.068 22 18c0 .932 0 1.398-.152 1.765a2 2 0 01-1.083 1.083C20.398 21 19.932 21 19 21H5c-.932 0-1.398 0-1.765-.152a2 2 0 01-1.083-1.083C2 19.398 2 18.932 2 18zM2 12c0-.932 0-1.398.152-1.765a2 2 0 011.083-1.083C3.602 9 4.068 9 5 9h14c.932 0 1.398 0 1.765.152a2 2 0 011.083 1.083C22 10.602 22 11.068 22 12c0 .932 0 1.398-.152 1.765a2 2 0 01-1.083 1.083C20.398 15 19.932 15 19 15H5c-.932 0-1.398 0-1.765-.152a2 2 0 01-1.083-1.083C2 13.398 2 12.932 2 12zM2 6c0-.932 0-1.398.152-1.765a2 2 0 011.083-1.083C3.602 3 4.068 3 5 3h14c.932 0 1.398 0 1.765.152a2 2 0 011.083 1.083C22 4.602 22 5.068 22 6c0 .932 0 1.398-.152 1.765a2 2 0 01-1.083 1.083C20.398 9 19.932 9 19 9H5c-.932 0-1.398 0-1.765-.152a2 2 0 01-1.083-1.083C2 7.398 2 6.932 2 6z"
      />
      <circle cx="5" cy="12" r="1" fill={linearColor} />
      <circle cx="5" cy="6" r="1" fill={linearColor} />
      <circle cx="5" cy="18" r="1" fill={linearColor} />
    </SvgIcon>
  );
}

export default ServerMinimalisticIcon;
