import { CustomElement } from "../core";
import { Classes } from "../core";
import { ElementProps } from "curlui/types";

export type UnorderedListProps = ElementProps;

export function UnorderedList(
    properties: UnorderedListProps,
    ...listItems: Array<any>
) {
    return CustomElement(
        "ul",
        Classes.UNORDERED_LIST,
        {},
        properties,
        ...listItems,
    );
}

export type OrderedListProps = ElementProps;

export function OrderedList(
    properties: OrderedListProps,
    ...listItems: Array<any>
) {
    return CustomElement(
        "ol",
        Classes.ORDERED_LIST,
        {},
        properties,
        ...listItems,
    );
}

export type ListItemProps = ElementProps;

export function ListItem(properties: ListItemProps, ...children: Array<any>) {
    return CustomElement("li", Classes.LIST_ITEM, {}, properties, ...children);
}
