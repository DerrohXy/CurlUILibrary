import { CustomElement } from "../core";
import { Classes } from "../core";
import { CurlUIElementProps } from "curlui/types";

export function IconButton(
    properties: CurlUIElementProps & {
        text: string;
        icon: any;
    }
) {
    return CustomElement(
        "div",
        Classes.ICON_BUTTON,
        {},
        properties,
        properties.icon || null,
        properties.text
    );
}
