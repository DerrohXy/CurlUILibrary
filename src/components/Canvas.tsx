import { CustomElement } from "../core";
import { Classes } from "../core";
import { ElementProps } from "curlui/types";

export type CanvasProps = ElementProps<"canvas">;

export function Canvas(properties: CanvasProps) {
    return CustomElement("canvas", Classes.CANVAS, {}, properties);
}
