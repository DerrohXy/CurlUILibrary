import { CustomElement } from "../core";
import { Classes } from "../core";
import { CurlUIElementProps } from "curlui/types";

export type LabelProps = CurlUIElementProps<HTMLSpanElement> & { text: string };

export function Label(properties: LabelProps) {
    return CustomElement(
        "span",
        Classes.LABEL,
        {},
        properties,
        properties.text
    );
}
