import { CustomElement } from "../core";
import { Classes } from "../core";
import { ElementProps } from "curlui/types";

export type FooterBarProps = ElementProps<"div">;

export function FooterBar(properties: FooterBarProps, ...children: Array<any>) {
    return CustomElement(
        "div",
        Classes.FOOTER_BAR,
        {},
        properties,
        ...children,
    );
}
