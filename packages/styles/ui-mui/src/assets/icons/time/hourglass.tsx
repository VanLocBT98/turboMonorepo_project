import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function HourglassIcon({ linearColor = "#1C274C", ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M12 12l-2.958 2.929c-2.922 2.894-4.383 4.341-3.974 5.59.035.107.078.211.13.312C5.8 22 7.867 22 12 22c4.133 0 6.2 0 6.802-1.17.052-.1.095-.204.13-.311.41-1.249-1.052-2.696-3.974-5.59L12 12zm0 0l2.958-2.929c2.922-2.894 4.383-4.341 3.974-5.59a2.12 2.12 0 00-.13-.312C18.2 2 16.133 2 12 2 7.867 2 5.8 2 5.198 3.17c-.052.1-.095.204-.13.311-.41 1.249 1.052 2.696 3.974 5.59L12 12z"
      />
    </SvgIcon>
  );
}

export default HourglassIcon;
