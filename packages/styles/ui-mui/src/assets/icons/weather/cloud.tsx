import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function CloudIcon({ linearColor = "#1C274C", ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M14.381 9.027a5.765 5.765 0 011.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.351 4.351 0 00-.83-.08C3.919 11.53 2 13.426 2 15.765 2 18.104 3.919 20 6.286 20h10C19.442 20 22 17.472 22 14.353c0-2.472-1.607-4.573-3.845-5.338M7.116 11.609a5.577 5.577 0 01-.354-1.962C6.762 6.528 9.32 4 12.476 4c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.29 4.29 0 011.55.634"
      />
    </SvgIcon>
  );
}

export default CloudIcon;
