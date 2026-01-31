import { ChildComponent, RenderElement, ElementProps, ElementState, CSSProps } from "curlui/types";
export type CollapseViewProps = ElementProps<HTMLDivElement> & {
    content?: Array<ChildComponent> | ChildComponent;
    title: ChildComponent;
    titleBarStyle?: CSSProps;
    contentStyle?: CSSProps;
    onCollapse?: Function;
    open: boolean;
    closeIcon?: RenderElement;
    openIcon?: RenderElement;
};
export type CollabpseViewState = ElementState & {
    open: boolean;
};
export declare function CollapseView(properties: CollapseViewProps): RenderElement;
//# sourceMappingURL=CollapseView.d.ts.map