import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function IphoneIcon({ linearColor = "#1C274C", ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M4 10c0-3.771 0-5.657 1.172-6.828C6.343 2 8.229 2 12 2c3.771 0 5.657 0 6.828 1.172C20 4.343 20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828C17.657 22 15.771 22 12 22c-3.771 0-5.657 0-6.828-1.172C4 19.657 4 17.771 4 14v-4z"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M15 19H9M16.748 2.377l-.084.127c-.756 1.134-1.134 1.7-1.686 2.044-.11.068-.224.13-.342.183C14.045 5 13.363 5 12 5c-1.363 0-2.045 0-2.636-.27a3 3 0 01-.342-.182c-.552-.343-.93-.91-1.686-2.044l-.084-.127"
      />
    </SvgIcon>
  );
}

export default IphoneIcon;
