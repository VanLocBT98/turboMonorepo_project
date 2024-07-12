import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function RocketIcon({ linearColor = "#1C274C", ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        fill={linearColor}
        d="M7.58 15.008l.53-.531-.53.53zm0-5.477L7.05 9l.53.53zm6.867 6.846l-.53-.531.53.53zm-5.494 0l-.53.531.53-.531zm2.747 1.936v.75-.75zm8.593-7.765l.53.53-.53-.53zM13.427 3.7l.53.532-.53-.532zM10.856 14.17a.75.75 0 10-1.059-1.063l1.059 1.063zM5.573 11.53l.53-.53-.53.53zM9.92 7.422a.75.75 0 00.811-1.261L9.92 7.422zm-.224-1.036l.406-.63-.406.63zm-2.57-1.318l.11-.742-.11.742zm-4.9 2.955l.529.531-.53-.53zm3.113-2.727l.288.693-.288-.693zm-2.476 4.13l-.276.697.276-.697zm.123.05l.286-.694-.286.693zm1.627 1.097l.53-.53-.53.53zm-.095-.093l-.522.538.522-.538zM2.484 9.276l.277-.697-.277.697zM12.5 18.5l-.53.53a.713.713 0 00.036.034l.494-.564zm5.324-5.268a.75.75 0 10-1.26.815l1.26-.815zm-.224 1.035l-.63.408.63-.408zm1.323 2.562l.742-.11-.742.11zm-2.964 4.886l.53.532-.53-.532zm2.735-3.104l.692.288-.692-.288zm-3.945 2.964l.697-.278-.697.278zm-.474-1.092l.657-.36-.657.36zm-1.252-1.525l.53-.53-.018-.018-.018-.015-.494.563zm.818.867l.59-.463-.59.463zm2.034 1.974l-.53-.53.53.53zM5.75 11.708l.695.28-.695-.28zm14.014-1.691l-5.847 5.829 1.06 1.062 5.846-5.83-1.06-1.061zM9.483 15.846l-1.374-1.37L7.05 15.54l1.374 1.37 1.059-1.063zm-1.374-5.784l5.847-5.83-1.059-1.062L7.05 9l1.06 1.062zm9.438-7.312h.569v-1.5h-.57v1.5zm3.703 3.123v.567h1.5v-.567h-1.5zM18.116 2.75c.936 0 1.564.002 2.031.064.446.06.633.163.755.284l1.059-1.062c-.447-.446-1.003-.626-1.615-.708-.59-.08-1.336-.078-2.23-.078v1.5zm4.634 3.123c0-.892.002-1.636-.078-2.225-.082-.611-.264-1.166-.711-1.612L20.9 3.098c.122.121.225.307.285.75.062.466.064 1.09.064 2.025h1.5zM8.11 14.477c-.663-.66-1.105-1.104-1.391-1.478-.273-.356-.331-.56-.331-.73h-1.5c0 .632.265 1.152.64 1.642.361.472.89.997 1.522 1.628l1.06-1.062zm.314 2.431c.632.63 1.159 1.158 1.632 1.518.491.374 1.012.637 1.644.637v-1.5c-.173 0-.378-.059-.736-.33-.374-.286-.819-.727-1.481-1.387l-1.06 1.062zm12.399-5.83c.799-.795 1.355-1.332 1.648-2.036l-1.385-.575c-.151.364-.437.667-1.322 1.55l1.059 1.062zm.427-4.638c0 1.249-.013 1.663-.164 2.027l1.385.575c.292-.704.279-1.476.279-2.602h-1.5zm-7.294-2.207c.885-.883 1.19-1.168 1.555-1.319l-.572-1.386c-.705.291-1.243.846-2.042 1.642l1.06 1.063zm3.59-2.983c-1.13 0-1.902-.013-2.607.278l.572 1.386c.366-.15.784-.164 2.036-.164v-1.5zm-8.75 14.973l2.06-2.053-1.059-1.063-2.06 2.054 1.059 1.062zm1.935-10.062l-.629-.405-.812 1.261.63.405.811-1.261zm-.629-.405c-.621-.4-1.123-.724-1.554-.956-.442-.238-.855-.407-1.312-.474L7.017 5.81c.22.032.46.117.819.31.368.199.814.485 1.454.897l.812-1.261zM2.755 8.554a56.608 56.608 0 011.71-1.658 12 12 0 01.73-.623c.223-.172.365-.256.432-.284l-.575-1.386c-.257.107-.527.292-.773.482-.258.199-.54.442-.826.703-.572.522-1.2 1.149-1.757 1.704l1.059 1.062zm4.481-4.228a4.13 4.13 0 00-2.184.277l.575 1.386a2.63 2.63 0 011.39-.18l.22-1.483zM2.208 9.973l.379.15.552-1.394-.378-.15-.553 1.394zm1.875 1.131l.96.958L6.104 11l-.96-.958-1.06 1.063zm-1.496-.98l.114.045.571-1.387-.133-.053-.552 1.394zm2.555-.082a10.308 10.308 0 00-.101-.1l-1.045 1.076.087.086 1.06-1.062zm-2.441.127c.482.198.921.487 1.295.85l1.045-1.077a5.607 5.607 0 00-1.769-1.16l-.571 1.387zM1.696 7.492a1.514 1.514 0 00.512 2.481l.553-1.394a.029.029 0 01-.007-.004s-.003-.003-.003-.008V8.56s0-.002.004-.006l-1.06-1.062zm14.869 6.555l.406.627 1.259-.815-.406-.627-1.26.815zm-1.136 7.137l-.084.084 1.06 1.062.083-.083-1.059-1.063zm1.542-6.51c.414.64.7 1.083.9 1.45.193.358.278.597.31.815l1.484-.22c-.068-.457-.238-.87-.476-1.31-.233-.43-.558-.93-.959-1.55l-1.26.816zm-.483 7.573c.557-.556 1.186-1.183 1.71-1.753.261-.285.505-.566.705-.823.19-.245.376-.514.483-.771l-1.384-.578a2.32 2.32 0 01-.285.43 11.98 11.98 0 01-.624.728 56.57 56.57 0 01-1.664 1.704l1.06 1.063zm1.693-5.308c.068.456.008.934-.18 1.383l1.385.578a4.1 4.1 0 00.279-2.182l-1.484.221zm-4.664 1.456l-.523-.459-.988 1.128.522.458.99-1.127zm1.929 2.902c-.215-.539-.344-.866-.514-1.175l-1.315.721c.116.21.208.438.435 1.01l1.394-.556zm-2.953-1.807c.436.434.61.609.758.798l1.18-.926c-.217-.277-.467-.525-.879-.935l-1.059 1.063zm2.44.632a5.579 5.579 0 00-.502-.76l-1.18.926c.137.175.26.36.366.555l1.315-.72zM16.662 9a1.196 1.196 0 01-1.687 0l-1.059 1.062a2.696 2.696 0 003.806 0L16.663 9zm-1.687 0a1.182 1.182 0 010-1.677l-1.059-1.062a2.682 2.682 0 000 3.8L14.977 9zm0-1.677a1.196 1.196 0 011.688 0l1.059-1.062a2.696 2.696 0 00-3.806 0l1.06 1.062zm1.688 0a1.182 1.182 0 010 1.677l1.059 1.062a2.682 2.682 0 000-3.8l-1.06 1.061zm-1.319 13.945a.067.067 0 01.028-.016.046.046 0 01.023-.001.056.056 0 01.024.012c.012.01.021.022.026.034l-1.394.555c.384.963 1.632 1.196 2.352.478l-1.059-1.062zm-1.428-5.422c-.511.51-.896.893-1.227 1.178-.331.287-.555.426-.73.491l.518 1.408c.428-.158.814-.436 1.193-.764.38-.328.808-.755 1.305-1.25l-1.059-1.063zm-1.957 1.669a.729.729 0 01-.26.048v1.5c.27 0 .528-.048.778-.14l-.518-1.408zm1.07.455l-.28-.281-1.062 1.06.282.281 1.06-1.06zM7.05 9c-.485.484-.904.901-1.23 1.272-.324.37-.601.745-.766 1.156l1.391.56c.071-.177.217-.4.503-.727.285-.325.663-.702 1.161-1.2L7.05 9zm-1.996 2.428a2.23 2.23 0 00-.166.841h1.5c0-.09.016-.179.057-.282l-1.391-.56zm-.011.634l.176.176 1.06-1.06L6.105 11l-1.061 1.06z"
      />
    </SvgIcon>
  );
}

export default RocketIcon;
