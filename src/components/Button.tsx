import { CustomElement } from "../core";
import { Classes } from "../core";
import { CurlUIElementProps } from "curlui/types";

export type ButtonProps = CurlUIElementProps<HTMLDivElement> & { text: string };

export function Button(properties: ButtonProps) {
    return CustomElement(
        "div",
        Classes.BUTTON as any,
        {},
        properties,
        properties.text
    );
}
