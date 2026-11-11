import { CustomElement } from "../core";
import { Classes } from "../core";
import { ElementProps } from "curlui/types";

export type LabelProps = ElementProps<"span"> & { text: string };

export function Label(properties: LabelProps) {
    return CustomElement(
        "span",
        Classes.LABEL,
        {},
        properties,
        properties.text,
    );
}
