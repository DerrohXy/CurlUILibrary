import { Classes, RemoveFields, LoadContent } from "../core";
import { CreateComponent } from "curlui";
import {
    ChildComponent,
    RenderElement,
    ElementProps,
    ElementState,
    CSSProps,
} from "curlui/types";

export type CollapseViewProps = ElementProps<HTMLDivElement> & {
    content?: Array<ChildComponent> | ChildComponent;
    title: ChildComponent;
    titleBarStyle?: CSSProps;
    contentStyle?: CSSProps;
    onCollapse?: Function;
    open: boolean;
    closeIcon?: RenderElement;
    openIcon?: RenderElement;
};

export type CollabpseViewState = ElementState & {
    open: boolean;
};

function closeIcon_(): RenderElement {
    return (
        <div
            style={{
                padding: "10px",
                margin: "5px",
            }}
        >
            {"<"}
        </div>
    );
}

function openIcon_(): RenderElement {
    return (
        <div
            style={{
                padding: "10px",
                margin: "5px",
            }}
        >
            {">"}
        </div>
    );
}

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
            content: Array<ChildComponent> = LoadContent(
                props.content || props.children || [],
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
                        ? props.closeIcon || closeIcon_()
                        : props.openIcon || openIcon_()}
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

export function CollapseView(properties: CollapseViewProps): RenderElement {
    return <CollapseView_ {...properties} />;
}
