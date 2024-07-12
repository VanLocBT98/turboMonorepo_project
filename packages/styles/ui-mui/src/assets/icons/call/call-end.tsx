import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function CallEndIcon({ linearColor = "#1C274C", ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        fill={linearColor}
        d="M8 12.862h-.75H8zm0 .616h.75H8zM6.58 15.33l-.211-.72.211.72zm-2 .586l-.211-.72.211.72zM2 14.065h.75H2zm0-1.923h.75H2zm.44-1.353l-.577-.479.578.479zM12 7v.75V7zm9.37 2.856l.5-.56-.5.56zM16 13.25h-.75.75zm1.7 1.913l-.108.742.108-.742zm2 .293l.11-.742-.11.742zm2.3-1.913h-.75.75zm0-2.125h.75H22zm-10-.022v-.75.75zm-4.75 1.466v.616h1.5v-.616h-1.5zm-.881 1.748l-2 .586.422 1.44 2-.587-.422-1.44zm-3.619-.545v-1.923h-1.5v1.923h1.5zm.268-2.797C3.902 10.2 6.513 7.75 12 7.75v-1.5c-6.01 0-9.021 2.714-10.137 4.06l1.155.957zM12 7.75c5.233 0 7.865 1.767 8.87 2.665l1-1.118C20.594 8.157 17.609 6.25 12 6.25v1.5zm3.25 5.112v.388h1.5v-.388h-1.5zm2.342 3.043l2 .293.217-1.484-2-.293-.217 1.484zm5.158-2.362v-2.125h-1.5v2.125h1.5zM16 12.862c.75 0 .75-.001.75-.002v-.002-.005-.008a.764.764 0 00-.004-.068 1.5 1.5 0 00-.126-.455 2.056 2.056 0 00-.677-.798c-.686-.502-1.874-.878-3.943-.878v1.5c1.93 0 2.743.358 3.057.588.149.11.19.192.198.21.005.01.004.011.001-.002a.3.3 0 01-.006-.065v-.007-.004-.002c0-.001 0-.002.75-.002zm-4-2.216c-2.07 0-3.257.375-3.943.878-.351.257-.56.54-.677.798a1.5 1.5 0 00-.126.455 1.014 1.014 0 00-.004.068V12.86s0 .002.75.002.75 0 .75.002v.002a6.095 6.095 0 01-.002.047.288.288 0 01-.004.03c-.003.012-.004.012.001 0 .008-.017.05-.1.198-.209.314-.23 1.126-.588 3.057-.588v-1.5zm7.592 5.552c1.634.24 3.158-.985 3.158-2.655h-1.5c0 .698-.655 1.286-1.44 1.17l-.218 1.485zm1.279-5.783c.242.217.379.563.379 1.003h1.5c0-.733-.23-1.541-.88-2.121l-1 1.118zM2.75 12.143c0-.368.093-.663.268-.874l-1.155-.958c-.457.553-.613 1.221-.613 1.832h1.5zm12.5 1.108c0 1.347 1.014 2.46 2.342 2.655l.217-1.484c-.628-.092-1.059-.605-1.059-1.17h-1.5zM4.37 15.196c-.838.245-1.62-.368-1.62-1.131h-1.5c0 1.832 1.81 3.078 3.54 2.57l-.421-1.439zm2.88-1.718c0 .505-.343.974-.881 1.132l.422 1.44c1.149-.337 1.959-1.372 1.959-2.572h-1.5z"
      />
    </SvgIcon>
  );
}

export default CallEndIcon;