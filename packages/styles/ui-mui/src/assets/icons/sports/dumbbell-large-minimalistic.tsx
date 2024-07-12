import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function DumbbellLargeMinimalisticIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M8.319 12.198l3.88-3.88m3.104 3.104l-3.88 3.88M3.432 15.62c-.905-.905-1.357-1.357-1.421-1.91a1.598 1.598 0 010-.37c.064-.552.516-1.004 1.42-1.908.905-.905 1.357-1.357 1.909-1.421.123-.015.248-.015.37 0 .553.064 1.005.516 1.91 1.42l4.948 4.95c.905.904 1.357 1.356 1.421 1.908.015.123.015.248 0 .371-.064.552-.516 1.004-1.42 1.908-.905.905-1.357 1.357-1.909 1.421a1.598 1.598 0 01-.37 0c-.553-.064-1.005-.516-1.91-1.42l-4.948-4.95zM11.432 7.62c-.905-.905-1.357-1.357-1.421-1.91a1.598 1.598 0 010-.37c.064-.552.516-1.004 1.42-1.908.905-.905 1.357-1.357 1.909-1.421.123-.015.248-.015.37 0 .553.064 1.005.516 1.91 1.42l4.948 4.95c.905.904 1.357 1.356 1.421 1.908.015.123.015.248 0 .371-.064.552-.516 1.004-1.42 1.908-.905.905-1.357 1.357-1.909 1.421a1.598 1.598 0 01-.37 0c-.553-.064-1.005-.516-1.91-1.42l-4.948-4.95z"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18.019 2.498l3.104 3.104M2.498 18.018l3.104 3.104"
      />
    </SvgIcon>
  );
}

export default DumbbellLargeMinimalisticIcon;
