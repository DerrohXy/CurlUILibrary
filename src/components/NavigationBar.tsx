import { Classes, RemoveFields, LoadContent, CustomEvents } from "../core";
import { CreateComponent } from "curlui";
import {
    RenderElement,
    ElementProps,
    ElementState,
    CSSProps,
} from "curlui/types";

export type NavigationBarState = ElementState & {
    drawerOpen: boolean;
    menuOpen: boolean;
};

export type NavigationBarProps = ElementProps<HTMLDivElement> & {
    drawerContent?: RenderElement;
    menuContent?: RenderElement;
    content?: Array<RenderElement> | RenderElement;
    drawerButton?: RenderElement;
    menuButton?: RenderElement;
    navigationWindowStyle?: CSSProps;
    drawerWindowStyle?: CSSProps;
    menuWindowStyle?: CSSProps;
};

function menuIcon_(): RenderElement {
    return (
        <div
            style={{
                padding: "15px",
                margin: "5px",
            }}
        >
            {">"}
        </div>
    );
}

const NavigationBar_ = CreateComponent<NavigationBarProps>({
    getInitialState() {
        return {
            drawerOpen: false,
            menuOpen: false,
        };
    },
    getDefaultProps() {
        return {
            drawerContent: null,
            menuContent: null,
            content: null,
            drawerButton: null,
            menuButton: null,
            navigationWindowStyle: {},
            drawerWindowStyle: {},
            menuWindowStyle: {},
        };
    },
    toggleDrawer() {
        this.setState({
            drawerOpen: !this.getState().drawerOpen,
            menuOpen: false,
        });
    },
    toggleMenu() {
        this.setState({
            menuOpen: !this.getState().menuOpen,
            drawerOpen: false,
        });
    },
    closeDrawer() {
        this.setState({
            drawerOpen: false,
        });
    },
    openDrawer() {
        this.setState({
            drawerOpen: true,
        });
    },
    closeMenu() {
        this.setState({
            menuOpen: false,
        });
    },
    openMenu() {
        this.setState({
            menuOpen: true,
        });
    },
    closeNavigation() {
        this.setState({
            drawerOpen: false,
            menuOpen: false,
        });
    },
    mounted() {
        let component = this;

        window.addEventListener(CustomEvents.CLOSE_DRAWERS_REQUEST, () => {
            component.setState({
                drawerOpen: false,
                menuOpen: false,
            });
        });
    },
    render() {
        let state: NavigationBarState = this.getState(),
            props: NavigationBarProps = this.getProps(),
            drawerOpen: boolean = state.drawerOpen,
            menuOpen: boolean = state.menuOpen;

        let drawerContent: Array<RenderElement> = LoadContent(
                props.drawerContent,
            ),
            menuContent: Array<RenderElement> = LoadContent(props.menuContent),
            drawerButton: RenderElement | undefined = props.drawerButton,
            menuButton: RenderElement | undefined = props.menuButton,
            content: Array<RenderElement> = LoadContent(
                props.content || props.children || [],
            ),
            component = this;

        let iconStyle = { fontSize: "35px", margin: "5px" };

        return (
            <div
                className={
                    (props.className || props.class || "") +
                    " " +
                    Classes.NAVIGATION_BAR
                }
                {...RemoveFields(props, [
                    "className",
                    "class",
                    "drawerContent",
                    "menuContent",
                    "content",
                    "drawerButton",
                    "menuButton",
                    "navigationWindowStyle",
                    "drawerWindowStyle",
                    "menuWindowStyle",
                ])}
            >
                {drawerContent.length < 1 ? null : (
                    <div
                        onclick={(event: Event) => {
                            event.stopPropagation();
                            component.toggleDrawer();
                        }}
                    >
                        {!drawerButton ? menuIcon_() : drawerButton}
                    </div>
                )}
                {...content}
                {menuContent.length < 1 ? null : (
                    <div
                        onclick={(event: Event) => {
                            event.stopPropagation();
                            component.toggleMenu();
                        }}
                    >
                        {!menuButton ? menuIcon_() : menuButton}
                    </div>
                )}
                {(drawerContent.length < 1 && menuContent.length < 1) ||
                (!drawerOpen && !menuOpen) ? null : (
                    <div
                        className={Classes.NAVIGATION_BAR_NAVIGATION_WINDOW}
                        onclick={(event: Event) => {
                            event.stopPropagation();
                            component.closeNavigation();
                        }}
                        style={props.navigationWindowStyle}
                    >
                        {!drawerOpen ? null : (
                            <div
                                className={Classes.NAVIGATION_BAR_DRAWER_WINDOW}
                                onclick={(event: Event) => {
                                    event.stopPropagation();
                                }}
                                style={props.drawerWindowStyle}
                            >
                                {...drawerContent}
                            </div>
                        )}
                        {!menuOpen ? null : (
                            <div
                                className={Classes.NAVIGATION_BAR_MENU_WINDOW}
                                onclick={(event: Event) => {
                                    event.stopPropagation();
                                }}
                                style={props.menuWindowStyle}
                            >
                                {...menuContent}
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    },
});

export function NavigationBar(properties: NavigationBarProps): RenderElement {
    return <NavigationBar_ {...properties} />;
}
