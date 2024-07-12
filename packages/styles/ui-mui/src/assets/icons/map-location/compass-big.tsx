import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function CompassBigIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        d="M14.7898 18.9746C8.49749 21.4915 5.35132 22.75 3.55428 21.5288C3.1282 21.2393 2.76071 20.8718 2.47117 20.4457C1.25001 18.6487 2.50848 15.5025 5.02542 9.21017C5.56228 7.86802 5.8307 7.19695 6.29238 6.67048C6.41002 6.53633 6.53633 6.41002 6.67048 6.29238C7.19695 5.8307 7.86802 5.56228 9.21017 5.02542C15.5025 2.50848 18.6487 1.25001 20.4457 2.47117C20.8718 2.7607 21.2393 3.1282 21.5288 3.55428C22.75 5.35132 21.4915 8.49749 18.9746 14.7898C18.4377 16.132 18.1693 16.8031 17.7076 17.3295C17.59 17.4637 17.4637 17.59 17.3295 17.7076C16.8031 18.1693 16.132 18.4377 14.7898 18.9746Z"
        stroke={linearColor}
        strokeWidth={1.5}
      />
      <circle cx={12} cy={12} r={3} stroke={linearColor} strokeWidth={1.5} />
    </SvgIcon>
  );
}

export default CompassBigIcon;
