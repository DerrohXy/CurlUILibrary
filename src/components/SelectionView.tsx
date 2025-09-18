import { Classes, RemoveFields, LoadContent, CustomEvents } from "../core";
import { CreateComponent } from "curlui";
import {
    CurlUIChildComponent,
    CurlUIRenderElement,
    CurlUIElementProps,
    CurlUIElementState,
    CurlUICSSProps,
} from "curlui/types";

export type SelectionViewOptionItem = {
    text?: string;
    content?: CurlUIChildComponent;
};

export type SelectionViewProps = CurlUIElementProps<HTMLDivElement> & {
    optionItems: Array<SelectionViewOptionItem>;
    onSelection: Function;
    dropdownStyle?: CurlUICSSProps;
    optionItemStyle?: CurlUICSSProps;
};

export type SelectionViewState = CurlUIElementState & {
    selection: SelectionViewOptionItem | null;
    open: boolean;
};

const SelectionView_ = CreateComponent({
    getInitialState() {
        return {
            selection: null,
            open: false,
        };
    },
    getDefaultProps() {
        return {
            optionItems: [],
            onInput: () => {},
            dropdownStyle: {},
            optionItemStyle: {},
        };
    },
    toggle() {
        this.setState({
            open: !this.getState().open,
        });
    },
    close() {
        if (this.getState().open === true) {
            this.setState({
                open: false,
            });
        }
    },
    open() {
        if (this.getState().open !== true) {
            this.setState({
                open: true,
            });
        }
    },
    setOption(item: SelectionViewOptionItem) {
        let props: SelectionViewProps = this.getProps();

        this.setState({
            selection: item,
            open: false,
        });

        props.onSelection(item);
    },
    mounted() {
        window.addEventListener(CustomEvents.WINDOW_CLICK, () => {
            this.close();
        });

        window.addEventListener(CustomEvents.WINDOW_SCROLL, () => {
            this.close();
        });
    },
    unmounting() {
        window.removeEventListener(CustomEvents.WINDOW_CLICK, () => {
            this.close();
        });

        window.removeEventListener(CustomEvents.WINDOW_SCROLL, () => {
            this.close();
        });
    },
    render() {
        let state: SelectionViewState = this.getState(),
            props: SelectionViewProps = this.getProps(),
            selection: SelectionViewOptionItem | null = state.selection,
            optionItems: Array<SelectionViewOptionItem> = LoadContent(
                props.optionItems
            ),
            component = this;

        return (
            <div
                className={
                    (props.className || props.class || "") +
                    " " +
                    (state.open
                        ? Classes.SELECTION_VIEW_ACTIVE
                        : Classes.SELECTION_VIEW)
                }
                onclick={(event: Event) => {
                    event.stopPropagation();
                    component.toggle();
                }}
                {...RemoveFields(props, [
                    "className",
                    "class",
                    "optionItems",
                    "onSelection",
                    "dropdownStyle",
                    "optionItemStyle",
                ])}
            >
                {selection?.text || "Select"}
                {!state.open ? null : (
                    <div
                        className={Classes.SELECTION_VIEW_DROPDOWN}
                        style={props.dropdownStyle}
                    >
                        {...optionItems.map((item) => {
                            return (
                                <div
                                    className={Classes.OPTION_ITEM}
                                    style={props.optionItemStyle}
                                    onclick={(event: Event) => {
                                        event.stopPropagation();
                                        component.setOption(item);
                                    }}
                                >
                                    {item.content || item.text || "Option"}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    },
});

export function SelectionView(
    properties: SelectionViewProps
): CurlUIRenderElement {
    return <SelectionView_ {...properties} />;
}
