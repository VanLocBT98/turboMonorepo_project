import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function CaseMinimalisticIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M14 6h-4c-1.356 0-2.468 0-3.39.054-1.645.097-2.688.367-3.438 1.118C2 8.343 2 10.229 2 14c0 3.771 0 5.657 1.172 6.828C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172C22 19.657 22 17.771 22 14c0-3.771 0-5.657-1.172-6.828-.75-.75-1.793-1.02-3.437-1.118C16.468 6 15.356 6 14 6z"
      />
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M6.61 6.054c.823-.02 1.55-.6 1.83-1.374l.035-.103L8.5 4.5c.042-.127.064-.19.086-.246a2 2 0 011.735-1.25C10.38 3 10.448 3 10.58 3h2.838c.133 0 .2 0 .26.004a2 2 0 011.735 1.25c.023.056.044.12.086.246l.026.077c.018.053.026.08.035.103.28.775 1.007 1.354 1.83 1.374"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M21.662 8.72c-3.01 1.956-4.515 2.934-6.101 3.427a12 12 0 01-7.121 0c-1.587-.493-3.092-1.47-6.102-3.427M8 11v2M16 11v2"
      />
    </SvgIcon>
  );
}

export default CaseMinimalisticIcon;
