import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function Hanger2Icon({ linearColor = "#1C274C", ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M9.536 3.91c0-1.055.95-1.91 2.124-1.91 1.173 0 2.124.855 2.124 1.91 0 .495-.18.947-.492 1.287-.597.65-1.49 1.305-1.49 2.148v.285m0 0a3.656 3.656 0 012.082.61l7.433 5.01c1.306.882.613 2.75-1.02 2.75H18m-6.198-8.37a3.641 3.641 0 00-2.051.649L2.655 13.27C1.383 14.165 2.087 16 3.703 16H6"
      />
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M6 18c0-1.886 0-2.828.586-3.414C7.172 14 8.114 14 10 14h4c1.886 0 2.828 0 3.414.586C18 15.172 18 16.114 18 18c0 1.886 0 2.828-.586 3.414C16.828 22 15.886 22 14 22h-4c-1.886 0-2.828 0-3.414-.586C6 20.828 6 19.886 6 18z"
      />
    </SvgIcon>
  );
}

export default Hanger2Icon;
