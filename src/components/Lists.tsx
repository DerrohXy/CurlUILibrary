import { CustomElement } from "../core";
import { Classes } from "../core";
import { ElementProps } from "curlui/types";

export type UnorderedListProps = ElementProps<"ul">;

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

export type OrderedListProps = ElementProps<"ol">;

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

export type ListItemProps = ElementProps<"li">;

export function ListItem(properties: ListItemProps, ...children: Array<any>) {
    return CustomElement("li", Classes.LIST_ITEM, {}, properties, ...children);
}
