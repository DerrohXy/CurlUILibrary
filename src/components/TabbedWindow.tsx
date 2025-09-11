import { Classes, RemoveFields, LoadContent } from "../core";
import { CreateComponent } from "curlui";
import {
    CurlUIChildComponent,
    CurlUIRenderElement,
    CurlUIElementProps,
    CurlUIElementState,
    CurlUICSSProps,
} from "curlui/types";

type TabLocation = "left" | "right" | "center";

type TabbedWindowProps = CurlUIElementProps & {
    tabs: Array<TabbedWindowTab>;
    vertical?: boolean;
    titleBarStyle?: CurlUICSSProps;
    titleStyle?: CurlUICSSProps;
    contentStyle?: CurlUICSSProps;
    tabsLocation?: TabLocation;
    onTabSelection?: Function;
    currentTabIndex?: number;
};

type TabbedWindowState = CurlUIElementState & {
    currentTabIndex: number;
};

type TabbedWindowTab = {
    title: CurlUIChildComponent;
    content: CurlUIChildComponent;
};

const TabbedWindow_ = CreateComponent({
    getInitialState() {
        return {
            currentTabIndex: this.getProps().currentTabIndex || 0,
        };
    },
    getDefaultProps() {
        return {
            tabs: [],
            vertical: false,
            titleBarStyle: {},
            contentStyle: {},
            tabsLocation: "left",
            onTabSelection: () => {},
        };
    },
    setCurrentTabIndex(index: number) {
        let props: TabbedWindowProps = this.getProps();

        this.setState({
            currentTabIndex: index,
        });

        props.onTabSelection?.(index);
    },
    render() {
        let state: TabbedWindowState = this.getState(),
            props: TabbedWindowProps = this.getProps(),
            tabs: Array<TabbedWindowTab> = LoadContent(props.tabs),
            tabsLocation: TabLocation = props.tabsLocation || "left",
            currentTabIndex: number = state.currentTabIndex,
            currentTab: TabbedWindowTab | null =
                tabs.length > 0 ? tabs[currentTabIndex] : null,
            component = this;

        let titleBarClass: string =
            {
                left: Classes.TABBED_WINDOW_TITLE_BAR,
                center: Classes.TABBED_WINDOW_TITLE_BAR_CENTERED,
                right: Classes.TABBED_WINDOW_TITLE_BAR_RIGHT,
            }[tabsLocation] || Classes.TABBED_WINDOW_TITLE_BAR;

        return (
            <div
                className={
                    (props.className || props.class || "") +
                    " " +
                    (props.vertical
                        ? Classes.VERTICAL_TABBED_WINDOW
                        : Classes.TABBED_WINDOW)
                }
                {...RemoveFields(props, [
                    "className",
                    "class",
                    "tabs",
                    "vertical",
                    "titleBarStyle",
                    "titleStyle",
                    "contentStyle",
                    "tabsLocation",
                    "onTabSelection",
                    "currentTabIndex",
                ])}
            >
                <div
                    className={
                        props.vertical
                            ? Classes.VERTICAL_TABBED_WINDOW_TITLE_BAR
                            : titleBarClass
                    }
                    style={props.titleBarStyle}
                >
                    {...tabs.map((tab, index) => {
                        return (
                            <div
                                className={
                                    index === currentTabIndex
                                        ? Classes.TABBED_WINDOW_TITLE_ACTIVE
                                        : Classes.TABBED_WINDOW_TITLE
                                }
                                onclick={(event: Event) => {
                                    event.stopPropagation();
                                    component.setCurrentTabIndex(index);
                                }}
                                style={props.titleStyle}
                            >
                                {tab.title}
                            </div>
                        );
                    })}
                </div>
                <div
                    className={Classes.TABBED_WINDOW_CONTENT}
                    style={props.contentStyle}
                >
                    {currentTab ? currentTab.content : null}
                </div>
            </div>
        );
    },
});

export function TabbedWindow(
    properties: TabbedWindowProps
): CurlUIRenderElement {
    return <TabbedWindow_ {...properties} />;
}
