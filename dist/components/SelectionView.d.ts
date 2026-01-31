import { ChildComponent, RenderElement, ElementProps, ElementState, CSSProps } from "curlui/types";
export type SelectionViewOptionItem = {
    text?: string;
    content?: ChildComponent;
};
export type SelectionViewProps = ElementProps<HTMLDivElement> & {
    optionItems: Array<SelectionViewOptionItem>;
    onSelection: Function;
    dropdownStyle?: CSSProps;
    optionItemStyle?: CSSProps;
};
export type SelectionViewState = ElementState & {
    selection: SelectionViewOptionItem | null;
    open: boolean;
};
export declare function SelectionView(properties: SelectionViewProps): RenderElement;
//# sourceMappingURL=SelectionView.d.ts.map