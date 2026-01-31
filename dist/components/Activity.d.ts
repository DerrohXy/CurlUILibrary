import { ChildComponent, RenderElement, ElementProps } from "curlui/types";
export type ActivityProps = ElementProps<HTMLDivElement> & {
    content?: ChildComponent | Array<ChildComponent>;
    footerBar?: RenderElement;
    navigationBar?: RenderElement;
};
export declare function Activity(properties: ActivityProps): RenderElement;
//# sourceMappingURL=Activity.d.ts.map