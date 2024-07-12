import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function TreadmillRoundedIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <circle cx="15" cy="4" r="2" stroke={linearColor} strokeWidth="1.5" />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M11 16v-.974c0-.118 0-.177-.002-.234a3 3 0 00-.992-2.117c-.042-.038-.087-.076-.178-.152-.134-.111-.2-.167-.252-.216a2 2 0 01-.125-2.75c.047-.055.108-.116.231-.239l.33-.33a1.904 1.904 0 00-2.356-2.96L4.5 8M3 15.5h.379c1.358 0 2.66-.54 3.621-1.5M12.5 10a4.743 4.743 0 003 0"
      />
      <path
        stroke={linearColor}
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M19.489 22H3.087a1.087 1.087 0 01-.188-2.157l16.157-2.828A2.511 2.511 0 1119.489 22z"
      />
      <path
        fill={linearColor}
        d="M19.122 10.021l-.742-.111.742.111zm3.025-2.286a.75.75 0 10-.294-1.47l.294 1.47zm-3.405 9.876l1.121-7.478-1.483-.223-1.122 7.479 1.484.222zm1.121-7.478a2.88 2.88 0 012.284-2.398l-.294-1.47A4.38 4.38 0 0018.38 9.91l1.483.223z"
      />
    </SvgIcon>
  );
}

export default TreadmillRoundedIcon;
