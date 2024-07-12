import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function FolderPathConnectIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M16.5 7.5h-3"
      />
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M5 5.217c0-.573 0-.86.049-1.099.213-1.052 1.1-1.874 2.232-2.073C7.538 2 7.847 2 8.465 2c.27 0 .406 0 .536.011.56.049 1.093.254 1.526.587.1.078.196.167.388.344l.385.358c.571.53.857.795 1.198.972.188.097.388.174.594.228.377.1.78.1 1.588.1h.261c1.843 0 2.764 0 3.363.5.055.046.108.095.157.146C19 5.802 19 6.658 19 8.369V9.8c0 2.451 0 3.677-.82 4.438-.82.762-2.14.762-4.78.762h-2.8c-2.64 0-3.96 0-4.78-.761C5 13.476 5 12.25 5 9.8V5.217z"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M22 20h-8M2 20h8M12 18v-3"
      />
      <circle cx="12" cy="20" r="2" stroke={linearColor} strokeWidth="1.5" />
    </SvgIcon>
  );
}

export default FolderPathConnectIcon;
