import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function SearchBugRoundedIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <circle cx="11" cy="11" r="9" stroke={linearColor} strokeWidth="1.5" />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M11 15a3 3 0 01-3-3v-2m3 5a3 3 0 003-3v-2m-3 5v-5m3 0a3 3 0 10-6 0m6 0H8m6.072 1H15.5m-9 0H8m6 2.5l1 .5m-7-.5L7 14m7-5.5l1-.5m-7 .5L7 8M21.812 20.975c-.063.095-.176.208-.403.434-.226.227-.34.34-.434.403a1.13 1.13 0 01-1.62-.408c-.053-.1-.099-.254-.19-.561-.101-.335-.151-.503-.161-.621a1.13 1.13 0 011.218-1.218c.118.01.285.06.621.16.307.092.46.138.56.192a1.13 1.13 0 01.409 1.619z"
      />
    </SvgIcon>
  );
}

export default SearchBugRoundedIcon;
