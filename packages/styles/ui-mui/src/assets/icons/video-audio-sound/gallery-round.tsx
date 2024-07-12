import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function GalleryRoundIcon({
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
      <circle cx="16" cy="8" r="2" stroke={linearColor} strokeWidth="1.5" />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M2 10.154l.98-.141C9.96 9.01 15.925 15.03 14.858 22"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M22 13.385l-.973-.135c-2.844-.394-5.417 1.022-6.742 3.25"
      />
    </SvgIcon>
  );
}

export default GalleryRoundIcon;