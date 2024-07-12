import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function CatIcon({ linearColor = "#1C274C", ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M19.1 10.66c1.111 1.314.88 2.921.88 4.34 0 3.906-5.267 5-7.98 5s-7.98-1.094-7.98-5c0-1.418-.231-3.026.88-4.34m14.2 0c-.195-.23-.43-.45-.716-.66m.715.66c.7.403.88-1.105.881-1.598V7.188C19.98 5.563 18.863 5 17.905 5c-.957 0-2.873 1.563-3.511 1.563-.766 0-.914-.157-2.394-.157s-1.628.157-2.394.157C8.968 6.563 7.052 5 6.095 5c-.958 0-2.075.563-2.075 2.188v1.875c.002.492.18 2 .88 1.597m0 0c.195-.23.43-.45.716-.66"
      />
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M12.826 16c0 .172-.361.312-.806.312-.446 0-.807-.14-.807-.312 0-.173.361-.313.807-.313.445 0 .806.14.806.313zM15.5 13.594c0 .431-.217.781-.484.781s-.484-.35-.484-.781c0-.432.217-.781.484-.781s.484.35.484.78zM9.5 13.594c0 .431-.217.781-.484.781s-.484-.35-.484-.781c0-.432.217-.781.484-.781s.484.35.484.78z"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M22 15.469c-.483-.313-2.58-1.094-3.387-1.094M20.387 17.969c-.484-.313-1.613-1.094-2.42-1.094M2 15.469c.484-.313 2.58-1.094 3.387-1.094M3.613 17.969c.484-.313 1.613-1.094 2.42-1.094"
      />
    </SvgIcon>
  );
}

export default CatIcon;