import { CustomElement } from "../core";
import { Classes } from "../core";
import { CurlUIElementProps } from "curlui/types";

export type LinkProps = CurlUIElementProps<HTMLAnchorElement>;

export function Link(properties: LinkProps, ...children: Array<any>) {
    return CustomElement("a", Classes.LINK, {}, properties, ...children);
}
