import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function RulerPenIcon({ linearColor = "#1C274C", ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M16 22c-1.886 0-2.828 0-3.414-.586C12 20.828 12 19.886 12 18V6c0-1.886 0-2.828.586-3.414C13.172 2 14.114 2 16 2h2c1.886 0 2.828 0 3.414.586C22 3.172 22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414C20.828 22 19.886 22 18 22h-2z"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 12h2m-2-6h2m-2 12h2m-2-3h3m-3-6h3"
      />
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M2 5.8v-.95C2 3.276 3.343 2 5 2s3 1.276 3 2.85v.95m-6 0s1.125.95 3 .95 3-.95 3-.95m-6 0v9.734c0 .591 0 .887.038 1.177.044.343.128.68.25 1.005.102.275.241.54.52 1.069l1.18 2.242M8 5.8v9.734c0 .591 0 .887-.038 1.177-.044.343-.128.68-.25 1.005-.102.275-.241.54-.52 1.069l-1.18 2.242m0 0l-.288.548A.814.814 0 015 22a.814.814 0 01-.724-.425l-.288-.548m2.024 0H3.988"
      />
    </SvgIcon>
  );
}

export default RulerPenIcon;
