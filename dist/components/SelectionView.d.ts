import { CurlUIChildComponent, CurlUIRenderElement, CurlUIElementProps, CurlUIElementState, CurlUICSSProps } from "curlui/types";
export type SelectionViewOptionItem = {
    text?: string;
    content?: CurlUIChildComponent;
};
export type SelectionViewProps = CurlUIElementProps<HTMLDivElement> & {
    optionItems: Array<SelectionViewOptionItem>;
    onSelection: Function;
    dropdownStyle?: CurlUICSSProps;
    optionItemStyle?: CurlUICSSProps;
};
export type SelectionViewState = CurlUIElementState & {
    selection: SelectionViewOptionItem | null;
    open: boolean;
};
export declare function SelectionView(properties: SelectionViewProps): CurlUIRenderElement;
//# sourceMappingURL=SelectionView.d.ts.map