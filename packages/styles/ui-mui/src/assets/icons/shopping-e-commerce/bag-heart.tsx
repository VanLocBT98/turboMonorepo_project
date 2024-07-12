import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function BagHeartIcon({ linearColor = "#1C274C", ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M3.742 20.555C4.942 22 7.174 22 11.639 22h.722c4.465 0 6.698 0 7.897-1.445m-16.516 0c-1.2-1.446-.788-3.64.034-8.03.586-3.12.878-4.681 1.99-5.603M3.741 20.555s0 0 0 0zm16.516 0c1.2-1.446.789-3.64-.034-8.03-.586-3.12-.878-4.681-1.99-5.603m2.024 13.633s0 0 0 0zM18.235 6.922C17.124 6 15.536 6 12.36 6h-.722c-3.175 0-4.763 0-5.874.922m12.47 0s0 0 0 0zm-12.47 0s0 0 0 0z"
      />
      <path
        fill={linearColor}
        d="M12 12.191l-.519.542a.75.75 0 001.038 0L12 12.191zm-.957 3.675l-.444.604.444-.604zm1.914 0l-.444-.605.444.605zm-.957.462v.75-.75zm-.514-1.067c-.417-.307-.878-.69-1.227-1.093-.368-.426-.509-.757-.509-.971h-1.5c0 .77.441 1.45.875 1.952.453.525 1.014.984 1.474 1.321l.887-1.21zM9.75 13.197c0-.576.263-.827.492-.907.25-.088.714-.06 1.24.443l1.037-1.083c-.825-.79-1.861-1.096-2.773-.776-.934.327-1.496 1.226-1.496 2.323h1.5zm3.65 3.273c.46-.337 1.022-.796 1.475-1.32.434-.502.875-1.183.875-1.953h-1.5c0 .214-.141.545-.51.971-.348.403-.809.786-1.226 1.093l.887 1.21zm2.35-3.273c0-1.097-.563-1.996-1.496-2.323-.912-.32-1.948-.014-2.773.776l1.038 1.083c.525-.503.989-.531 1.24-.443.228.08.491.33.491.907h1.5zM10.6 16.47c.368.27.782.608 1.4.608v-1.5c-.024 0-.04 0-.094-.03a4 4 0 01-.42-.287l-.887 1.21zm1.914-1.21a4 4 0 01-.42.289c-.054.029-.07.029-.094.029v1.5c.618 0 1.032-.337 1.4-.608l-.886-1.21z"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M9 6V5a3 3 0 116 0v1"
      />
    </SvgIcon>
  );
}

export default BagHeartIcon;