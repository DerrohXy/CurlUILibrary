import { CustomElement } from "../core";
import { Classes } from "../core";
import { ElementProps } from "curlui/types";

export type LinkProps = ElementProps<HTMLAnchorElement>;

export function Link(properties: LinkProps, ...children: Array<any>) {
    return CustomElement("a", Classes.LINK, {}, properties, ...children);
}
