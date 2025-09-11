import { CustomElement } from "../core";
import { Classes } from "../core";
import { CurlUIElementProps } from "curlui/types";

export function ImageView(properties: CurlUIElementProps) {
    return CustomElement("img", Classes.IMAGE_VIEW, {}, properties);
}
