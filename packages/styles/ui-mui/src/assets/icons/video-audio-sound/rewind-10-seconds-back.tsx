import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function Rewind10SecondsBackIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        d="M14 4.5L12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 7.89936 4.46819 4.3752 8 2.83209"
        stroke={linearColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 10.5L10 8.5V15.5"
        stroke={linearColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 13.75V10.25C12.5 9.2835 13.2835 8.5 14.25 8.5C15.2165 8.5 16 9.2835 16 10.25V13.75C16 14.7165 15.2165 15.5 14.25 15.5C13.2835 15.5 12.5 14.7165 12.5 13.75Z"
        stroke={linearColor}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </SvgIcon>
  );
}

export default Rewind10SecondsBackIcon;
