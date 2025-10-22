import { CustomElement } from "../core";
import { Classes } from "../core";
import { CurlUIElementProps } from "curlui/types";

export type UnorderedListProps = CurlUIElementProps<HTMLUListElement>;

export function UnorderedList(
    properties: UnorderedListProps,
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

export type OrderedListProps = CurlUIElementProps<HTMLOListElement>;

export function OrderedList(
    properties: OrderedListProps,
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

export type ListItemProps = CurlUIElementProps<HTMLLIElement>;

export function ListItem(properties: ListItemProps, ...children: Array<any>) {
    return CustomElement("li", Classes.LIST_ITEM, {}, properties, ...children);
}
