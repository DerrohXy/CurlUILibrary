import { CustomElement } from "../core";
import { Classes } from "../core";
import { ElementProps } from "curlui/types";

export type SliderProps = ElementProps<HTMLInputElement>;

export function Slider(properties: SliderProps) {
    return CustomElement(
        "input",
        Classes.SLIDER,
        {
            type: "range",
        },
        properties,
    );
}

export type ProgressBarProps = ElementProps<HTMLProgressElement>;

export function ProgressBar(properties: ProgressBarProps) {
    return CustomElement("progress", Classes.PROGRESS_BAR, {}, properties);
}

export type SpinningLoaderProps = ElementProps<HTMLDivElement>;

export function SpinningLoader(properties: SpinningLoaderProps) {
    return CustomElement("div", Classes.SPINNING_LOADER, {}, properties);
}
