import { ChildComponent, RenderElement, ElementProps, CSSProps } from "curlui/types";
export type SwitchState = {
    active: boolean;
};
export type SwitchProps = ElementProps<"div"> & {
    onActiveChange: Function;
    active?: boolean;
};
export declare function Switch(properties: SwitchProps): RenderElement;
export type CheckButtonProps = ElementProps & {
    onCheckedChange: Function;
    text: string;
    checked?: boolean;
};
export type CheckButtonState = {
    checked: boolean;
};
export declare function CheckButton(properties: CheckButtonProps): RenderElement;
export type RadioGroupItem = {
    value: any;
    text: ChildComponent;
};
export type RadioGroupProps = ElementProps & {
    radioItems: Array<RadioGroupItem>;
    vertical?: boolean;
    onCheckedChange: Function;
    radioButtonStyle?: CSSProps;
};
export type RadioGroupState = {
    checked?: RadioGroupItem;
};
export declare function RadioGroup(properties: RadioGroupProps): RenderElement;
//# sourceMappingURL=Controls.d.ts.map