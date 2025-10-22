import { CustomElement } from "../core";
import { Classes } from "../core";
import { CurlUIElementProps } from "curlui/types";

export type SelectProps = CurlUIElementProps<HTMLSelectElement>;

export function Select(properties: SelectProps, ...options: Array<any>) {
    return CustomElement(
        "select",
        Classes.SELECTION,
        {},
        properties,
        ...options
    );
}

export type OptionProps = CurlUIElementProps<HTMLOptionElement>;

export function Option(properties: OptionProps & { text?: string }) {
    return CustomElement(
        "option",
        Classes.OPTION,
        {},
        properties,
        properties.text || ""
    );
}
