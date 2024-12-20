import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function CloudStormIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M14.381 8.027a5.765 5.765 0 011.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.351 4.351 0 00-.83-.08C3.919 10.53 2 12.426 2 14.765c0 1.31.602 2.48 1.547 3.258m3.57-7.414a5.577 5.577 0 01-.355-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.29 4.29 0 011.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 1.94-.99 3.653-2.5 4.67M17 19l-2 2M15 15.5l-2 2M13 20l-2 2"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6 22.385l4.286-3.692H6L10.286 15"
      />
    </SvgIcon>
  );
}

export default CloudStormIcon;
