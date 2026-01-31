import { CustomElement } from "../core";
import { Classes } from "../core";
import { ElementProps } from "curlui/types";

export type SelectProps = ElementProps<HTMLSelectElement>;

export function Select(properties: SelectProps, ...options: Array<any>) {
    return CustomElement(
        "select",
        Classes.SELECTION,
        {},
        properties,
        ...options,
    );
}

export type OptionProps = ElementProps<HTMLOptionElement>;

export function Option(properties: OptionProps & { text?: string }) {
    return CustomElement(
        "option",
        Classes.OPTION,
        {},
        properties,
        properties.text || "",
    );
}
