import { CustomElement } from "../core";
import { Classes } from "../core";
import { ElementProps } from "curlui/types";

export type ButtonProps = ElementProps<"button"> & { text: string };

export function Button(properties: ButtonProps) {
    return CustomElement(
        "button",
        Classes.BUTTON as any,
        {},
        properties,
        properties.text,
    );
}
