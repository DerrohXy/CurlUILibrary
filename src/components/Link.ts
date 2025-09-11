import { CustomElement } from "../core";
import { Classes } from "../core";
import { CurlUIElementProps } from "curlui/types";

export function Link(properties: CurlUIElementProps, ...children: Array<any>) {
    return CustomElement("a", Classes.LINK, {}, properties, ...children);
}
