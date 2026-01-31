import { Classes, RemoveFields, LoadContent } from "../core";
import { CreateComponent } from "curlui";
import {
    ChildComponent,
    RenderElement,
    ElementProps,
    ElementState,
    CSSProps,
} from "curlui/types";

export type SwitchState = ElementState & {
    active: boolean;
};

export type SwitchProps = ElementProps<HTMLDivElement> & {
    onActiveChange: Function;
    active?: boolean;
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

        props.onActiveChange(!active);
    },
    render() {
        let state: SwitchState = this.getState(),
            props: SwitchProps = this.getProps(),
            active: boolean = state.active,
            component = this;

        return (
            <div
                className={
                    (props.className || props.class || "") +
                    " " +
                    (active ? Classes.SWITCH_ACTIVE : Classes.SWITCH)
                }
                onclick={(event: Event) => {
                    event?.stopPropagation();
                    component.toggle();
                }}
                {...RemoveFields(props, [
                    "className",
                    "class",
                    "onActiveChange",
                    "active",
                ])}
            >
                <div
                    className={
                        active
                            ? Classes.SWITCH_TOGGLE_ACTIVE
                            : Classes.SWITCH_TOGGLE
                    }
                ></div>
            </div>
        );
    },
});

export function Switch(properties: SwitchProps): RenderElement {
    return <Switch_ {...properties} />;
}

export type CheckButtonProps = ElementProps<HTMLDivElement> & {
    onCheckedChange: Function;
    text: string;
    checked?: boolean;
};

export type CheckButtonState = ElementState & {
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

        props.onCheckedChange(!checked);
    },
    render() {
        let state: CheckButtonState = this.getState(),
            props: CheckButtonProps = this.getProps(),
            checked: boolean = state.checked,
            component = this;

        return (
            <div
                className={
                    (props.className || props.class || "") +
                    " " +
                    Classes.CHECK_BUTTON
                }
                onclick={(event: Event) => {
                    event.stopPropagation();
                    component.toggle();
                }}
                {...RemoveFields(props, [
                    "className",
                    "class",
                    "onCheckedChange",
                    "text",
                    "checked",
                ])}
            >
                <div
                    className={
                        checked
                            ? Classes.CHECK_BUTTON_CHECK_BOX_CHECKED
                            : Classes.CHECK_BUTTON_CHECK_BOX
                    }
                ></div>
                {props.text}
            </div>
        );
    },
});

export function CheckButton(properties: CheckButtonProps): RenderElement {
    return <CheckButton_ {...properties} />;
}

export type RadioGroupItem = {
    value: any;
    text: ChildComponent;
};

export type RadioGroupProps = ElementProps<HTMLDivElement> & {
    radioItems: Array<RadioGroupItem>;
    vertical?: boolean;
    onCheckedChange: Function;
    radioButtonStyle?: CSSProps;
};

export type RadioGroupState = ElementState & {
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
            radioItems: Array<RadioGroupItem> = LoadContent(props.radioItems),
            component = this;

        return (
            <div
                className={
                    (props.className || props.class || "") +
                    " " +
                    (props.vertical
                        ? Classes.VERTICAL_RADIO_GROUP
                        : Classes.RADIO_GROUP)
                }
                {...RemoveFields(props, [
                    "className",
                    "class",
                    "radioItems",
                    "vertical",
                    "onCheckedChange",
                    "radioButtonStyle",
                ])}
            >
                {...radioItems.map((item) => {
                    return (
                        <div
                            className={Classes.RADIO_BUTTON}
                            onclick={(event: Event) => {
                                event.stopPropagation();
                                component.setChecked(item);
                            }}
                            style={props.radioButtonStyle}
                        >
                            <div
                                className={
                                    item.value == checked?.value
                                        ? Classes.RADIO_BUTTON_CHECK_BOX_CHECKED
                                        : Classes.RADIO_BUTTON_CHECK_BOX
                                }
                            ></div>
                            {item.text}
                        </div>
                    );
                })}
            </div>
        );
    },
});

export function RadioGroup(properties: RadioGroupProps): RenderElement {
    return <RadioGroup_ {...properties} />;
}
