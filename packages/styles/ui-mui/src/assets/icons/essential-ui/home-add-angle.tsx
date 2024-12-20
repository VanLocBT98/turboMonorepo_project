import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function HomeAddAngleIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M2.364 12.958c-.38-2.637-.57-3.956-.029-5.083.54-1.127 1.691-1.812 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2c1.154 0 2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183.54 1.127.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.082-1.906 6.093C18.276 22 16.552 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012-1.175-1.011-1.419-2.705-1.906-6.093l-.279-1.937z"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M15 13h-3m0 0H9m3 0v-3m0 3v3"
      />
    </SvgIcon>
  );
}

export default HomeAddAngleIcon;
