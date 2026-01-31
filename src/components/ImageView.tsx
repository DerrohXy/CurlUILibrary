import { CustomElement } from "../core";
import { Classes } from "../core";
import { ElementProps } from "curlui/types";

export type ImageViewProps = ElementProps<HTMLImageElement>;

export function ImageView(properties: ImageViewProps) {
    return CustomElement("img", Classes.IMAGE_VIEW, {}, properties);
}
