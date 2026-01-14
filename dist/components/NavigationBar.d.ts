import { CurlUIRenderElement, CurlUIElementProps, CurlUIElementState, CurlUICSSProps } from "curlui/types";
export type NavigationBarState = CurlUIElementState & {
    drawerOpen: boolean;
    menuOpen: boolean;
};
export type NavigationBarProps = CurlUIElementProps<HTMLDivElement> & {
    drawerContent?: CurlUIRenderElement;
    menuContent?: CurlUIRenderElement;
    content?: Array<CurlUIRenderElement> | CurlUIRenderElement;
    drawerButton?: CurlUIRenderElement;
    menuButton?: CurlUIRenderElement;
    navigationWindowStyle?: CurlUICSSProps;
    drawerWindowStyle?: CurlUICSSProps;
    menuWindowStyle?: CurlUICSSProps;
};
export declare function NavigationBar(properties: NavigationBarProps): CurlUIRenderElement;
//# sourceMappingURL=NavigationBar.d.ts.map