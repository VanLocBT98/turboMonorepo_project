import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function TextCrossIcon({ linearColor = "#1C274C", ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 3H8c-1.886 0-2.828 0-3.414.586C4 4.172 4 5.114 4 7v.95M12 3h4c1.886 0 2.828 0 3.414.586C20 4.172 20 5.114 20 7v.95M12 3v6m0 12v-6M7 21h10"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M4 12h16"
      />
    </SvgIcon>
  );
}

export default TextCrossIcon;
