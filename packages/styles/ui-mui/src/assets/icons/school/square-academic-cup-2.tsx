import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function SquareAcademicCup2Icon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M3.092 6.637L9.782 3.5a5.17 5.17 0 014.435 0l6.691 3.137c1.456.682 1.456 3.044 0 3.726l-6.69 3.137a5.17 5.17 0 01-4.435 0L5 11.258"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M2.5 15v-2.862c0-1.28 0-1.92.33-2.42.33-.501.919-.753 2.094-1.257L6 8"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M19 11.5v5.125c0 1.008-.503 1.952-1.385 2.44C16.146 19.88 13.796 21 12 21c-1.796 0-4.146-1.121-5.615-1.934C5.504 18.577 5 17.633 5 16.626V11.5"
      />
    </SvgIcon>
  );
}

export default SquareAcademicCup2Icon;
