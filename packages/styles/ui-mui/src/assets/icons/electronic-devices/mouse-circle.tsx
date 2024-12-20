import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function MouseCircleIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M8 10a4 4 0 118 0v4a4 4 0 01-8 0v-4z"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M8.5 10h7M12 10V6"
      />
      <path
        fill={linearColor}
        d="M10.013 2.033l-.15-.735.15.735zm6.681.135a.75.75 0 00-.66 1.347l.66-1.347zm-6.83-.87c-4.918 1-8.614 5.377-8.614 10.619h1.5c0-4.524 3.188-8.29 7.412-9.15l-.299-1.47zM1.25 11.917C1.25 17.894 6.057 22.75 12 22.75v-1.5c-5.103 0-9.25-4.173-9.25-9.333h-1.5zM12 22.75c5.943 0 10.75-4.856 10.75-10.833h-1.5c0 5.16-4.147 9.333-9.25 9.333v1.5zm-.75-18.9v5.042h1.5V3.85h-1.5zm11.5 8.067c0-4.286-2.47-7.992-6.056-9.749l-.66 1.347a9.341 9.341 0 015.216 8.402h1.5zm-12.588-9.15c.508-.103 1.088.324 1.088 1.083h1.5c0-1.468-1.229-2.89-2.887-2.552l.3 1.47z"
      />
    </SvgIcon>
  );
}

export default MouseCircleIcon;
