import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function VerifiedCheckIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M9.781 3.89c.564-.48.846-.72 1.14-.861a2.5 2.5 0 012.157 0c.295.14.577.38 1.14.861.225.192.337.287.457.367a2.5 2.5 0 00.908.376c.141.028.288.04.582.064.739.058 1.108.088 1.416.197a2.5 2.5 0 011.525 1.524c.109.309.138.678.197 1.416.023.294.035.441.063.583.064.324.192.633.376.907.08.12.176.232.367.457.48.564.721.846.862 1.14a2.5 2.5 0 010 2.157c-.14.294-.381.576-.862 1.14a5.25 5.25 0 00-.367.457 2.497 2.497 0 00-.376.907c-.028.142-.04.289-.063.583-.059.738-.088 1.108-.197 1.416a2.5 2.5 0 01-1.525 1.524c-.308.11-.677.139-1.416.197-.294.024-.44.036-.582.064a2.5 2.5 0 00-.908.376 5.25 5.25 0 00-.456.367c-.564.48-.846.72-1.14.861a2.5 2.5 0 01-2.157 0c-.295-.14-.577-.38-1.14-.861a5.263 5.263 0 00-.457-.367 2.5 2.5 0 00-.908-.376 5.277 5.277 0 00-.582-.064c-.739-.058-1.108-.088-1.416-.197a2.5 2.5 0 01-1.525-1.524c-.109-.308-.138-.678-.197-1.416-.023-.294-.035-.441-.063-.583a2.5 2.5 0 00-.376-.907c-.08-.12-.176-.232-.367-.457-.48-.564-.721-.846-.862-1.14a2.5 2.5 0 010-2.157c.141-.294.381-.576.862-1.14.191-.225.287-.337.367-.457a2.5 2.5 0 00.376-.907c.028-.142.04-.289.063-.583.059-.738.088-1.107.197-1.416A2.5 2.5 0 016.42 4.894c.308-.109.677-.139 1.416-.197.294-.024.44-.036.582-.064a2.5 2.5 0 00.908-.376c.12-.08.232-.175.456-.367z"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8.5 12.5l2 2 5-5"
      />
    </SvgIcon>
  );
}

export default VerifiedCheckIcon;
