import { ChildComponent, RenderElement, ElementProps } from "curlui/types";
export type ActivityProps = ElementProps & {
    content?: ChildComponent | Array<ChildComponent>;
    footerBar?: RenderElement;
    navigationBar?: RenderElement;
};
export declare function Activity(properties: ActivityProps): import("curlui").CurlUIElement;
//# sourceMappingURL=Activity.d.ts.map