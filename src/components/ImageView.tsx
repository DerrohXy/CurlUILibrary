import { CustomElement } from "../core";
import { Classes } from "../core";
import { CurlUIElementProps } from "curlui/types";

export type ImageViewProps = CurlUIElementProps<HTMLImageElement>;

export function ImageView(properties: ImageViewProps) {
    return CustomElement("img", Classes.IMAGE_VIEW, {}, properties);
}
