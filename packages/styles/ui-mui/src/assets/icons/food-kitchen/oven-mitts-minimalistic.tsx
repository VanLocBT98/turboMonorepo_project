import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function OvenMittsMinimalisticIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M10.334 4.78C9.914 3.151 8.668 1.977 7.214 2c-1.773.027-3.182 1.817-3.148 4l-.032 3.34c-.007.757-.01 1.135-.144 1.47-.134.337-.43.659-1.02 1.301-.58.63-.87 1.098-.87 1.634 0 .818.673 1.476 2.019 2.792l3.569 3.49C8.933 21.341 9.606 22 10.443 22c.836 0 1.509-.658 2.855-1.974l6.78-6.63a6.314 6.314 0 000-9.072c-2.562-2.505-6.716-2.505-9.278 0l-.466.455zm0 0l-.962.94M10.8 17.584l-4.283-4.188"
      />
    </SvgIcon>
  );
}

export default OvenMittsMinimalisticIcon;
