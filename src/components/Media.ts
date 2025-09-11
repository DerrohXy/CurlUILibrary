import { CustomElement } from "../core";
import { Classes } from "../core";
import { CurlUIElementProps } from "curlui/types";

export function Embed(properties: CurlUIElementProps, ...children: Array<any>) {
    return CustomElement("embed", Classes.EMBED, {}, properties, ...children);
}

export function Iframe(
    properties: CurlUIElementProps,
    ...children: Array<any>
) {
    return CustomElement("iframe", Classes.IFRAME, {}, properties, ...children);
}
