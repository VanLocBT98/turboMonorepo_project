import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function CallMedicineRoundedIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M17 12a5 5 0 10-4.478-2.774.817.817 0 01.067.574l-.298 1.113a.65.65 0 00.796.796l1.113-.298a.817.817 0 01.574.067A4.98 4.98 0 0017 12z"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M15 7h4m-2 2V5M8.038 7.316l.649 1.163c.585 1.05.35 2.426-.572 3.349 0 0 0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91 0 0 0 0 0 0 .923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5-.837.836-1.863 1.488-2.996 1.53-1.908.073-5.149-.41-8.4-3.66-3.25-3.251-3.733-6.492-3.66-8.4.043-1.133.694-2.159 1.53-2.996 1.394-1.393 3.616-1.206 4.5.38z"
      />
    </SvgIcon>
  );
}

export default CallMedicineRoundedIcon;
