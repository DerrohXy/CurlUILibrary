import { CustomElement, LoadContent } from "../core";
import { Classes } from "../core";
import { ChildComponent, RenderElement, ElementProps } from "curlui/types";

export type ActivityProps = ElementProps<HTMLDivElement> & {
    content?: ChildComponent | Array<ChildComponent>;
    footerBar?: RenderElement;
    navigationBar?: RenderElement;
};

export function Activity(properties: ActivityProps) {
    return CustomElement(
        "div",
        Classes.ACTIVITY,
        {
            style: {
                paddingTop: !properties.navigationBar ? "0px" : "50px",
                paddingBottom: !properties.footerBar ? "0px" : "60px",
            },
        },
        properties,
        ...LoadContent(properties.content),
        properties.footerBar || null,
        properties.navigationBar || null,
    );
}
