import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function NotificationUnreadIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5"
      />
      <circle cx="19" cy="5" r="3" stroke={linearColor} strokeWidth="1.5" />
    </SvgIcon>
  );
}

export default NotificationUnreadIcon;
