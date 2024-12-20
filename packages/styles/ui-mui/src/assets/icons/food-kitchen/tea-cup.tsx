import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function TeaCupIcon({ linearColor = "#1C274C", ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M2.315 12.698c-.05-.427-.075-.641-.064-.817a2 2 0 011.646-1.85c.174-.031.389-.031.82-.031h10.567c.43 0 .645 0 .819.03a2 2 0 011.646 1.85c.01.177-.014.39-.064.818l-.401 3.428A5.515 5.515 0 0111.807 21H8.193a5.515 5.515 0 01-5.477-4.874l-.4-3.428z"
      />
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M17 17h2a3 3 0 100-6h-1.5"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10 2a1.414 1.414 0 000 2 1.414 1.414 0 010 2M5 7.5l.116-.116c.507-.507.564-1.31.134-1.884a1.441 1.441 0 01.134-1.884L5.5 3.5M14.5 7.5l.116-.116c.507-.507.564-1.31.134-1.884a1.441 1.441 0 01.134-1.884L15 3.5"
      />
    </SvgIcon>
  );
}

export default TeaCupIcon;
