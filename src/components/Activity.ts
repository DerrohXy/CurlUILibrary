import { CustomElement, LoadContent } from "../core";
import { Classes } from "../core";
import {
    CurlUIChildComponent,
    CurlUIRenderElement,
    CurlUIElementProps,
} from "curlui/types";

export type ActivityProps = CurlUIElementProps<HTMLDivElement> & {
    content?: CurlUIChildComponent | Array<CurlUIChildComponent>;
    footerBar?: CurlUIRenderElement;
    navigationBar?: CurlUIRenderElement;
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
        properties.navigationBar || null
    );
}
