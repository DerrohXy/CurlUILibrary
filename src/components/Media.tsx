import { CustomElement } from "../core";
import { Classes } from "../core";
import { CurlUIElementProps } from "curlui/types";

export type EmbedProps = CurlUIElementProps<HTMLEmbedElement>;

export function Embed(properties: EmbedProps, ...children: Array<any>) {
    return CustomElement("embed", Classes.EMBED, {}, properties, ...children);
}

export type IframeProps = CurlUIElementProps<HTMLIFrameElement>;

export function Iframe(properties: IframeProps, ...children: Array<any>) {
    return CustomElement("iframe", Classes.IFRAME, {}, properties, ...children);
}
