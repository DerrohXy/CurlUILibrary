import { CustomElement } from "../core";
import { Classes } from "../core";
import { ElementProps } from "curlui/types";

export type SelectProps = ElementProps<"select">;

export function Select(properties: SelectProps, ...options: Array<any>) {
    return CustomElement(
        "select",
        Classes.SELECTION,
        {},
        properties,
        ...options,
    );
}

export type OptionProps = ElementProps<"option">;

export function Option(properties: OptionProps & { text?: string }) {
    return CustomElement(
        "option",
        Classes.OPTION,
        {},
        properties,
        properties.text || "",
    );
}
