import { CurlUIChildComponent, CurlUIRenderElement, CurlUIElementProps, CurlUIElementState, CurlUICSSProps } from "curlui/types";
export type CollapseViewProps = CurlUIElementProps<HTMLDivElement> & {
    content?: Array<CurlUIChildComponent> | CurlUIChildComponent;
    title: CurlUIChildComponent;
    titleBarStyle?: CurlUICSSProps;
    contentStyle?: CurlUICSSProps;
    onCollapse?: Function;
    open: boolean;
    closeIcon?: CurlUIRenderElement;
    openIcon?: CurlUIRenderElement;
};
export type CollabpseViewState = CurlUIElementState & {
    open: boolean;
};
export declare function CollapseView(properties: CollapseViewProps): CurlUIRenderElement;
//# sourceMappingURL=CollapseView.d.ts.map