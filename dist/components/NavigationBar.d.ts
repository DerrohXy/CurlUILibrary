import { RenderElement, ElementProps, ElementState, CSSProps } from "curlui/types";
export type NavigationBarState = ElementState & {
    drawerOpen: boolean;
    menuOpen: boolean;
};
export type NavigationBarProps = ElementProps<HTMLDivElement> & {
    drawerContent?: RenderElement;
    menuContent?: RenderElement;
    content?: Array<RenderElement> | RenderElement;
    drawerButton?: RenderElement;
    menuButton?: RenderElement;
    navigationWindowStyle?: CSSProps;
    drawerWindowStyle?: CSSProps;
    menuWindowStyle?: CSSProps;
};
export declare function NavigationBar(properties: NavigationBarProps): RenderElement;
//# sourceMappingURL=NavigationBar.d.ts.map