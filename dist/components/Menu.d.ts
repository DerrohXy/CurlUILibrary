import { CurlUIChildComponent, CurlUIRenderElement, CurlUIElementProps, CurlUIElementState, CurlUICSSProps } from "curlui/types";
export type MenuProps = CurlUIElementProps<HTMLDivElement> & {
    menuItems?: Array<CurlUIRenderElement>;
    title: CurlUIChildComponent;
    dropdownStyle?: CurlUICSSProps;
    open?: boolean;
};
export type MenuState = CurlUIElementState & {
    open: boolean;
};
export declare function Menu(properties: MenuProps): CurlUIRenderElement;
export type MenuBarProps = CurlUIElementProps<HTMLDivElement>;
export declare function MenuBar(properties: MenuBarProps, ...menus: Array<any>): CurlUIRenderElement;
export type MenuItemProps = CurlUIElementProps<HTMLDivElement>;
export declare function MenuItem(properties: MenuItemProps, ...children: Array<any>): CurlUIRenderElement;
//# sourceMappingURL=Menu.d.ts.map