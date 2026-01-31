import { ChildComponent, RenderElement, ElementProps, ElementState, CSSProps } from "curlui/types";
export type SwitchState = ElementState & {
    active: boolean;
};
export type SwitchProps = ElementProps<HTMLDivElement> & {
    onActiveChange: Function;
    active?: boolean;
};
export declare function Switch(properties: SwitchProps): RenderElement;
export type CheckButtonProps = ElementProps<HTMLDivElement> & {
    onCheckedChange: Function;
    text: string;
    checked?: boolean;
};
export type CheckButtonState = ElementState & {
    checked: boolean;
};
export declare function CheckButton(properties: CheckButtonProps): RenderElement;
export type RadioGroupItem = {
    value: any;
    text: ChildComponent;
};
export type RadioGroupProps = ElementProps<HTMLDivElement> & {
    radioItems: Array<RadioGroupItem>;
    vertical?: boolean;
    onCheckedChange: Function;
    radioButtonStyle?: CSSProps;
};
export type RadioGroupState = ElementState & {
    checked?: RadioGroupItem;
};
export declare function RadioGroup(properties: RadioGroupProps): RenderElement;
//# sourceMappingURL=Controls.d.ts.map