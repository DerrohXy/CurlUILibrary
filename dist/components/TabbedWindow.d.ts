import { CurlUIChildComponent, CurlUIRenderElement, CurlUIElementProps, CurlUIElementState, CurlUICSSProps } from "curlui/types";
export type TabLocation = "left" | "right" | "center";
export type TabbedWindowProps = CurlUIElementProps<HTMLDivElement> & {
    tabs: Array<TabbedWindowTab>;
    vertical?: boolean;
    titleBarStyle?: CurlUICSSProps;
    titleStyle?: CurlUICSSProps;
    contentStyle?: CurlUICSSProps;
    tabsLocation?: TabLocation;
    onTabSelection?: Function;
    currentTabIndex?: number;
};
export type TabbedWindowState = CurlUIElementState & {
    currentTabIndex: number;
};
export type TabbedWindowTab = {
    title: CurlUIChildComponent;
    content: CurlUIChildComponent;
};
export declare function TabbedWindow(properties: TabbedWindowProps): CurlUIRenderElement;
//# sourceMappingURL=TabbedWindow.d.ts.map