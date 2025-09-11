import { CustomElement } from "../core";
import { Classes } from "../core";
import { CurlUIElementProps } from "curlui/types";

export function UnorderedList(
    properties: CurlUIElementProps,
    ...listItems: Array<any>
) {
    return CustomElement(
        "ul",
        Classes.UNORDERED_LIST,
        {},
        properties,
        ...listItems
    );
}

export function OrderedList(
    properties: CurlUIElementProps,
    ...listItems: Array<any>
) {
    return CustomElement(
        "ol",
        Classes.ORDERED_LIST,
        {},
        properties,
        ...listItems
    );
}

export function ListItem(
    properties: CurlUIElementProps,
    ...children: Array<any>
) {
    return CustomElement("li", Classes.LIST_ITEM, {}, properties, ...children);
}
