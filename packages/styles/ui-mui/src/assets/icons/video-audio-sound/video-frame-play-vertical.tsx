import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function VideoFramePlayVerticalIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12z"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M17 2.5v19M7 2.5v19M2 12h5m15 0h-5M2.5 7H7m14.5 0H17M2.5 17H7m14.5 0H17M14 12c0-.528-.53-.884-1.589-1.596-1.073-.721-1.61-1.082-2.01-.817C10 9.852 10 10.567 10 12c0 1.432 0 2.148.4 2.413.4.265.938-.096 2.011-.817C13.471 12.884 14 12.528 14 12z"
      />
    </SvgIcon>
  );
}

export default VideoFramePlayVerticalIcon;
