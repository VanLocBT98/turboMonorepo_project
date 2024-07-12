import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function FileSendIcon({ linearColor = "#1C274C", ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        fill={linearColor}
        d="M15.393 4.054l-.502.557.502-.557zm3.959 3.563l-.502.557.502-.557zm2.302 2.537l-.685.305.685-.305zM3.172 20.828l.53-.53-.53.53zm17.656 0l-.53-.53.53.53zM14 21.25h-4v1.5h4v-1.5zM2.75 14v-4h-1.5v4h1.5zm18.5-.437V14h1.5v-.437h-1.5zM14.891 4.61l3.959 3.563 1.003-1.115-3.958-3.563-1.004 1.115zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104h1.5zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79L18.85 8.174zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316v1.5zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645l1.004-1.115zM10 21.25c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239 1.15.155 2.625.153 4.489.153v-1.5zM1.25 14c0 1.864-.002 3.338.153 4.489.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01-.138-1.027-.14-2.382-.14-4.289h-1.5zM14 22.75c1.864 0 3.338.002 4.489-.153 1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811-1.027.138-2.382.14-4.289.14v1.5zM21.25 14c0 1.907-.002 3.262-.14 4.29-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869.155-1.15.153-2.625.153-4.489h-1.5zm-18.5-4c0-1.907.002-3.261.14-4.29.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10h1.5zm7.28-8.75c-1.875 0-3.356-.002-4.511.153-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811 1.033-.138 2.395-.14 4.312-.14v-1.5z"
      />
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M13 2.5V5c0 2.357 0 3.536.732 4.268C14.464 10 15.643 10 18 10h4"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8.5 18.5v-5m0 0l-2 1.875m2-1.875l2 1.875"
      />
    </SvgIcon>
  );
}

export default FileSendIcon;
