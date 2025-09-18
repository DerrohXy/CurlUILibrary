import { CustomElement } from "../core";
import { Classes } from "../core";
import { CurlUIElementProps } from "curlui/types";

export type CanvasProps = CurlUIElementProps<HTMLCanvasElement>;

export function Canvas(properties: CanvasProps) {
    return CustomElement("canvas", Classes.CANVAS, {}, properties);
}
