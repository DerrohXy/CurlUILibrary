import { CustomElement } from "../core";
import { Classes } from "../core";
import { CurlUIElementProps } from "curlui/types";

export function VerticalLayout(
    properties: CurlUIElementProps,
    ...children: Array<any>
) {
    return CustomElement(
        "div",
        Classes.VERTICAL_LAYOUT,
        {},
        properties,
        ...children
    );
}

export function HorizontalLayout(
    properties: CurlUIElementProps,
    ...children: Array<any>
) {
    return CustomElement(
        "div",
        Classes.HORIZONTAL_LAYOUT,
        {},
        properties,
        ...children
    );
}

export function FlowLayout(
    properties: CurlUIElementProps,
    ...children: Array<any>
) {
    return CustomElement(
        "div",
        Classes.FLOW_LAYOUT,
        {},
        properties,
        ...children
    );
}

export function GridLayout(
    properties: CurlUIElementProps,
    ...children: Array<any>
) {
    return CustomElement(
        "div",
        Classes.GRID_LAYOUT,
        {},
        properties,
        ...children
    );
}

export function RelativeLayout(
    properties: CurlUIElementProps,
    ...children: Array<any>
) {
    return CustomElement(
        "div",
        Classes.RELATIVE_LAYOUT,
        {},
        properties,
        ...children
    );
}
