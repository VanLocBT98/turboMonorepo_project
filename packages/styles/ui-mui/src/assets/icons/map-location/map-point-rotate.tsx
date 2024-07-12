import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function MapPointRotateIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        d="M6 8.10747C6 4.73441 8.68629 2 12 2C15.3137 2 18 4.73441 18 8.10747C18 11.4541 16.085 15.3593 13.0972 16.7558C12.4007 17.0814 11.5993 17.0814 10.9028 16.7558C7.91499 15.3593 6 11.4541 6 8.10747Z"
        stroke={linearColor}
        strokeWidth={1.5}
      />
      <path
        d="M14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8Z"
        stroke={linearColor}
        strokeWidth={1.5}
      />
      <path
        d="M12 20.6875L12.4939 21.2519C12.6566 21.1095 12.75 20.9038 12.75 20.6875C12.75 20.4712 12.6566 20.2655 12.4939 20.1231L12 20.6875ZM21.4263 14.4122C21.1016 14.1549 20.6299 14.2096 20.3727 14.5342C20.1155 14.8589 20.1701 15.3306 20.4948 15.5878L21.4263 14.4122ZM3.50523 15.5878C3.82989 15.3306 3.88455 14.8589 3.62731 14.5342C3.37008 14.2096 2.89836 14.1549 2.5737 14.4122L3.50523 15.5878ZM10.5 19.375L10.9939 18.8106C10.7724 18.6168 10.4581 18.5704 10.1901 18.692C9.9221 18.8136 9.75 19.0807 9.75 19.375H10.5ZM10.5 22H9.75C9.75 22.2943 9.9221 22.5614 10.1901 22.683C10.4581 22.8046 10.7724 22.7582 10.9939 22.5644L10.5 22ZM14.4244 19.8173C14.0123 19.859 13.7121 20.227 13.7538 20.6391C13.7956 21.0512 14.1635 21.3514 14.5756 21.3096L14.4244 19.8173ZM10.5443 19.8948C8.20148 19.756 6.17254 19.2897 4.75556 18.6471C4.04582 18.3252 3.52438 17.9747 3.19064 17.6296C2.86028 17.288 2.75 16.993 2.75 16.75H1.25C1.25 17.494 1.60081 18.1434 2.11244 18.6724C2.62069 19.1979 3.32214 19.644 4.13599 20.0131C5.76619 20.7525 7.98726 21.246 10.4557 21.3922L10.5443 19.8948ZM20.4948 15.5878C21.0684 16.0424 21.25 16.443 21.25 16.75H22.75C22.75 15.7998 22.1833 15.012 21.4263 14.4122L20.4948 15.5878ZM2.75 16.75C2.75 16.443 2.93157 16.0424 3.50523 15.5878L2.5737 14.4122C1.81667 15.012 1.25 15.7998 1.25 16.75H2.75ZM12.4939 20.1231L10.9939 18.8106L10.0061 19.9394L11.5061 21.2519L12.4939 20.1231ZM9.75 19.375V20.6435H11.25V19.375H9.75ZM9.75 20.6435V22H11.25V20.6435H9.75ZM10.9939 22.5644L12.4939 21.2519L11.5061 20.1231L10.0061 21.4356L10.9939 22.5644ZM21.25 16.75C21.25 17.2066 20.8246 17.8623 19.5314 18.5103C18.3014 19.1266 16.522 19.6047 14.4244 19.8173L14.5756 21.3096C16.791 21.0851 18.7617 20.5738 20.2034 19.8514C21.5819 19.1606 22.75 18.1281 22.75 16.75H21.25Z"
        fill={linearColor}
      />
    </SvgIcon>
  );
}

export default MapPointRotateIcon;
