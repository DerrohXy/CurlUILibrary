import { CustomElement } from "../core";
import { Classes } from "../core";
import { CurlUIElementProps } from "curlui/types";

export function Icon(properties: CurlUIElementProps & { text: string }) {
    return CustomElement("i", Classes.ICON, {}, properties);
}
