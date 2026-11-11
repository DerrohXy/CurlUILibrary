import { ChildComponent, RenderElement, ElementProps, CSSProps } from "curlui/types";
export type SelectionViewOptionItem = {
    text?: string;
    content?: ChildComponent;
};
export type SelectionViewProps = ElementProps & {
    optionItems: Array<SelectionViewOptionItem>;
    onSelection: Function;
    dropdownStyle?: CSSProps;
    optionItemStyle?: CSSProps;
};
export type SelectionViewState = {
    selection: SelectionViewOptionItem | null;
    open: boolean;
};
export declare function SelectionView(properties: SelectionViewProps): RenderElement;
//# sourceMappingURL=SelectionView.d.ts.map