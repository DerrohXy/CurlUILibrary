import { CustomElement } from "../core";
import { Classes } from "../core";
import { CurlUIElementProps } from "curlui/types";

export type SliderProps = CurlUIElementProps<HTMLInputElement>;

export function Slider(properties: SliderProps) {
    return CustomElement(
        "input",
        Classes.SLIDER,
        {
            type: "range",
        },
        properties
    );
}

export type ProgressBarProps = CurlUIElementProps<HTMLProgressElement>;

export function ProgressBar(properties: ProgressBarProps) {
    return CustomElement("progress", Classes.PROGRESS_BAR, {}, properties);
}

export type SpinningLoaderProps = CurlUIElementProps<HTMLDivElement>;

export function SpinningLoader(properties: SpinningLoaderProps) {
    return CustomElement("div", Classes.SPINNING_LOADER, {}, properties);
}
