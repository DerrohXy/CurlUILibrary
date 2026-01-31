import { ElementProps } from "curlui/types";
export type SelectProps = ElementProps<HTMLSelectElement>;
export declare function Select(properties: SelectProps, ...options: Array<any>): import("curlui/types").RenderElement;
export type OptionProps = ElementProps<HTMLOptionElement>;
export declare function Option(properties: OptionProps & {
    text?: string;
}): import("curlui/types").RenderElement;
//# sourceMappingURL=Selection.d.ts.map