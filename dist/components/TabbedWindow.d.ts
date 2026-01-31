import { ChildComponent, RenderElement, ElementProps, ElementState, CSSProps } from "curlui/types";
export type TabLocation = "left" | "right" | "center";
export type TabbedWindowProps = ElementProps<HTMLDivElement> & {
    tabs: Array<TabbedWindowTab>;
    vertical?: boolean;
    titleBarStyle?: CSSProps;
    titleStyle?: CSSProps;
    contentStyle?: CSSProps;
    tabsLocation?: TabLocation;
    onTabSelection?: Function;
    currentTabIndex?: number;
};
export type TabbedWindowState = ElementState & {
    currentTabIndex: number;
};
export type TabbedWindowTab = {
    title: ChildComponent;
    content: ChildComponent;
};
export declare function TabbedWindow(properties: TabbedWindowProps): RenderElement;
//# sourceMappingURL=TabbedWindow.d.ts.map