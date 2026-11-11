import { RenderElement, ElementProps, CSSProps } from "curlui/types";
export type NavigationBarState = {
    drawerOpen: boolean;
    menuOpen: boolean;
};
export type NavigationBarProps = ElementProps<"div"> & {
    drawerContent?: RenderElement | null;
    menuContent?: RenderElement | null;
    content?: Array<RenderElement> | RenderElement | null;
    drawerButton?: RenderElement | null;
    menuButton?: RenderElement | null;
    navigationWindowStyle?: CSSProps;
    drawerWindowStyle?: CSSProps;
    menuWindowStyle?: CSSProps;
};
export declare function NavigationBar(properties: NavigationBarProps): RenderElement;
//# sourceMappingURL=NavigationBar.d.ts.map