import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function HeartPulseIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M18 12h-.801c-.83 0-1.245 0-1.589.195-.344.194-.557.55-.984 1.261l-.03.052c-.398.663-.597.994-.886.989-.29-.006-.476-.344-.849-1.022l-1.687-3.067c-.347-.632-.52-.948-.798-.963-.277-.014-.484.28-.897.871l-.283.404c-.44.627-.659.94-.984 1.11-.326.17-.709.17-1.474.17H6"
      />
      <path
        fill={linearColor}
        d="M8.962 19.37l.474-.58-.474.58zM12 5.5l-.55.51a.75.75 0 001.1 0L12 5.5zm3.038 13.872l.474.581-.474-.581zm-5.602-.581c-1.45-1.183-3.143-2.733-4.467-4.43-1.339-1.715-2.219-3.478-2.219-5.1h-1.5c0 2.126 1.13 4.22 2.536 6.023 1.421 1.82 3.21 3.452 4.702 4.669l.948-1.163zM2.75 9.26c0-2.73 1.258-4.555 2.85-5.218 1.573-.654 3.753-.287 5.85 1.968l1.1-1.022c-2.403-2.581-5.223-3.289-7.526-2.331-2.282.95-3.774 3.422-3.774 6.603h1.5zm12.762 10.692c1.493-1.217 3.28-2.848 4.702-4.67 1.407-1.803 2.536-3.896 2.536-6.022h-1.5c0 1.622-.88 3.385-2.219 5.1-1.324 1.697-3.017 3.247-4.467 4.43l.948 1.162zM22.75 9.26c0-3.18-1.492-5.654-3.774-6.603-2.303-.958-5.123-.25-7.525 2.33l1.098 1.023c2.098-2.255 4.278-2.622 5.85-1.968 1.593.662 2.851 2.488 2.851 5.218h1.5zM8.488 19.952C9.758 20.988 10.64 21.75 12 21.75v-1.5c-.722 0-1.171-.325-2.564-1.46l-.948 1.162zm6.076-1.163C13.171 19.925 12.722 20.25 12 20.25v1.5c1.359 0 2.241-.762 3.512-1.798l-.948-1.163z"
      />
    </SvgIcon>
  );
}

export default HeartPulseIcon;
