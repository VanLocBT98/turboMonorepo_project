import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function GamepadNoChargeIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M16.404 17.247c.184.584.954 1.753 2.57 1.753a3.2 3.2 0 001.392-.316c1.274-.609 1.604-2.17 1.628-3.581.119-7.008-1.52-10.097-3.903-10.942C17.71 4.025 17.3 4 16.897 4h-.612a4.24 4.24 0 00-2.45.78l-.502.354a2.308 2.308 0 01-2.666 0l-.502-.355A4.241 4.241 0 007.715 4h-.612c-.405 0-.813.025-1.194.16-2.383.846-4.022 3.935-3.903 10.943.024 1.412.354 2.972 1.628 3.581A3.2 3.2 0 005.027 19c1.615 0 2.385-1.169 2.569-1.753M14 17l-4 4M10 17l4 4M7.5 9v3M6 10.5h3"
      />
      <path
        fill={linearColor}
        d="M19 10.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16 10.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.75 8a.75.75 0 110 1.5.75.75 0 010-1.5zM16.75 11a.75.75 0 110 1.5.75.75 0 010-1.5z"
      />
    </SvgIcon>
  );
}

export default GamepadNoChargeIcon;
