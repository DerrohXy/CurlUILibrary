import { CustomElement } from "../core";
import { Classes } from "../core";
import { ElementProps } from "curlui/types";

export type IconButtonProps = ElementProps<"div"> & {
    text: string;
    icon: any;
};

export function IconButton(properties: IconButtonProps) {
    return CustomElement(
        "div",
        Classes.ICON_BUTTON,
        {},
        properties,
        properties.icon || null,
        properties.text,
    );
}
