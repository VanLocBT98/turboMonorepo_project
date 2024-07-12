import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function ZipFileIcon({ linearColor = "#1C274C", ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M3 10c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172C21 4.343 21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828C18.657 22 16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172C3 19.657 3 17.771 3 14v-4z"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M9.5 15.5v-.125c0-.483.392-.875.875-.875h3.25c.483 0 .875.392.875.875v.125a2.5 2.5 0 01-5 0z"
      />
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M9.5 3c0-.471 0-.707.146-.854C9.793 2 10.03 2 10.5 2h.5c.471 0 .707 0 .854.146C12 2.293 12 2.53 12 3v.5c0 .471 0 .707-.146.854-.147.146-.383.146-.854.146h-.5c-.471 0-.707 0-.854-.146C9.5 4.207 9.5 3.97 9.5 3.5V3zM9.5 8c0-.471 0-.707.146-.854C9.793 7 10.03 7 10.5 7h.5c.471 0 .707 0 .854.146C12 7.293 12 7.53 12 8v.5c0 .471 0 .707-.146.854-.147.146-.383.146-.854.146h-.5c-.471 0-.707 0-.854-.146C9.5 9.207 9.5 8.97 9.5 8.5V8zM12 5.5c0-.471 0-.707.146-.854.147-.146.383-.146.854-.146h.5c.471 0 .707 0 .854.146.146.147.146.383.146.854V6c0 .471 0 .707-.146.854C14.207 7 13.97 7 13.5 7H13c-.471 0-.707 0-.854-.146C12 6.707 12 6.47 12 6v-.5zM12 10.5c0-.471 0-.707.146-.854.147-.146.383-.146.854-.146h.5c.471 0 .707 0 .854.146.146.147.146.383.146.854v.5c0 .471 0 .707-.146.854-.147.146-.383.146-.854.146H13c-.471 0-.707 0-.854-.146C12 11.707 12 11.47 12 11v-.5z"
      />
    </SvgIcon>
  );
}

export default ZipFileIcon;
