import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function MagicStickIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M12.619 3.778c2.173-1.388 3.26-2.081 4.095-1.651.835.43.866 1.698.928 4.236l.016.657c.017.72.026 1.081.175 1.393.148.311.42.538.963.992l.495.413c1.911 1.598 2.867 2.397 2.688 3.342-.18.946-1.374 1.412-3.765 2.344l-.618.241c-.68.265-1.02.398-1.274.647-.255.249-.395.586-.677 1.261l-.257.614c-.992 2.375-1.488 3.563-2.434 3.717-.946.155-1.715-.826-3.254-2.788l-.398-.507c-.438-.558-.656-.836-.962-.994-.306-.157-.665-.176-1.382-.213l-.654-.033c-2.524-.13-3.786-.195-4.192-1.045-.405-.85.314-1.922 1.753-4.067l.373-.555c.408-.61.613-.914.679-1.26.065-.347-.016-.696-.177-1.393l-.147-.635C4.024 6.039 3.74 4.81 4.436 4.13c.695-.68 1.91-.362 4.338.275l.628.164c.69.181 1.035.271 1.382.215.346-.057.655-.254 1.272-.648l.563-.36z"
      />
      <path
        fill={linearColor}
        d="M19.53 18.47a.75.75 0 10-1.06 1.06l1.06-1.06zm.94 3.06a.75.75 0 101.06-1.06l-1.06 1.06zm-2-2l2 2 1.06-1.06-2-2-1.06 1.06z"
      />
    </SvgIcon>
  );
}

export default MagicStickIcon;