import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function SliderVerticalIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M6 8c0-2.828 0-4.243.879-5.121C7.757 2 9.172 2 12 2c2.828 0 4.243 0 5.121.879C18 3.757 18 5.172 18 8v8c0 2.828 0 4.243-.879 5.121C16.243 22 14.828 22 12 22c-2.828 0-4.243 0-5.121-.879C6 20.243 6 18.828 6 16V8zM18 19.5c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 001.092-1.092C22 17.6 22 16.9 22 15.5v-7c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 00-1.092-1.093C20.1 4.5 19.4 4.5 18 4.5M6 19.5c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 01-1.093-1.092C2 17.6 2 16.9 2 15.5v-7c0-1.4 0-2.1.272-2.635a2.5 2.5 0 011.093-1.093C3.9 4.5 4.6 4.5 6 4.5"
      />
    </SvgIcon>
  );
}

export default SliderVerticalIcon;
