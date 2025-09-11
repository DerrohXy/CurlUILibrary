import { CustomElement } from "../core";
import { Classes } from "../core";
import { CurlUIElementProps } from "curlui/types";

export function Slider(properties: CurlUIElementProps) {
    return CustomElement(
        "input",
        Classes.SLIDER,
        {
            type: "range",
        },
        properties
    );
}

export function ProgressBar(properties: CurlUIElementProps) {
    return CustomElement("progress", Classes.PROGRESS_BAR, {}, properties);
}

export function ProgressIndicator(properties: CurlUIElementProps) {
    return CustomElement("div", Classes.PROGRESS_INDICATOR, {}, properties);
}
