import {
    Classes,
    RemoveFields,
    CustomElement,
    LoadContent,
    CustomEvents,
} from "../core";
import { CreateComponent } from "curlui";
import {
    ChildComponent,
    RenderElement,
    ElementProps,
    CSSProps,
} from "curlui/types";

export type MenuProps = ElementProps & {
    menuItems?: Array<RenderElement>;
    title: ChildComponent;
    dropdownStyle?: CSSProps;
    open?: boolean;
};

export type MenuState = {
    open: boolean;
};

const Menu_ = CreateComponent<MenuProps, MenuState>({
    getInitialState() {
        return {
            open: this.getProps().open === true ? true : false,
        };
    },
    getDefaultProps() {
        return {
            menuItems: [],
            title: "Menu",
            dropdownStyle: {},
        };
    },
    toggle() {
        let state: MenuState = this.getState();

        if (!state.open) {
            window.dispatchEvent(
                new CustomEvent(CustomEvents.CLOSE_MENU_REQUEST, {
                    detail: this.elementId,
                }),
            );
        }

        this.setState({
            open: !state.open,
        });
    },
    close() {
        let state: MenuState = this.getState();

        if (state.open) {
            this.setState({
                open: false,
            });
        }
    },
    open() {
        let state: MenuState = this.getState();

        if (!state.open) {
            window.dispatchEvent(
                new CustomEvent(CustomEvents.CLOSE_MENU_REQUEST, {
                    detail: this.elementId,
                }),
            );

            this.setState({
                open: true,
            });
        }
    },
    mounted() {
        window.addEventListener(CustomEvents.WINDOW_CLICK, () => {
            this.close();
        });

        window.addEventListener(CustomEvents.WINDOW_SCROLL, () => {
            this.close();
        });

        window.addEventListener(
            CustomEvents.CLOSE_MENU_REQUEST,
            (event: CustomEventInit) => {
                if (event.detail.elementId !== this.elementId) {
                    this.close();
                }
            },
        );
    },
    unmounting() {
        window.removeEventListener(CustomEvents.WINDOW_CLICK, () => {
            this.close();
        });

        window.removeEventListener(CustomEvents.WINDOW_SCROLL, () => {
            this.close();
        });

        window.removeEventListener(
            CustomEvents.CLOSE_MENU_REQUEST,
            (event: CustomEventInit) => {
                if (event.detail.elementId !== this.elementId) {
                    this.close();
                }
            },
        );
    },
    render() {
        let state: MenuState = this.getState(),
            props: MenuProps = this.getProps(),
            menuItems: Array<RenderElement> = LoadContent(
                props.menuItems || props.children || [],
            ),
            component = this;

        return (
            <div
                className={
                    (props.className || props.class || "") +
                    " " +
                    (state.open ? Classes.MENU_ACTIVE : Classes.MENU)
                }
                onclick={(event: Event) => {
                    event.stopPropagation();
                    component.toggle();
                }}
                {...RemoveFields(props, [
                    "className",
                    "class",
                    "menuItems",
                    "title",
                    "dropdownStyle",
                ])}
            >
                {props.title}
                {!state.open ? null : (
                    <div
                        className={Classes.MENU_DROPDOWN}
                        style={props.dropdownStyle}
                    >
                        {...menuItems}
                    </div>
                )}
            </div>
        );
    },
});

export function Menu(properties: MenuProps): RenderElement {
    return <Menu_ {...properties} />;
}

export type MenuBarProps = ElementProps;

export function MenuBar(properties: MenuBarProps, ...menus: Array<any>) {
    return CustomElement("div", Classes.MENU_BAR, {}, properties, ...menus);
}

export type MenuItemProps = ElementProps;

export function MenuItem(properties: MenuItemProps, ...children: Array<any>) {
    return CustomElement("div", Classes.MENU_ITEM, {}, properties, ...children);
}
