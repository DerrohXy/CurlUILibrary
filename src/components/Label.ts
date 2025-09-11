import { CustomElement } from "../core";
import { Classes } from "../core";
import { CurlUIElementProps } from "curlui/types";

export function Label(properties: CurlUIElementProps & { text: string }) {
    return CustomElement(
        "span",
        Classes.LABEL,
        {},
        properties,
        properties.text
    );
}
