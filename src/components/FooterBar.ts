import { CustomElement } from "../core";
import { Classes } from "../core";
import { CurlUIElementProps } from "curlui/types";

export type FooterBarProps = CurlUIElementProps<HTMLDivElement>;

export function FooterBar(properties: FooterBarProps, ...children: Array<any>) {
    return CustomElement(
        "div",
        Classes.FOOTER_BAR,
        {},
        properties,
        ...children
    );
}
