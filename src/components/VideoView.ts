import { CustomElement } from "../core";
import { Classes } from "../core";
import { CurlUIElementProps } from "curlui/types";

export function VideoView(
    properties: CurlUIElementProps,
    ...children: Array<any>
) {
    return CustomElement(
        "video",
        Classes.VIDEO_VIEW,
        {
            controls: true,
        },
        properties,
        ...children
    );
}
