import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function ChatRoundUnreadIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <circle
        cx="3"
        cy="3"
        r="3"
        stroke={linearColor}
        strokeWidth="1.5"
        transform="matrix(-1 0 0 1 22 2)"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M14 2.2c-.646-.131-1.315-.2-2-.2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 001.591 1.591l2.226-.595a1.634 1.634 0 011.149.133A9.958 9.958 0 0012 22c5.523 0 10-4.477 10-10 0-.685-.069-1.354-.2-2"
      />
    </SvgIcon>
  );
}

export default ChatRoundUnreadIcon;
