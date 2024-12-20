import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function ChatRoundVideoIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 001.591 1.591l2.226-.595a1.634 1.634 0 011.149.133A9.958 9.958 0 0012 22z"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M16 12c0-.845-.927-1.414-2.78-2.553C11.34 8.292 10.4 7.715 9.7 8.139 9 8.563 9 9.709 9 12c0 2.291 0 3.437.7 3.861.701.424 1.64-.153 3.52-1.308C15.072 13.414 16 12.844 16 12z"
      />
    </SvgIcon>
  );
}

export default ChatRoundVideoIcon;
