import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function MultipleForwardRightIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12.664 5.48l3.973 3.53c1.568 1.395 2.353 2.092 2.353 2.99 0 .898-.785 1.596-2.353 2.99l-3.973 3.53c-.716.637-1.074.956-1.369.823C11 19.21 11 18.731 11 17.773V15.43c-3.6 0-7.5 1.714-9 4.571 0-9.143 5.333-11.428 9-11.428V6.227c0-.958 0-1.437.295-1.57.295-.132.653.186 1.37.823z"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M15.539 4.5l5.216 4.844a3.897 3.897 0 01-.126 5.823l-5.09 4.333"
      />
    </SvgIcon>
  );
}

export default MultipleForwardRightIcon;
