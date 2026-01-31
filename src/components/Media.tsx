import { CustomElement } from "../core";
import { Classes } from "../core";
import { ElementProps } from "curlui/types";

export type EmbedProps = ElementProps<HTMLEmbedElement>;

export function Embed(properties: EmbedProps, ...children: Array<any>) {
    return CustomElement("embed", Classes.EMBED, {}, properties, ...children);
}

export type IframeProps = ElementProps<HTMLIFrameElement>;

export function Iframe(properties: IframeProps, ...children: Array<any>) {
    return CustomElement("iframe", Classes.IFRAME, {}, properties, ...children);
}
