import { CurlUIChildComponent, CurlUIRenderElement, CurlUIElementProps, CurlUIElementState, CurlUICSSProps } from "curlui/types";
export type SwitchState = CurlUIElementState & {
    active: boolean;
};
export type SwitchProps = CurlUIElementProps<HTMLDivElement> & {
    onActiveChange: Function;
    active?: boolean;
};
export declare function Switch(properties: SwitchProps): CurlUIRenderElement;
export type CheckButtonProps = CurlUIElementProps<HTMLDivElement> & {
    onCheckedChange: Function;
    text: string;
    checked?: boolean;
};
export type CheckButtonState = CurlUIElementState & {
    checked: boolean;
};
export declare function CheckButton(properties: CheckButtonProps): CurlUIRenderElement;
export type RadioGroupItem = {
    value: any;
    text: CurlUIChildComponent;
};
export type RadioGroupProps = CurlUIElementProps<HTMLDivElement> & {
    radioItems: Array<RadioGroupItem>;
    vertical?: boolean;
    onCheckedChange: Function;
    radioButtonStyle?: CurlUICSSProps;
};
export type RadioGroupState = CurlUIElementState & {
    checked?: RadioGroupItem;
};
export declare function RadioGroup(properties: RadioGroupProps): CurlUIRenderElement;
//# sourceMappingURL=Controls.d.ts.map