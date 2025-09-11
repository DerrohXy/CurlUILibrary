import { Classes, RemoveFields, LoadContent } from "../core";
import { CreateComponent } from "curlui";
import {
    CurlUIChildComponent,
    CurlUIRenderElement,
    CurlUIElementProps,
    CurlUIElementState,
    CurlUICSSProps,
} from "curlui/types";
import { BiCaretDown, BiCaretUp } from "../icons/bi";

type CollapseViewProps = CurlUIElementProps & {
    content?: Array<CurlUIChildComponent> | CurlUIChildComponent;
    title: CurlUIChildComponent;
    titleBarStyle?: CurlUICSSProps;
    contentStyle?: CurlUICSSProps;
    onCollapse?: Function;
    open: boolean;
    closeIcon?: CurlUIRenderElement;
    openIcon?: CurlUIRenderElement;
};

type CollabpseViewState = CurlUIElementState & {
    open: boolean;
};

const CollapseView_ = CreateComponent({
    getInitialState() {
        return {
            open: this.getProps().open === true ? true : false,
        };
    },
    getDefaultProps() {
        return {
            content: null,
            title: "Collapse",
            titleBarStyle: {},
            contentStyle: {},
            onCollapse: () => {},
        };
    },
    toggle() {
        let props: CollapseViewProps = this.getProps(),
            state: CollabpseViewState = this.getState();

        props.onCollapse?.(!state.open);

        this.setState({
            open: !state.open,
        });
    },
    close() {
        let props: CollapseViewProps = this.getProps();
        props.onCollapse?.(false);

        this.setState({
            open: false,
        });
    },
    open() {
        let props: CollapseViewProps = this.getProps();
        props.onCollapse?.(true);

        this.setState({
            open: true,
        });
    },
    render() {
        let state: CollabpseViewState = this.getState(),
            props: CollapseViewProps = this.getProps(),
            content: Array<CurlUIChildComponent> = LoadContent(
                props.content || props.children || []
            ),
            component = this;

        let iconStyle = { fontSize: "20px", margin: "3px" };

        return (
            <div
                className={
                    (props.className || props.class || "") +
                    " " +
                    Classes.COLLAPSE_VIEW
                }
                {...RemoveFields(props, [
                    "className",
                    "class",
                    "content",
                    "title",
                    "titleBarStyle",
                    "contentStyle",
                    "onCollapse",
                    "open",
                    "closeIcon",
                    "openIcon",
                ])}
            >
                <div
                    className={
                        state.open
                            ? Classes.COLLAPSE_VIEW_TITLE_BAR_ACTIVE
                            : Classes.COLLAPSE_VIEW_TITLE_BAR
                    }
                    onclick={(event: Event) => {
                        event.stopPropagation();
                        component.toggle();
                    }}
                    style={props.titleBarStyle}
                >
                    {props.title}
                    {state.open
                        ? props.closeIcon || (
                              <BiCaretUp style={iconStyle}></BiCaretUp>
                          )
                        : props.openIcon || (
                              <BiCaretDown style={iconStyle}></BiCaretDown>
                          )}
                </div>
                {!state.open ? null : (
                    <div
                        className={Classes.COLLAPSE_VIEW_CONTENT}
                        style={props.contentStyle}
                    >
                        {...content}
                    </div>
                )}
            </div>
        );
    },
});

export function CollapseView(
    properties: CollapseViewProps
): CurlUIRenderElement {
    return <CollapseView_ {...properties} />;
}
