import { CustomElement } from "../core";
import { Classes } from "../core";
import { CurlUIElementProps } from "curlui/types";

export function Table(properties: CurlUIElementProps, ...children: Array<any>) {
    return CustomElement("table", Classes.TABLE, {}, properties, ...children);
}

export function TableHeading(
    properties: CurlUIElementProps,
    ...children: Array<any>
) {
    return CustomElement(
        "thead",
        Classes.TABLE_HEADING,
        {},
        properties,
        ...children
    );
}

export function TableFooter(
    properties: CurlUIElementProps,
    ...children: Array<any>
) {
    return CustomElement(
        "tfoot",
        Classes.TABLE_FOOTER,
        {},
        properties,
        ...children
    );
}

export function TableBody(
    properties: CurlUIElementProps,
    ...children: Array<any>
) {
    return CustomElement(
        "tbody",
        Classes.TABLE_BODY,
        {},
        properties,
        ...children
    );
}

export function TableRow(
    properties: CurlUIElementProps,
    ...children: Array<any>
) {
    return CustomElement("tr", Classes.TABLE_ROW, {}, properties, ...children);
}

export function TableData(
    properties: CurlUIElementProps,
    ...children: Array<any>
) {
    return CustomElement("td", Classes.TABLE_DATA, {}, properties, ...children);
}

export function TableHeader(
    properties: CurlUIElementProps,
    ...children: Array<any>
) {
    return CustomElement(
        "th",
        Classes.TABLE_HEADER,
        {},
        properties,
        ...children
    );
}

export function Caption(
    properties: CurlUIElementProps,
    ...children: Array<any>
) {
    return CustomElement(
        "caption",
        Classes.CAPTION,
        {},
        properties,
        ...children
    );
}
