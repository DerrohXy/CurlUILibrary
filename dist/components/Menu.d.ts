import { ChildComponent, RenderElement, ElementProps, ElementState, CSSProps } from "curlui/types";
export type MenuProps = ElementProps<HTMLDivElement> & {
    menuItems?: Array<RenderElement>;
    title: ChildComponent;
    dropdownStyle?: CSSProps;
    open?: boolean;
};
export type MenuState = ElementState & {
    open: boolean;
};
export declare function Menu(properties: MenuProps): RenderElement;
export type MenuBarProps = ElementProps<HTMLDivElement>;
export declare function MenuBar(properties: MenuBarProps, ...menus: Array<any>): RenderElement;
export type MenuItemProps = ElementProps<HTMLDivElement>;
export declare function MenuItem(properties: MenuItemProps, ...children: Array<any>): RenderElement;
//# sourceMappingURL=Menu.d.ts.map