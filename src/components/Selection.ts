import { CustomElement } from "../core";
import { Classes } from "../core";
import { CurlUIElementProps } from "curlui/types";

export function Select(properties: CurlUIElementProps, ...options: Array<any>) {
    return CustomElement(
        "select",
        Classes.SELECTION,
        {},
        properties,
        ...options
    );
}

export function Option(properties: CurlUIElementProps & { text?: string }) {
    return CustomElement(
        "option",
        Classes.OPTION,
        {},
        properties,
        properties.text || ""
    );
}
