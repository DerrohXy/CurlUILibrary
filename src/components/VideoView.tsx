import { CustomElement } from "../core";
import { Classes } from "../core";
import { CurlUIElementProps } from "curlui/types";

export type VideoViewProps = CurlUIElementProps<HTMLVideoElement>;

export function VideoView(properties: VideoViewProps, ...children: Array<any>) {
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
