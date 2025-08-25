import {
    BiCaretDown,
    BiCaretUp,
    BiInfoSquare,
    BiMenu,
    BiXCircle,
} from "./icons/bi";
import { CreateComponent, CreateElement, Render } from "curlui";
import "./styles.css";
import {
    CurlUITag,
    CurlUIElementProps,
    CurlUIChildComponent,
    CurlUIRenderElement,
    CurlUIElementState,
    CurlUIElementStyleProps,
} from "curlui/dist/types";

function GetWindowDimensions_() {
    return {
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
        outerHeight: window.outerHeight,
        outerWidth: window.outerWidth,
    };
}

function GetElementDimensions_(element: HTMLElement) {
    return {
        clientWidth: element.clientWidth,
        clientHeight: element.clientHeight,
        offsetWidth: element.offsetWidth,
        offsetHeight: element.offsetHeight,
        offsetTop: element.offsetTop,
        offsetLeft: element.offsetLeft,
    };
}

function IsNull_(item: any): boolean {
    return item === null || item === undefined || item === "";
}

function NotNull_(item: any): boolean {
    return !IsNull_(item);
}

function GetUniqueId_(): string {
    let x = 0;
    for (let q = 0; q < 10; ++q) {
        x += Date.now() * Math.random();
    }
    return x.toString().replace(".", "");
}

function LoadContent_(content: Array<any> | any): Array<any> {
    return IsNull_(content) ? [] : Array.isArray(content) ? content : [content];
}

function RemoveFields_(object: { [key: string]: any }, fields: Array<string>) {
    let newObject: { [key: string]: any } = {};
    Object.keys(object)
        .filter((field) => {
            return fields.includes(field) !== true;
        })
        .map((field) => {
            newObject[field] = object[field];
        });
    return newObject;
}

type AnimationClasses = {
    PULSATING: string;
    SPINNING: string;
    SLIDE_IN_LEFT: string;
    SLIDE_IN_LEFT_SLOW: string;
    SLIDE_IN_LEFT_FAST: string;
    SLIDE_OUT_LEFT: string;
    SLIDE_OUT_LEFT_SLOW: string;
    SLIDE_OUT_LEFT_FAST: string;
    SLIDE_IN_RIGHT: string;
    SLIDE_IN_RIGHT_SLOW: string;
    SLIDE_IN_RIGHT_FAST: string;
    SLIDE_OUT_RIGHT: string;
    SLIDE_OUT_RIGHT_SLOW: string;
    SLIDE_OUT_RIGHT_FAST: string;
    SLIDE_IN_TOP: string;
    SLIDE_IN_TOP_SLOW: string;
    SLIDE_IN_TOP_FAST: string;
    SLIDE_OUT_TOP: string;
    SLIDE_OUT_TOP_FAST: string;
    SLIDE_OUT_TOP_SLOW: string;
    SLIDE_IN_BOTTOM: string;
    SLIDE_IN_BOTTOM_SLOW: string;
    SLIDE_IN_BOTTOM_FAST: string;
    SLIDE_OUT_BOTTOM: string;
    SLIDE_OUT_BOTTOM_SLOW: string;
    SLIDE_OUT_BOTTOM_FAST: string;
};

type ComponentClasses = {
    HIDDEN: string;
    BUTTON: string;
    ICON_BUTTON: string;
    LABEL: string;
    PARAGRAPH: string;
    ICON: string;
    HEADING: string;
    LINK: string;
    IMAGE_VIEW: string;
    VIDEO_VIEW: string;
    AUDIO_VIEW: string;
    TEXT_INPUT: string;
    NUMBER_INPUT: string;
    WEEK_INPUT: string;
    TIME_INPUT: string;
    MONTH_INPUT: string;
    DATETIME_INPUT: string;
    DATE_INPUT: string;
    TEXT_AREA: string;
    PASSWORD_INPUT: string;
    COLOR_INPUT: string;
    FILE_INPUT: string;
    SELECTION: string;
    OPTION: string;
    SELECTION_VIEW: string;
    SELECTION_VIEW_ACTIVE: string;
    SELECTION_VIEW_DROPDOWN: string;
    OPTION_ITEM: string;
    PROGRESS_BAR: string;
    SLIDER: string;
    PROGRESS_INDICATOR: string;
    CHECK_BUTTON: string;
    CHECK_BUTTON_CHECK_BOX: string;
    CHECK_BUTTON_CHECK_BOX_CHECKED: string;
    RADIO_GROUP: string;
    VERTICAL_RADIO_GROUP: string;
    RADIO_BUTTON: string;
    RADIO_BUTTON_CHECK_BOX: string;
    RADIO_BUTTON_CHECK_BOX_CHECKED: string;
    SWITCH: string;
    SWITCH_ACTIVE: string;
    SWITCH_TOGGLE: string;
    SWITCH_TOGGLE_ACTIVE: string;
    MENU: string;
    MENU_ACTIVE: string;
    MENU_DROPDOWN: string;
    MENU_ITEM: string;
    MENU_BAR: string;
    TABBED_WINDOW: string;
    VERTICAL_TABBED_WINDOW: string;
    TABBED_WINDOW_TITLE_BAR: string;
    VERTICAL_TABBED_WINDOW_TITLE_BAR: string;
    TABBED_WINDOW_TITLE: string;
    TABBED_WINDOW_TITLE_ACTIVE: string;
    TABBED_WINDOW_CONTENT: string;
    TABBED_WINDOW_TITLE_BAR_CENTERED: string;
    TABBED_WINDOW_TITLE_BAR_SPACED: string;
    TABBED_WINDOW_TITLE_BAR_RIGHT: string;
    CANVAS: string;
    COLLAPSE_VIEW: string;
    COLLAPSE_VIEW_TITLE_BAR: string;
    COLLAPSE_VIEW_TITLE_BAR_ACTIVE: string;
    COLLAPSE_VIEW_CONTENT: string;
    ORDERED_LIST: string;
    UNORDERED_LIST: string;
    LIST_ITEM: string;
    TABLE: string;
    TABLE_HEADING: string;
    TABLE_FOOTER: string;
    TABLE_BODY: string;
    TABLE_ROW: string;
    TABLE_DATA: string;
    TABLE_HEADER: string;
    CAPTION: string;
    EMBED: string;
    IFRAME: string;
    VERTICAL_LAYOUT: string;
    HORIZONTAL_LAYOUT: string;
    FLOW_LAYOUT: string;
    GRID_LAYOUT: string;
    RELATIVE_LAYOUT: string;
    SCROLL_WINDOW: string;
    VERTICAL_SCROLL_WINDOW: string;
    HORIZONTAL_SCROLL_WINDOW: string;
    NAVIGATION_BAR: string;
    NAVIGATION_BAR_NAVIGATION_WINDOW: string;
    NAVIGATION_BAR_DRAWER_WINDOW: string;
    NAVIGATION_BAR_MENU_WINDOW: string;
    FOOTER_BAR: string;
    ACTIVITY: string;
    DIALOG: string;
    DIALOG_TITLE: string;
    DIALOG_WINDOW: string;
    DIALOG_TITLE_BAR: string;
    NOTIFICATION: string;
    TOAST: string;
    //
    [key: string]: string;
};

const AnimationClasses_: AnimationClasses = {
        PULSATING: "",
        SPINNING: "",
        SLIDE_IN_LEFT: "",
        SLIDE_IN_LEFT_SLOW: "",
        SLIDE_IN_LEFT_FAST: "",
        SLIDE_OUT_LEFT: "",
        SLIDE_OUT_LEFT_SLOW: "",
        SLIDE_OUT_LEFT_FAST: "",
        SLIDE_IN_RIGHT: "",
        SLIDE_IN_RIGHT_SLOW: "",
        SLIDE_IN_RIGHT_FAST: "",
        SLIDE_OUT_RIGHT: "",
        SLIDE_OUT_RIGHT_SLOW: "",
        SLIDE_OUT_RIGHT_FAST: "",
        SLIDE_IN_TOP: "",
        SLIDE_IN_TOP_SLOW: "",
        SLIDE_IN_TOP_FAST: "",
        SLIDE_OUT_TOP: "",
        SLIDE_OUT_TOP_FAST: "",
        SLIDE_OUT_TOP_SLOW: "",
        SLIDE_IN_BOTTOM: "",
        SLIDE_IN_BOTTOM_SLOW: "",
        SLIDE_IN_BOTTOM_FAST: "",
        SLIDE_OUT_BOTTOM: "",
        SLIDE_OUT_BOTTOM_SLOW: "",
        SLIDE_OUT_BOTTOM_FAST: "",
    },
    Classes_: ComponentClasses = {
        ...AnimationClasses_,
        HIDDEN: "",
        BUTTON: "",
        ICON_BUTTON: "",
        LABEL: "",
        PARAGRAPH: "",
        ICON: "",
        HEADING: "",
        LINK: "",
        IMAGE_VIEW: "",
        VIDEO_VIEW: "",
        AUDIO_VIEW: "",
        TEXT_INPUT: "",
        NUMBER_INPUT: "",
        WEEK_INPUT: "",
        TIME_INPUT: "",
        MONTH_INPUT: "",
        DATETIME_INPUT: "",
        DATE_INPUT: "",
        TEXT_AREA: "",
        PASSWORD_INPUT: "",
        COLOR_INPUT: "",
        FILE_INPUT: "",
        SELECTION: "",
        OPTION: "",
        SELECTION_VIEW: "",
        SELECTION_VIEW_ACTIVE: "",
        SELECTION_VIEW_DROPDOWN: "",
        OPTION_ITEM: "",
        PROGRESS_BAR: "",
        SLIDER: "",
        PROGRESS_INDICATOR: "",
        CHECK_BUTTON: "",
        CHECK_BUTTON_CHECK_BOX: "",
        CHECK_BUTTON_CHECK_BOX_CHECKED: "",
        RADIO_GROUP: "",
        VERTICAL_RADIO_GROUP: "",
        RADIO_BUTTON: "",
        RADIO_BUTTON_CHECK_BOX: "",
        RADIO_BUTTON_CHECK_BOX_CHECKED: "",
        SWITCH: "",
        SWITCH_ACTIVE: "",
        SWITCH_TOGGLE: "",
        SWITCH_TOGGLE_ACTIVE: "",
        MENU: "",
        MENU_ACTIVE: "",
        MENU_DROPDOWN: "",
        MENU_ITEM: "",
        MENU_BAR: "",
        TABBED_WINDOW: "",
        VERTICAL_TABBED_WINDOW: "",
        TABBED_WINDOW_TITLE_BAR: "",
        VERTICAL_TABBED_WINDOW_TITLE_BAR: "",
        TABBED_WINDOW_TITLE: "",
        TABBED_WINDOW_TITLE_ACTIVE: "",
        TABBED_WINDOW_CONTENT: "",
        TABBED_WINDOW_TITLE_BAR_CENTERED: "",
        TABBED_WINDOW_TITLE_BAR_SPACED: "",
        TABBED_WINDOW_TITLE_BAR_RIGHT: "",
        CANVAS: "",
        COLLAPSE_VIEW: "",
        COLLAPSE_VIEW_TITLE_BAR: "",
        COLLAPSE_VIEW_TITLE_BAR_ACTIVE: "",
        COLLAPSE_VIEW_CONTENT: "",
        ORDERED_LIST: "",
        UNORDERED_LIST: "",
        LIST_ITEM: "",
        TABLE: "",
        TABLE_HEADING: "",
        TABLE_FOOTER: "",
        TABLE_BODY: "",
        TABLE_ROW: "",
        TABLE_DATA: "",
        TABLE_HEADER: "",
        CAPTION: "",
        EMBED: "",
        IFRAME: "",
        VERTICAL_LAYOUT: "",
        HORIZONTAL_LAYOUT: "",
        FLOW_LAYOUT: "",
        GRID_LAYOUT: "",
        RELATIVE_LAYOUT: "",
        SCROLL_WINDOW: "",
        VERTICAL_SCROLL_WINDOW: "",
        HORIZONTAL_SCROLL_WINDOW: "",
        NAVIGATION_BAR: "",
        NAVIGATION_BAR_NAVIGATION_WINDOW: "",
        NAVIGATION_BAR_DRAWER_WINDOW: "",
        NAVIGATION_BAR_MENU_WINDOW: "",
        FOOTER_BAR: "",
        ACTIVITY: "",
        DIALOG: "",
        DIALOG_TITLE: "",
        DIALOG_WINDOW: "",
        DIALOG_TITLE_BAR: "",
        NOTIFICATION: "",
        TOAST: "",
    };

function InitializeClasses_() {
    Object.keys(Classes_).map((_class_) => {
        let value = "" + _class_;
        while (value.includes("_")) {
            value = value.replace("_", "-");
        }
        Classes_[_class_] = value.toLowerCase();
    });
}

const Colors_ = {
    ALICE_BLUE: "#F0F8FF",
    ANTIQUE_WHITE: "#FAEBD7",
    AQUA: "#00FFFF",
    AQUAMARINE: "#7FFFD4",
    AZURE: "#F0FFFF",
    BEIGE: "#F5F5DC",
    BISQUE: "#FFE4C4",
    BLACK: "#000000",
    BLACK1: "#77767B",
    BLACK2: "#5E5C64",
    BLACK3: "#3D3846",
    BLACK4: "#241F31",
    BLACK5: "#000000",
    BLANCHED_ALMOND: "#FFEBCD",
    BLUE: "#0000FF",
    BLUE1: "#99C1F1",
    BLUE2: "#62A0EA",
    BLUE3: "#3584E4",
    BLUE4: "#1C71D8",
    BLUE5: "#1A5FB4",
    BLUE_GREEN: "#9DF9EF",
    BLUE_VIOLET: "#8A2BE2",
    BRIGHT_BLUE: "#51E2F5",
    BROWN: "#A52A2A",
    BROWN1: "#CDAB8F",
    BROWN2: "#B5835A",
    BROWN3: "#986A44",
    BROWN4: "#865E3C",
    BROWN5: "#63452C",
    BURLY_WOOD: "#DEB887",
    BURNT_ORANGE: "#EE4E34",
    CADET_BLUE: "#5F9EA0",
    CHARCOAL: "#101820FF",
    CHARTREUSE: "#7FFF00",
    CHERRY_RED: "#990011FF",
    CHOCOLATE: "#D2691E",
    CLASSIC_BLUE: "#2F3C7E",
    CLASSIC_PINK: "#FBEAEB",
    CLASSIC_YELLOW: "#FEE715FF",
    CORAL: "#FF7F50",
    CORNFLOWER_BLUE: "#6495ED",
    CORNSILK: "#FFF8DC",
    CRIMSON: "#DC143C",
    CYAN: "#00FFFF",
    DARK_BLUE: "#00008B",
    DARK_CYAN: "#008B8B",
    DARK_GOLDEN_ROD: "#B8860B",
    DARK_GRAY: "#A9A9A9",
    DARK_GREEN: "#006400",
    DARK_GREY: "#A9A9A9",
    DARK_KHAKI: "#BDB76B",
    DARK_MAGENTA: "#8B008B",
    DARK_OLIVE_GREEN: "#556B2F",
    DARK_ORANGE: "#FF8C00",
    DARK_ORCHID: "#9932CC",
    DARK_RED: "#8B0000",
    DARK_SALMON: "#E9967A",
    DARK_SAND: "#A28089",
    DARK_SEA_GREEN: "#8FBC8F",
    DARK_SLATE_BLUE: "#483D8B",
    DARK_SLATE_GRAY: "#2F4F4F",
    DARK_SLATE_GREY: "#2F4F4F",
    DARK_TURQUOISE: "#00CED1",
    DARK_VIOLET: "#9400D3",
    DEEP_PINK: "#FF1493",
    DEEP_SKY_BLUE: "#00BFFF",
    DIM_GRAY: "#696969",
    DIM_GREY: "#696969",
    DODGER_BLUE: "#1E90FF",
    DUSTY_WHITE: "#EDF756",
    ELECTRIC_BLUE: "#4831D4",
    FIRE_BRICK: "#B22222",
    FLORAL_WHITE: "#FFFAF0",
    FOREST_GREEN: "#3A6B35",
    FREEZE_PURPLE: "#E5EAF5",
    FUCHSIA: "#FF00FF",
    GAINSBORO: "#DCDCDC",
    GHOST_WHITE: "#F8F8FF",
    GOLD: "#FFD700",
    GOLDEN_ROD: "#DAA520",
    GRAY: "#808080",
    GRAY1: "#FFFFFF",
    GRAY2: "#F6F5F4",
    GRAY3: "#DEDDDA",
    GRAY4: "#C0BFBC",
    GRAY5: "#9A9996",
    GREEN: "#008000",
    GREEN1: "#8FF0A4",
    GREEN2: "#57E3A9",
    GREEN3: "#33D17A",
    GREEN4: "#2EC27E",
    GREEN5: "#26A269",
    GREEN_YELLOW: "#ADFF2F",
    GREY: "#808080",
    HEAVY_PURPLE: "#A28089",
    HONEY_DEW: "#F0FFF0",
    HOT_PINK: "#FF69B4",
    ICE_COLD: "#A0D2EB",
    INDIAN_RED: "#CD5C5C",
    INDIGO: "#1E2761",
    ISLAND_GREEN: "#2BAE66FF",
    IVORY: "#FFFFF0",
    KHAKI: "#F0E68C",
    LAVENDER: "#E2D1F9",
    LAVENDER_BLUSH: "#FFF0F5",
    LAWN_GREEN: "#7CFC00",
    LEMON_CHIFFON: "#FFFACD",
    LIGHT_BLUE: "#ADD8E6",
    LIGHT_CORAL: "#F08080",
    LIGHT_CYAN: "#E0FFFF",
    LIGHT_GOLDEN_ROD_YELLOW: "#FAFAD2",
    LIGHT_GRAY: "#D3D3D3",
    LIGHT_GREEN: "#90EE90",
    LIGHT_GREY: "#D3D3D3",
    LIGHT_OLIVE: "#E7E8D1",
    LIGHT_PINK: "#FFB6C1",
    LIGHT_SALMON: "#FFA07A",
    LIGHT_SEA_GREEN: "#20B2AA",
    LIGHT_SKY_BLUE: "#87CEFA",
    LIGHT_SLATE_GRAY: "#778899",
    LIGHT_SLATE_GREY: "#778899",
    LIGHT_STEEL_BLUE: "#B0C4DE",
    LIGHT_TEAL: "#A7BEAE",
    LIGHT_YELLOW: "#FFFFE0",
    LIME: "#00FF00",
    LIME_GREEN: "#CCF381",
    LINEN: "#FAF0E6",
    MAGENTA: "#FF00FF",
    MAROON: "#7A2048",
    MEDIUM_AQUA_MARINE: "#66CDAA",
    MEDIUM_BLUE: "#0000CD",
    MEDIUM_ORCHID: "#BA55D3",
    MEDIUM_PURPLE: "#D0BDF4",
    MEDIUM_SEA_GREEN: "#3CB371",
    MEDIUM_SLATE_BLUE: "#7B68EE",
    MEDIUM_SPRING_GREEN: "#00FA9A",
    MEDIUM_TURQUOISE: "#48D1CC",
    MEDIUM_VIOLET_RED: "#C71585",
    MIDNIGHT_BLUE: "#191970",
    MINT_CREAM: "#F5FFFA",
    MISTY_ROSE: "#FFE4E1",
    MOCCASIN: "#FFE4B5",
    MUSTARD: "#E3B448",
    NAVAJO_WHITE: "#FFDEAD",
    NAVY: "#000080",
    OFF_WHITE: "#FCF6F5FF",
    OLD_LACE: "#FDF5E6",
    OLIVE: "#808000",
    OLIVE_DRAB: "#6B8E23",
    ORANGE: "#FFA500",
    ORANGE1: "#FFBE6F",
    ORANGE2: "#FFA348",
    ORANGE3: "#FF7800",
    ORANGE4: "#E66100",
    ORANGE5: "#C64600",
    ORANGE_RED: "#FF4500",
    ORCHID: "#DA70D6",
    PALE_GOLDEN_ROD: "#EEE8AA",
    PALE_GREEN: "#98FB98",
    PALE_TURQUOISE: "#AFEEEE",
    PALE_VIOLET_RED: "#DB7093",
    PAPAYA_WHIP: "#FFEFD5",
    PEACH: "#EEA47FFF",
    PEACH_PUFF: "#FFDAB9",
    PERU: "#CD853F",
    PINK: "#FFC0CB",
    PINK_SAND: "#FFA8B6",
    PLUM: "#DDA0DD",
    POWDER_BLUE: "#B0E0E6",
    PURPLE: "#800080",
    PURPLE1: "#DC8ADD",
    PURPLE2: "#C061CB",
    PURPLE3: "#9141AC",
    PURPLE4: "#813D9C",
    PURPLE5: "#613583",
    PURPLE_PAIN: "#8458B3",
    RASPBERRY: "#8A307F",
    REBECCA_PURPLE: "#663399",
    RED: "#FF0000",
    RED1: "#F66151",
    RED2: "#ED333B",
    RED3: "#E01B24",
    RED4: "#C01C28",
    RED5: "#A51D2D",
    ROSY_BROWN: "#BC8F8F",
    ROYAL_BLUE: "#00539CFF",
    SADDLE_BROWN: "#8B4513",
    SAGE: "#CBD18F",
    SALMON: "#FA8072",
    SANDY_BROWN: "#F4A460",
    SCARLET: "#B85042",
    SEA_GREEN: "#2E8B57",
    SEA_SHELL: "#FFF5EE",
    SIENNA: "#A0522D",
    SILVER: "#C0C0C0",
    SKY_BLUE: "#87CEEB",
    SLATE_BLUE: "#6A5ACD",
    SLATE_GRAY: "#708090",
    SLATE_GREY: "#708090",
    SNOW: "#FFFAFA",
    SPICED_APPLE: "#783937FF",
    SPRING_GREEN: "#00FF7F",
    STEEL_BLUE: "#4682B4",
    TAN: "#D2B48C",
    TEAL: "#317773",
    THISTLE: "#D8BFD8",
    TOMATO: "#FF6347",
    TURQUOISE: "#40E0D0",
    VERDANT_GREEN: "#2C5F2DFF",
    VIOLET: "#EE82EE",
    WHEAT: "#F5DEB3",
    WHITE: "#FFFFFF",
    WHITE1: "#9A9996",
    WHITE2: "#C0BFBC",
    WHITE3: "#DEDDDA",
    WHITE4: "#F6F5F4",
    WHITE5: "#FFFFFF",
    WHITE_SMOKE: "#F5F5F5",
    YELLOW: "#FFFF00",
    YELLOW1: "#F9F06B",
    YELLOW2: "#F8E45C",
    YELLOW3: "#F6D32D",
    YELLOW4: "#F5C211",
    YELLOW5: "#E5A50A",
    YELLOW_GREEN: "#9ACD32",
};

type SelectionViewOptionItem = {
    text?: string;
    content?: CurlUIChildComponent;
};

type SelectionViewProps = CurlUIElementProps & {
    optionItems: Array<SelectionViewOptionItem>;
    onInput?: Function;
    dropdownStyle?: CurlUIElementStyleProps;
    optionItemStyle?: CurlUIElementStyleProps;
};

type SelectionViewState = CurlUIElementState & {
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
        props.onInput?.(item);
    },
    mounted() {
        window.addEventListener(CustomEvents_.WINDOW_CLICK, () => {
            this.close();
        });
        window.addEventListener(CustomEvents_.WINDOW_SCROLL, () => {
            this.close();
        });
    },
    unmounting() {
        window.removeEventListener(CustomEvents_.WINDOW_CLICK, () => {
            this.close();
        });
        window.removeEventListener(CustomEvents_.WINDOW_SCROLL, () => {
            this.close();
        });
    },
    render() {
        let state: SelectionViewState = this.getState(),
            props: SelectionViewProps = this.getProps(),
            selection: SelectionViewOptionItem | null = state.selection,
            optionItems: Array<SelectionViewOptionItem> = LoadContent_(
                props.optionItems
            ),
            component = this;
        return CreateElement(
            "div",
            {
                className:
                    (props.className || "") +
                    " " +
                    (state.open === true
                        ? Classes_.SELECTION_VIEW_ACTIVE
                        : Classes_.SELECTION_VIEW),
                onclick: (event: Event) => {
                    event.stopPropagation();
                    component.toggle();
                },
                ...RemoveFields_(props, ["className"]),
            },
            selection?.text || "Select",
            state.open !== true
                ? ""
                : CreateElement(
                      "div",
                      {
                          className: Classes_.SELECTION_VIEW_DROPDOWN,
                          style: props.dropdownStyle,
                      },
                      ...optionItems.map((item) => {
                          return CreateElement(
                              "div",
                              {
                                  className: Classes_.OPTION_ITEM,
                                  style: props.optionItemStyle,
                                  onclick: (event: Event) => {
                                      event.stopPropagation();
                                      component.setOption(item);
                                  },
                              },
                              item.content || item.text || "Option"
                          );
                      })
                  )
        );
    },
});

type SwitchState = CurlUIElementState & {
    active: boolean;
};

type SwitchProps = CurlUIElementProps & {
    onActiveChange?: Function;
};

const Switch_ = CreateComponent({
    getInitialState() {
        return {
            active: this.getProps().active === true ? true : false,
        };
    },
    getDefaultProps() {
        return {
            onActiveChange: () => {},
        };
    },
    toggle() {
        let state: SwitchState = this.getState(),
            props: SwitchProps = this.getProps(),
            active = state.active;
        this.setState({
            active: !active,
        });
        props.onActiveChange?.(!active);
    },
    render() {
        let state: SwitchState = this.getState(),
            props: SwitchProps = this.getProps(),
            active: boolean = state.active,
            component = this;
        return CreateElement(
            "div",
            {
                className:
                    (props.className || "") +
                    " " +
                    (active ? Classes_.SWITCH_ACTIVE : Classes_.SWITCH),
                onclick: (event: Event) => {
                    event.stopPropagation();
                    component.toggle();
                },
                ...RemoveFields_(props, ["className"]),
            },
            CreateElement("div", {
                className: active
                    ? Classes_.SWITCH_TOGGLE_ACTIVE
                    : Classes_.SWITCH_TOGGLE,
            })
        );
    },
});

type CheckButtonProps = CurlUIElementProps & {
    onCheckedChange?: Function;
};

type CheckButtonState = CurlUIElementState & {
    checked: boolean;
};

const CheckButton_ = CreateComponent({
    getInitialState() {
        return {
            checked: this.getProps().checked === true ? true : false,
        };
    },
    getDefaultProps() {
        return {
            text: "Ckeck",
            onCheckedChange: () => {},
        };
    },
    toggle() {
        let state: CheckButtonState = this.getState(),
            props: CheckButtonProps = this.getProps(),
            checked: boolean = state.checked;
        this.setState({
            checked: !checked,
        });
        props.onCheckedChange?.(!checked);
    },
    render() {
        let state: CheckButtonState = this.getState(),
            props: CheckButtonProps = this.getProps(),
            checked: boolean = state.checked,
            component = this;
        return CreateElement(
            "div",
            {
                className:
                    (props.className || "") + " " + Classes_.CHECK_BUTTON,
                onclick: (event: Event) => {
                    event.stopPropagation();
                    component.toggle();
                },
                ...RemoveFields_(props, ["className"]),
            },
            CreateElement("div", {
                className: checked
                    ? Classes_.CHECK_BUTTON_CHECK_BOX_CHECKED
                    : Classes_.CHECK_BUTTON_CHECK_BOX,
            }),
            props.text
        );
    },
});

type RadioGroupItem = {
    value: any;
    text: CurlUIChildComponent;
};

type RadioGroupProps = CurlUIElementProps & {
    radioItems: Array<RadioGroupItem>;
    vertical?: boolean;
    onCheckedChange?: Function;
    radioButtonStyle?: CurlUIElementStyleProps;
};

type RadioGroupState = CurlUIElementState & {
    checked?: RadioGroupItem;
};

const RadioGroup_ = CreateComponent({
    getInitialState() {
        return {
            checked: {
                text: "",
                value: "",
            },
        };
    },
    getDefaultProps() {
        return {
            radioItems: [],
            vertical: false,
            onCheckedChange: () => {},
            radioButtonStyle: {},
        };
    },
    setChecked(item: RadioGroupItem) {
        let props: RadioGroupProps = this.getProps();
        this.setState({
            checked: item,
        });
        props.onCheckedChange?.(item.value);
    },
    render() {
        let state: RadioGroupState = this.getState(),
            props: RadioGroupProps = this.getProps(),
            checked: RadioGroupItem | undefined = state.checked,
            radioItems: Array<RadioGroupItem> = LoadContent_(props.radioItems),
            component = this;
        return CreateElement(
            "div",
            {
                className:
                    (props.className || "") +
                    " " +
                    (props.vertical === true
                        ? Classes_.VERTICAL_RADIO_GROUP
                        : Classes_.RADIO_GROUP),
                ...RemoveFields_(props, ["className"]),
            },
            ...radioItems.map((item) => {
                return CreateElement(
                    "div",
                    {
                        className: Classes_.RADIO_BUTTON,
                        onclick: (event: Event) => {
                            event.stopPropagation();
                            component.setChecked(item);
                        },
                        style: props.radioButtonStyle,
                    },
                    CreateElement("div", {
                        className:
                            item.value === checked?.value
                                ? Classes_.RADIO_BUTTON_CHECK_BOX_CHECKED
                                : Classes_.RADIO_BUTTON_CHECK_BOX,
                    }),
                    item.text
                );
            })
        );
    },
});

type MenuProps = CurlUIElementProps & {
    menuItems: Array<CurlUIRenderElement>;
    title: CurlUIChildComponent;
    dropdownStyle?: CurlUIElementStyleProps;
};

type MenuState = CurlUIElementState & {
    open: boolean;
};

const Menu_ = CreateComponent({
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
                new CustomEvent(CustomEvents_.CLOSE_MENU_REQUEST, {
                    detail: this.elementId,
                })
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
                new CustomEvent(CustomEvents_.CLOSE_MENU_REQUEST, {
                    detail: this.elementId,
                })
            );
            this.setState({
                open: true,
            });
        }
    },
    mounted() {
        window.addEventListener(CustomEvents_.WINDOW_CLICK, () => {
            this.close();
        });
        window.addEventListener(CustomEvents_.WINDOW_SCROLL, () => {
            this.close();
        });
        window.addEventListener(
            CustomEvents_.CLOSE_MENU_REQUEST,
            (event: CustomEventInit) => {
                if (event.detail.elementId !== this.elementId) {
                    this.close();
                }
            }
        );
    },
    unmounting() {
        window.removeEventListener(CustomEvents_.WINDOW_CLICK, () => {
            this.close();
        });
        window.removeEventListener(CustomEvents_.WINDOW_SCROLL, () => {
            this.close();
        });
        window.removeEventListener(
            CustomEvents_.CLOSE_MENU_REQUEST,
            (event: CustomEventInit) => {
                if (event.detail.elementId !== this.elementId) {
                    this.close();
                }
            }
        );
    },
    render() {
        let state: MenuState = this.getState(),
            props: MenuProps = this.getProps(),
            menuItems: Array<CurlUIRenderElement> = LoadContent_(
                props.menuItems
            ),
            component = this;
        return CreateElement(
            "div",
            {
                className:
                    (props.className || "") +
                    " " +
                    (state.open ? Classes_.MENU_ACTIVE : Classes_.MENU),
                onclick: (event: Event) => {
                    event.stopPropagation();
                    component.toggle();
                },
                ...RemoveFields_(props, ["className"]),
            },
            props.title,
            !state.open
                ? null
                : CreateElement(
                      "div",
                      {
                          className: Classes_.MENU_DROPDOWN,
                          style: props.dropdownStyle,
                      },
                      ...menuItems
                  )
        );
    },
});

type CollapseViewProps = CurlUIElementProps & {
    content: Array<CurlUIChildComponent> | CurlUIChildComponent;
    title: CurlUIChildComponent;
    titleBarStyle?: CurlUIElementStyleProps;
    contentStyle?: CurlUIElementStyleProps;
    onCollapse?: Function;
    open: boolean;
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
            content: Array<CurlUIChildComponent> = LoadContent_(props.content),
            component = this;
        return CreateElement(
            "div",
            {
                className:
                    (props.className || "") + " " + Classes_.COLLAPSE_VIEW,
                ...RemoveFields_(props, ["className"]),
            },
            CreateElement(
                "div",
                {
                    className: state.open
                        ? Classes_.COLLAPSE_VIEW_TITLE_BAR_ACTIVE
                        : Classes_.COLLAPSE_VIEW_TITLE_BAR,
                    onclick: (event: Event) => {
                        event.stopPropagation();
                        component.toggle();
                    },
                    style: props.titleBarStyle,
                },
                props.title,
                state.open
                    ? props.closeIcon ||
                          BiCaretUp({
                              style: { fontSize: "20px", margin: "3px" },
                          })
                    : props.openIcon ||
                          BiCaretDown({
                              style: { fontSize: "20px", margin: "3px" },
                          })
            ),
            !state.open
                ? null
                : CreateElement(
                      "div",
                      {
                          className: Classes_.COLLAPSE_VIEW_CONTENT,
                          style: props.contentStyle,
                      },
                      ...content
                  )
        );
    },
});

type TabLocation = "left" | "right" | "center";

type TabbedWindowProps = CurlUIElementProps & {
    tabs: Array<TabbedWindowTab>;
    vertical?: boolean;
    titleBarStyle?: CurlUIElementStyleProps;
    contentStyle?: CurlUIElementStyleProps;
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
            tabs: Array<TabbedWindowTab> = LoadContent_(props.tabs),
            tabsLocation: TabLocation = props.tabsLocation || "left",
            currentTabIndex: number = state.currentTabIndex,
            currentTab: TabbedWindowTab | null =
                tabs.length > 0 ? tabs[currentTabIndex] : null,
            component = this;

        let titleBarClass: string =
            {
                left: Classes_.TABBED_WINDOW_TITLE_BAR,
                center: Classes_.TABBED_WINDOW_TITLE_BAR_CENTERED,
                right: Classes_.TABBED_WINDOW_TITLE_BAR_RIGHT,
            }[tabsLocation] || Classes_.TABBED_WINDOW_TITLE_BAR;

        return CreateElement(
            "div",
            {
                className:
                    (props.className || "") +
                    " " +
                    (props.vertical
                        ? Classes_.VERTICAL_TABBED_WINDOW
                        : Classes_.TABBED_WINDOW),
                ...RemoveFields_(props, ["className"]),
            },
            CreateElement(
                "div",
                {
                    className: props.vertical
                        ? Classes_.VERTICAL_TABBED_WINDOW_TITLE_BAR
                        : titleBarClass,
                    style: props.titleBarStyle,
                },
                ...tabs.map((tab, index) => {
                    return CreateElement(
                        "div",
                        {
                            className:
                                index === currentTabIndex
                                    ? Classes_.TABBED_WINDOW_TITLE_ACTIVE
                                    : Classes_.TABBED_WINDOW_TITLE,
                            onclick: (event: Event) => {
                                event.stopPropagation();
                                component.setCurrentTabIndex(index);
                            },
                            style: props.titleStyle,
                        },
                        tab.title
                    );
                })
            ),
            CreateElement(
                "div",
                {
                    className: Classes_.TABBED_WINDOW_CONTENT,
                    style: props.contentStyle,
                },
                currentTab ? currentTab.content : null
            )
        );
    },
});

type NavigationBarState = CurlUIElementState & {
    drawerOpen: boolean;
    menuOpen: boolean;
};

type NavigationBarProps = CurlUIElementProps & {
    drawerContent?: CurlUIRenderElement;
    menuContent?: CurlUIRenderElement;
    content: Array<CurlUIRenderElement> | CurlUIRenderElement;
    drawerButton?: CurlUIRenderElement;
    menuButton?: CurlUIRenderElement;
    navigationWindowStyle?: CurlUIElementStyleProps;
    drawerWindowStyle?: CurlUIElementStyleProps;
    menuWindowStyle?: CurlUIElementStyleProps;
};

const NavigationBar_ = CreateComponent({
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
        window.addEventListener(CustomEvents_.CLOSE_DRAWERS_REQUEST, () => {
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
            menuOpen: boolean = state.menuOpen,
            drawerContent: Array<CurlUIRenderElement> = LoadContent_(
                props.drawerContent
            ),
            menuContent: Array<CurlUIRenderElement> = LoadContent_(
                props.menuContent
            ),
            drawerButton: CurlUIRenderElement | undefined = props.drawerButton,
            menuButton: CurlUIRenderElement | undefined = props.menuButton,
            content: Array<CurlUIRenderElement> = LoadContent_(props.content),
            component = this;

        return CreateElement(
            "div",
            {
                className:
                    (props.className || "") + " " + Classes_.NAVIGATION_BAR,
                ...RemoveFields_(props, ["className"]),
            },
            drawerContent.length < 1
                ? null
                : CreateElement(
                      "div",
                      {
                          onclick: (event: Event) => {
                              event.stopPropagation();
                              component.toggleDrawer();
                          },
                      },
                      !drawerButton
                          ? BiMenu({
                                style: { fontSize: "35px", margin: "5px" },
                            })
                          : drawerButton
                  ),
            ...content,
            menuContent.length < 1
                ? null
                : CreateElement(
                      "div",
                      {
                          onclick: (event: Event) => {
                              event.stopPropagation();
                              component.toggleMenu();
                          },
                      },
                      !menuButton
                          ? BiMenu({
                                style: { fontSize: "35px", margin: "5px" },
                            })
                          : menuButton
                  ),
            (drawerContent.length < 1 && menuContent.length < 1) ||
                (!drawerOpen && !menuOpen)
                ? null
                : CreateElement(
                      "div",
                      {
                          className: Classes_.NAVIGATION_BAR_NAVIGATION_WINDOW,
                          onclick: (event: Event) => {
                              event.stopPropagation();
                              component.closeNavigation();
                          },
                          style: props.navigationWindowStyle,
                      },
                      !drawerOpen
                          ? ""
                          : CreateElement(
                                "div",
                                {
                                    className:
                                        Classes_.NAVIGATION_BAR_DRAWER_WINDOW,
                                    onclick: (event: Event) => {
                                        event.stopPropagation();
                                    },
                                    style: props.drawerWindowStyle,
                                },
                                ...drawerContent
                            ),
                      !menuOpen
                          ? null
                          : CreateElement(
                                "div",
                                {
                                    className:
                                        Classes_.NAVIGATION_BAR_MENU_WINDOW,
                                    onclick: (event: Event) => {
                                        event.stopPropagation();
                                    },
                                    style: props.menuWindowStyle,
                                },
                                ...menuContent
                            )
                  )
        );
    },
});

function CustomElement_(
    tag: CurlUITag,
    customClass: string,
    customProperties: CurlUIElementProps,
    properties: CurlUIElementProps,
    ...children: Array<CurlUIChildComponent>
) {
    let className = NotNull_(properties.className)
            ? [customClass, properties.className].join(" ")
            : customClass,
        style = {
            ...(customProperties.style || {}),
            ...(properties.style || {}),
        };
    return CreateElement(
        tag,
        {
            ...customProperties,
            ...properties,
            className: className,
            style: style,
        },
        ...children
    );
}

const CustomEvents_: { [key: string]: string } = {
    WINDOW_CLICK: "WINDOW_CLICK",
    WINDOW_SCROLL: "WINDOW_SCROLL",
    CLOSE_MENU_REQUEST: "CLOSE_MENU_REQUEST",
    CLOSE_DRAWERS_REQUEST: "CLOSE_DRAWERS_REQUEST",
};

function Initialize_(): void {
    InitializeClasses_();
    window.addEventListener("click", () => {
        window.dispatchEvent(new CustomEvent(CustomEvents_.WINDOW_CLICK, {}));
    });
    window.addEventListener("scroll", () => {
        window.dispatchEvent(new CustomEvent(CustomEvents_.WINDOW_SCROLL, {}));
    });
}

// EXPORTS

export function Initialize(): void {
    Initialize_();
}

export function Button(properties: CurlUIElementProps) {
    return CustomElement_(
        "div",
        Classes_.BUTTON,
        {},
        properties,
        properties.text
    );
}

export function IconButton(properties: CurlUIElementProps) {
    return CustomElement_(
        "div",
        Classes_.ICON_BUTTON,
        {},
        properties,
        properties.icon || null,
        properties.text
    );
}

export function Label(properties: CurlUIElementProps) {
    return CustomElement_(
        "span",
        Classes_.LABEL,
        {},
        properties,
        properties.text
    );
}

export function Paragraph(properties: CurlUIElementProps) {
    return CustomElement_(
        "p",
        Classes_.PARAGRAPH,
        {},
        properties,
        properties.text
    );
}

export function Icon(properties: CurlUIElementProps) {
    return CustomElement_("i", Classes_.ICON, {}, properties);
}

export function Heading1(properties: CurlUIElementProps) {
    return CustomElement_(
        "h1",
        Classes_.HEADING,
        {},
        properties,
        properties.text
    );
}

export function Heading2(properties: CurlUIElementProps) {
    return CustomElement_(
        "h2",
        Classes_.HEADING,
        {},
        properties,
        properties.text
    );
}

export function Heading3(properties: CurlUIElementProps) {
    return CustomElement_(
        "h3",
        Classes_.HEADING,
        {},
        properties,
        properties.text
    );
}

export function Heading4(properties: CurlUIElementProps) {
    return CustomElement_(
        "h4",
        Classes_.HEADING,
        {},
        properties,
        properties.text
    );
}

export function Heading5(properties: CurlUIElementProps) {
    return CustomElement_(
        "h5",
        Classes_.HEADING,
        {},
        properties,
        properties.text
    );
}

export function Heading6(properties: CurlUIElementProps) {
    return CustomElement_(
        "h6",
        Classes_.HEADING,
        {},
        properties,
        properties.text
    );
}

export function Link(
    properties: CurlUIElementProps,
    ...children: Array<CurlUIChildComponent>
) {
    return CustomElement_("a", Classes_.LINK, {}, properties, ...children);
}

export function ImageView(properties: CurlUIElementProps) {
    return CustomElement_("img", Classes_.IMAGE_VIEW, {}, properties);
}

export function VideoView(
    properties: CurlUIElementProps,
    ...children: Array<CurlUIChildComponent>
) {
    return CustomElement_(
        "video",
        Classes_.VIDEO_VIEW,
        {
            controls: true,
        },
        properties,
        ...children
    );
}

export function AudioView(
    properties: CurlUIElementProps,
    ...children: Array<CurlUIChildComponent>
) {
    return CustomElement_(
        "audio",
        Classes_.AUDIO_VIEW,
        {
            controls: true,
        },
        properties,
        ...children
    );
}

export function TextInput(properties: CurlUIElementProps) {
    return CustomElement_(
        "input",
        Classes_.TEXT_INPUT,
        {
            type: "text",
        },
        properties
    );
}

export function NumberInput(properties: CurlUIElementProps) {
    return CustomElement_(
        "input",
        Classes_.NUMBER_INPUT,
        {
            type: "number",
        },
        properties
    );
}

export function WeekInput(properties: CurlUIElementProps) {
    return CustomElement_(
        "input",
        Classes_.WEEK_INPUT,
        {
            type: "week",
        },
        properties
    );
}

export function TimeInput(properties: CurlUIElementProps) {
    return CustomElement_(
        "input",
        Classes_.TIME_INPUT,
        {
            type: "time",
        },
        properties
    );
}

export function MonthInput(properties: CurlUIElementProps) {
    return CustomElement_(
        "input",
        Classes_.MONTH_INPUT,
        {
            type: "month",
        },
        properties
    );
}

export function DatetimeInput(properties: CurlUIElementProps) {
    return CustomElement_(
        "input",
        Classes_.DATETIME_INPUT,
        {
            type: "datetime-local",
        },
        properties
    );
}

export function DateInput(properties: CurlUIElementProps) {
    return CustomElement_(
        "input",
        Classes_.DATE_INPUT,
        {
            type: "date",
        },
        properties
    );
}

export function TextArea(properties: CurlUIElementProps) {
    return CustomElement_(
        "textarea",
        Classes_.TEXT_AREA,
        {
            rows: 5,
        },
        properties
    );
}

export function PasswordInput(properties: CurlUIElementProps) {
    return CustomElement_(
        "input",
        Classes_.PASSWORD_INPUT,
        {
            type: "password",
        },
        properties
    );
}

export function ColorInput(properties: CurlUIElementProps) {
    return CustomElement_(
        "input",
        Classes_.COLOR_INPUT,
        {
            type: "color",
        },
        properties
    );
}

export function FileInput(properties: CurlUIElementProps) {
    return CustomElement_(
        "input",
        Classes_.FILE_INPUT,
        {
            type: "file",
        },
        properties
    );
}

export function Selection(
    properties: CurlUIElementProps,
    ...options: Array<CurlUIRenderElement>
) {
    return CustomElement_(
        "select",
        Classes_.SELECTION,
        {},
        properties,
        ...options
    );
}

export function Option(properties: CurlUIElementProps) {
    return CustomElement_(
        "option",
        Classes_.OPTION,
        {},
        properties,
        properties.text || ""
    );
}

export function ProgressBar(properties: CurlUIElementProps) {
    return CustomElement_("progress", Classes_.PROGRESS_BAR, {}, properties);
}

export function Slider(properties: CurlUIElementProps) {
    return CustomElement_(
        "input",
        Classes_.SLIDER,
        {
            type: "range",
        },
        properties
    );
}

export function ProgressIndicator(properties: CurlUIElementProps) {
    return CustomElement_("div", Classes_.PROGRESS_INDICATOR, {}, properties);
}

export function MenuBar(
    properties: CurlUIElementProps,
    ...menus: Array<CurlUIRenderElement>
) {
    return CustomElement_("div", Classes_.MENU_BAR, {}, properties, ...menus);
}

export function MenuItem(
    properties: CurlUIElementProps,
    ...children: Array<CurlUIChildComponent>
) {
    return CustomElement_(
        "div",
        Classes_.MENU_ITEM,
        {},
        properties,
        ...children
    );
}

export function Canvas(properties: CurlUIElementProps) {
    return CustomElement_("canvas", Classes_.CANVAS, {}, properties);
}

export function UnorderedList(
    properties: CurlUIElementProps,
    ...listItems: Array<CurlUIRenderElement>
) {
    return CustomElement_(
        "ul",
        Classes_.UNORDERED_LIST,
        {},
        properties,
        ...listItems
    );
}

export function OrderedList(
    properties: CurlUIElementProps,
    ...listItems: Array<CurlUIRenderElement>
) {
    return CustomElement_(
        "ol",
        Classes_.ORDERED_LIST,
        {},
        properties,
        ...listItems
    );
}

export function ListItem(
    properties: CurlUIElementProps,
    ...children: Array<CurlUIChildComponent>
) {
    return CustomElement_(
        "li",
        Classes_.LIST_ITEM,
        {},
        properties,
        ...children
    );
}

export function Table(
    properties: CurlUIElementProps,
    ...children: Array<CurlUIChildComponent>
) {
    return CustomElement_("table", Classes_.TABLE, {}, properties, ...children);
}

export function TableHeading(
    properties: CurlUIElementProps,
    ...children: Array<CurlUIChildComponent>
) {
    return CustomElement_(
        "thead",
        Classes_.TABLE_HEADING,
        {},
        properties,
        ...children
    );
}

export function TableFooter(
    properties: CurlUIElementProps,
    ...children: Array<CurlUIChildComponent>
) {
    return CustomElement_(
        "tfoot",
        Classes_.TABLE_FOOTER,
        {},
        properties,
        ...children
    );
}

export function TableBody(
    properties: CurlUIElementProps,
    ...children: Array<CurlUIChildComponent>
) {
    return CustomElement_(
        "tbody",
        Classes_.TABLE_BODY,
        {},
        properties,
        ...children
    );
}

export function TableRow(
    properties: CurlUIElementProps,
    ...children: Array<CurlUIChildComponent>
) {
    return CustomElement_(
        "tr",
        Classes_.TABLE_ROW,
        {},
        properties,
        ...children
    );
}

export function TableData(
    properties: CurlUIElementProps,
    ...children: Array<CurlUIChildComponent>
) {
    return CustomElement_(
        "td",
        Classes_.TABLE_DATA,
        {},
        properties,
        ...children
    );
}

export function TableHeader(
    properties: CurlUIElementProps,
    ...children: Array<CurlUIChildComponent>
) {
    return CustomElement_(
        "th",
        Classes_.TABLE_HEADER,
        {},
        properties,
        ...children
    );
}

export function Caption(
    properties: CurlUIElementProps,
    ...children: Array<CurlUIChildComponent>
) {
    return CustomElement_(
        "caption",
        Classes_.CAPTION,
        {},
        properties,
        ...children
    );
}

export function Embed(
    properties: CurlUIElementProps,
    ...children: Array<CurlUIChildComponent>
) {
    return CustomElement_("embed", Classes_.EMBED, {}, properties, ...children);
}

export function Iframe(
    properties: CurlUIElementProps,
    ...children: Array<CurlUIChildComponent>
) {
    return CustomElement_(
        "iframe",
        Classes_.IFRAME,
        {},
        properties,
        ...children
    );
}

export function VerticalLayout(
    properties: CurlUIElementProps,
    ...children: Array<CurlUIChildComponent>
) {
    return CustomElement_(
        "div",
        Classes_.VERTICAL_LAYOUT,
        {},
        properties,
        ...children
    );
}

export function HorizontalLayout(
    properties: CurlUIElementProps,
    ...children: Array<CurlUIChildComponent>
) {
    return CustomElement_(
        "div",
        Classes_.HORIZONTAL_LAYOUT,
        {},
        properties,
        ...children
    );
}

export function FlowLayout(
    properties: CurlUIElementProps,
    ...children: Array<CurlUIChildComponent>
) {
    return CustomElement_(
        "div",
        Classes_.FLOW_LAYOUT,
        {},
        properties,
        ...children
    );
}

export function GridLayout(
    properties: CurlUIElementProps,
    ...children: Array<CurlUIChildComponent>
) {
    return CustomElement_(
        "div",
        Classes_.GRID_LAYOUT,
        {},
        properties,
        ...children
    );
}

export function RelativeLayout(
    properties: CurlUIElementProps,
    ...children: Array<CurlUIChildComponent>
) {
    return CustomElement_(
        "div",
        Classes_.RELATIVE_LAYOUT,
        {},
        properties,
        ...children
    );
}

export function ScrollWindow(
    properties: CurlUIElementProps,
    ...children: Array<CurlUIChildComponent>
) {
    return CustomElement_(
        "div",
        Classes_.SCROLL_WINDOW,
        {},
        properties,
        ...children
    );
}

export function VerticalScrollWindow(
    properties: CurlUIElementProps,
    ...children: Array<CurlUIChildComponent>
) {
    return CustomElement_(
        "div",
        Classes_.VERTICAL_SCROLL_WINDOW,
        {},
        properties,
        ...children
    );
}

export function HorizontalScrollWindow(
    properties: CurlUIElementProps,
    ...children: Array<CurlUIChildComponent>
) {
    return CustomElement_(
        "div",
        Classes_.HORIZONTAL_SCROLL_WINDOW,
        {},
        properties,
        ...children
    );
}

export function FooterBar(
    properties: CurlUIElementProps,
    ...children: Array<CurlUIChildComponent>
) {
    return CustomElement_(
        "div",
        Classes_.FOOTER_BAR,
        {},
        properties,
        ...children
    );
}

export function Activity(properties: CurlUIElementProps) {
    return CustomElement_(
        "div",
        Classes_.ACTIVITY,
        {
            style: {
                paddingTop: !properties.navigationBar ? "0px" : "50px",
                paddingBottom: !properties.footerBar ? "0px" : "60px",
            },
        },
        properties,
        ...LoadContent_(properties.content),
        properties.footerBar,
        properties.navigationBar
    );
}

export function SelectionView(properties: SelectionViewProps) {
    return SelectionView_(properties);
}

export function Switch(properties: SwitchProps) {
    return Switch_(properties);
}

export function CheckButton(properties: CheckButtonProps) {
    return CheckButton_(properties);
}

export function RadioGroup(properties: RadioGroupProps) {
    return RadioGroup_(properties);
}

export function Menu(properties: MenuProps) {
    return Menu_(properties);
}

export function CollapseView(properties: CollapseViewProps) {
    return CollapseView_(properties);
}

export function TabbedWindow(properties: TabbedWindowProps) {
    return TabbedWindow_(properties);
}

export function NavigationBar(properties: NavigationBarProps) {
    return NavigationBar_(properties);
}

type ApplicationRouter = (title: string) => CurlUIRenderElement | null;

type ApplicationProps = {
    router?: ApplicationRouter;
    baseElement?: HTMLElement;
};

type Application = {
    baseElement: HTMLElement;
    hashUpdateActive: boolean;
    router: ApplicationRouter;
    showActivity: (activity: CurlUIRenderElement, title: string | null) => void;
    openActivity: (title: string) => void;
};

export function Application(properties: ApplicationProps): Application {
    let application: Application = {
        baseElement: properties.baseElement || document.body,
        hashUpdateActive: true,
        router:
            properties.router ||
            function () {
                return null;
            },
        showActivity(activity: CurlUIRenderElement, title: string | null) {
            Render(activity, this.baseElement);
            if (title) {
                this.hashUpdateActive = false;
                window.location.hash = title;
                setTimeout(() => {
                    this.hashUpdateActive = true;
                }, 1500);
            }
        },
        openActivity(title: string) {
            window.location.hash = title;
        },
    };
    window.addEventListener("hashchange", () => {
        if (application.hashUpdateActive !== true) {
            return;
        }
        let title = window.location.hash.slice(1),
            activity = application.router(title);
        if (activity) {
            application.showActivity(activity, null);
        }
    });
    return application;
}

type ApplicationV2 = {
    baseElement: HTMLElement;
    pathUpdateActive: boolean;
    router: ApplicationRouter;
    showActivity: (activity: CurlUIRenderElement, path: string | null) => void;
    openActivity: (title: string) => void;
};

export function ApplicationV2(properties: ApplicationProps): ApplicationV2 {
    let application: ApplicationV2 = {
        baseElement: properties.baseElement || document.body,
        pathUpdateActive: true,
        router:
            properties.router ||
            function () {
                return null;
            },
        showActivity(activity: CurlUIRenderElement, path: string | null) {
            Render(activity, this.baseElement);
            if (path) {
                history.pushState({}, "", path);
            }
        },
        openActivity(path: string) {
            let activity = this.router(path);
            if (activity) {
                this.showActivity(activity, path);
            }
        },
    };
    window.addEventListener("popstate", () => {
        application.openActivity(document.location.pathname);
    });
    window.addEventListener("DOMContentLoaded", () => {
        application.openActivity(document.location.pathname);
    });
    return application;
}

type ShowDialogProps = {
    duration?: number;
    content: Array<CurlUIRenderElement> | CurlUIRenderElement;
    splash?: boolean;
    title?: string;
    closeOnClickOutside?: boolean;
    style?: CurlUIElementStyleProps;
    titleBarStyle?: CurlUIElementStyleProps;
    closeButton?: CurlUIRenderElement;
    icon?: CurlUIRenderElement;
};

export function showDialog(properties: ShowDialogProps) {
    closeDialogs();
    let content = LoadContent_(properties.content),
        dialogId = GetUniqueId_();
    let baseElement = document.createElement("div"),
        element = CreateElement(
            "div",
            {
                className: Classes_.DIALOG,
                onclick: (event: Event) => {
                    event.stopPropagation();
                },
                style: properties.style || {},
            },
            properties.splash === true
                ? ""
                : CreateElement(
                      "div",
                      {
                          className: Classes_.DIALOG_TITLE_BAR,
                          style: properties.titleBarStyle || {},
                      },
                      properties.icon ||
                          BiInfoSquare({
                              style: { fontSize: "25px", margin: "5px" },
                          }),
                      CreateElement(
                          "span",
                          {
                              className: Classes_.DIALOG_TITLE,
                          },
                          properties.title || "..."
                      ),
                      properties.closeButton ||
                          BiXCircle({
                              style: { fontSize: "25px", margin: "5px" },
                              onclick: (event: Event) => {
                                  event.stopPropagation();
                                  closeDialog(dialogId);
                              },
                          })
                  ),
            ...content
        );
    baseElement.classList.add(Classes_.DIALOG_WINDOW);
    baseElement.setAttribute("dialog-id", dialogId);
    if (properties.closeOnClickOutside === true) {
        baseElement.addEventListener("click", () => {
            closeDialog(dialogId);
        });
    }
    document.body.appendChild(baseElement);
    Render(element, baseElement);
    if (
        NotNull_(properties.duration) &&
        typeof properties.duration === "number"
    ) {
        setTimeout(() => {
            closeDialog(dialogId);
        }, properties.duration);
    }
    return dialogId;
}

export function closeDialog(dialogId: string) {
    let element = document.querySelector(`[dialog-id="${dialogId}"]`);
    element?.parentNode?.removeChild(element);
}

type ShowNotificationProps = {
    duration?: number;
    content: Array<CurlUIRenderElement> | CurlUIRenderElement;
};

export function showNotification(properties: ShowNotificationProps) {
    closeNotifications();
    let content = LoadContent_(properties.content),
        notificationId = GetUniqueId_();
    let baseElement = document.createElement("div"),
        element = CreateElement(
            "div",
            {
                className: Classes_.NOTIFICATION,
                onclick: (event: Event) => {
                    event.stopPropagation();
                },
                ...properties,
            },
            ...content
        );
    baseElement.setAttribute("notification-id", notificationId);
    document.body.appendChild(baseElement);
    Render(element, baseElement);
    setTimeout(() => {
        closeNotification(notificationId);
    }, properties.duration || 3000);
    return notificationId;
}

export function closeNotification(notificationId: string) {
    let element = document.querySelector(
        `[notification-id="${notificationId}"]`
    );
    element?.parentNode?.removeChild(element);
}

type ShowToastProps = {
    text: string;
    duration?: number;
    style?: CurlUIElementStyleProps;
};

export function showToast(properties: ShowToastProps) {
    closeToasts();
    if (IsNull_(properties.text)) {
        return;
    }
    let toastId = GetUniqueId_(),
        baseElement = document.createElement("div");
    baseElement.classList.add(Classes_.TOAST);
    baseElement.setAttribute("toast-id", toastId);
    baseElement.textContent = properties.text;
    Object.assign(baseElement.style, properties.style || {});
    document.body.appendChild(baseElement);
    setTimeout(() => {
        closeToast(toastId);
    }, properties.duration || 3000);
    return toastId;
}

export function closeToast(toastId: string) {
    let element = document.querySelector(`[toast-id="${toastId}"]`);
    element?.parentNode?.removeChild(element);
}

export function closeDrawers() {
    window.dispatchEvent(
        new CustomEvent(CustomEvents_.CLOSE_DRAWERS_REQUEST, { detail: {} })
    );
}

export function closeDialogs() {
    document.querySelectorAll("[dialog-id]").forEach((element) => {
        element?.parentNode?.removeChild(element);
    });
}

export function closeNotifications() {
    document.querySelectorAll("[notification-id]").forEach((element) => {
        element?.parentNode?.removeChild(element);
    });
}

export function closeToasts() {
    document.querySelectorAll("[toast-id]").forEach((element) => {
        element?.parentNode?.removeChild(element);
    });
}

export function isNull(item: any) {
    return IsNull_(item);
}

export function notNull(item: any) {
    return NotNull_(item);
}

export function getUniqueId() {
    return GetUniqueId_();
}

export function getWindowDimensions() {
    return GetWindowDimensions_();
}

export function getElementDimensions(element: HTMLElement) {
    return GetElementDimensions_(element);
}

export function getConstants() {
    return {
        Classes: Classes_,
        Colors: Colors_,
    };
}
