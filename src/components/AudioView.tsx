import { CustomElement } from "../core";
import { Classes } from "../core";
import { ElementProps } from "curlui/types";

export type AudioViewProps = ElementProps<HTMLAudioElement>;

export function AudioView(properties: AudioViewProps, ...children: Array<any>) {
    return CustomElement(
        "audio",
        Classes.AUDIO_VIEW,
        {
            controls: true,
        },
        properties,
        ...children,
    );
}
