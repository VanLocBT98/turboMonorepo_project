import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function StickerSmileSquareIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"
      />
      <ellipse cx="15" cy="10.5" fill={linearColor} rx="1" ry="1.5" />
      <ellipse cx="9" cy="10.5" fill={linearColor} rx="1" ry="1.5" />
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M15 22h-3c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12v3m-7 7a7 7 0 007-7m-7 7c0-1.861 0-2.792.245-3.545a5 5 0 013.21-3.21C19.208 15 20.139 15 22 15"
      />
    </SvgIcon>
  );
}

export default StickerSmileSquareIcon;
