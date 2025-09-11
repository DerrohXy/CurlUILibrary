import { CustomElement } from "../core";
import { Classes } from "../core";
import { CurlUIElementProps } from "curlui/types";

export function Canvas(properties: CurlUIElementProps) {
    return CustomElement("canvas", Classes.CANVAS, {}, properties);
}
