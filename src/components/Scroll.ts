import { CustomElement } from "../core";
import { Classes } from "../core";
import { CurlUIElementProps } from "curlui/types";

export function ScrollWindow(
    properties: CurlUIElementProps,
    ...children: Array<any>
) {
    return CustomElement(
        "div",
        Classes.SCROLL_WINDOW,
        {},
        properties,
        ...children
    );
}

export function VerticalScrollWindow(
    properties: CurlUIElementProps,
    ...children: Array<any>
) {
    return CustomElement(
        "div",
        Classes.VERTICAL_SCROLL_WINDOW,
        {},
        properties,
        ...children
    );
}

export function HorizontalScrollWindow(
    properties: CurlUIElementProps,
    ...children: Array<any>
) {
    return CustomElement(
        "div",
        Classes.HORIZONTAL_SCROLL_WINDOW,
        {},
        properties,
        ...children
    );
}
