import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function ArchiveUpIcon({ linearColor = "#1C274C", ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 21v-9m0 0l3 3.333M12 12l-3 3.333"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M20.5 7v6c0 3.771 0 5.657-1.172 6.828C18.157 21 16.271 21 12.5 21h-1c-3.771 0-5.657 0-6.828-1.172C3.5 18.657 3.5 16.771 3.5 13V7"
      />
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M2 5c0-.943 0-1.414.293-1.707C2.586 3 3.057 3 4 3h16c.943 0 1.414 0 1.707.293C22 3.586 22 4.057 22 5c0 .943 0 1.414-.293 1.707C21.414 7 20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293C2 6.414 2 5.943 2 5z"
      />
    </SvgIcon>
  );
}

export default ArchiveUpIcon;
