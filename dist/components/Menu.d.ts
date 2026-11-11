import { ChildComponent, RenderElement, ElementProps, CSSProps } from "curlui/types";
export type MenuProps = ElementProps & {
    menuItems?: Array<RenderElement>;
    title: ChildComponent;
    dropdownStyle?: CSSProps;
    open?: boolean;
};
export type MenuState = {
    open: boolean;
};
export declare function Menu(properties: MenuProps): RenderElement;
export type MenuBarProps = ElementProps;
export declare function MenuBar(properties: MenuBarProps, ...menus: Array<any>): import("curlui").CurlUIElement;
export type MenuItemProps = ElementProps;
export declare function MenuItem(properties: MenuItemProps, ...children: Array<any>): import("curlui").CurlUIElement;
//# sourceMappingURL=Menu.d.ts.map