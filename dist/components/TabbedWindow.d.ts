import { ChildComponent, RenderElement, ElementProps, CSSProps } from "curlui/types";
export type TabLocation = "left" | "right" | "center";
export type TabbedWindowProps = ElementProps<"div"> & {
    tabs: Array<TabbedWindowTab>;
    vertical?: boolean;
    titleBarStyle?: CSSProps;
    titleStyle?: CSSProps;
    contentStyle?: CSSProps;
    tabsLocation?: TabLocation;
    onTabSelection?: Function;
    currentTabIndex?: number;
};
export type TabbedWindowState = {
    currentTabIndex: number;
};
export type TabbedWindowTab = {
    title: ChildComponent;
    content: ChildComponent;
};
export declare function TabbedWindow(properties: TabbedWindowProps): RenderElement;
//# sourceMappingURL=TabbedWindow.d.ts.map