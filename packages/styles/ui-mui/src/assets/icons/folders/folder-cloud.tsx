import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function FolderCloudIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 015.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 012.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 00.848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77.079.07.154.145.224.224.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14V6.95z"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12.952 11.885a2.447 2.447 0 011.51-.004m-4.415.972a1.86 1.86 0 00-.333-.03c-.946 0-1.714.712-1.714 1.589S8.768 16 9.714 16h4C14.977 16 16 15.052 16 13.882c0-.927-.643-1.714-1.538-2.001m-4.415.972a1.974 1.974 0 01-.142-.735c0-1.17 1.023-2.118 2.286-2.118 1.175 0 2.144.823 2.271 1.88m-4.415.973c.225.041.435.123.62.238"
      />
    </SvgIcon>
  );
}

export default FolderCloudIcon;
