import { ChildComponent, RenderElement, ElementProps, CSSProps } from "curlui/types";
export type CollapseViewProps = ElementProps & {
    content?: Array<ChildComponent> | ChildComponent;
    title: ChildComponent;
    titleBarStyle?: CSSProps;
    contentStyle?: CSSProps;
    onCollapse?: Function;
    open: boolean;
    closeIcon?: RenderElement;
    openIcon?: RenderElement;
};
export type CollapseViewState = {
    open: boolean;
};
export declare function CollapseView(properties: CollapseViewProps): RenderElement;
//# sourceMappingURL=CollapseView.d.ts.map