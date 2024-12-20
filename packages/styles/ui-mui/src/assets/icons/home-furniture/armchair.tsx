import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function ArmchairIcon({ linearColor = "#1C274C", ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.821 21H17.18c.995 0 1.494 0 1.905-.1 1.405-.342 2.501-1.512 2.822-3.01.094-.44.094-.97.094-2.033v-4.611C22 10.006 21.057 9 19.895 9c-1.163 0-2.105 1.005-2.105 2.246v5.087H6.21v-5.087C6.21 10.006 5.269 9 4.106 9 2.943 9 2 10.005 2 11.246v4.611c0 1.063 0 1.594.094 2.033.32 1.498 1.417 2.668 2.822 3.01.411.1.91.1 1.905.1z"
      />
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M6 10V8.154c0-2.3 0-3.451.482-4.308A3.647 3.647 0 017.8 2.495C8.635 2 9.757 2 12 2c2.243 0 3.365 0 4.2.495.547.324 1.002.79 1.318 1.351C18 4.703 18 5.853 18 8.154V10"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M19 22v-1M4 22v-1"
      />
    </SvgIcon>
  );
}

export default ArmchairIcon;
